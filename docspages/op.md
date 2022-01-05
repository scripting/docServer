
# op verbs
## op.attributes.addGroup
#### Syntax
op.attributes.addGroup (object)

#### Params
The properties of the object parameter are added to the bar cursor headline.

#### Returns
The object.

#### Example
`op.attributes.addGroup ({age: 98, hair: "brown", location: "Minnesota"})`

<pre>{
    "age": 98,
    "hair": "brown",
    "location": "Minnesota"
    }
</pre>
## op.attributes.deleteOne
#### Syntax
op.attributes.deleteOne (name)

#### Params
The string is the name of an attribute.

#### What it does
The attribute is deleted on the bar cursor headline, if it exists. 

#### Returns
true if it deleted the att, false if it didn't.

#### Example
`op.attributes.deleteOne ("age")`

- *false*

`op.attributes.deleteOne ("location")`

- *true*

## op.attributes.exists
#### Syntax
op.attributes.exists (string)

#### Params
The string is the name of an attribute.

#### Returns
If the attribute exists on the bar cursor headline it returns true, false otherwise.

#### Example
`op.attributes.exists ("created")`

- *true*

`op.attributes.exists ("mysteryAttribute")`

- *false*

## op.attributes.getAll
#### Syntax
op.attributes.getAll ()

#### Params
None.

#### Returns
A JavaScript object containing all the attributes attached to the bar cursor headline.

#### Example
`op.attributes.getAll ()`

<pre>{
    "created": "Tue, 30 Mar 2021 16:07:59 GMT",
    "age": "32"
    }
</pre>
## op.attributes.getOne
#### Syntax
op.attributes.getOne (string)

#### Params
The string is the name of an attribute.

#### Returns
The value of the named attribute on the bar cursor headline.

If the attribute doesn't exist, it returns undefined. 

#### Example
`op.attributes.getOne ("created")`

- *Tue, 30 Mar 2021 16:07:59 GMT*

`op.attributes.getOne ("meaningOfLife")`

- *undefined*

## op.attributes.makeEmpty
#### Syntax
op.attributes.makeEmpty ()

#### Params
None.

#### What it does
Removes all the attributes of the bar cursor headline.

#### Bug
When we remove the <i>created</i> attribute, it is replaced automatically. Not clear where this is happening, but it probably shouldn't be doing this.

#### Returns
true.

#### Example
`op.attributes.makeEmpty ()`

- *true*

## op.attributes.setOne
#### Syntax
op.attributes.setOne (name, val)

#### Params
Both params are strings. 

The first is the name of the attribute of the bar cursor headline that you want to set. 

The second is the value that will be assigned to the attribute. 

#### Returns
true.

#### Example
`op.attributes.setOne ("age", random (1, 99))`

- *true*

## op.bold
#### Syntax
op.bold ()

#### Params
None.

#### What it does
The selected text in the bar cursor headline is boldened. 

#### Notes
The text is boldened by wrapping it in an HTML &lt;b> element.

#### Returns
undefined.

#### Example
`op.bold ()`

- *undefined*

## op.collapseEverything
#### Syntax
op.collapseEverything ()

#### Params
None.

#### What it does
Collapses everything in the outline and moves the bar cursor to the first summit. 

#### Returns
The value undefined.

#### Bug
The bar cursor does not go to the first summit, there is no cursor after this runs.

#### Example
`op.collapseEverything ()`

- *undefined*

## op.collapse
#### Syntax
op.collapse ()

#### Params
None.

#### What it does
Collapses the bar cursor headline making all its children not visible. 

#### Returns
The value undefined.

#### Example
`op.collapse ()`

- *undefined*

## op.countSubs
#### Syntax
op.countSubs ()

#### Params
None.

#### Returns
The number of children the bar cursor headline has. 

#### Example
`op.countSubs ()`

- *1*

## op.deleteSubs
#### Syntax
op.deleteSubs ()

#### Params
None.

