# Serverless TODO App - Project 4

## Github Repo

<https://github.com/adityasanil/serverless-todo-app>

## Setup

### Installing Node and Npm

This project depends on React, Node and Node Package Manager, download from [here](https://nodejs.org/en/download/).

## Serverless setup

Run `sudo npm i -g serverless` to download and install all the Servreless Framework dependencies.

Configure your aws credentials into serverless using the command `sls config credentials --provider aws --key YOUR_ACCESS_KEY --secret YOUR_SECRET_KEY --profile serverless`

### Backend setup

Run `npm i` in the _backend_ directory to download and install all the dependencies.\
Next run `sls deploy -v` to upload the code to your aws account.

### Client setup

Run `npm i` in the _client_ directory to download and install all the React dependencies.\
Run `npm start` to run the local frontend server.

### Postman

Import the `collection-postman.json` file into your Postman app to import all the requests.
