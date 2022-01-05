
# github verbs
## github.connectViaOauth
#### Syntax
github.connectViaOauth ()

#### Params
None

#### What it does
Initiates an Oauth login with GitHub. 

When it's done, you will have an "access token" in local storage on the computer you're using.

The access token allows you to use the other GitHub verbs. 

#### Note
This verb does not work in Electric Drummer yet. But you can use the other GitHub verbs if you copy the access token from web Drummer into localStorage on the Electric Drummer. Here's a <a href="http://scripting.com/drummer/blog/2021/11/11/204101.html?title=githubScriptingInElectricDrummer">blog post</a> that explains what to do step by step.

#### Returns
true

#### Example
`github.connectViaOauth ()`

- *true*

`localStorage.githubAccessToken //this is where you access token is stored`

- *1234567890123456789012345678901234567890*

## github.disconnect
#### Syntax
github.disconnect ()

#### Params
None

#### What it does
Removes the local access token, effectively logging you off GitHub. 

The GitHub verbs will not work on this machine after calling github.disconnect.

#### Returns
true

#### Example
`github.disconnect ()`

- *true*

## github.download
#### Syntax
github.download (username, repository, path)

#### Params
The first two strings identify a GitHub repository. The first is the username, and the second is the name of the repository in the user's GitHub account. 

The third string is a path to the object you want to download. 

#### Returns
A JavaScript object with information about the file, including its contents. 

#### Examples
`base64.decode (github.download ("scripting", "Scripting-News", "/blog/stories/2020/02/15/a142106.md").content)`

- *Questions for all Democratic candidates, esp <a href="http://scripting.com/2020/02/14/141155.html?title=presidentBloombergReallyADemocrat">Bloomberg</a>. Do you feel the president is above the law? If you are elected, will you use the new powers Trump has taken for himself? What will you do if Trump refuses to leave?*

`github.download ("scripting", "Scripting-News", "/blog/stories/2020/02/15/a142106.md").size`

- *319*

## github.getAccessToken
#### Syntax
github.getAccessToken ()

#### Params
None.

#### Returns
The access token if you're logged in, undefined if not. 

#### Example
`github.getAccessToken ()`

- *1234567890123456789012345678901234567890*

## github.getDirectory
#### Syntax
github.getDirectory (username, repository, path)

#### Params
The first two strings identify a GitHub repository. The first is the username, and the second is the name of the repository in the user's GitHub account. 

The third string is a path to the directory you want a list of. 

#### Returns
A JavaScript object containing information about all the files in the directory. 

#### Examples
`github.getDirectory ("scripting", "tmp1")`