#### What it does
Deletes all the children of the bar cursor headline. 

#### Returns
undefined.

#### Examples
`op.deleteSubs ()`

- *undefined*

## op.demote
#### Syntax
op.demote ()

#### Params
None.

#### What it does
All siblings down from the bar cursor headline are moved to the right, to become children of the bar cursor headline.

The bar cursor headline is expanded if necessary.

#### Returns
undefined.

#### Examples
`op.demote ()`

- *undefined*

## op.expandAllLevels
#### Syntax
op.expandAllLevels ()

#### Params
None.

#### What it does
Expands the bar cursor headline making all its children, and all their descendants, visible. 

#### Returns
The value undefined.

#### Example
`op.expandAllLevels ()`

- *undefined*

## op.expand
#### Syntax
op.expand ()

#### Params
None.

#### What it does
Expands the bar cursor headline making all its children visible. 

#### Returns
The value undefined.

#### Notes
The Frontier version of this verb takes a number param, that determines the number of levels to be expanded.

#### Example
`op.expand ()`

- *undefined*

## op.expandTo
#### Syntax
op.expandTo (

## op.firstSummit
#### Syntax
op.firstSummit ()

#### Params
None.

#### Returns
undefined.

#### Bug
It does not return undefined, it returns true. 

#### Example
`op.firstSummit ()`

- *true*

## op.getCursorJstruct
#### Syntax
op.getCursorJstruct ()

#### Params
None.

#### Returns
A JavaScript object representing all the data in the outline subordinate to the bar cursor headline.

This is useful if you want to process the text under the bar cursor headline by traversing a JavaScript object. 

#### Example
`op.getCursorJstruct  ()`

<pre>{
    "created": "Tue, 16 Nov 2021 14:55:40 GMT",
    "text": "Hello World"
    }
</pre>
## op.getCursorOpml
#### Syntax
op.getCursorOpml (flSubsOnly)

#### Params
The boolean parameter is optional. If true, we return the OPML text for the subs only, otherwise we include the bar cursor headline.

If it's not specified it defaults to false.

#### Returns
A string containing the OPML text of the bar cursor headline and all its subs, if flSubsOnly is false. If flSubsOnly is true, it returns the OPML text for the subs.

#### Note
The title in the &lt;head> section of the OPML is set to the text of the bar cursor headline, so even if flSubsOnly is true, the text of the bar cursor headline is still included in the OPML. 

The optional boolean was added on 11/28/2021 to provide a way to get just the subs, but the default behavior was as it was before, so as not to break any existing scripts. 

#### Examples
`op.getCursorOpml (true)`

- *&lt;?xml version="1.0"?>*

<pre>&lt;opml version="2.0">
    &lt;head>
        &lt;title>Foods I like&lt;/title>
        &lt;/head>
    &lt;body>
        &lt;outline text="Lettuce"/>
        &lt;outline text="Beans">
            &lt;outline text="String"/>
            &lt;outline text="Baked" created="Sun, 28 Nov 2021 14:43:14 GMT"/>
            &lt;/outline>
        &lt;outline text="Cake"/>
        &lt;/body>
    &lt;/opml>
</pre>
`op.getCursorOpml (false)`

- *&lt;?xml version="1.0"?>*

<pre>&lt;opml version="2.0">
    &lt;head>
        &lt;title>Foods I like&lt;/title>
        &lt;/head>
    &lt;body>
        &lt;outline text="Foods I like" type="outline">
            &lt;outline text="Lettuce"/>
            &lt;outline text="Beans">
                &lt;outline text="String"/>
                &lt;outline text="Baked"/>
                &lt;/outline>
            &lt;outline text="Cake"/>
            &lt;/outline>
        &lt;/body>
    &lt;/opml>
</pre>
## op.getCursor
#### Syntax
op.getCursor ()

#### Params
None.

#### Bug
There does not appear to be an op.setCursor to balance this verb.

#### Returns
An object representing the bar cursor.

#### Example
`op.getCursor ()`

- *{     "attributes": {         "_cssTextClassName": "cssTextClass"     } }*

## op.getLineText
#### Syntax
op.getLineText ()

#### Params
None.

#### Returns
The text on the bar cursor headline.

#### Example
`op.getLineText ()`

- *But what is the protocol if the user hits Cancel?*

## op.getOutlineJstruct
#### Syntax
op.getOutlineJstruct ()

#### Params
None.

#### Returns
A JavaScript object representing all the data in the outline.

This is useful if you want to process the outline in JavaScript code in the most natural way. 

#### Notes
Functionally, this verb does exactly what opml.getCurrentObject does, but this verb should be quite a bit faster for large outlines. 

It's similar to op.getCursorJstruct, which gets the outline structure underneath the bar cursor headline. 

#### Example
`op.getOutlineJstruct ()`

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
## op.getRenderMode
#### Syntax
op.getRenderMode ()

#### Params
None.

#### Returns
true if the outline is in render mode, false otherwise.

#### Example
`op.getRenderMode ()`

- *true*

`op.setRenderMode (true)`

- *undefined*

## op.getSelectedText
#### Syntax
op.getSelectedText ()

#### Params
None.

#### Returns
The selected text if there is a selection, undefined if there isn't.

#### See also
op.replaceSelectedText ()

#### Example
`op.getSelectedText ()`

- *"Toy Story"*

## op.go
#### Syntax
op.go (direction, count)

#### Params
direction is one of the directions the outliner supports: up, down, left, right, flatup, flatdown, nodirection.

count is the number of times the cursor will move in the indicated direction. 

#### What it does
It tries to move the bar cursor in the indicated directions, the indicated number of times.

- *up - bar cursor moves to previous sibling*

- *down -- bar cursor moves to next sibling*

- *left -- bar cursor moves to parent*

- *right -- bar cursor moves to first child, expanding if necessary*

- *flatup -- bar cursor moves to the previous headline up from the cursor, regardless of level*

- *flatdown -- bar cursor moves to the next headline down from the cursor, regardless of level*

#### Returns
true if it was able to move, false otherwise.

#### Examples
`op.go (left, 1)`

- *true*

`op.go (flatdown, 1)`

- *true*

`op.go (down, 1)`

- *false*

## op.hasSubs
#### Syntax
op.hasSubs ()

#### Params
None.

#### Returns
True if the bar cursor headline has children, false if it doesn't.

#### Example
`op.hasSubs ()`

- *true*

## op.insertInCalendar
#### Syntax
op.insertInCalendar (string, object)

#### Params
The string is the text of the headline that will be created. 

The object is a JavaScript object containing the attributes to be attached to the new headline.

Both params are optional, if the string is not defined we use the empty string, if the object is not defined, we create one with a single attribute, created, containing the current date/.time. 

#### What it does
A new headline is created in the active outline in a calendar structure of months, with days, exactly as the big plus icon does.

We use the <i>created</i> attribute to determine where in the calendar structure to put the headline. 

#### Returns
undefined.

#### Examples
`op.insertInCalendar ()`

- *undefined*

`op.insertInCalendar ("hello", {color: "blue", age: 22})`

- *undefined*

## op.insertOpml
#### Syntax
op.insertOpml (opmltext, direction)

#### Params
opmltext is a string containing the text representing an outline to be inserted relative to the bar cursor headline. 

direction indicates where the new headline will go.

- *up, to create a previous sibling, *

- *down, to create a next sibling. *

- *left to create a sibling down from its parent. *

- *right to create a new first child of the bar cursor headline.*

#### Returns
true.

#### Examples
`op.insertOpml ("<opml version=\"2.0\"><body><outline text=\"Hi Mom!\"></outline></body></opml>", down)`

- *true*

## op.insert
#### Syntax
op.insert (string, direction)

#### Params
string is the text of the new headline to be created relative to the bar cursor headline.

direction indicates where the new headline will go. 

- *up, to create a previous sibling, *

- *down, to create a next sibling. *

- *left to create a sibling down from its parent. *

- *right to create a new first child of the bar cursor headline.*

#### Returns
true.

#### Bug
The returned value looks like some kind of jQuery object. Should be fixed!

#### Example
`op.insert ("North Carolina", down)`

- *true*

## op.isComment
#### Syntax
op.isComment ()

#### Params
None.

#### Returns
true if the bar cursor headline is a comment, false otherwise.

#### Example
`op.isComment ()`

- *true*

## op.italic
#### Syntax
op.italic ()

#### Params
None.

#### What it does
The selected text in the bar cursor headline is italicized. 

#### Notes
The text is boldened by wrapping it in an HTML &lt;i> element.

#### Returns
undefined.

#### Example
`op.italic ()`

- *undefined*

## op.link
#### Syntax
op.link (string)

#### Params
string is a web address, a url.

#### Returns
undefined.

#### Example
`op.link ("http://scripting.com/")`

- *undefined*

## op.makeComment
#### Syntax
op.makeComment ()

#### Params
None.

#### What it does
It makes the bar cursor headline a comment. 

#### Returns
true if the bar cursor headline is a comment, false otherwise.

#### Example
`op.makeComment ()`

- *true*

## op.promote
#### Syntax
op.promote ()

#### Params
None.

#### What it does
If the bar cursor headline has children, they are all moved to the left, to become siblings of the bar cursor headline.

#### Returns
undefined.

#### Examples
`op.promote ()`

- *undefined*

## op.reorg
#### Syntax
op.reorg (direction, count)

#### Params
direction is one of the directions the outliner supports: up, down, left, right, flatup, flatdown, nodirection.

count is the number of times the bar cursor outline will move in the indicated direction. 

#### What it does
It reorganizes the outline. The operation is performed on the sub-outline the bar cursor points to and one of its adjacent siblings or parent.  

If direction is down, the bar cursor headline and all its descendants, switches places with its next sibling. If it's already the last sibling, it doesn't move.  

If the direction is up, the bar cursor outline switches places with its previous sibling. 

If the direction is right, it becomes the last child of its previous sibling. If it's already the first sibling, it doesn't move.  

If the direction is left, it becomes the next sibling of its parent. If it's already at the top level of the outline (it's a summit), it doesn't move. 

