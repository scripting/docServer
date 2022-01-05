
# twitter verbs
## twitter.addGroupToList
#### Syntax
twitter.addGroupToList (string, string)

#### Params
The first string is a numeric identifier for a Twitter list. The second string is a comma-separated list of names of Twitter users who you want to add as members of the list. 

#### Returns
A JavaScript object with information about the list. 

#### Notes
Lists can't have more than 5000 members, and you are limited to adding up to 100 members to a list at a time with this verb.

#### Example
`twitter.addGroupToList ("1390712688108613633", "wmf, taylorlorenz, bump")`

<pre>{
    "name": "Useless list",
    "link": "https://twitter.com/davewiner/lists/useless-list-90313",
    "description": "Welcome!",
    "id": "1390712688108613633",
    "screenname": "davewiner",
    "whenCreated": "Fri May 07 16:58:37 +0000 2021",
    "ctMembers": 10,
    "flPrivate": true
    }
</pre>
## twitter.addMemberToList
#### Syntax
twitter.addMemberToList (string, string)

#### Params
The first string is a numeric identifier for a Twitter list. The second string is the name of a Twitter user who you want to add as a member of the list. 

#### Returns
A JavaScript object with information about the list. In the screenname property it returns the name of the creator of the list, not the user who was added to the list.  

#### Example
`twitter.addMemberToList ("1390712688108613633", "bullmancuso")`

<pre>{
    "name": "Useless list",
    "link": "https://twitter.com/davewiner/lists/useless-list-90313",
    "description": "Welcome!",
    "id": "1390712688108613633",
    "screenname": "davewiner",
    "whenCreated": "Fri May 07 16:58:37 +0000 2021",
    "ctMembers": 8,
    "flPrivate": true
    }
</pre>
## twitter.getFollowed
#### Syntax
twitter.getFollowed (string)

#### Params
The string is a screenname for a Twitter user, such as "jack" or "bullmancuso".

#### Returns
An array with the accounts the indicated user follows. 

#### Notes
It returns all the accounts they follow, so be careful, you can get rate-limited if you use this verb a lot, or use it to download lots of followers.

It returns the user id's of the accounts, you can turn these into screennames with twitter.getScreenname.

#### Example
`twitter.getFollowed ("bullmancuso").length `

- *23*

`twitter.getScreenname (twitter.getFollowed ("bullmancuso") [8])`

- *paolovalde*

`twitter.getFollowed ("bullmancuso")`

<pre>[
    6088472,
    106480764,
    37570179,
    19890708,
    37759047,
    1424001,
    13348,
    146733,
    13485,
    174853,
    2020351,
    11435642,
    18431396,
    6151352,
    3713811,
    17629947,
    17243913,
    18106790,
    6210,
    3839,
    17150022,
    18119798,
    10984852
    ]
</pre>
## twitter.getFollowers
#### Syntax
twitter.getFollowers (string)

#### Params
The string is a screenname for a Twitter user, such as "jack" or "bullmancuso".

#### Returns
An array with the followers of the indicated user. 

#### Notes
It returns all the followers, so be careful, you can get rate-limited if you use this verb a lot, or use it to download lots of followers.

#### Example
`twitter.getFollowers ("bullmancuso").length `

- *88*

`twitter.getScreenname (twitter.getFollowers ("bullmancuso") [14])`

- *torentals*

## twitter.getHomeTimeline
#### Syntax
twitter.getHomeTimeline ()

#### Params
None.

#### Returns
An array object with the most recent tweets in the user's home timeline. 

The home timeline is the list of tweets that appear on the Home page in the Twitter website.

#### Notes
In the example, we get a value out of the timeline, displaying the whole array of tweets would take a lot of space. 

It will return at most 200 tweets.

#### Example
`twitter.getHomeTimeline ().length `

- *198*

`twitter.getHomeTimeline () [0].id`

- *1398302422120996867*

`twitter.getHomeTimeline () [0]`

