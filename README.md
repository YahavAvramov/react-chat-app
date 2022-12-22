# About
This project allows users with a Google account to talk to each other by messages in real time.\
the project runs locally so in order to make it accessible to any user it must be uploaded to the web.

The project uses the following technologies:\
React\
json server\
firebase\
JavaScript

all the data saved on the json servers and Updated according to user actions\
the data contains:\
users active - json arry of all the actives users\
users - json arry of all the users that connectec to the app\
messages - json arry of all messages - which are divided into conversations arry at the conversation.jsx component


## How to run the project

First you have to create an firebase account you can use this link : https://firebase.google.com \
then in \src\firebase.js lines 6-11 change the connection info (my connection are in .env file and are not accessible here)

It the project terminal run this lines
### `npm i`
to install the libraries used by the project

### `npm run server`
this runs the message json-server in localhost: 3500 \
in package.json line 24 you can see the full command ("server": "json-server --port 3500 --watch ./Data/message-db.json")\

### `npm run usersServer - in a different terminal`
this runs the users json-server in localhost: 3200 \
in package.json line 25 you can see the full command ("usersServer": "json-server --port 3200 --watch ./Data/users.db.json")\

### `npm start`
