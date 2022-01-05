
# daytona verbs
## daytona.ping
#### Syntax
daytona.ping (urlOutline, collection)

#### Params
The first param is the URL of a public outline containing the content you want to be included in your Daytona index.

The second param is optional and defaults to "drummeruser." For most users that's the only value that will work.

#### What it does
Queues an indexing of the outline. It will usually take a minute or more for Daytona to index the outline. 

#### Returns
A message saying it worked, if it did. 

#### Note
Simply updating the outline is enough to get it to be reindexed, so in most cases you will not have to do the ping from a script.

#### Example
`daytona.ping ("http://drummer.scripting.com/cluelessnewbie/blog.opml")`

- *all is good*

## daytona.query
#### Syntax
daytona.query (query, collection)

#### Params
The first param is a string that contains the string you want to search for.

The second param is the collection you want to search in. It can be scriptingnews, drummerdocs or drummeruser.  It's optional, if not present the default value is drummeruser.

#### Returns
The result of the query in a JavaScript object.

#### Example
`daytona.query ("BBC")`

<pre>[
    {
        "urloutline": "http://drummer.scripting.com/cluelessnewbie/blog.opml",
        "whencreated": "2021-12-05T17:11:16.000Z",
        "screenname": "cluelessnewbie",
        "title": "I'm doing another test!",
        "collection": "drummeruser",
        "jstruct": {
            "text": "I'm doing another test!",
            "created": "Sun, 05 Dec 2021 17:11:16 GMT",
            "type": "outline",
            "subs": [
                {
                    "text": "Like a rolling stone",
                    "created": "Sun, 05 Dec 2021 22:16:43 GMT"
                    },
                {
                    "text": "Like the FBI",
                    "created": "Sun, 05 Dec 2021 22:17:33 GMT"
                    },
                {
                    "text": "And the CIA",
                    "created": "Sun, 05 Dec 2021 22:17:36 GMT"
                    },
                {
                    "text": "BBC",
                    "created": "Sun, 05 Dec 2021 22:17:39 GMT"
                    },
                {
                    "text": "BB King",
                    "created": "Sun, 05 Dec 2021 22:17:40 GMT"
                    },
                {
                    "text": "And Doris Day",
                    "created": "Sun, 05 Dec 2021 22:17:44 GMT"
                    },
                {
                    "text": "Buzz be",
                    "created": "Sun, 05 Dec 2021 22:17:47 GMT"
                    },
                {
                    "text": "Buzz be",
                    "created": "Sun, 05 Dec 2021 22:17:51 GMT"
                    },
                {
                    "text": "That was can you digit by xxx",
                    "created": "Sun, 05 Dec 2021 22:17:53 GMT"
                    },
                {
                    "text": "Now we'd like to sing all the angels come",
                    "created": "Sun, 05 Dec 2021 22:18:01 GMT"
                    }
                ]
            }
        }
    ]
</pre>
## daytona.resetMyIndex
#### Syntax
daytona.resetMyIndex (collection)

#### Param
The param is the collection you want to search in. It can be scriptingnews, drummerdocs or drummeruser. It's optional, if not present the default value is drummeruser. For most users, the only value that will work is drummeruser. 

#### Returns
true

#### What it does
Deletes all index entries for the indicated collection. You're basically saying you want to start over with the index. Then you can either make changes to the outlines you want to include in the index to get them re-indexed, or use the daytona.ping verb. 

#### Note
daytona.removeOutlineRefs is more selective, it only removes references to one outline, not all of them. 

#### Example
`daytona.resetMyIndex ()`

- *true*

## daytona.removeOutlineRefs
#### Syntax
daytona.removeOutlineRefs (urlOutline, collection)

#### Params
The first param is the address of the public outline that you want removed from your Daytona index.

The second param is the collection you want it removed from. It can be scriptingnews, drummerdocs or drummeruser.  It's optional, if not present the default value is drummeruser.

#### What it does
Deletes all index entries for the indicated outline, so you can start over with the outline. We will do this with our blog.opml files when we archive the outline, removing all index references for the blog.opml file. If you don't, there will be double-references for posts that were archived, and even worse the ones that come from blog.opml won't be there if you click through the Eye icon to see the context. 

#### Returns
true

#### Example
`daytona.removeOutlineRefs ("http://drummer.scripting.com/cluelessnewbie/blog.opml")`

- *true*