<pre>{
    "text": "RT @SwiftOnSecurity: Go apply for that job you're worried about being qualified for",
    "id": "1398302469147475971",
    "screenname": "Chronotope",
    "link": "https://twitter.com/Chronotope/status/1398302469147475971",
    "when": "Fri, 28 May 2021 15:37:42 GMT"
    }
</pre>
## twitter.getListInfo
#### Syntax
twitter.getListInfo (string)

#### Params
The string is a numeric identifier for a Twitter list.

#### Returns
A JavaScript object with information about the indicated list. 

#### Example
`twitter.getListInfo ("2091338")`

<pre>{
    "name": "Twitter's SUL",
    "link": "https://twitter.com/davewiner/lists/twitter-s-sul",
    "description": "The people and organizations whose follower counts are inflated by Twitter.",
    "id": "2091338",
    "screenname": "davewiner",
    "whenCreated": "Wed Nov 04 14:19:47 +0000 2009",
    "ctMembers": 456,
    "flPrivate": false
    }
</pre>
## twitter.getListMembers
#### Syntax
twitter.getListMembers (string)

#### Params
The string is a numeric identifier for a Twitter list.

#### Returns
An array with the names of Twitter users who are included in the list.  

#### Note
You can get the numeric identifier for a list using twitter.getUserLists.

#### Example
`twitter.getListMembers ("1958217")`

<pre>[
    "artistduchamp",
    "radioopensource",
    "ugasser",
    "charlienesson",
    "jpalfrey",
    "BKCHarvard",
    "lessig",
    "cbracy",
    "dangillmor",
    "dsearls",
    "dweinberger",
    "EthanZ",
    "rmack",
    "davewiner"
    ]
</pre>
## twitter.getMentionsTimeline
#### Syntax
twitter.getMentionsTimeline ()

#### Params
None.

#### Returns
An array with the most recent tweets that mention the logged-in user. 

#### Notes
twitter.getMentionsTimeline will return at most 200 tweets.

#### Examples
`twitter.getMentionsTimeline () [3] `

<pre>{
    "text": "@davewiner @datasniff Here's the #SPARQL Query behind the #PivotViewer page.\n\nhttps://t.co/CZYqIKu5ej\n\n@datasniff exposing conventional SPARQL Query #URL, based on the same query definition.\n\nhttps://t.co/enmHIVdY2A\n\n#Art #KnowledgeGraph #LinkedData #OpenWeb #VirtuosoRDBMS #JSON #StructuredData https://t.co/yUuVZ0KSIF",
    "id": "1398043356505247751",
    "screenname": "kidehen",
    "link": "https://twitter.com/kidehen/status/1398043356505247751",
    "when": "Thu, 27 May 2021 22:28:05 GMT",
    "idParent": "1398030640742813697"
    }
</pre>
`twitter.getMentionsTimeline () [1].text `

- *@davewiner I mean... Honey Hut is really good.*

`twitter.getMentionsTimeline ().length `

- *156*

## twitter.getMyScreenname
#### Syntax
twitter.getMyScreenname ()

#### Params
None.

#### Returns
The Twitter screenname for the current logged-in user.

#### Examples
`twitter.getMyScreenname ()`

- *cluelessnewbie*

## twitter.getRawUserInfo
#### Syntax
twitter.getRawUserInfo (string)

#### Param
The string is the screenname of the user you want to get information about.

#### Returns
An object containing information about the user.

The object returned by this verb is exactly what Twitter returns when asking for information about a user, hence the "raw" name. It's a much more complex structure than that which is returned by twitter.getUserInfo. 

#### Example
`twitter.getRawUserInfo ("bullmancuso")`

