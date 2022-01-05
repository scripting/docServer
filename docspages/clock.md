
# clock verbs
## clock.now
#### Syntax
clock.now ()

#### Returns
A JavaScript date object with the current date and time. 

#### Example
`clock.now ()`

- *Tue Mar 16 2021 14:31:39 GMT-0400 (Eastern Daylight Time)*

## clock.waitSeconds
#### Syntax
clock.waitSeconds (number)

#### Parameters
The number is the number of seconds it waits. It doesn't have to be a whole number (integer). 

#### Returns
The number of seconds it waited. 

#### Notes
The waiting is done via a JavaScript <a href="https://www.w3schools.com/jsref/met_win_settimeout.asp">setTimeout</a> call. 

#### Examples
`clock.waitSeconds (1)`

- *1.005*

`clock.waitSeconds (1.3)`

- *1.3*

`clock.waitSeconds (random (1, 3))`

- *2.005*