#### Returns
true if it was able to move, false otherwise.

#### Examples
`op.reorg (left, 1)`

- *true*

`op.go (left, infinity)`

- *true*

## op.replaceSelectedText
#### Syntax
op.replaceSelectedText (string)

#### What it does
Replaces the selected text with the string param.

#### Params
The string is the text to replace the selected text with.

#### Returns
If there is a selection, it returns the text we replaced the selection with. If there is no selection, it returns undefined.

#### Notes
To delete the selected text, replace it with the empty string.

#### See also
op.getSelectedText ()

#### Example
`op.replaceSelectedText ("Finding Nemo")`

- *"Toy Story"*

`op.replaceSelectedText (string.upper (op.getSelectedText ()))`

- *"TOY STORY"*

## op.runSelection
#### Syntax
op.runSelection ()

#### Params
None.

#### Returns
undefined.

#### Bug
It uses the old form of running the selection.

#### Example
`op.runSelection ()`

## op.setCursor
#### Syntax
op.setCursor (object)

#### Params
The object is the result of an op.getCursor call. 

#### Returns
An object representing the bar cursor.

#### Example
`op.setCursor (origCursor)`

- *{     "attributes": {         "_cssTextClassName": "cssTextClass"     } }*

## op.setLineText
#### Syntax
op.setLineText (string)