<pre>[
    {
        "name": "README.md",
        "path": "README.md",
        "sha": "449f080ed3d5eca1c16edfc0d14ed0851ee51a05",
        "size": 30,
        "url": "https://api.github.com/repos/scripting/tmp1/contents/README.md?ref=main",
        "html_url": "https://github.com/scripting/tmp1/blob/main/README.md",
        "git_url": "https://api.github.com/repos/scripting/tmp1/git/blobs/449f080ed3d5eca1c16edfc0d14ed0851ee51a05",
        "download_url": "https://raw.githubusercontent.com/scripting/tmp1/main/README.md",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/tmp1/contents/README.md?ref=main",
            "git": "https://api.github.com/repos/scripting/tmp1/git/blobs/449f080ed3d5eca1c16edfc0d14ed0851ee51a05",
            "html": "https://github.com/scripting/tmp1/blob/main/README.md"
            }
        },
    {
        "name": "andSheWas.opml",
        "path": "andSheWas.opml",
        "sha": "8197f7b204207b55b4e26fc292fe1b974c73406d",
        "size": 3233,
        "url": "https://api.github.com/repos/scripting/tmp1/contents/andSheWas.opml?ref=main",
        "html_url": "https://github.com/scripting/tmp1/blob/main/andSheWas.opml",
        "git_url": "https://api.github.com/repos/scripting/tmp1/git/blobs/8197f7b204207b55b4e26fc292fe1b974c73406d",
        "download_url": "https://raw.githubusercontent.com/scripting/tmp1/main/andSheWas.opml",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/tmp1/contents/andSheWas.opml?ref=main",
            "git": "https://api.github.com/repos/scripting/tmp1/git/blobs/8197f7b204207b55b4e26fc292fe1b974c73406d",
            "html": "https://github.com/scripting/tmp1/blob/main/andSheWas.opml"
            }
        },
    {
        "name": "buzz.md",
        "path": "buzz.md",
        "sha": "9f65b87f16ca67b8033b028be0c0bab35da5bd8f",
        "size": 30,
        "url": "https://api.github.com/repos/scripting/tmp1/contents/buzz.md?ref=main",
        "html_url": "https://github.com/scripting/tmp1/blob/main/buzz.md",
        "git_url": "https://api.github.com/repos/scripting/tmp1/git/blobs/9f65b87f16ca67b8033b028be0c0bab35da5bd8f",
        "download_url": "https://raw.githubusercontent.com/scripting/tmp1/main/buzz.md",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/tmp1/contents/buzz.md?ref=main",
            "git": "https://api.github.com/repos/scripting/tmp1/git/blobs/9f65b87f16ca67b8033b028be0c0bab35da5bd8f",
            "html": "https://github.com/scripting/tmp1/blob/main/buzz.md"
            }
        },
    {
        "name": "buzz.txt",
        "path": "buzz.txt",
        "sha": "b89a0f4ed3bc9334e0e39ccfeae06aebf3c213b9",
        "size": 26,
        "url": "https://api.github.com/repos/scripting/tmp1/contents/buzz.txt?ref=main",
        "html_url": "https://github.com/scripting/tmp1/blob/main/buzz.txt",
        "git_url": "https://api.github.com/repos/scripting/tmp1/git/blobs/b89a0f4ed3bc9334e0e39ccfeae06aebf3c213b9",
        "download_url": "https://raw.githubusercontent.com/scripting/tmp1/main/buzz.txt",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/tmp1/contents/buzz.txt?ref=main",
            "git": "https://api.github.com/repos/scripting/tmp1/git/blobs/b89a0f4ed3bc9334e0e39ccfeae06aebf3c213b9",
            "html": "https://github.com/scripting/tmp1/blob/main/buzz.txt"
            }
        },
    {
        "name": "menubar.opml",
        "path": "menubar.opml",
        "sha": "18f8da4953d764729d0250479435e61b83d4b972",
        "size": 1950,
        "url": "https://api.github.com/repos/scripting/tmp1/contents/menubar.opml?ref=main",
        "html_url": "https://github.com/scripting/tmp1/blob/main/menubar.opml",
        "git_url": "https://api.github.com/repos/scripting/tmp1/git/blobs/18f8da4953d764729d0250479435e61b83d4b972",
        "download_url": "https://raw.githubusercontent.com/scripting/tmp1/main/menubar.opml",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/tmp1/contents/menubar.opml?ref=main",
            "git": "https://api.github.com/repos/scripting/tmp1/git/blobs/18f8da4953d764729d0250479435e61b83d4b972",
            "html": "https://github.com/scripting/tmp1/blob/main/menubar.opml"
            }
        }
    ]
</pre>
`github.getDirectory ("scripting", "Scripting-News", "/blog/opml/2017")`

