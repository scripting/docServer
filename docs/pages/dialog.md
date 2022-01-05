
# dialog verbs
## dialog.alert
#### Syntax
dialog.alert (string)

#### Params
The string is displayed in a dialog with a single button, OK.

#### Returns
The value undefined.

#### Example
`dialog.alert ("It's sunny outside.")`

- *undefined*

## dialog.ask
#### Syntax
dialog.ask (prompt, default, placeholder)

#### Params
All parameters are strings.

prompt is displayed over the text box, it's the question the user is meant to answer.

default is the initial string in the text box.

placeholder is a string that appears in the text box when it's empty.

#### What it does
A dialog with a text box and two buttons appears. The buttons are labeled Cancel and OK.

The user can enter text to replace the default text, and then press Cancel or OK.

If the user clicks Cancel, dialog.ask returns the value undefined. If the user clicks OK, it returns the string that's in the text box, as modified by the user. 

#### Returns
The string the user entered if they pressed OK, or the value undefined if Cancel.

#### Example
`dialog.ask ("Favorite color?", "blue", "A color like blue or red goes here.")`

- *orange*

## dialog.confirm
#### Syntax
dialog.confirm (string)

#### Params
The string is displayed in a dialog with two buttons, Cancel and OK.

#### Returns
A boolean, true if the user clicked OK, false if Cancel.

#### Example
`dialog.confirm ("Really erase all files on your computer?")`

- *true*

## dialog.about
#### Syntax
dialog.about (string1, string2)

#### Params
The first string is the text of an OPML file. The second string is the title of the dialog, which is optional. 

#### What it does
Displays the outline in a dialog, with the title at the top. 

#### Returns
undefined.

#### Example
`dialog.about (http.readUrl ("http://scripting.com/states.opml"), "States outline")`

- *undefined*