#### Params
The string is the text that will replace the text of the bar cursor headline. 

#### Returns
true.

#### Example
`op.setLineText ("Hi mom!")`

- *true*

## op.setRenderMode
#### Syntax
op.setRenderMode (boolean)

#### Params
boolean determines whether we go into or out of render mode.

#### What it does
In render mode the outline is displayed with HTML rendered. The markup is not visible. So for example, <b>bold text</b> appears bold, not within a &lt;b> tag.

#### Returns
true if the bar cursor headline is a comment, false otherwise.

#### Examples
`op.setRenderMode (false)`

- *undefined*

`op.setRenderMode (true)`

- *undefined*

## op.setTextMode
#### Syntax
op.setTextMode (boolean)

#### Params
The boolean indicates whether we should switch into text mode (true) or out of text mode (false).

#### Notes
When the outliner is in text mode, the bar cursor is not visible. 

Instead there's a flashing vertical line that indicates the cursor's position. When you type, text is inserted at that point. Going into text mode is an indicator to the user that they can enter text. 

You can enter text when you're not in text mode, but in that case, any typing replaces the text in the bar cursor headline.

#### Returns
undefined.

#### Example
`op.setTextMode (true)`

- *undefined*

## op.strikethrough
#### Syntax
op.strikethrough ()