<pre>[
    {
        "name": "05.opml",
        "path": "blog/opml/2017/05.opml",
        "sha": "69cd335c1d713c37e136fc97b875072a24c92ea3",
        "size": 117772,
        "url": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/05.opml?ref=master",
        "html_url": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/05.opml",
        "git_url": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/69cd335c1d713c37e136fc97b875072a24c92ea3",
        "download_url": "https://raw.githubusercontent.com/scripting/Scripting-News/master/blog/opml/2017/05.opml",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/05.opml?ref=master",
            "git": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/69cd335c1d713c37e136fc97b875072a24c92ea3",
            "html": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/05.opml"
            }
        },
    {
        "name": "06.opml",
        "path": "blog/opml/2017/06.opml",
        "sha": "864439149998198cbebbd142b24d1d4cd71196f5",
        "size": 209566,
        "url": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/06.opml?ref=master",
        "html_url": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/06.opml",
        "git_url": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/864439149998198cbebbd142b24d1d4cd71196f5",
        "download_url": "https://raw.githubusercontent.com/scripting/Scripting-News/master/blog/opml/2017/06.opml",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/06.opml?ref=master",
            "git": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/864439149998198cbebbd142b24d1d4cd71196f5",
            "html": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/06.opml"
            }
        },
    {
        "name": "08.opml",
        "path": "blog/opml/2017/08.opml",
        "sha": "838e15184ae527659fd3273f89f3419a0f283ecd",
        "size": 134679,
        "url": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/08.opml?ref=master",
        "html_url": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/08.opml",
        "git_url": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/838e15184ae527659fd3273f89f3419a0f283ecd",
        "download_url": "https://raw.githubusercontent.com/scripting/Scripting-News/master/blog/opml/2017/08.opml",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/08.opml?ref=master",
            "git": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/838e15184ae527659fd3273f89f3419a0f283ecd",
            "html": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/08.opml"
            }
        },
    {
        "name": "09.opml",
        "path": "blog/opml/2017/09.opml",
        "sha": "f7c49b9358350b1174ee3199821ceab771618551",
        "size": 149136,
        "url": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/09.opml?ref=master",
        "html_url": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/09.opml",
        "git_url": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/f7c49b9358350b1174ee3199821ceab771618551",
        "download_url": "https://raw.githubusercontent.com/scripting/Scripting-News/master/blog/opml/2017/09.opml",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/09.opml?ref=master",
            "git": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/f7c49b9358350b1174ee3199821ceab771618551",
            "html": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/09.opml"
            }
        },
    {
        "name": "10.opml",
        "path": "blog/opml/2017/10.opml",
        "sha": "f05dd3581a93f26d8e972cecffb0c313e480e873",
        "size": 120405,
        "url": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/10.opml?ref=master",
        "html_url": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/10.opml",
        "git_url": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/f05dd3581a93f26d8e972cecffb0c313e480e873",
        "download_url": "https://raw.githubusercontent.com/scripting/Scripting-News/master/blog/opml/2017/10.opml",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/10.opml?ref=master",
            "git": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/f05dd3581a93f26d8e972cecffb0c313e480e873",
            "html": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/10.opml"
            }
        },
    {
        "name": "11.opml",
        "path": "blog/opml/2017/11.opml",
        "sha": "f06576fac10c3aedbf24a322df4df52ad046b9e9",
        "size": 114018,
        "url": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/11.opml?ref=master",
        "html_url": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/11.opml",
        "git_url": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/f06576fac10c3aedbf24a322df4df52ad046b9e9",
        "download_url": "https://raw.githubusercontent.com/scripting/Scripting-News/master/blog/opml/2017/11.opml",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/11.opml?ref=master",
            "git": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/f06576fac10c3aedbf24a322df4df52ad046b9e9",
            "html": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/11.opml"
            }
        },
    {
        "name": "12.opml",
        "path": "blog/opml/2017/12.opml",
        "sha": "a016cfe0146629d8f2b85003f9cf36e23ba43415",
        "size": 129193,
        "url": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/12.opml?ref=master",
        "html_url": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/12.opml",
        "git_url": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/a016cfe0146629d8f2b85003f9cf36e23ba43415",
        "download_url": "https://raw.githubusercontent.com/scripting/Scripting-News/master/blog/opml/2017/12.opml",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/Scripting-News/contents/blog/opml/2017/12.opml?ref=master",
            "git": "https://api.github.com/repos/scripting/Scripting-News/git/blobs/a016cfe0146629d8f2b85003f9cf36e23ba43415",
            "html": "https://github.com/scripting/Scripting-News/blob/master/blog/opml/2017/12.opml"
            }
        }
    ]
</pre>
## github.getUserInfo
#### Syntax
github.getUserInfo (string)

#### Params
The string, which is optional, is the username of the account you want the information of. 

#### Returns
If the username is not provided, github.getUserInfo returns a JavaScript object containing the user info for the current logged-in user. 

#### Examples
`github.getUserInfo ()`

<pre>{
    "login": "scripting",
    "id": 1686843,
    "node_id": "MDQ6VXNlcjE2ODY4NDM=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1686843?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/scripting",
    "html_url": "https://github.com/scripting",
    "followers_url": "https://api.github.com/users/scripting/followers",
    "following_url": "https://api.github.com/users/scripting/following{/other_user }",
    "gists_url": "https://api.github.com/users/scripting/gists{/gist_id }",
    "starred_url": "https://api.github.com/users/scripting/starred{/owner }{/repo }",
    "subscriptions_url": "https://api.github.com/users/scripting/subscriptions",
    "organizations_url": "https://api.github.com/users/scripting/orgs",
    "repos_url": "https://api.github.com/users/scripting/repos",
    "events_url": "https://api.github.com/users/scripting/events{/privacy }",
    "received_events_url": "https://api.github.com/users/scripting/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Dave Winer",
    "company": "Small Picture, Inc.",
    "blog": "http://davewiner.com/",
    "location": "Woodstock, NY",
    "email": "dave.winer@gmail.com",
    "hireable": null,
    "bio": "On the net since mid-70s. Started two Silicon Valley companies. Wrote for Wired. Fellow at Harvard, NYU. Founder of podcasting, blogging, RSS. Open web.",
    "twitter_username": null,
    "public_repos": 130,
    "public_gists": 159,
    "followers": 704,
    "following": 49,
    "created_at": "2012-04-28T01:19:35Z",
    "updated_at": "2021-08-03T13:52:51Z"
    }
</pre>
`github.getUserInfo ("octocat")`