<pre>{
    "id": 15252142,
    "id_str": "15252142",
    "name": "Bull Mancuso",
    "screen_name": "bullmancuso",
    "location": "None a you business",
    "profile_location": null,
    "description": "This aggression will not stand",
    "url": null,
    "entities": {
        "description": {
            "urls": [ ]
            }
        },
    "protected": false,
    "followers_count": 87,
    "friends_count": 23,
    "listed_count": 14,
    "created_at": "Fri Jun 27 05:31:20 +0000 2008",
    "favourites_count": 4,
    "utc_offset": null,
    "time_zone": null,
    "geo_enabled": true,
    "verified": false,
    "statuses_count": 43224,
    "lang": null,
    "status": {
        "created_at": "Mon Jul 26 22:17:02 +0000 2021",
        "id": 1419783847495995400,
        "id_str": "1419783847495995397",
        "text": "Do you remember when you joined Twitter? I do! #MyTwitterAnniversary https://t.co/VACAmE3kt5",
        "truncated": false,
        "entities": {
            "hashtags": [
                {
                    "text": "MyTwitterAnniversary",
                    "indices": [
                        47,
                        68
                        ]
                    }
                ],
            "symbols": [ ],
            "user_mentions": [ ],
            "urls": [ ],
            "media": [
                {
                    "id": 1419783826319061000,
                    "id_str": "1419783826319060992",
                    "indices": [
                        69,
                        92
                        ],
                    "media_url": "http://pbs.twimg.com/media/E7QV3iGXsAArKwB.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/E7QV3iGXsAArKwB.jpg",
                    "url": "https://t.co/VACAmE3kt5",
                    "display_url": "pic.twitter.com/VACAmE3kt5",
                    "expanded_url": "https://twitter.com/bullmancuso/status/1419783847495995397/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                            },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                            },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                            },
                        "large": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                            }
                        }
                    }
                ]
            },
        "extended_entities": {
            "media": [
                {
                    "id": 1419783826319061000,
                    "id_str": "1419783826319060992",
                    "indices": [
                        69,
                        92
                        ],
                    "media_url": "http://pbs.twimg.com/media/E7QV3iGXsAArKwB.jpg",
                    "media_url_https": "https://pbs.twimg.com/media/E7QV3iGXsAArKwB.jpg",
                    "url": "https://t.co/VACAmE3kt5",
                    "display_url": "pic.twitter.com/VACAmE3kt5",
                    "expanded_url": "https://twitter.com/bullmancuso/status/1419783847495995397/photo/1",
                    "type": "photo",
                    "sizes": {
                        "thumb": {
                            "w": 150,
                            "h": 150,
                            "resize": "crop"
                            },
                        "small": {
                            "w": 680,
                            "h": 383,
                            "resize": "fit"
                            },
                        "medium": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                            },
                        "large": {
                            "w": 1200,
                            "h": 675,
                            "resize": "fit"
                            }
                        }
                    }
                ]
            },
        "source": "<a href="\" https:="" mobile.twitter.com\""="" rel="\" nofollow\""="">Twitter Web App</a>",
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "is_quote_status": false,
        "retweet_count": 0,
        "favorite_count": 0,
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
        },
    "contributors_enabled": false,
    "is_translator": false,
    "is_translation_enabled": false,
    "profile_background_color": "9AE4E8",
    "profile_background_image_url": "http://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_image_url_https": "https://abs.twimg.com/images/themes/theme1/bg.png",
    "profile_background_tile": true,
    "profile_image_url": "http://pbs.twimg.com/profile_images/55963952/Godfather_normal.jpg",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/55963952/Godfather_normal.jpg",
    "profile_link_color": "0000FF",
    "profile_sidebar_border_color": "87BC44",
    "profile_sidebar_fill_color": "E0FF92",
    "profile_text_color": "000000",
    "profile_use_background_image": true,
    "has_extended_profile": false,
    "default_profile": false,
    "default_profile_image": false,
    "following": false,
    "follow_request_sent": false,
    "notifications": false,
    "translator_type": "none",
    "withheld_in_countries": [ ]
    }
</pre>
## twitter.getScreenname
#### Syntax
twitter.getScreenname (string)

#### Param
string is the Twitter user id of the user whose screenname you want to get.

#### Returns
The Twitter screenname for the indicated user.

#### Notes
A Twitter user id looks like a number, but it should be treated as a string. 