#### Params
None.

#### What it does
The selected text in the bar cursor headline is italicized. 

#### Notes
The text is boldened by wrapping it in an HTML &lt;i> element.

#### Returns
undefined.

#### Example
`op.strikethrough ()`

- *undefined*

## op.toggleComment
#### Syntax
op.toggleComment ()

#### Params
None.

#### What it does
If the bar cursor headline is not a comment it makes it one, and if it is a comment, it makes it not a comment.

#### Returns
undefined.

#### Example
`op.toggleComment ()`

- *undefined*

## op.toggleRenderMode
#### Syntax
op.toggleRenderMode ()

#### Params
None.

#### What it does
If you're in render mode, after this verb runs your outline will no longer be in render mode, and if you're not in render mode, after running this verb your outline will no longer be in render mode. 

#### Returns
undefined.

#### Example
`op.toggleRenderMode ()`

- *undefined*

## op.visitAll
#### Syntax
op.visitAll (callback)

#### Params
The callback is a function that is called for every headline in the outline, in order, from top to bottom, regardless of whether the headlines are expanded.

#### Returns
undefined.

#### Notes
The example below is provided in the Scripts menu demo outline,  under Outlines. 

There's a separate docs page on the op visit verbs. We will provide a link to that page here. 

#### See also
There's a separate docs page on the op visit verbs. We will provide a link to that page here. 

#### Example
`op.visitAll (function (headline) {`

- *console.log (headline.getLineText ());*

- *return (true);*

- *});*

## op.visitSubs
#### Syntax
op.visitSubs (callback)

#### Params
The callback is a function that is called for every headline subordinate to the bar cursor headline, whether or not they're expanded, in order from top to bottom, depth-first. 

#### Returns
undefined.

#### Notes
The example below is provided in the Scripts menu demo outline,  under Outlines. 

There's a separate docs page on the op visit verbs. We will provide a link to that page here. 

The callback for op.visitSubs receives a second parameter, a number, the level of the headline being visited, relative to the bar cursor headline. The level is zero-based, meaning the immediate subs of the BCH are level 0, their subs are level 1, etc. 

#### Example
`op.visitSubs (function (headline, level) {`

- *console.log (string.filledString ("\t", level) + headline.getLineText ());*

- *return (true);*

- *});*

## op.visitToSummit
#### Syntax
op.visitToSummit (callback)

#### Params
The callback is a function that is called for every headline on the path from the bar cursor headline to the summit of the outline.

#### Returns
undefined.

#### Notes
The example below is provided in the Scripts menu demo outline,  under Outlines. 

There's a separate docs page on the op visit verbs. We will provide a link to that page here. 

#### Example
`op.visitToSummit (function (headline) {`

- *console.log (headline.getLineText ());*

- *return (true);*

- *});*

