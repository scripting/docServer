
# string verbs
## string.addCommas
#### Syntax
string.addCommas (number)

#### Params
The param is a large number that can be made easier to read by adding commas to it.

#### Returns
A string.

#### Examples
`string.addCommas (11709445200)`

- *11,709,445,200*

`string.addCommas (12)`

- *12*

`string.addCommas ("abcdefghijklmnopqrstuvwxyz")`

- *abcdefghijklmnopqrstuvwxyz*

## string.addPeriodAtEnd
#### Syntax
string.addPeriodAtEnd (string)

#### Params
string is a sentence that may not have a period at the end. 

#### Returns
The string, possibly with a period added at the end. 

#### Notes
It's a complicated and somewhat quirky algorithm. 

First we call string.trimWhitespace to remove any spaces or newlines at the beginning and end of the string.

Then, if the string ends with a period, comma, question mark, quote, colon, semicolon or exclamation point, we do nothing. Putting a period after these characters would usually be incorrect. 

Used in Radio3 to pre-process a linkblog post. 

#### Examples
`string.addPeriodAtEnd ("I like ice cream")`

- *I like ice cream.*

`string.addPeriodAtEnd ("What is your favorite flavor?")`

- *What is your favorite flavor?*

## string.beginsWith
#### Syntax
string.beginsWith (s, possibleBeginning, flUnicase)

#### Params
The first param is a string that might begin with the second param.

flUnicase, a boolean, is optional. If true the search is done regardless of the case of the characters. If true the match doesn't have to be exact regarding the case of the characters, so "hooray" will match "Hooray" or "hOOrAy" if flUnicase is true.

#### Returns
true if the string begins with the other, false if it doesn't.

#### Example
`string.beginsWith ("hooray for hollywood", "hoo")`

- *true*

## string.bumpUrlString
#### Syntax
string.bumpUrlString (string)

#### Params
string either undefined or the result of having called string.bumpUrlString. 

#### Returns
The next string in the sequence, as in a URL shortener application.

#### Notes
The first string it returns is 1, then 2, then it runs through the alphabet. After z it returns 00, then 01.

It can be used in implementing a URL shortener, to generate a sequence of strings, that can be used as aliases for another perhaps longer string. 

#### Examples
`string.bumpUrlString (undefined)`

- *1*

`string.bumpUrlString ("z")`

- *00*

`string.bumpUrlString ("zz")`

- *000*

`string.bumpUrlString ("ZZ") //not case-sensitive`

- *000*

## string.contains
#### Syntax
string.contains (s, whatItMightContain, flUnicase) returns boolean

#### What it does
Determines if one string contains another.

The third parameter, flUnicase, is optional, it defaults to true. 

#### Returns
true if the string contains the other, false if it doesn't.

#### Example
`dialog.alert (string.contains ("http://november.com", "november")) //displays true`

## string.countFields
#### Syntax
string.countFields (s, ch)

#### Params
s is a string, ch is a 1-character string.

#### Returns
The number of fields in the string, with fields determined by the character.

#### Examples
`string.countFields ("scripting.com/2003/08/12.html", "/")`

- *4*

`string.countFields ("Do you know the way to San Jose?", " ")`

- *8*

`string.countFields ("Come hear Uncle John's Band.", "/")`

- *1*

#### See also
string.nthField

string.lastField

## string.dayOfWeekToString
#### Syntax
string.dayOfWeekToString (number)

#### Param
A number between 0 and 6. 0 corresponds to Sunday, 6 to Saturday.

#### Returns
A string like "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" or the empty string. 

#### Errors
If the number is out of range it returns the empty string.

#### Example
`string.dayOfWeekToString (3)`

- *Wednesday*

#### See also
string.monthToString

## string.decodeXml
#### Syntax
string.decodeXml (string)

#### Params
A string that may include encoded XML.

#### Returns
The decoded version of the string.

#### Notes
We look for four strings: &amp;lt; &amp;gt; &amp;amp; and &amp;apos; and convert them to < > & and '.

At some point it may make sense to look for other strings. 

#### Examples
`string.decodeXml ("&amp;lt;script&amp;gt;")`

- *&lt;script>*

`string.decodeXml ("Lennon &amp;amp; McCartney")`

- *Lennon & McCartney*

## string.delete
#### Syntax
string.delete (string, index, count)

#### Params
The first parameter is a string that you want to delete characters from. 

The second parameter is the 1-based location of the first character to delete.

The third parameter is the number of characters to delete.

