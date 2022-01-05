
# rss verbs
## rss.readFeed
#### Syntax
rss.readFeed (url)

#### Params
The url is the address of an RSS feed. 

#### Returns
A JavaScript object with the contents of the feed.

#### Note
It can handle most versions of RSS and Atom. 

#### Example
`rss.readFeed ("http://scripting.com/rss.xml")`

<pre>{
    "title": "Scripting News",
    "description": "It's even worse than it appears.",
    "pubDate": "2021-11-17T18:40:46.000Z",
    "link": "http://oldschool.scripting.com/davewiner/",
    "language": "en-us",
    "copyright": "copyright 1994-2021 Dave Winer.",
    "generator": "oldSchool v0.7.12",
    "cloud": {
        "domain": "rpc.rsscloud.io",
        "port": "5337",
        "path": "/pleaseNotify",
        "registerprocedure": "",
        "protocol": "http-post",
        "type": "rsscloud"
        },
    "items": [
        {
            "description": "New verb <a href="\" http:="" scripting.com="" images="" 2021="" 11="" 19="" rssreadfeedverb.png\""="">coming soon</a> in Drummer, rss.readFeed. It takes the URL of an RSS feed, and returns a JavaScript object containg the information in the feed in an easy-to-use format  (for programmers of course).",
            "pubDate": "2021-11-19T18:30:39.000Z",
            "link": "http://scripting.com/2021/11/19.html#a183039",
            "guid": "http://scripting.com/2021/11/19.html#a183039"
            },
        {
            "description": "I missed the renewal notices for the <a href="\" http:="" radio3.io="" \""="">Radio3.io</a> domain, so it's out now, but I expect it'll be back shortly. Sorry! :-(",
            "pubDate": "2021-11-19T17:38:44.000Z",
            "link": "http://scripting.com/2021/11/19.html#a173844",
            "guid": "http://scripting.com/2021/11/19.html#a173844"
            },
        {
            "description": "A <a href="\" https:="" github.com="" scripting="" drummerrfc="" issues="" 14#issuecomment-974157255\""="">discussion</a> about how Markdown should be processed for Drummer blogs. Basically, what role if any should indentation play, and how many newlines to generate for each line in the outline. My current position -- indentation should play no role in the Markdown we generate from the outline, it should be ignored. And we should generate one newline for every line in the outline. Note this is not how Drummer works now.",
            "pubDate": "2021-11-19T15:16:46.000Z",
            "link": "http://scripting.com/2021/11/19.html#a151646",
            "guid": "http://scripting.com/2021/11/19.html#a151646"
            },
        {
            "description": "I did a refresh on the <a href="\" http:="" this.how="" artshow="" \""="">ArtShow collection</a> yesterday, a few hundred more classic paintings. Free to download, or use via web.",
            "pubDate": "2021-11-18T12:14:39.000Z",
            "link": "http://scripting.com/2021/11/18.html#a121439",
            "guid": "http://scripting.com/2021/11/18.html#a121439"
            },
    }
</pre>
