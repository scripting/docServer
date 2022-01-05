
# file verbs
## file.exists
#### Syntax
file.exists (path)

#### Params
path points to a file in the remote file system.

#### Action
Determines if the file exists

#### Returns
True if it exists, false otherwise

#### Notes
If you try to read a file that doesn't exist, for example, your script will fail. If your application can work even if a file doesn't exist, then you should use this verb to see if it exists. 

#### Examples
`file.exists ("prefs.json")`

`file.exists ("meaningOfLife.js")`

## file.writeWholeFile
#### Syntax
file.writeWholeFile (path, text)

#### What it does
Creates a new private file, or overwrites an existing file, at the indicated path, with the contents of the second parameter.  It creates any folders needed to store the file if they don't exist. 

#### Returns
true.

#### Note
Files are, by default, private. If you want to create a public file, first create the private file then call file.makeFilePublic.

#### Examples
`file.writeWholeFile ("hello.txt", "Hello World")`

- *true*

`file.writeWholeFile ("code/alert.js", "dialog.alert ('Yo')") `

- *true*

## file.readWholeFile
#### Syntax
file.readWholeFile (path)

#### What it does
Reads the file at the indicated path and returns its contents as a string. 

#### Returns
The contents of the file, as a string.

#### Example
`file.readWholeFile ("hello.txt") `

- *Hello World*

## file.delete
#### Syntax
file.delete (path)

#### What it does
Tries to delete both a private file or a public one at the indicated path. It's an error if neither file exists. 

#### Returns
undefined

#### Example
`file.writeWholeFile ("deleteme.txt", "It's even worse than it appears.")`

- *true*

`file.readWholeFile ("deleteme.txt")`

- *It's even worse than it appears.*

`file.delete ("deleteme.txt")`

- *undefined*

## file.getFileInfo
#### Syntax
file.getFileInfo (path)

#### Params
path is a string, the location to a file being stored on the server.

#### Returns
Information about the file, including: its size in bytes, when it was created, last read, last modified, and whether it's public or private.

If the file is public, urlPublic, the address of the file, is included. 

#### Example
`file.getFileInfo ("states.opml") `

<pre>{
    "size": 2741,
    "whenAccessed": "2021-08-24T14:51:15.000Z",
    "whenCreated": "2021-08-24T14:51:15.000Z",
    "whenModified": "2021-08-24T14:56:13.000Z",
    "flPrivate": false,
    "urlPublic": "http://drummer.scripting.com/cluelessnewbie/states.opml"
    }
</pre>
`file.getFileInfo ("scratchpad.opml")`

<pre>{
    "size": 85332,
    "whenAccessed": "2021-08-24T14:48:53.000Z",
    "whenCreated": "2021-07-30T13:35:09.000Z",
    "whenModified": "2021-08-24T14:58:31.000Z",
    "flPrivate": true
    }
</pre>
## file.makeFilePublic
#### Syntax
file.makeFilePublic (path)

#### What it does
Makes the file public if it is private. 

#### Returns
The public URL of the file. 

#### Example
`file.makeFilePublic ("hello.txt")`

- *http://drummer.scripting.com/davewiner/hello.txt*

`http.readUrl ("http://drummer.scripting.com/davewiner/hello.txt")`

- *Hello World*

## file.getFileHierarchy
#### Syntax
file.getFileHierarchy ()

#### What it does
Returns a JavaScript object that describes the user's file hierarchy.

There are two top-level branches, Private files and Public files. Unless you have explicitly made a file public, all files are private. 

Under each is the hierarchy, as they are stored in the file system on the server. For each folder there is a  whenCreated and a whenModified value, and an object called subs, which contains the files and any sub-folders.

For each file, in addition to creation and modification dates, ctChars is the size of the file.

#### Returns
A JavaScript object as explained above.

#### Notes
This feature is based on the <a href="https://github.com/scripting/folderToJson">folderToJson</a> package.

And the Outline file hierarchy command in the Tools menu is built on file.getFileHierarchy. 

#### Example
`file.getFileHierarchy ()`