This verb is provided because the other Twitter verbs deal in screennames, but some of them return user ids.

#### Examples
`twitter.getScreenname ("12")`

- *jack*

`twitter.getScreenname ("15252142")`

- *bullmancuso*

`twitter.getScreenname ("3839")`

- *davewiner*

## twitter.getThread
#### Syntax
twitter.getThread (string)

#### Param
The string is the Twitter-issued numeric identifier for the top tweet in the thread.

#### Returns
An object containing info about the author, and an array with the tweets in the thread.

#### Errors
It's an error if the id is not a valid Twitter-issued identifier.

#### Notes
This verb only works for recent threads. In building the thread, we get the last 24 hours of the user's tweets. Any tweets that are in the thread are included. If you gather the thread more than 24 hours after the thread was complete, you won't get any of the original tweets. 

#### Examples
`twitter.getThread ("1371210116473761792").tweets [0]`

<pre>{
    "text": "What is ThreadViewer? \n\nIt's a way to view Twitter threads outside of Twitter.",
    "id": "1371210116473761792",
    "screenname": "davewiner",
    "link": "https://twitter.com/davewiner/status/1371210116473761792",
    "when": "Sun, 14 Mar 2021 21:22:22 GMT"
    }
</pre>
`twitter.getThread ("1371210116473761792").author`

<pre>{
    "screenname": "davewiner",
    "name": "Dave Winer",
    "id": "3839",
    "description": "On the net since mid-70s. Started two Silicon Valley companies. Wrote for Wired. Fellow at Harvard, NYU. Founder of podcasting, blogging, RSS. Open web.",
    "url": "http://scripting.com/"
    }
</pre>
## twitter.getTweet
#### Syntax
twitter.getTweet (string)

#### Param
The string is the Twitter-issued numeric identifier for the tweet. 

#### Returns
A JavaScript object containing information about the tweet.

#### Errors
It's an error if the id is not a valid Twitter-issued identifier.

#### Examples
`twitter.getTweet ("1391073066566959105").text`

- *This is a test. Please ignore. ;-)*

`twitter.getTweet ("1391073066566959105").when`

- *Sat, 08 May 2021 16:50:38 GMT*

`twitter.getTweet ("1391073066566959105")`

<pre>{
    "text": "This is a test. Please ignore. ;-)",
    "id": "1391073066566959105",
    "screenname": "davewiner",
    "link": "https://twitter.com/davewiner/status/1391073066566959105",
    "when": "Sat, 08 May 2021 16:50:38 GMT"
    }
</pre>
## twitter.getUserLists
#### Syntax
twitter.getUserLists (string)

#### Params
The string is a screenname for a Twitter user, such as "jack" or "bullmancuso".

#### Returns
An array with information about each of the lists the user is subscribed to. 

#### Examples
`twitter.getUserLists ("davewiner")`