#### Returns
The result of deleting the characters from the string. 

#### Notes
If you try to delete more characters than are present, it deletes as many as it can.

If you try to delete starting past the end of the string, you end up deleting nothing.

#### Example
`string.delete ("123456789", 3, 1)`

- *12456789*

`string.delete ("123456789", 2, 1000)`

- *1*

`string.delete ("123456789", 100, 3)`

- *123456789*

## string.encodeHtml
#### Syntax
string.encodeHtml (string)

#### Params
A string that possibly contains HTML markup. 

#### Returns
The result of encoding angle brackets and quotes.  

#### Notes
If you try to delete more characters than are present, it deletes as many as it can.

If you try to delete starting past the end of the string, you end up deleting nothing.

#### Examples
`string.encodeHtml ("Still diggin!")`

- *Still diggin!*

`string.encodeHtml ("I <b>love</b> a parade")`

- *I &#60;b&#62;love&#60;/b&#62; a parade*

## string.endsWith
#### Syntax
string.endsWith (string1, string2, boolean)

#### Params
The first string is the one we're looking in.

The second is what we're looking for in the string.

The boolean says if the search is unicase (it's optional, if not present it's true).

#### Returns
True if the first string ends with the second. 

#### Examples
`string.endsWith ("Hooray for Hollywood", "wood")`

- *true*

`string.endsWith ("Hooray for Hollywood", "Wood", false)`

- *false*

`string.endsWith ("Hooray for Hollywood", "wheat")`

- *false*

## string.extensionToMimeType
#### Syntax
string.extensionToMimeType (string)

#### Params
The string is a path to a file.

#### Returns
Returns a <a href="https://en.wikipedia.org/wiki/Media_type#Common_examples_[10]">media type</a> corresponding to the extension of the file. 

For example, if the extension is .html, it returns text/html. 

If there is no extension or the extension isn't recognized, it returns undefined.

#### Note
string.extensionToMimeType calls the <a href="https://github.com/scripting/utils/blob/master/daveutils.js#L1182">daveutils</a> function httpExt2MIME. 

#### Examples
`string.extensionToMimeType ("ideas.html")`

- *text/html*

`string.extensionToMimeType ("config.json")`

- *application/json*

`string.extensionToMimeType ("config.js")`

- *application/javascript*

`string.extensionToMimeType ("profile.png")`

- *image/png*

`string.extensionToMimeType ("profile.jpg")`

- *image/jpeg*

## string.filledString
#### Syntax
string.filledString (character, count)

#### Params
The first parameter is a string which will be replicated.

The second parameter is the number of times it will be replicated.

#### Returns
A string containing a number of copies of the first parameter. 

#### Examples
`string.filledString ("p", 10)`

- *pppppppppp*

`string.filledString ("123 ", 10)`

- *123 123 123 123 123 123 123 123 123 123 *

`string.filledString ("\t", 3)`

- *   *

## string.formatDate
#### Syntax
string.formatDate (date, format, timezone)

#### Params
The first parameter is a JavaScript date object. 

The second parameter is a string containing a format spec, following <a href="https://man7.org/linux/man-pages/man3/strftime.3.html">strftime</a> standard.

The third parameter says what timezone you want the date to be in. 0 is GMT, -4 in US/Eastern. 

#### Returns
A string, representing the date, in the format specified, in the indicated timezone.

#### Notes
All three parameters are optional.

If the date is not specified, the current date-time is used.

If the format is not specified, we use "%c".

If the timezone is not specified, we use the timezone that the machine that ran the script is in.

#### Examples
`string.formatDate (clock.now (), "%B")`

- *March*

`string.formatDate ()`

- *Sun Mar 14 2021 11:24:53 GMT-0400 (Eastern Daylight Time)*

`string.formatDate (clock.now (), "%l:%M %p")`

- *11:21 AM*

`string.formatDate (undefined, "%A, %B %e, %Y at %l:%M %p") + "."`

- *Sunday, March 14, 2021 at 11:27 AM.*

## string.getRandomPassword
#### Syntax
string.getRandomPassword (count)

#### Params
count is the number of characters that will be in the random string that's generated.

#### Returns
A string of random characters.

#### Examples
`string.getRandomPassword (20)`

- *26mxjiulbv2br8jaeutj*

`string.getRandomPassword (20)`

- *pv8snpjvmbl4np4kh4mt*

## string.hashMD5
#### Syntax
string.hashMD5 (string)