<pre>{
    "publicFiles": {
        "subs": {
            "april2021Status.opml": {
                "ctChars": 21475,
                "whenCreated": "2021-05-17T01:46:17.385Z",
                "whenModified": "2021-05-17T01:46:17.385Z"
                },
            "aprilMayDrummerChanges.opml": {
                "ctChars": 15657,
                "whenCreated": "2021-05-17T01:40:27.646Z",
                "whenModified": "2021-05-17T01:41:56.446Z"
                },
            "daveStatus.opml": {
                "ctChars": 39467,
                "whenCreated": "2021-05-06T22:34:17.160Z",
                "whenModified": "2021-05-29T16:13:19.181Z"
                },
            "february2021Status.opml": {
                "ctChars": 70491,
                "whenCreated": "2021-05-17T01:43:24.202Z",
                "whenModified": "2021-05-17T01:43:24.202Z"
                },
            "hello.txt": {
                "ctChars": 11,
                "whenCreated": "2021-05-29T16:08:07.954Z",
                "whenModified": "2021-05-29T16:12:06.257Z"
                },
            "march2021Status.opml": {
                "ctChars": 51300,
                "whenCreated": "2021-05-17T01:45:09.122Z",
                "whenModified": "2021-05-17T01:45:09.298Z"
                },
            "opVerbDocs.opml": {
                "ctChars": 56658,
                "whenCreated": "2021-05-16T19:39:17.747Z",
                "whenModified": "2021-05-17T01:38:28.054Z"
                },
            "scratchpad.json": {
                "ctChars": 14558,
                "whenCreated": "2021-05-28T15:16:10.378Z",
                "whenModified": "2021-05-29T15:05:52.017Z"
                },
            "scratchpad.opml": {
                "ctChars": 7290,
                "whenCreated": "2021-05-28T15:16:10.330Z",
                "whenModified": "2021-05-29T15:05:51.973Z"
                },
            "twitterVerbDocs.json": {
                "ctChars": 135024,
                "whenCreated": "2021-05-28T16:16:08.924Z",
                "whenModified": "2021-05-28T18:10:22.472Z"
                },
            "twitterVerbDocs.opml": {
                "ctChars": 51601,
                "whenCreated": "2021-05-07T15:03:13.106Z",
                "whenModified": "2021-05-28T18:10:22.296Z"
                },
            "undefined": {
                "ctChars": 5491,
                "whenCreated": "2021-05-15T15:12:46.388Z",
                "whenModified": "2021-05-28T15:51:14.558Z"
                },
            "verbDocs.opml": {
                "ctChars": 111226,
                "whenCreated": "2021-05-07T20:15:45.464Z",
                "whenModified": "2021-05-17T01:38:45.546Z"
                }
            }
        },
    "privateFiles": {
        "subs": {
            "april2021Status.opml": {
                "ctChars": 21475,
                "whenCreated": "2021-05-17T01:45:58.182Z",
                "whenModified": "2021-05-17T01:46:14.309Z"
                },
            "aprilMayDrummerChanges.opml": {
                "ctChars": 15768,
                "whenCreated": "2021-05-17T01:39:31.950Z",
                "whenModified": "2021-05-17T01:40:20.062Z"
                },
            "bookmarks.opml": {
                "ctChars": 2476,
                "whenCreated": "2021-04-23T16:09:01.205Z",
                "whenModified": "2021-05-07T15:04:19.598Z"
                },
            "daveStatus.opml": {
                "ctChars": 145031,
                "whenCreated": "2021-05-06T14:12:18.230Z",
                "whenModified": "2021-05-06T14:14:15.445Z"
                },
            "dontlooknow.opml": {
                "ctChars": 1042,
                "whenCreated": "2021-04-23T16:11:49.568Z",
                "whenModified": "2021-04-23T16:12:55.524Z"
                },
            "drummerDocs.opml": {
                "ctChars": 5570,
                "whenCreated": "2021-05-06T14:16:40.037Z",
                "whenModified": "2021-05-17T01:53:08.393Z"
                },
            "february2021Status.opml": {
                "ctChars": 70491,
                "whenCreated": "2021-05-17T01:42:57.610Z",
                "whenModified": "2021-05-17T01:43:16.802Z"
                },
            "hello.txt": {
                "ctChars": 11,
                "whenCreated": "2021-05-29T15:10:36.809Z",
                "whenModified": "2021-05-29T16:07:56.474Z"
                },
            "march2021Status.opml": {
                "ctChars": 51300,
                "whenCreated": "2021-05-17T01:44:51.166Z",
                "whenModified": "2021-05-17T01:45:04.350Z"
                },
            "menubar.opml": {
                "ctChars": 18704,
                "whenCreated": "2021-05-06T14:19:03.385Z",
                "whenModified": "2021-05-06T14:19:23.521Z"
                },
            "notes.opml": {
                "ctChars": 1855,
                "whenCreated": "2021-04-23T16:08:23.549Z",
                "whenModified": "2021-05-04T15:01:57.487Z"
                },
            "opVerbDocs.opml": {
                "ctChars": 53897,
                "whenCreated": "2021-05-06T14:15:20.717Z",
                "whenModified": "2021-05-06T14:15:21.000Z"
                },
            "opVisitVerbs.opml": {
                "ctChars": 3056,
                "whenCreated": "2021-05-06T14:25:16.792Z",
                "whenModified": "2021-05-06T14:25:17.000Z"
                },
            "prefs.json": {
                "ctChars": 3652,
                "whenCreated": "2021-04-23T16:08:24.389Z",
                "whenModified": "2021-05-29T16:13:20.017Z"
                },
            "scheduler.opml": {
                "ctChars": 305,
                "whenCreated": "2021-05-28T13:53:08.393Z",
                "whenModified": "2021-05-28T13:53:08.393Z"
                },
            "scratchpad.opml": {
                "ctChars": 4129,
                "whenCreated": "2021-05-06T14:23:30.457Z",
                "whenModified": "2021-05-28T18:07:38.836Z"
                },
            "states.opml": {
                "ctChars": 6997,
                "whenCreated": "2021-05-06T14:24:16.656Z",
                "whenModified": "2021-05-19T20:34:00.863Z"
                },
            "storage.json": {
                "ctChars": 2,
                "whenCreated": "2021-04-23T16:08:24.389Z",
                "whenModified": "2021-04-23T16:08:24.389Z"
                },
            "todo.opml": {
                "ctChars": 13430,
                "whenCreated": "2021-05-06T14:06:02.714Z",
                "whenModified": "2021-05-21T16:33:25.355Z"
                },
            "twitterVerbDocs.opml": {
                "ctChars": 21277,
                "whenCreated": "2021-05-07T15:02:51.782Z",
                "whenModified": "2021-05-07T15:03:06.890Z"
                },
            "verbDocs.opml": {
                "ctChars": 186145,
                "whenCreated": "2021-05-06T14:15:21.481Z",
                "whenModified": "2021-05-07T15:04:04.578Z"
                }
            }
        }
    }
</pre>
`console.log (jsonStringify (file.getFileHierarchy ()))`

- *undefined*