<pre>[
    {
        "name": "Berkman",
        "link": "https://twitter.com/erhardt/lists/berkman",
        "description": "",
        "id": "2860150",
        "screenname": "erhardt",
        "whenCreated": "Thu Nov 12 03:57:46 +0000 2009",
        "ctMembers": 29,
        "flPrivate": false
        },
    {
        "name": "Apple WWDC",
        "link": "https://twitter.com/bluechoochoo/lists/apple-wwdc",
        "description": "attendees, devs, journalists, designers, analysts, publishers, ad people, and their admirers.",
        "id": "725159101458685953",
        "screenname": "bluechoochoo",
        "whenCreated": "Wed Apr 27 03:06:17 +0000 2016",
        "ctMembers": 158,
        "flPrivate": false
        },
    {
        "name": "COVID",
        "link": "https://twitter.com/jeffjarvis/lists/covid",
        "description": "Experts on the disease: epidemiologists, virologists, physicians, researchers--science.",
        "id": "1237834151694303234",
        "screenname": "jeffjarvis",
        "whenCreated": "Wed Mar 11 20:13:54 +0000 2020",
        "ctMembers": 639,
        "flPrivate": false
        },
    {
        "name": "top people in tech",
        "link": "https://twitter.com/levnaginsky/lists/top-people-in-tech",
        "description": "",
        "id": "93056212",
        "screenname": "levnaginsky",
        "whenCreated": "Fri Jul 19 16:49:18 +0000 2013",
        "ctMembers": 100,
        "flPrivate": false
        },
    {
        "name": "Invite2HypotheticalConf",
        "link": "https://twitter.com/arikia/lists/invite2hypotheticalconf",
        "description": "If I was going to organize a conference, this is who I would invite.",
        "id": "60809764",
        "screenname": "arikia",
        "whenCreated": "Sun Dec 11 19:02:10 +0000 2011",
        "ctMembers": 238,
        "flPrivate": false
        },
    {
        "name": "NewsFoo",
        "link": "https://twitter.com/cyberjournalist/lists/newsfoo",
        "description": "",
        "id": "59955638",
        "screenname": "cyberjournalist",
        "whenCreated": "Tue Nov 29 18:41:40 +0000 2011",
        "ctMembers": 145,
        "flPrivate": false
        },
    {
        "name": "NYC Events",
        "link": "https://twitter.com/matylda/lists/nyc-events",
        "description": "Events and deals around the city",
        "id": "7628122",
        "screenname": "matylda",
        "whenCreated": "Fri Feb 19 19:15:58 +0000 2010",
        "ctMembers": 192,
        "flPrivate": false
        },
    {
        "name": "Tech Journalists",
        "link": "https://twitter.com/HuffPostTech/lists/tech-journalists",
        "description": "",
        "id": "2144700",
        "screenname": "HuffPostTech",
        "whenCreated": "Wed Nov 04 21:47:00 +0000 2009",
        "ctMembers": 80,
        "flPrivate": false
        },
    {
        "name": "Geeks",
        "link": "https://twitter.com/leolaporte/lists/geeks",
        "description": "",
        "id": "26811",
        "screenname": "leolaporte",
        "whenCreated": "Sat Oct 17 12:25:34 +0000 2009",
        "ctMembers": 72,
        "flPrivate": false
        },
    {
        "name": "Best mindcasters I know",
        "link": "https://twitter.com/jayrosen_nyu/lists/best-mindcasters-i-know",
        "description": "Mindcasters send around lots of links and connected thoughts on Twitter",
        "id": "1664",
        "screenname": "jayrosen_nyu",
        "whenCreated": "Sun Oct 11 22:13:52 +0000 2009",
        "ctMembers": 116,
        "flPrivate": false
        },
    {
        "name": "Useless list",
        "link": "https://twitter.com/davewiner/lists/useless-list-90313",
        "description": "Welcome!",
        "id": "1390712688108613633",
        "screenname": "davewiner",
        "whenCreated": "Fri May 07 16:58:37 +0000 2021",
        "ctMembers": 7,
        "flPrivate": true
        },
    {
        "name": "\"Art Show\" feeds",
        "link": "https://twitter.com/davewiner/lists/art-show-feeds-92855",
        "description": "The Twitter feeds that flow into artshow.scripting.com.",
        "id": "1389951899424677888",
        "screenname": "davewiner",
        "whenCreated": "Wed May 05 14:35:31 +0000 2021",
        "ctMembers": 43,
        "flPrivate": false
        },
    {
        "name": "Droid Users",
        "link": "https://twitter.com/davewiner/lists/droid-users",
        "description": "People who use Droids, which are cell phones made by Motorola, Google and Verizon.",
        "id": "2497185",
        "screenname": "davewiner",
        "whenCreated": "Sat Nov 07 23:51:55 +0000 2009",
        "ctMembers": 20,
        "flPrivate": false
        },
    {
        "name": "Twitter's SUL",
        "link": "https://twitter.com/davewiner/lists/twitter-s-sul",
        "description": "The people and organizations whose follower counts are inflated by Twitter.",
        "id": "2091338",
        "screenname": "davewiner",
        "whenCreated": "Wed Nov 04 14:19:47 +0000 2009",
        "ctMembers": 456,
        "flPrivate": false
        },
    {
        "name": "Berkman",
        "link": "https://twitter.com/davewiner/lists/berkman",
        "description": "",
        "id": "1958217",
        "screenname": "davewiner",
        "whenCreated": "Tue Nov 03 15:53:17 +0000 2009",
        "ctMembers": 14,
        "flPrivate": false
        },
    {
        "name": "curators",
        "link": "https://twitter.com/davewiner/lists/curators",
        "description": "",
        "id": "1552675",
        "screenname": "davewiner",
        "whenCreated": "Sun Nov 01 02:21:53 +0000 2009",
        "ctMembers": 2,
        "flPrivate": false
        },
    {
        "name": "entourage",
        "link": "https://twitter.com/davewiner/lists/entourage",
        "description": "",
        "id": "640785",
        "screenname": "davewiner",
        "whenCreated": "Thu Oct 29 20:35:13 +0000 2009",
        "ctMembers": 27,
        "flPrivate": false
        },
    {
        "name": "Spammers",
        "link": "https://twitter.com/davewiner/lists/spammers",
        "description": "",
        "id": "384966",
        "screenname": "davewiner",
        "whenCreated": "Thu Oct 29 04:11:28 +0000 2009",
        "ctMembers": 2,
        "flPrivate": false
        },
    {
        "name": "Yankees fans",
        "link": "https://twitter.com/davewiner/lists/yankees-fans",
        "description": "",
        "id": "38051",
        "screenname": "davewiner",
        "whenCreated": "Thu Oct 22 06:09:17 +0000 2009",
        "ctMembers": 23,
        "flPrivate": false
        },
    {
        "name": "Berkeley",
        "link": "https://twitter.com/davewiner/lists/berkeley",
        "description": "",
        "id": "2296",
        "screenname": "davewiner",
        "whenCreated": "Thu Oct 15 22:34:23 +0000 2009",
        "ctMembers": 163,
        "flPrivate": false
        }
    ]
