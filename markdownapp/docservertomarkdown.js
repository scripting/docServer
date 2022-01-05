const myVersion = "0.4.1", myProductName = "docservertomarkdown";

var urlDocsOpml = "http://drummer.scripting.com/davewiner/verbDocs.opml";

const fs = require ("fs");
const utils = require ("daveutils");
const request = require ("request"); 
const opml = require ("opml"); 
const davegithub = require ("davegithub"); 

var config = {
	flUploadToGithub: false,
	flGenerateLocalFiles: true,
	
	localFolder: "", //set in config.json
	
	username: "scripting",
	repo: "docServer",
	repoPath: "docs/",
	
	githubPassword: "",
	
	baseRepoUrl: "https://github.com/scripting/docServer/blob/main/docs/",
	
	"committer": {
		"name": "Dave Winer",
		"email": "dave@scripting.com"
		},
	"message": ".",
	
	"userAgent": "docservertomarkdown"
	};

function httpRequest (url, callback) {
	request (url, function (err, response, data) {
		if (err) {
			callback (err);
			}
		else {
			if (response.statusCode != 200) {
				const message = "The request returned a status code of " + response.statusCode + ".";
				callback ({message});
				}
			else {
				callback (undefined, data) 
				}
			}
		});
	}
function uploadToGithub (relpath, data, type, callback) {
	if (config.flUploadToGithub) {
		const options = {
			username: config.username,
			repo: config.repo,
			repoPath: config.repoPath + relpath,
			password: config.githubPassword,
			data: data,
			type: (type === undefined) ? "text/plain" : type,
			committer: config.committer,
			message: config.message,
			userAgent: config.userAgent
			};
		davegithub.uploadFile (options, function (err, response, body) {
			console.log ("uploadToGithub: url == " + config.baseRepoUrl + relpath + ", status == " + response.statusCode); 
			if (err) {
				console.log ("uploadToGithub: err.message == " + err.message);
				}
			if (callback !== undefined) {
				callback ();
				}
			});
		}
	else {
		callback ();
		}
	}
function writeLocalFile (relpath, data, callback) {
	if (config.flGenerateLocalFiles) {
		var f = config.localFolder + relpath;
		utils.sureFilePath (f, function () {
			fs.writeFile (f, data, function (err) {
				console.log ("writeToLocalFile: f == " + f); 
				if (err) {
					console.log ("writeToLocalFile: err.message == " + err.message);
					}
				if (callback !== undefined) {
					callback ();
					}
				});
			});
		}
	else {
		if (callback !== undefined) {
			callback ();
			}
		}
	}
function getCategoryFilename (theCategory) {
	return (utils.stringNthField (theCategory.text, " ", 1) + ".md");
	}
function uploadOneCategory (theCategory, callback) {
	var mdtext = "", indentlevel = 0;
	function add (s) {
		mdtext += s + "\n";
		}
	function exampleResultToMarkdown (theExampleResult) {
		let mdtext = "", indentlevel = 0;
		function add (s) {
			mdtext += utils.filledString ("    ", indentlevel) + s +"\n";
			}
		function addNode (theNode, flSinglespace=false) {
			add (theNode.text);
			if (theNode.subs !== undefined) {
				for (var i = 0; i < theNode.subs.length; i++) {
					indentlevel++;
					addNode (theNode.subs [i]);
					indentlevel--;
					}
				}
			}
		addNode (theExampleResult);
		return (mdtext);
		}
	opml.expandInclude (theCategory, function (err, cat) {
		if (err) {
			console.log ("uploadOneCategory: err.message == " + err.message);
			}
		else {
			if (cat.subs !== undefined) {
				add ("");
				add ("# " + theCategory.text);
				for (var j = 0; j < cat.subs.length; j++) {
					var verb = cat.subs [j];
					add ("## " + verb.text);
					for (var k = 0; k < verb.subs.length; k++) {
						var subtopic = verb.subs [k];
						var flCodeSubs = (subtopic.text == "Example") || (subtopic.text == "Examples");
						add ("#### " + subtopic.text);
						for (var m = 0; m < subtopic.subs.length; m++) {
							var line = subtopic.subs [m], linetext = line.text;
							if (flCodeSubs) {
								linetext = "`" + linetext + "`";
								}
							add (linetext + "\n");
							if (line.subs !== undefined) {
								for (var n = 0; n < line.subs.length; n++) {
									var exampleresult = line.subs [n];
									if (exampleresult.subs === undefined) { //the usual case, a one-line value was returned
										add ("- *" + exampleresult.text + "*\n");
										}
									else {
										add ("<pre>" + exampleResultToMarkdown (exampleresult) + "</pre>");
										}
									}
								}
							}
						}
					}
				}
			
			var path = "pages/" + getCategoryFilename (theCategory);
			uploadToGithub (path, mdtext, undefined, function () {
				writeLocalFile (path, mdtext, function () {
					callback ();
					});
				});
			}
		});
	}
function uploadAllCategories (theOutline, callback) {
	var theCats = theOutline.opml.body.subs;
	function doNext (ix) {
		if (ix < theCats.length) {
			uploadOneCategory (theCats [ix], function () {
				doNext (ix + 1);
				});
			}
		else {
			callback ();
			}
		}
	doNext (0);
	}
function uploadIndex (theOutline, callback) {
	var mdtext = "", indentlevel = 0;
	function add (s) {
		mdtext += utils.filledString ("    ", indentlevel) + s + "\n";
		}
	var theCats = theOutline.opml.body.subs;
	add ("# Complete list of verbs");
	for (var i = 0; i < theCats.length; i++) {
		var cat = theCats [i];
		if (cat.subs !== undefined) {
			for (var j = 0; j < cat.subs.length; j++) {
				var verb = cat.subs [j];
				var url = "pages/" + getCategoryFilename (cat) + "#" + utils.stringLower (verb.name);
				add ("* [" + verb.text + "](" + url + ")");
				}
			}
		}
	
	var path = "readme.md";
	uploadToGithub (path, mdtext, undefined, function () {
		writeLocalFile (path, mdtext, function () {
			callback ();
			});
		});
	}
function readConfig (f, theConfig, callback) { 
	fs.readFile (f, function (err, jsontext) {
		if (!err) {
			try {
				var jstruct = JSON.parse (jsontext);
				for (var x in jstruct) {
					theConfig [x] = jstruct [x];
					}
				}
			catch (err) {
				console.log ("readConfig: err.message == " + err.message);
				}
			}
		callback ();
		});
	}

readConfig ("config.json", config, function () {
	console.log ("config == " + utils.jsonStringify (config));
	httpRequest (urlDocsOpml, function (err, opmltext) {
		if (err) {
			console.log (err.message);
			}
		else {
			opml.parse (opmltext, function (err, theOutline) {
				if (err) {
					console.log (err.message);
					}
				else {
					uploadAllCategories (theOutline, function () {
						uploadIndex (theOutline, function () {
							console.log (""); //skip line
							});
						})
					}
				});
			}
		})
	});
