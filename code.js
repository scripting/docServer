var myVersion = "0.4.0", myProductName = "DocServer";

const urlDocsOpml = "http://docs.littleoutliner.com/davewiner/verbDocs.opml?format=opml";
var docserverOpmltext = undefined;
var docserverOutline = undefined;
var urlUpdateSocket = undefined;
var socketForChanges = undefined;
var verbArray = undefined;

var appPrefs = {
	ixcursor: 0 //index into the verb array
	}
var flPrefsChanged = false;

function prefsChanged () {
	flPrefsChanged = true;
	}
function loadPrefs () {
	if (localStorage.docserverPrefs !== undefined) {
		try {
			var jstruct = JSON.parse (localStorage.docserverPrefs);
			for (var x in jstruct) {
				appPrefs [x] = jstruct [x];
				}
			}
		catch (err) {
			}
		}
	}
function shareCommand () {
	var url = stringNthField (stringNthField (window.location.href, "?", 1), "#", 1);
	alertDialog (url + "?verb=" + verbArray [appPrefs.ixcursor].path);
	}
function readOpmlFile (urlOutline, callback) {
	readHttpFileThruProxy (urlOutline, undefined, function (opmltext) {
		if (opmltext === undefined) {
			callback ({message: "Can't read the OPML file containing the docs."});
			}
		else {
			callback (undefined, opmltext);
			}
		});
	}
function wsWatchForChange () { //requests notification of changes to docserver opml file
	if (socketForChanges === undefined) {
		var theSocket = new WebSocket (urlUpdateSocket); 
		socketForChanges = theSocket; //set global
		theSocket.onopen = function (evt) {
			var msg = "watch " + urlDocsOpml;
			console.log ("sending: \"" + msg + "\"");
			theSocket.send (msg);
			};
		theSocket.onmessage = function (evt) {
			var s = evt.data;
			if (s !== undefined) { //no error
				var updatekey = "update\r";
				if (beginsWith (s, updatekey)) { //it's an update
					s = stringDelete (s, 1, updatekey.length);
					
					if (s [0] == "\"") { //work around bug in daveappserver, its jsonifying a string, in notifySocketSubscribers
						s = stringDelete (s, 1, 1);
						s = stringDelete (s, s.length, 1)
						}
					
					console.log ("wsWatchForChange: update received, s.length == " + s.length);
					
					readOpmlFile (urlDocsOpml, function (err, opmltext) {
						if (err) {
							}
						else {
							rebootDocserver (opmltext);
							}
						});
					}
				}
			};
		theSocket.onclose = function (evt) {
			console.log ("tab.myChatLogSocket was closed.");
			socketForChanges = undefined;
			};
		theSocket.onerror = function (evt) {
			console.log ("socketForChanges received an error");
			};
		}
	}
function viewIndexOutline () {
	var theIndex = $("<div class=\"divVerbIndex\"></div>");
	var theList = $("<ul class=\"ulVerbList\"></ul>");
	verbArray.forEach (function (verb, ix) {
		var theClass = (ix == appPrefs.ixcursor) ? " class=\"liCursor\" " : "";
		var theItem = $("<li" + theClass + ">" + verb.title + "</li>");
		$(theItem).click (function () {
			var verb = verbArray [ix];
			console.log (verb.path);
			viewDocserverPage (verb);
			appPrefs.ixcursor = ix;
			prefsChanged ();
			viewIndexOutline ();
			});
		$(theList).append (theItem);
		});
	$(theIndex).append (theList);
	$("#idIndexPanel").empty ();
	$("#idIndexPanel").append (theIndex);
	}
function moveCursorTo (ixInArray) {
	appPrefs.ixcursor = ixInArray;
	prefsChanged ();
	viewIndexOutline ();
	viewDocserverPage (verbArray [ixInArray]);
	}
function moveCursorUp () {
	if (appPrefs.ixcursor <= 0) {
		speakerBeep ();
		}
	else {
		moveCursorTo (appPrefs.ixcursor - 1);
		}
	}
function moveCursorDown () {
	if (appPrefs.ixcursor >= verbArray.length - 1) {
		speakerBeep ();
		}
	else {
		moveCursorTo (appPrefs.ixcursor + 1);
		}
	}
function getVerbArray () {
	var theArray = new Array ();
	docserverOutline.subs.forEach (function (cat) {
		cat.subs.forEach (function (verbOutline) {
			var cattext = stringLower (replaceAll (stringNthField (cat.text, " ", 1), " ", ""));
			var verbtext = stringLower (replaceAll (stringNthField (verbOutline.text, " ", 1), ".", ""));
			var title = stringNthField (verbOutline.text, " ", 1);
			var path = replaceAll (title, ".", "/");
			theArray.push ({
				title,
				path: title,
				outline: verbOutline,
				ix: theArray.length
				});
			});
		});
	return (theArray);
	}
function findPageInOutline (theOutline, path, callback) {
	for (var i = 0; i < verbArray.length; i++) {
		var verb = verbArray [i];
		if (path == verb.path) {
			appPrefs.ixcursor = i;
			prefsChanged ();
			callback (undefined, verb);
			return;
			}
		}
	callback ({message: "Couldn't display the page because the verb, \"" + path + "\" could not be found."});
	}
