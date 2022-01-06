
# tab verbs
## tab.getActiveTabStatus
#### Syntax
tab.getActiveTabStatus ()

#### Params
None.

#### Returns
A JavaScript object containing information about the file in the active tab. 

#### Note
This is the actual internal information Drummer uses to keep track of the tab. 

#### Values
flActive -- will always be true.

name -- the title of the file.

fname -- the file name, in Electric Drummer, the full path to the file.

flInstantOutline -- true if it's an instant outline.

flReadOnly -- true for instant outlines, false for outlines you create. 

flLocked -- applies to instant outlines. True if the outline is locked, which means updates won't be displayed until the user unlocks the file.

flPrivate -- true if the file is private. 

serialnum -- a unique number assigned to this tab by Drummer.

#### Examples
`tab.getActiveTabStatus ()`

<pre>{
    "flActive": true,
    "name": "Scratchpad",
    "fname": "scratchpad.opml",
    "flReadOnly": false,
    "flInstantOutline": false,
    "serialnum": 3,
    "flLocked": false,
    "flPrivate": true
    }
</pre>
`tab.getActiveTabStatus ().fname`

- */Users/davewiner/docserver source/verbDocs.opml*

## tab.getPublicUrl
#### Syntax
tab.getPublicUrl () returns string

#### What it does
If the outline in the current tab in the outliner is public, returns the HTTP address of the file. 

If the outline is private, returns undefined.

#### Returns
A web address or undefined.

#### Example
`dialog.alert (tab.getPublicUrl ())`

- *undefined*

## tab.openFile
#### Syntax
tab.openFile (string, string)

#### Params
The first string is the name of an existing outline file.  

The second string is optional, it's the title you want to appear in the tab. If not specified, the outline's title is displayed in the tab.

#### What it does
If the file is already open in a tab, that tab comes to the front. If not, and the file exists, it opens in a new tab. 

#### Returns
true

#### Common error
The file does not exist.

#### Examples
`tab.openFile ("hello3.opml") `

- *true*

`tab.openFile ("hello3.opml", "My Favorite File") `

- *true*

## tab.openInstantOutline
#### Syntax
tab.openInstantOutline (string, string)

#### Params
The first string is the URL of an instant outline descriptor file.  

The second string is optional, it's the title you want to appear in the tab. If not specified, the outline's title is displayed in the tab.

#### What it does
If the outline is already open in a tab, that tab comes to the front. If not, and the file exists, it opens in a new tab. 

#### Returns
true.

#### Bug
It has no way to report an error, if it couldn't open the outline, it still returns true.

#### Examples
`tab.openInstantOutline ("http://instantoutliner.com/o0", "The states outline") `

- *true*