</pre>
## twitter.getUserInfo
#### Syntax
twitter.getUserInfo (string)

#### Param
The string is the screenname of the user you want to get information about.

#### Note
This verb was updated on 9/9/2021, to add a new property to the object returned, urlProfileImage.

#### Returns
An object containing information about the user.

#### Examples
`twitter.getUserInfo ("bullmancuso")`

<pre>{
    "screenname": "bullmancuso",
    "name": "Bull Mancuso",
    "id": "15252142",
    "description": "This aggression will not stand",
    "location": "None a you business",
    "whenCreated": "Fri, 27 Jun 2008 05:31:20 GMT",
    "ctFollowers": 87,
    "ctFollowed": 23,
    "ctFavorites": 4,
    "ctTweets": 43224,
    "urlProfileImage": "http://pbs.twimg.com/profile_images/55963952/Godfather_normal.jpg"
    }
</pre>
`twitter.getUserInfo ("bullmancuso").description`

- *This aggression will not stand*

`twitter.getUserInfo ("bullmancuso").location`

- *None a you business*

## twitter.getUserTimeline
#### Syntax
twitter.getUserTimeline (string, boolean, string)

#### Params
The string is a screenname for a Twitter user, such as "jack" or "bullmancuso".

The boolean determines if you want to include replies in the timeline. It's optional, if not specified it defaults to false.

The second string is the id of the last message you've read, so you can do a sequence of calls to read all the tweets, over time. 

#### Returns
An array with the most recent tweets from the indicated user. 

#### Notes
It will return at most 200 tweets.

#### Examples
`twitter.getUserTimeline ("jack").length `

- *144*

`twitter.getUserTimeline ("davewiner", false) [7]`

<pre>{
    "text": "President Biden came for the ice cream. https://t.co/SAi5QF5SVW",
    "id": "1398087175984517128",
    "screenname": "davewiner",
    "link": "https://twitter.com/davewiner/status/1398087175984517128",
    "when": "Fri, 28 May 2021 01:22:12 GMT"
    }
