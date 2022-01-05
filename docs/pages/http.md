
# http verbs
## http.client
#### Syntax
http.client (options, boolean)

#### Parameters
options is a JavaScript structure that defines the request. 

boolean indicates whether it uses a proxy server (true) or the request is made from the browser (false).

#### Returns
What the HTTP request returns.

#### Breakage
There will be breakage. If you want to use this now, be prepared to adjust your code later, and participate in the <a href="https://github.com/scripting/drummerRFC/issues/6">thread</a> on the RFC site. As long as this alert is here, assume your apps that use this verb will break.

#### Notes
This is meant to be a complete HTTP client that's accessible to Drummer programmers.  

In its first release in November 2021, it is far from complete. But it gives you a lot more power than the simpler <a href="http://docserver.scripting.com/?verb=http.readUrl">http.readUrl</a>. Most important probably is that http.client can do requests other than GET.

The options struct is what you would pass to a <a href="https://www.w3schools.com/jquery/ajax_ajax.asp">jQuery AJAX call</a>. Here's a list of values it looks for: 

- *type -- the HTTP method, such as GET, POST, HEAD. *

- *url -- the address the request is directed to*

- *data -- the data that is passed in the body of the request. *

- *params -- a JavaScript object containing the search params for the request. *

There's a new endpoint in <a href="https://www.npmjs.com/package/daveappserver">daveappserver</a> that acts as the proxy server for this verb. It is deployed at drummer.scripting.com.

It's named after the Frontier verb <a href="http://docserver.userland.com/tcp/httpClient">tcp.httpClient</a>, which had a very long param list. In this version I opted for a struct instead. The intention is to do all that the Frontier verb does in this verb, in Drummer.

#### Examples
`http.client ({url: "http://drummer.scripting.com/now"}, true)`

- *Fri Nov 05 2021 13:05:15 GMT-0400 (Eastern Daylight Time)*

## http.readUrl
#### Syntax
http.readUrl (string, boolean)

#### Parameters
The string is the http address of the page you want to read. 

The boolean indicates whether you want to go through a proxy server for the request. It's optional, and it's default value is true.

#### Returns
It makes an HTTP request and returns to the caller what the request returns. 

#### Notes
If you want to access a resource on the local machine, or one that is inaccessible to drummer.scripting.com for some reason, you must not use the proxy server. 

If you can make the request without using the proxy server it will be faster, and conserves resources. 

#### Examples
`http.readUrl ("http://scripting.com/rss.xml", false).length`

- *73700*

`http.readUrl ("http://scripting.com/rss.xml", false).length`

- *73700*

`http.readUrl ("http://localhost:1410/now", false)`

- *Mon Aug 09 2021 16:35:28 GMT-0400 (Eastern Daylight Time)*

## http.derefUrl
#### Syntax
http.derefUrl (string)

#### Parameters
The string is a shortened http address. In other words and address that points to another address.  

#### Returns
If the address is not a shortened url, it returns the address itself. If it is, it returns the address that it points to.

#### Notes
9/17/2021 by DW -- it does not work in the case that the address is not a shortened url. Not sure why, no time to investigate at this time. 

#### Examples
`http.derefUrl ("https://tinyurl.com/yvfkvaps")`

- *http://scripting.com/*

`http.derefUrl ("https://scripting.com/")`

- *http://scripting.com/*

