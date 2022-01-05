
# date verbs
## date.convertToTimeZone
#### Syntax
date.convertToTimeZone (date, string)

#### Params
The date param is the date you want to convert to a different time zone. 

The string says how far from GMT and in what direction the other time zone is. For example -5 would be the string for the east coast of the United States, meaning five hours earlier than GMT. "0" is GMT. This param is optional, if not specified it is "0".

The string param does not have to represent a whole hour. For example Central Indian Time is "+5:30".

#### Returns
The date, expressed in the indicated time zone. 

If x is a date returned by this routine, you can use the JavaScript date functions to get components of a time, getHours, getMinutes, etc and they will return the correct values for the indicated time zone.

This is a core routine for building blogs that might be published by software running in a time zone different from the author of the blog. 

#### Examples
`date.convertToTimeZone (clock.now (), "+5:30").toLocaleString ()`

- *11/15/2021, 8:45:29 PM*

## date.dayGreaterThanOrEqual
#### Syntax
date.dayGreaterThanOrEqual (d1, d2)

#### Params
Both parameters are JavaScript date objects. 

#### Returns
true if the first date is on the same day as the second, or if the first date is later than the second. 

#### Notes
This verb is useful in determining which version of software you're running, if you have the publication date of a new version. Also useful to see if a timer has expired. 

#### Example
`date.dayGreaterThanOrEqual (clock.now (), "November 22, 2018")`

- *true*

## date.netStandardString
#### Syntax
date.netStandardString (date)

#### Params
date is a JavaScript date object.

#### Returns
A <a href="https://tools.ietf.org/html/rfc822">RFC 822</a> version of the date. 

#### Notes
This is the format that's required for RSS feeds, OPML files and mail protocols. 

It's a human and machine readable way of expressing of dates. 

#### Examples
`date.netStandardString (clock.now ())`

- *Sun, 14 Mar 2021 16:28:56 GMT*

`date.netStandardString ("12/5/97; 9:03:15 PM")`

- *Sat, 06 Dec 1997 04:03:15 GMT*

## date.sameDay
#### Syntax
date.sameDay (d1, d2)

#### Params
Both parameters are JavaScript date objects. 

#### Returns
true if the dates are on the same day, false otherwise.

#### Examples
`date.sameDay ("March 12, 2021", "February 12, 2021")`

- *false*

`date.sameDay ("March 12, 2021", "March 12, 2021")`

- *true*

## date.sameMonth
#### Syntax
date.sameMonth (d1, d2)

#### Params
Both parameters are JavaScript date objects. 

#### Returns
true if the dates are in the same month, false otherwise.

#### Examples
`date.sameMonth ("March 12, 2021", "February 12, 2021")`

- *false*

`date.sameMonth ("March 12, 2021", "March 30, 2021")`

- *true*

## date.secondsSince
#### Syntax
date.secondsSince (date)

#### Params
date is a JavaScript date object.

#### Returns
The number of seconds since the date. 

#### Notes
Useful when you want to know how long something took. 

#### Example
`date.secondsSince ("March 14, 2020")`

- *31580389.57*

## date.tomorrow
#### Syntax
date.tomorrow (date)

#### Params
date is a JavaScript date object.

#### Returns
The result of adding 24 hours from the date.

#### Example
`date.tomorrow (clock.now ())`

- *Mon Mar 15 2021 12:21:22 GMT-0400 (Eastern Daylight Time)*

## date.yesterday
#### Syntax
date.yesterday (date)

#### Params
date is a JavaScript date object.

#### Returns
The result of subtracting 24 hours from the date.

#### Example
`date.yesterday (clock.now ())`

- *Sat Mar 13 2021 11:21:02 GMT-0500 (Eastern Standard Time)*