</pre>
`twitter.getUserTimeline ("davewiner", false, "1400642346245578762")`

<pre>[
    {
        "text": "Why does every efficiency in the USPS result in breaking users? Calling attention to the fact that the management isn't trying to provide a reliable service. I suppose the silver lining is it means we'll migrate away from the post office more. Burn less carbon.",
        "id": "1400843168334163968",
        "screenname": "davewiner",
        "link": "https://twitter.com/davewiner/status/1400843168334163968",
        "when": "Fri, 04 Jun 2021 15:53:32 GMT"
        },
    {
        "text": "This is another test. Please ignore.",
        "id": "1400836851339042819",
        "screenname": "davewiner",
        "link": "https://twitter.com/davewiner/status/1400836851339042819",
        "when": "Fri, 04 Jun 2021 15:28:26 GMT"
        },
    {
        "text": "We may fail to vaccinate our way out of this epidemic by this summer and soon face the specter of emerging variants of concern. https://t.co/QX1zcFonHw",
        "id": "1400766477142315009",
        "screenname": "davewiner",
        "link": "https://twitter.com/davewiner/status/1400766477142315009",
        "when": "Fri, 04 Jun 2021 10:48:47 GMT"
        },
    {
        "text": "Publishing���s cancel culture debate boils over. https://t.co/almaSV0QNq",
        "id": "1400744952364216323",
        "screenname": "davewiner",
        "link": "https://twitter.com/davewiner/status/1400744952364216323",
        "when": "Fri, 04 Jun 2021 09:23:15 GMT"
        },
    {
        "text": "Love this resort in Shandaken, currently owned by Kate Pierson of the B-52s. https://t.co/BT9OzPtnzo?",
        "id": "1400649875012870144",
        "screenname": "davewiner",
        "link": "https://twitter.com/davewiner/status/1400649875012870144",
        "when": "Fri, 04 Jun 2021 03:05:27 GMT"
        },
    {
        "text": "Dear @jack when you clean up twitter news, no more hidden destinations, esp w all the nasty bits that hide behind https://t.co/mFftJ4i5Ix. Always surprised where they take me. https://t.co/C2Izy6xtkd",
        "id": "1400648890156818432",
        "screenname": "davewiner",
        "link": "https://twitter.com/davewiner/status/1400648890156818432",
        "when": "Fri, 04 Jun 2021 03:01:32 GMT"
        },
    {
        "text": "This must be Kate McKinnon. https://t.co/LMJqq3vWMp",
        "id": "1400645543500599296",
        "screenname": "davewiner",
        "link": "https://twitter.com/davewiner/status/1400645543500599296",
        "when": "Fri, 04 Jun 2021 02:48:14 GMT"
        },
    {
        "text": "Rudy Giuliani has been sleeping on MyPillows for \"some time.\" Oy! https://t.co/LMJqq3vWMp",
        "id": "1400645123990511624",
        "screenname": "davewiner",
        "link": "https://twitter.com/davewiner/status/1400645123990511624",
        "when": "Fri, 04 Jun 2021 02:46:34 GMT"
        },
    {
        "text": "RT @TommyBeer: Dame deserves to sip champagne with the Larry O���B trophy at least once in his life. \n\nDude has put in the work - sucks he ha���",
        "id": "1400643814344347651",
        "screenname": "davewiner",
        "link": "https://twitter.com/davewiner/status/1400643814344347651",
        "when": "Fri, 04 Jun 2021 02:41:22 GMT"
        },
    {
        "text": "This is a test. Please ignore. :-)",
        "id": "1400643351523758083",
        "screenname": "davewiner",
        "link": "https://twitter.com/davewiner/status/1400643351523758083",
        "when": "Fri, 04 Jun 2021 02:39:32 GMT"
        }
    ]
</pre>
## twitter.newPost
#### Syntax
twitter.newPost (string, id)

#### Params
The string is the body of the tweet to be sent. It is limited to 280 characters. 