<pre>{
    "login": "octocat",
    "id": 583231,
    "node_id": "MDQ6VXNlcjU4MzIzMQ==",
    "avatar_url": "https://avatars.githubusercontent.com/u/583231?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/octocat",
    "html_url": "https://github.com/octocat",
    "followers_url": "https://api.github.com/users/octocat/followers",
    "following_url": "https://api.github.com/users/octocat/following{/other_user }",
    "gists_url": "https://api.github.com/users/octocat/gists{/gist_id }",
    "starred_url": "https://api.github.com/users/octocat/starred{/owner }{/repo }",
    "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
    "organizations_url": "https://api.github.com/users/octocat/orgs",
    "repos_url": "https://api.github.com/users/octocat/repos",
    "events_url": "https://api.github.com/users/octocat/events{/privacy }",
    "received_events_url": "https://api.github.com/users/octocat/received_events",
    "type": "User",
    "site_admin": false,
    "name": "The Octocat",
    "company": "@github",
    "blog": "https://github.blog",
    "location": "San Francisco",
    "email": "octocat@github.com",
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 8,
    "followers": 4147,
    "following": 9,
    "created_at": "2011-01-25T18:44:36Z",
    "updated_at": "2021-10-22T14:27:39Z"
    }
</pre>
## github.upload
#### Syntax
github.upload (username, repository, path, data, message)

#### Params
The first two strings identify a GitHub repository. The first is the username, and the second is the name of the repository in the user's GitHub account. 

The third string is a path to the object you want to upload. 

The fourth string is the data of the file to be created by the upload.

The fifth string is the "commit message" that is displayed next to the object in GitHub. It it is not supplied, the server generates a random slogan for the commit message. 

#### Returns
All the information GitHub returns about the upload.

#### Examples
`github.upload ("scripting", "tmp1", "hello.txt", "Hello World")`

<pre>{
    "content": {
        "name": "hello.txt",
        "path": "hello.txt",
        "sha": "5e1c309dae7f45e0f39b1bf3ac3cd9db12e7d689",
        "size": 11,
        "url": "https://api.github.com/repos/scripting/tmp1/contents/hello.txt?ref=main",
        "html_url": "https://github.com/scripting/tmp1/blob/main/hello.txt",
        "git_url": "https://api.github.com/repos/scripting/tmp1/git/blobs/5e1c309dae7f45e0f39b1bf3ac3cd9db12e7d689",
        "download_url": "https://raw.githubusercontent.com/scripting/tmp1/main/hello.txt",
        "type": "file",
        "_links": {
            "self": "https://api.github.com/repos/scripting/tmp1/contents/hello.txt?ref=main",
            "git": "https://api.github.com/repos/scripting/tmp1/git/blobs/5e1c309dae7f45e0f39b1bf3ac3cd9db12e7d689",
            "html": "https://github.com/scripting/tmp1/blob/main/hello.txt"
            }
        },
    "commit": {
        "sha": "e0ef91110335af449223826acdc681988e441aad",
        "node_id": "C_kwDOGWnhedoAKGUwZWY5MTExMDMzNWFmNDQ5MjIzODI2YWNkYzY4MTk4OGU0NDFhYWQ",
        "url": "https://api.github.com/repos/scripting/tmp1/git/commits/e0ef91110335af449223826acdc681988e441aad",
        "html_url": "https://github.com/scripting/tmp1/commit/e0ef91110335af449223826acdc681988e441aad",
        "author": {
            "name": "Dave Winer",
            "email": "dave.winer@gmail.com",
            "date": "2021-11-10T20:52:18Z"
            },
        "committer": {
            "name": "Dave Winer",
            "email": "dave.winer@gmail.com",
            "date": "2021-11-10T20:52:18Z"
            },
        "tree": {
            "sha": "d225f272b14b41078d954bd7d7d75f85c876a66b",
            "url": "https://api.github.com/repos/scripting/tmp1/git/trees/d225f272b14b41078d954bd7d7d75f85c876a66b"
            },
        "message": "Takes a lickin, keeps on tickin.",
        "parents": [
            {
                "sha": "7a6ac66cd728566fbe9bd10bc38882e6ff1f060a",
                "url": "https://api.github.com/repos/scripting/tmp1/git/commits/7a6ac66cd728566fbe9bd10bc38882e6ff1f060a",
                "html_url": "https://github.com/scripting/tmp1/commit/7a6ac66cd728566fbe9bd10bc38882e6ff1f060a"
                }
            ],
        "verification": {
            "verified": false,
            "reason": "unsigned",
            "signature": null,
            "payload": null
            }
        },
    "statusCode": 201
    }
</pre>
