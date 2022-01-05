
# drummer verbs
## drummer.productname
#### Syntax
drummer.productname ()

#### Params
None

#### Returns
The name of the Drummer app.

#### Notes
At first it might seem silly to have a verb that tells your script the name of the Drummer app, but these things do change sometimes. 

For example, there was a scripting language in the Fargo app, and it's possible someone might run one of its scripts here. 

fargo.version is implemented here, so you can find out that this isn't Fargo anymore, if your script cares. 

When you've been doing this for a long time, the value of these kinds of hooks become apparent. 

#### Examples
`drummer.productname ()`

- *"drummer"*

## drummer.productnameForDisplay
#### Syntax
drummer.productnameForDisplay ()

#### Params
None

#### Returns
The name of the Drummer app in a form suitable for displaying in a dialog, or other kind of message to the user.

#### Examples
`drummer.productnameForDisplay ()`

- *"Drummer"*

## drummer.runScript
#### Syntax
drummer.runScript (string)

#### Params
The string is a bit of JavaScript code.

#### Returns
undefined.

#### Notes
The script text runs but I was hoping the value would be returned, but it's not.

In the second example below, nothing happens. 

#### Examples
`drummer.runScript ("dialog.alert (\"Hello World\")")`

- *undefined*

`drummer.runScript ("100 * 12")`

- *undefined*

## drummer.subscribeToOutline
#### Syntax
drummer.subscribeToOutline (string)

#### Params
The string is the URL of an OPML file.

#### What it does
The outline opens in a new tab, or if it's already open, Drummer brings the tab to the front.

#### Returns
true.

#### Notes
If the outline has a &lt;urlUpdateSocket> head element, Drummer will request updates from the server, and will automatically update the outline when the outline changes.

See the <a href="https://github.com/scripting/instantOutlines">instantOutlines project</a> for examples and code for this protocol. 

#### Examples
`drummer.subscribeToOutline ("http://scripting.com/states.opml")`

- *true*

## drummer.version
#### Syntax
drummer.version ()

#### Params
None

#### Returns
The current version of the Drummer software.

#### Examples
`drummer.version ()`

- *2.0.6*

## drummer.useStylesheet
#### Syntax
drummer.useStylesheet (string)

#### Params
The string is the URL of an CSS style sheet file.

#### What it does
Applies the style sheet to Drummer.

#### Returns
true.

#### Notes
We're using this <a href="https://stackoverflow.com/questions/14028113/load-different-css-stylesheet-with-javascript">Stack Overflow piece</a> as guidance. 

#### Example
`drummer.useStylesheet ("http://scripting.com/misc/darkmodestyles.css")`

- *true*