#### Params
The string is the input to the <a href="https://en.wikipedia.org/wiki/MD5">MD5 encryption</a> algorithm.

#### Returns
The encrypted version of the string. 

#### Notes
You can tell with a lot of confidence that the sender who uses this function has a copy of the string without transmitting it. 

#### Examples
`string.hashMD5 ("Spring forward, fall back.")`

- *26d37b732af2a3caf47a0b2c9789a0ce*

`string.hashMD5 ("It's even worse than it appears")`

- *d7adfe509535ad6de49a8baf0fbf7a3d*

## string.innerCaseName
#### Syntax
string.innerCaseName (string)

#### Params
A string that contains words separated by spaces. 

#### Returns
The innerCase version of the string, which means capitalize the first letter after every space, then remove the spaces.

#### Notes
It's useful for creating a file name or URL from a title. 

#### Examples
`string.innerCaseName ("The story of my life") + ".mp3"`

- *theStoryOfMyLife.mp3*

## string.insert
#### Syntax
string.insert (source, dest, ix)

#### Params
source is a string that will be inserted into dest, also a string, and the 1-based index ix.

#### Returns
The result of the insertion.

#### Bugs
Behavior is unpredictable if ix is less than zero. 

#### Examples
`string.insert ("Bull ", "My name is Mancuso.", 11)`

- *My name is Bull Mancuso.*

`string.insert ("Hello ", " from Hollywood", 1)`

- * Hello from Hollywood*

## string.isAlpha
#### Syntax
string.isAlpha (ch)

#### Params
ch is a 1-character string.

#### Returns
True if it's an alphabetic character, false otherwise.

Alphabetic characters are A-Z and a-z.

#### Notes
If the string is longer than one character, it returns true if the first character is alphabetic, false otherwise.

#### Examples
`string.isAlpha ("x")`

- *true*

`string.isAlpha ("1")`

- *false*

`string.isAlpha ("#")`

- *false*

`string.isAlpha ("123abc")`

- *false*

#### See also
string.isNumeric

string.isWhitespace

string.isPunctuation

## string.isNumeric
#### Syntax
string.isNumeric (ch)

#### Params
ch is a 1-character string.

#### Returns
True if it's a numeric character, false otherwise.

Numeric characters are 0-9.

#### Notes
If the string is longer than one character, it returns true if the first character is numeric, false otherwise.

#### Examples
`string.isNumeric ("4")`

- *true*

`string.isNumeric ("g")`

- *false*

`string.isNumeric ("#")`

- *false*

`string.isNumeric ("123abc")`

- *true*

#### See also
string.isAlpha

string.isWhitespace

string.isPunctuation

## string.isPunctuation
#### Syntax
string.isPunctuation (ch)

#### Params
ch is a 1-character string.

#### Returns
True if it's a punctuation character, false otherwise.

Punctuation characters all characters that are not alpha, numeric or whitespace characters.

#### Notes
If the string is longer than one character, it returns true if the first character is numeric, false otherwise.

This function can in some cases be used to see if you need to add a period at the end of a sentence. 

#### Bugs
Admittedly, its definition is weird, it would probably be better to enumerate the characters that are punctuation, for example, period, comma, colon, semicolon. 

#### Examples
`string.isPunctuation (" ")`

- *false*

`string.isPunctuation (".")`

- *true*

`string.isPunctuation (",")`

- *true*

#### See also
string.isAlpha

string.isWhitespace

string.isNumeric

string.isPunctuation

string.trimWhitespace

## string.isWhitespace
#### Syntax
string.isWhitespace (ch)

#### Params
ch is a 1-character string.

#### Returns
True if it's a whitespace character, false otherwise.

Whitespace characters are " ", "\r", "\n", "\t" (i.e. blank, return, newline and tab).

#### Notes
If the string is longer than one character, it returns true if the first character is numeric, false otherwise.

#### Examples
`string.isWhitespace (" ")`

- *true*

`string.isWhitespace ("\n")`

- *true*

`string.isWhitespace ("*")`

- *false*

#### See also
string.isAlpha

string.isWhitespace

string.isNumeric

string.isPunctuation

string.trimWhitespace

## string.lastField
#### Syntax
string.lastField (s, ch)

#### Params
s is a string, ch is a 1-character string.

#### Returns
A string with the contents of the last specified field in the string, with fields determined by the character.

If ch doesn't appear in the string, it returns the whole string.

#### Bugs
If ch contains more than one character, the results are not easily specified.