Optional: id is the id of the tweet that it's in reply to, if it is a reply. If it is not a reply leave it undefined or 0.

#### Returns
An object with info about the new tweet.

#### Errors
It's an error if the body is longer than 280 characters, or if the id is of a tweet that doesn't exist. 

#### Examples
`twitter.newPost ("Yet another ridiculous test tweet.")`

<pre>{
    "text": "Yet another ridiculous test tweet.",
    "id": "1398303907613450240",
    "screenname": "davewiner",
    "link": "https://twitter.com/davewiner/status/1398303907613450240",
    "when": "Fri, 28 May 2021 15:43:25 GMT"
    }
</pre>
`twitter.newPost (string.randomSnarkySlogan ())`

<pre>{
    "text": "Slow down to hurry up.",
    "id": "1398303979784781830",
    "screenname": "davewiner",
    "link": "https://twitter.com/davewiner/status/1398303979784781830",
    "when": "Fri, 28 May 2021 15:43:42 GMT"
    }
</pre>
`twitter.newPost ("Another snarky slogan: " + string.randomSnarkySlogan (), "1398303979784781830")`

<pre>{
    "text": "Another snarky slogan: There's nothing more permanent than a temporary hack.",
    "id": "1398304182332018689",
    "screenname": "davewiner",
    "link": "https://twitter.com/davewiner/status/1398304182332018689",
    "when": "Fri, 28 May 2021 15:44:30 GMT",
    "idParent": "1398303979784781830"
    }
</pre>
## twitter.removeGroupFromList
#### Syntax
twitter.removeGroupFromList (string, string)

#### Params
The first string is a numeric identifier for a Twitter list. The second string is a comma-separated list of names of Twitter users who you want to add as members of the list. 

#### Returns
A JavaScript object with information about the list. 

#### Notes
When I tested it, I could not get it to work. 

- *5/7/2021 by DW*

#### Example
`twitter.removeGroupFromList ("1390712688108613633", "bump, jason, benyt")`

<pre>{
    "name": "Useless list",
    "link": "https://twitter.com/davewiner/lists/useless-list-90313",
    "description": "Welcome!",
    "id": "1390712688108613633",
    "screenname": "davewiner",
    "whenCreated": "Fri May 07 16:58:37 +0000 2021",
    "ctMembers": 9,
    "flPrivate": true
    }
</pre>
## twitter.removeUserFromList
#### Syntax
twitter.removeUserFromList (string, string)

#### Params
The first string is a numeric identifier of a Twitter list. The second string is the name of a Twitter user who you want to remove as a member of the list. 

#### Returns
A JavaScript object with information about the list. 

#### Example
`twitter.removeUserFromList ("1390712688108613633", "bump")`

<pre>{
    "name": "Useless list",
    "link": "https://twitter.com/davewiner/lists/useless-list-90313",
    "description": "Welcome!",
    "id": "1390712688108613633",
    "screenname": "davewiner",
    "whenCreated": "Fri May 07 16:58:37 +0000 2021",
    "ctMembers": 6,
    "flPrivate": true
    }
</pre>
## twitter.updateListInfo
#### Syntax
twitter.updateListInfo (string, object)

#### Params
The string is a numeric identifier for a Twitter list.

The object is a JavaScript object with optional values for name, description and flPrivate. 

#### Returns
A JavaScript object with information about the list. 

#### Note
All three values are optional, so you can change the name, for example, without changing the description or whether or not it's private. 

#### Example
`twitter.updateListInfo ("1390712688108613633", {name: "Useless list", description: "Welcome!", flPrivate: true}) `

<pre>{
    "name": "Useless list",
    "link": "https://twitter.com/davewiner/lists/useless-list-90313",
    "description": "Welcome!",
    "id": "1390712688108613633",
    "screenname": "davewiner",
    "whenCreated": "Mon Jan 19 18:06:46 +0000 1970",
    "ctMembers": 7,
    "flPrivate": true
    }
</pre>
