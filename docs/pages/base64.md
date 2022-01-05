
# base64 verbs
## base64.encode
#### Syntax
base64.encode (string)

#### Params
The string is some text or data that you want to encode using the <a href="https://en.wikipedia.org/wiki/Base64">base64</a> algorithm.

#### Returns
The base64 encoding of the string.

#### Example
`base64.encode ("Hello Dolly")`

- *SGVsbG8gRG9sbHk=*

## base64.decode
#### Syntax
base64.decode (string)

#### Params
The string is <a href="https://en.wikipedia.org/wiki/Base64">base64</a>-encoded text.

#### Returns
The string that's decoded from the base64 encoded text.

#### Example
`base64.decode ("SGVsbG8gRG9sbHk=")`

- *Hello Dolly*

`base64.decode (base64.encode ("It's a wonderful day in the neighborhood."))`

- *It's a wonderful day in the neighborhood.*