#### Examples
`string.lastField ("scripting.com/2003/08/12.html", "/")`

- *12.html*

`string.lastField ("oh the buzzing of the bees", " ")`

- *bees*

`string.lastField ("oh the buzzing of the bees", "123")`

- *oh the buzzing of the bees*

#### See also
string.nthField

string.countFields

## string.lower
#### Syntax
string.lower (s) returns string

#### What it does
Converts the string to lower case. 

#### Returns
The lower case version of the string.

#### Example
`dialog.alert (string.lower ("Everyone Do The Hamster Dance!"))`

#### See also
string.upper

## string.maxStringLength
#### Syntax
string.maxStringLength (string, maxlength, flWholeWordAtEnd, flAddElipses)

#### Params
The first parameter is a string that you want to be sure isn't longer than the number in the second parameter.

flWholeWordAtEnd is an optional boolean param. If true, we don't leave a broken word at the end of the string. Defaults to true. 

flAddElipses is an optional boolean. If true, we add three periods at the end of the string. Defaults to true.

#### Returns
A string that is not longer than the indicated length.

#### Examples
`string.maxStringLength ("I have a long story I would like to tell you. It begins like this.", 35)`

- *I have a long story I would like ...*

`string.maxStringLength ("You know nothing Jon Snow." , 80)`

- *You know nothing Jon Snow.*

## string.markdownProcess
#### Syntax
string.markdownProcess (string)

#### Params
The string contains markdown text that you want to be converted to HTML.

#### Returns
The HTML rendering of the string.

#### Notes
We use <a href="https://github.com/StackExchange/pagedown">Pagedown</a>, the Markdown processor used on Stack Exchange. 

#### Examples
`string.markdownProcess ("It's **even** worse than it appears.")`

- *<p>It's <strong>even</strong> worse than it appears.</p>*

`string.markdownProcess ("I read [Scripting News](http://scripting.com/).")`

- *<p>I read <a href="http://scripting.com/">Scripting News</a>.</p>*

`string.markdownProcess ("* one\n* two\n* three\n")`

<pre><ul>
    <li>one</li>
    <li>two</li>
    <li>three</li>
    </ul>
</pre>
## string.mid
#### Syntax
string.mid (string, ix, ct)

#### Params
The first parameter is a string that you want to get characters from. 

The second parameter is the 1-based location of the first character to copy.

The third parameter is the number of characters to copy.

#### Returns
The result of extracting the characters from the string. 

#### Notes
If you try to delete copy characters than are present, it copies as many as it can.

If you try to copy starting past the end of the string, you end up copying nothing.

#### Example
`string.mid ("123456789", 3, 1)`

- *3*

`string.mid ("123456789", 2, 1000)`

- *23456789*

#### See also
string.delete

string.insert

## string.monthToString
#### Syntax
string.monthToString (number)

#### Param
A number between 0 and 11. 0 corresponds to January, 11 to December.

#### Returns
A string like "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" or undefined. 

#### Examples
`string.monthToString (0)`

- *January*

`string.monthToString (100)`

- *undefined*

#### See also
string.dayOfWeekToString

## string.multipleReplaceAll
#### Syntax
string.multipleReplaceAll (s, replaceTable, flCaseSensitive, startCharacters, endCharacters)

#### Params
s is a string.

replaceTable is an object, where the name of each property is a string to search for, and its value is what you want it replaced with. 

flCaseSensitive, a boolean, determines if the search is case-sensitive. It's optional, if undefined, it defaults to false. 

startCharacters is an optional string, if specified we only look at text within the first string that begins with these characters.

endCharacters, also optional, if specified, we only look at text within the first string that ends with these characters.

#### Returns
A string, the result of the replacements.

#### Example
`string.multipleReplaceAll ("This house costs $293,000.", {"house": "apartment", "293,000": "534,287"}) `

- *This apartment costs $534,287.*

#### See also
string.replaceAll

## string.nthField
#### Syntax
string.nthField (s, ch, n)

#### Params
s is a string, ch is a 1-character string, n is a number.

n is 1-based, i.e. the first field is 1, not 0.

#### Returns
A string with the contents of the specified field, with fields determined by the character.

#### Example
`string.nthField ("scripting.com/2003/08/12.html", "/", 3)`

- *08*

#### See also
string.lastField

string.countFields

## string.padWithZeros
#### Syntax
string.padWithZeros (number, ct)

#### Params
number is a number you want padded with zeros.

