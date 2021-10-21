# Oscar Bréhier API

A simple RESTful API used for displaying various information on my [website](brhoscar.vercel.app). 
<br/> Made using [Node.JS](https://nodejs.org/en/), [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/).

## Requests

###GET [/post](https://brhoscar-api.herokuapp.com/post)
- Return the list of my projects
- Headers: `token: your API auth token`

###GET [/post/:id](https://brhoscar-api.herokuapp.com/post/:id)
- Return a specific project
- Headers: `token: your API auth token`
- id: `the targeted project id`

###POST [/post](https://brhoscar-api.herokuapp.com/post) ( Owner Only )
- Post a new project
- Body: ```{
    "name": "",
    "description": "",
    "languages": "",
    "githubURL": ""
}```


## Get an auth token
Registration tokens will be added in a future version of the API