function viewDocserverPage (verb) {
	var theDocserverPage = $("<div class=\"divDocserverPage\"></div>");
	function getNavLinks () {
		var theNavLinks = $("<div class=\"divDocserverNavLinks\"></div>");
		function addlink (ix, align) {
			var linkedverb = verbArray [ix]; 
			if (linkedverb !== undefined) {
				var path = linkedverb.path;
				var title = linkedverb.title; //should be title
				var icon = "<i class=\"navicon fa fa-arrow-alt-circle-" + align + "\"></i>";
				var text = (align == "left") ? icon + " " + title : title + " " + icon;
				var theLink = $("<div class=\"divNav" + align + "\">" + text + "</div>");
				$(theLink).click (function () {
					$(theLink).blur (); //take the focus off the link
					viewPageViaPath (path);
					viewIndexOutline ();
					});
				return (theLink);
				}
			else {
				var theLink = $("<div class=\"divNav" + align + "\">&nbsp;</div>");
				return (theLink);
				}
			}
		
		$(theNavLinks).append (addlink (verb.ix + 1, "right"));
		$(theNavLinks).append (addlink (verb.ix - 1, "left"));
		
		
		$(theNavLinks).append ("<div class=\"dsBlackLine\"></div");
		return (theNavLinks);
		}
	$(theDocserverPage).append (getNavLinks ());
	$(theDocserverPage).append ("<div class=\"dsTitle\">" + verb.outline.text + "</div>");
	$(theDocserverPage).append ("<div class=\"dsOrangeLine\"></div");
	
	var docserverBody = $("<div class=\"dsBody\"></div>");
	verb.outline.subs.forEach (function (item) {
		var theSection = $("<div class=\"dsSection\"></div>");
		$(theSection).append ("<div class=\"dsSectionTitle\">" + item.text + "</div>");
		var sectionText = $("<div class=\"dsSectionText\"></div>");
		item.subs.forEach (function (item) {
			$(sectionText).append ("<p class=\"dsSectionPgf\">" + item.text + "</p>");
			});
		$(theSection).append (sectionText);
		$(docserverBody).append (theSection);
		});
	
	$(theDocserverPage).append (docserverBody);
	$("#idDocserverPanel").empty ();
	$("#idDocserverPanel").append (theDocserverPage);
	}
function viewPageViaPath (path) {
	findPageInOutline (docserverOutline, path, function (err, verb) {
		if (err) {
			viewDocserverPage (verbArray [0]);
			appPrefs.ixcursor = 0;
			alertDialog (err.message);
			}
		else {
			viewDocserverPage (verb);
			}
		});
	}
function handleKeystroke (ev) {
	var whichKey = ev.which;
	
	console.log ("handleKeystroke: ev.which == " + ev.which + ", ev.metaKey == " + ev.metaKey + ", ev.ctrlKey == " + ev.ctrlKey);
	if (ev.metaKey || ev.ctrlKey) { //not consumed -- 9/25/20 by DW
		return (false);
		}
	
	switch (whichKey) {
		case 38: //up arrow
			moveCursorUp ();
			return (true);
		case 40: //down arrow
			moveCursorDown ();
			return (true);
		}
	return (false); //not consumed
	}
function everyMinute () {
	var now = new Date ();
	if (now.getMinutes () == 0) {
		console.log ("\n" + myProductName + ": " + now.toLocaleTimeString () + ", v" + myVersion + ".");
		}
	}
function everySecond () {
	wsWatchForChange ();
	if (flPrefsChanged) {
		var jsontext = jsonStringify (appPrefs);
		flPrefsChanged = false;
		localStorage.docserverPrefs = jsontext;
		}
	}
function rebootDocserver (opmltext, pathparam) {
	docserverOpmltext = opmltext; //set global
	var xstruct = xmlCompile (opmltext);
	var adrbody = getXstuctBody (xstruct);
	var theOutline = outlineToJson (adrbody);
	docserverOutline = theOutline; //set global
	
	var adrhead = getXstuctHead (xstruct);
	urlUpdateSocket = xmlGetValue (adrhead, "urlUpdateSocket"); //set global
	
	verbArray = getVerbArray (); //set global
	
	if (pathparam !== undefined) {
		viewPageViaPath (pathparam);
		}
	else {
		var verb = verbArray [appPrefs.ixcursor];
		viewDocserverPage (verb);
		}
	
	viewIndexOutline ();
	}
function startup () {
	console.log ("startup");
	loadPrefs ();
	$("#idVersionNumber").text (myProductName + " v" + myVersion);
	function finishStartup () {
		self.setInterval (everySecond, 1000); 
		runEveryMinute (everyMinute);
		$("body").keydown (function (ev) {
			if (true) { //(!flModalInFront) {
				if (handleKeystroke (ev)) {
					ev.stopPropagation ();
					ev.preventDefault ();
					}
				}
			whenLastUserEvent = new Date ();
			});
		}
	readOpmlFile (urlDocsOpml, function (err, opmltext) {
		if (err) {
			alertDialog (err.message);
			}
		else {
			var pathparam = getURLParameter ("verb");
			if (pathparam == "null") {
				pathparam = undefined;
				}
			rebootDocserver (opmltext, pathparam);
			finishStartup ();
			}
		});
	}