ct is the number of places you want the number padded to.

#### Returns
The padded version of the number as a string.

#### Notes
It's useful if you want all strings produced by the code to be the same length, regardless how large the numbers are.

#### Examples
`string.padWithZeros (1200, 5)`

- *01200*

`string.padWithZeros (1, 4) + ".html"`

- *0001.html*

#### See also
string.delete

string.insert

## string.popExtension
#### Syntax
string.popExtension (s)

#### Params
s is a string.

#### Returns
If the string has an extension, like .txt or .png, we return the string without the extension.

#### Example
`string.popExtension ("myAffadavit.txt")`

- *myAffadavit*

#### See also
string.popLastField

string.popTrailing

## string.popLastField
#### Syntax
string.popLastField (s, ch)

#### Params
s is a string, ch is a 1-character string.

#### Returns
A string without the last field, as determined by the character, used as a delimiter.

#### Notes
Useful if you want to replace the suffix of a file name with another suffix.

#### Examples
`string.popLastField ("myDiary.html", ".") + ".json"`

- *myDiary.json*

`string.popLastField ("scripting.com/2021/03/13", "/")`

- *scripting.com/2021/03*

#### See also
string.nthField

string.countFields

string.lastField

## string.popTrailing
#### Syntax
string.popTrailing (s, ch)

#### Params
s is a string, ch is a 1-character string.

#### Returns
A string without instances of the character at the end of the string

#### Example
`string.popTrailing ("get rid of the dots please.........", ".")`

- *get rid of the dots please*

#### See also
string.popLastField

string.popExtension

## string.randomSnarkySlogan
#### Syntax
string.randomSnarkySlogan ()

#### Params
None.

#### Returns
A slogan from Dave's collection. 

#### Notes
This is mostly for fun. Truthfully it's <i>only</i> for fun. Heh. ;-)

#### Examples
`string.randomSnarkySlogan ()`

- *People return to places that send them away.*

`string.randomSnarkySlogan ()`

- *This aggression will not stand.*

`string.randomSnarkySlogan ()`

- *All of this has happened before and all of this will happen again.*

`string.randomSnarkySlogan ()`

- *It's even worse than it appears.*

## string.replaceAll
#### Syntax
string.replaceAll (s, searchFor, replaceWith)

#### Params
All three parameters are strings.

#### Returns
The result of replacing all occurrences of the second string with the third, in the first. 

#### Example
`string.replaceAll ("raise your hand if you're happy", " ", "---")`

- *raise---your---hand---if---you're---happy*

#### See also
string.multipleReplaceAll

## string.stripMarkup
#### Syntax
string.stripMarkup (string)

#### Params
A string that might contain HTML markup.

#### Returns
The string without the HTML markup.

#### Example
`string.stripMarkup ("Sometimes <b>you</b> don't <i>want</i> the <u>markup</u>.")`

- *Sometimes you don't want the markup.*

## string.trimLeading
#### Syntax
string.trimLeading (string, ch)

#### Params
First parameter is a string, the second parameter is a 1-character string. 

#### Returns
The string without instances of the character at the beginning of the string. 

#### Example
`string.trimLeading ("$$$$$We don't need the dollar signs at the beginning of this string.", "$")`

- *We don't need the dollar signs at the beginning of this string.*

#### See also
string.trimTrailing

## string.trimTrailing
#### Syntax
string.trimTrailing (string, ch)

#### Params
First parameter is a string, the second parameter is a 1-character string. 

#### Returns
The string without instances of the character at the end of the string. 

#### Example
`string.trimTrailing ("We don't need the question marks at the end of this string.?????", "?")`

- *We don't need the question marks at the end of this string.*

#### See also
string.trimLeading

## string.trimWhitespace
#### Syntax
string.trimWhitespace (string)

#### Params
A string that might have whitespace at the beginning and/or end.

#### Returns
The string without whitespace characters at the beginning and end. 

#### Notes
Use this verb to allow comparisons between names or identifiers that might have whitespace around them. 

#### Example
`string.trimWhitespace ("  All the whitespace is a problem.    ")`

- *All the whitespace is a problem.*

`string.trimWhitespace ("   Alice   ") == "Alice"`

- *true*

#### See also
string.trimLeading

## string.upper
#### Syntax
string.upper (s) returns string

#### What it does
Converts the string to upper case. 

#### Returns
The upper case version of the string.

#### Example
`dialog.alert (string.upper ("It's even worse than it appears."))`

#### See also
string.lower

