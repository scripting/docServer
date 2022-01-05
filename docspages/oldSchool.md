
# oldSchool verbs
## oldSchool.buildBlog
#### Syntax
oldSchool.buildBlog (boolean)

#### Params
The boolean, which is options, says whether or not you want all the data returned by Old School to be returned by this verb.

#### What it does
Calls drummercms.scripting.com telling it to build the user's Old School blog. 

#### Returns
The web address of the user's blog if the boolean is false, otherwise all the data Old School returns in the form of a JavaScript object.

#### Example
`oldSchool.buildBlog ()`

- *http://oldschool.scripting.com/cluelessnewbie/*

`oldSchool.buildBlog (true)`

<pre>{
    "baseUrl": "http://clueless.lucky.wtf/",
    "ctSecs": 1.199,
    "oldSchoolVersion": "0.7.9",
    "eventLog": {
        "pagesPublished": [
            "2021/10/30/174131.html",
            "2021/10/30/152252.html",
            "2021/10/30.html",
            "index.html",
            "homepage.html",
            "rss.json",
            "fb/rss.xml",
            "index.json"
            ],
        "pingsSent": [
            {
                "urlServer": "http://rpc.rsscloud.io:5337/ping",
                "urlFeed": "http://clueless.lucky.wtf/rss.json"
                },
            {
                "urlServer": "http://rpc.rsscloud.io:5337/ping",
                "urlFeed": "http://clueless.lucky.wtf/fb/rss.xml"
                }
            ]
        },
    "headLevelAtts": {
        "dateCreated": "Mon, 09 Aug 2021 16:53:40 GMT",
        "flPublic": "true",
        "urlPublic": "http://oldschool.scripting.com/cluelessnewbie/",
        "description": "Searching for clues, so far no luck.",
        "urlHeaderImage": "http://scripting.com/images/2020/10/05/sky.png",
        "copyright": "copyright 2021 Dave Winer",
        "titlex": "I don't have a clue",
        "title": "No clues",
        "urlGlossary": "http://scripting.com/publicfolder/misc/glossary.opml",
        "urlLinkblogJson": "http://radio3.io/users/davewiner/linkblog.json",
        "urlAboutOpml": "http://drummer.scripting.com/cluelessnewbie/about.opml",
        "urlBlogWebsite": "http://clueless.lucky.wtf/",
        "timeZoneOffset": "-5",
        "urlTemplate": "http://scripting.com/code/drummercms/templates/minimal/index.html",
        "ownerTwitterScreenName": "cluelessnewbie",
        "ownerName": "Clueless Newbie",
        "ownerId": "http://twitter.com/cluelessnewbie",
        "urlUpdateSocket": "ws://drummer.scripting.com:1232/",
        "dateModified": "Sun, 31 Oct 2021 15:07:36 GMT",
        "expansionState": "1,2,8,13,14",
        "lastCursor": "12",
        "generator": "opmlPackage v0.4.9"
        }
    }
</pre>
## oldSchool.getCursorLink
#### Syntax
oldSchool.getCursorLink ()

#### Params
None.

#### Returns
The URL of the rendering of the bar cursor headline, if it's part of a blog. 

The file must have a head-level <i>urlBlogWebsite</i> attribute, if not oldSchool.getCursorLink returns undefined. 

If the cursor points into a titled post, the URL points to the specific line in the post the cursor points to.

#### Note
This functionality is wired into the Eye icon.

#### Example
`oldSchool.getCursorLink ()`

- *http://clueless.lucky.wtf/2021/11/14.html#a232957*

