
# opml verbs
## opml.parse
#### Syntax
opml.parse (string)

#### Params
The string is OPML text. 

#### What it does
Parses the text and returns a standard JavaScript object representing the outline.

#### Returns
A JavaScript object representing the outline.

#### Example
`opml.parse (file.readWholeFile ("hello.opml"))`

<pre>{
    "opml": {
        "head": {
            "title": "Hello World",
            "dateCreated": "Mon, 13 Sep 2021 21:30:28 GMT",
            "description": "A simple hello world outline.",
            "ownerTwitterScreenName": "cluelessnewbie",
            "ownerName": "Clueless Newbie",
            "ownerId": "http://twitter.com/cluelessnewbie",
            "urlUpdateSocket": "ws://drummer.scripting.com:1232/",
            "dateModified": "Mon, 13 Sep 2021 21:37:33 GMT",
            "expansionState": "1,2",
            "lastCursor": "3"
            },
        "body": {
            "subs": [
                {
                    "text": "A few colors",
                    "created": "Mon, 13 Sep 2021 21:30:57 GMT",
                    "subs": [
                        {
                            "text": "Blues",
                            "created": "Mon, 13 Sep 2021 21:31:33 GMT",
                            "subs": [
                                {
                                    "text": "Blue green",
                                    "created": "Mon, 13 Sep 2021 21:34:17 GMT"
                                    },
                                {
                                    "text": "Light blue",
                                    "created": "Mon, 13 Sep 2021 21:34:52 GMT",
                                    "enclosure": "http://mp3.morningcoffeenotes.com/cn18Aug07.mp3",
                                    "enclosureType": "audio/mpeg",
                                    "enclosureLength": "6511738"
                                    },
                                {
                                    "text": "Sky blue",
                                    "created": "Mon, 13 Sep 2021 21:34:20 GMT"
                                    }
                                ]
                            },
                        {
                            "text": "Reds",
                            "created": "Mon, 13 Sep 2021 21:31:35 GMT",
                            "subs": [
                                {
                                    "text": "Burnt sienna",
                                    "created": "Mon, 13 Sep 2021 21:34:57 GMT"
                                    },
                                {
                                    "text": "Cherry",
                                    "created": "Mon, 13 Sep 2021 21:35:23 GMT"
                                    },
                                {
                                    "text": "Persimmon",
                                    "created": "Mon, 13 Sep 2021 21:35:32 GMT",
                                    "type": "link",
                                    "url": "https://htmlcolorcodes.com/colors/persimmon/"
                                    }
                                ]
                            },
                        {
                            "text": "Greens",
                            "created": "Mon, 13 Sep 2021 21:31:37 GMT",
                            "subs": [
                                {
                                    "text": "Aqua",
                                    "created": "Mon, 13 Sep 2021 21:31:39 GMT"
                                    },
                                {
                                    "text": "Cyan ",
                                    "created": "Mon, 13 Sep 2021 21:32:26 GMT"
                                    },
                                {
                                    "text": "Pistachio",
                                    "created": "Mon, 13 Sep 2021 21:33:55 GMT"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        }
    }
</pre>
## opml.stringify
#### Syntax
opml.stringify (object)

#### Params
object is a JavaScript object representing an outline. 

#### Returns
The OPML text for the object. 

#### Example
`opml.stringify (opml.parse (file.readWholeFile ("hello.opml")))`

- *&lt;?xml version="1.0" encoding="ISO-8859-1"?>*

<pre>&lt;opml version="2.0">
    &lt;head>
        &lt;title>Hello World&lt;/title>
        &lt;dateCreated>Mon, 13 Sep 2021 21:30:28 GMT&lt;/dateCreated>
        &lt;description>A simple hello world outline, with a few subs.&lt;/description>
        &lt;ownerTwitterScreenName>cluelessnewbie&lt;/ownerTwitterScreenName>
        &lt;ownerName>Clueless Newbie&lt;/ownerName>
        &lt;ownerId>http://twitter.com/cluelessnewbie&lt;/ownerId>
        &lt;urlUpdateSocket>ws://drummer.scripting.com:1232/&lt;/urlUpdateSocket>
        &lt;dateModified>Mon, 13 Sep 2021 21:37:33 GMT&lt;/dateModified>
        &lt;expansionState>1,2&lt;/expansionState>
        &lt;lastCursor>3&lt;/lastCursor>
        &lt;/head>
    &lt;body>
        &lt;outline text="A few colors" created="Mon, 13 Sep 2021 21:30:57 GMT" >
            &lt;outline text="Blues" created="Mon, 13 Sep 2021 21:31:33 GMT" >
                &lt;outline text="Blue green" created="Mon, 13 Sep 2021 21:34:17 GMT" />
                &lt;outline text="Light blue" created="Mon, 13 Sep 2021 21:34:52 GMT" enclosure="http://mp3.morningcoffeenotes.com/cn18Aug07.mp3" enclosureType="audio/mpeg" enclosureLength="6511738" />
                &lt;outline text="Sky blue" created="Mon, 13 Sep 2021 21:34:20 GMT" />
                &lt;/outline>
            &lt;outline text="Reds" created="Mon, 13 Sep 2021 21:31:35 GMT" >
                &lt;outline text="Burnt sienna" created="Mon, 13 Sep 2021 21:34:57 GMT" />
                &lt;outline text="Cherry" created="Mon, 13 Sep 2021 21:35:23 GMT" />
                &lt;outline text="Persimmon" created="Mon, 13 Sep 2021 21:35:32 GMT" type="link" url="https://htmlcolorcodes.com/colors/persimmon/" />
                &lt;/outline>
            &lt;outline text="Greens" created="Mon, 13 Sep 2021 21:31:37 GMT" >
                &lt;outline text="Aqua" created="Mon, 13 Sep 2021 21:31:39 GMT" />
                &lt;outline text="Cyan " created="Mon, 13 Sep 2021 21:32:26 GMT" />
                &lt;outline text="Pistachio" created="Mon, 13 Sep 2021 21:33:55 GMT" />
                &lt;/outline>
            &lt;/outline>
        &lt;/body>
    &lt;/opml>
</pre>
## opml.attributes.addGroup
#### Syntax
opml.attributes.addGroup (string, object)

#### Params
The string is the name of an OPML file in the user's Drummer account.

The object is a collection of attributes in the form of a JavaScript object.

#### What it does
The value of the object replaces is added to the file-level attributes in the OPML file.

Any previous attributes that are not in the object are not changed, and are still there.  

#### Returns
The attributes of the file after the opml.attributes.setAll call.

#### Example
`opml.attributes.addGroup ("tmp.opml", {school: "Bronx Science", gpa: 3.5, major: "Art History"})`

<pre>{
    "name": "Bjorn Barker",
    "age": "32",
    "school": "Bronx Science",
    "gpa": 3.5,
    "major": "Art History"
    }
</pre>
## opml.attributes.deleteOne
#### Syntax
opml.attributes.deleteOne (string, string)

#### Params
The first string is the name of an OPML file in the user's Drummer account.

The second string is the name of an attribute.

#### What it does
Drummer deletes the named attribute in the file, if it exists.

If the attribute doesn't exist, it is not an error.

#### Returns
The attributes of the file after the opml.attributes.deleteOne call.

#### Example
`opml.attributes.deleteOne ("tmp.opml", "height")`

<pre>{
    "name": "Bjorn Barker",
    "age": "32"
    }
</pre>
## opml.attributes.exists
#### Syntax
opml.attributes.exists (string, string)

#### Params
The first string is the name of an OPML file in the user's Drummer account.

The second string is the name of an attribute.

#### Returns
true if the attribute exists in the file, false otherwise.

#### Examples
`opml.attributes.exists ("tmp.opml", "major")`

- *true*

`opml.attributes.exists ("tmp.opml", "minor")`

- *false*

## opml.attributes.getAll
#### Syntax
opml.attributes.getAll (string)

#### Params
The string is the name of an OPML file in the user's Drummer account.

#### Returns
All the elements of the &lt;head> section of the OPML file for the outline. 

#### Example
`opml.attributes.getAll ("scratchpad.opml")`

<pre>{
    "title": "Scratchpad",
    "dateCreated": "Fri, 30 Jul 2021 13:35:09 GMT",
    "dateModified": "Mon, 06 Sep 2021 00:26:06 GMT",
    "ownerTwitterScreenName": "cluelessnewbie",
    "ownerName": "Clueless Newbie",
    "ownerId": "http://twitter.com/cluelessnewbie",
    "urlUpdateSocket": "ws://drummer.scripting.com:1232/",
    "expansionState": "1,2,4,6,15,16,21,23",
    "lastCursor": "2"
    }
</pre>
## opml.attributes.getOne
#### Syntax
opml.attributes.getOne (string, string)

#### Params
The first string is the name of an OPML file in the user's Drummer account.

The second string is the name of an attribute.

#### Returns
The value of the named attribute.

If the attribute doesn't exist, the value returned is the JavaScript value undefined.

#### Example
`opml.attributes.getOne ("tmp.opml", "name")`

- *Bjorn Barker*

`opml.attributes.getOne ("tmp.opml", "hometown")`

- *undefined*

## opml.attributes.makeEmpty
#### Syntax
opml.attributes.makeEmpty (string)

#### Params
The first string is the name of an OPML file in the user's Drummer account.

#### What it does
Drummer deletes all the named attributes in the file.

#### Returns
The attributes of the file after the opml.attributes.deleteOne call.

#### Example
`opml.attributes.makeEmpty ("tmp.opml")`

- *{ }*

## opml.attributes.setAll
#### Syntax
opml.attributes.setAll (string, object)

#### Params
The string is the name of an OPML file in the user's Drummer account.

The object is a collection of attributes in the form of a JavaScript object.

#### What it does
The value of the object replaces all file-level attributes in the OPML file.

The object should contain only name-value pairs. 

#### Returns
The attributes of the file after the opml.attributes.setAll call.

#### Example
`opml.attributes.setAll ("tmp.opml", {name: "Bjorn Barker", age: 32})`

- *true*

## opml.attributes.setOne
#### Syntax
opml.attributes.setOne (string, string, value)

#### Params
The first string is the name of an OPML file in the user's Drummer account.

The second string is the name of an attribute.

value is a JavaScript string, or a value that can be coerced to a string. 

#### What it does
Drummer sets the value of the named attribute in the file.

The attribute might exist, in which case its value is overwritten, or it is created.

#### Returns
The attributes of the file after the opml.attributes.setOne call.

#### Example
`opml.attributes.setOne ("tmp.opml", "height", 5.5 * 12)`

<pre>{
    "name": "Bjorn Barker",
    "age": "32",
    "height": 66
    }
</pre>
## opml.getCurrentObject
#### Syntax
opml.getCurrentObject ()

#### Params
None.

#### Returns
A JavaScript object with all the data contained in the current outline, accessible directly in JavaScript code.

#### Note
It does what opml.getCurrentOpml does, except instead of returning OPML text, it returns the same information as a JavaScript object. 

#### Example
`opml.getCurrentObject ()`

<pre>{
    "head": {
        "title": "test",
        "dateCreated": "Wed, 07 Apr 2021 16:05:20 GMT",
        "dateModified": "Wed, 07 Apr 2021 16:17:01 GMT"
        },
    "body": {
        "subs": [
            {
                "text": "Hello World",
                "created": "Wed, 07 Apr 2021 15:53:15 GMT"
                }
            ]
        }
    }
</pre>
## opml.getCurrentOpml
#### Syntax
opml.getCurrentOpml ()

#### Params
None.

#### Returns
The text returned is exactly what would be saved as OPML for the current outline. 

#### Example
`opml.getCurrentOpml ()`

- *&lt;?xml version="1.0"?>*

<pre>&lt;opml version="2.0">
    &lt;head>
        &lt;title>A menu for meals&lt;/title>
        &lt;dateCreated>Sat, 11 Sep 2021 14:40:49 GMT&lt;/dateCreated>
        &lt;dateModified>Tue, 16 Nov 2021 21:20:48 GMT&lt;/dateModified>
        &lt;/head>
    &lt;body>
        &lt;outline text="Hello World" created="Tue, 16 Nov 2021 21:18:13 GMT">
            &lt;/outline>
        &lt;/body>
    &lt;/opml>
</pre>
## opml.getMarkdown
#### Syntax
opml.getMarkdown (opmltext)

#### Params
opmltext is a string containing text in OPML format.

#### Returns
The markdown-from-outline algorithm that was implemented in Old School.

#### Notes
This is markdown text for publishing, not for interop with outliners. 

We add two newlines at the end of the text of every outline node.

We generate nothing for indentation, you can use that in your writing in any way that suits you.

We respect the <i>flSinglespaceMarkdown</i> attribute. When it's present and true, we only add one newline for the subs. We also generate an extra newline at the end of the subs. 

#### Example
`Here's the example outline:`

<pre>Foods I like
    Cheese
    Bagels
        Everything
        Sesame
        Plain
    Sauces
</pre>
`Bagels has a flSinglespaceMarkdown attribute with the value true.`

`We ran this script.`

- *console.log (opml.getMarkdown (op.getCursorOpml (false)))*

`Which generated this text.`

- *Cheese*

- *<br>*

- *Bagels*

- *<br>*

- *Everything*

- *Sesame*

- *Plain*

- *<br>*

- *Sauces*

## opml.getHeaders
#### Syntax
opml.getHeaders ()

#### Params
None.

#### Returns
All the elements of the &lt;head> section of the OPML file for the current outline. 

#### Example
`opml.getHeaders ()`

- *{     "title": "verbDocs",     "dateCreated": "Mon, 22 Mar 2021 16:14:46 GMT",     "dateModified": "Wed, 07 Apr 2021 15:45:15 GMT",     "expansionState": "5,6,7,9,11,13,17",     "lastCursor": "13",     "ownerTwitterScreenName": "davewiner",     "ownerName": "Dave Winer",     "ownerId": "http://twitter.com/davewiner",     "urlUpdateSocket": "ws://test.littleoutliner.com:1230/",     "longTitle": "",     "description": "" }*

## opml.setHeaders
#### Syntax
opml.setHeaders (object)

#### Params
The parameter is a JavaScript object containing the new values for the &lt;head> section of the OPML file for the current outline.

#### Returns
undefined.

#### Notes
The headers are not replaced by this call, it's additive. 

There is currently no way, from a script, to delete a head element.

#### Example
`var headers = opml.getHeaders ();`

`headers.someRandomValue = number.random (1, 1000);`

`opml.setHeaders (headers);`

