# NoisyTechnology

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/vkuma/blogtech)

Noisytechology is a blog site showcasing my (Vin Kumar) exploits and projects online.

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

### Tech

NoisyTechnology uses a number of open source projects to work properly:

* [ReactJS](https://reactjs.org/) - front end stuff
* [Redux](https://redux.js.org/) - State container lib for react
* [React Bootstrap](https://react-bootstrap.github.io/) - For some pretty paint
* [React Router](https://reactrouter.com/) - the rest api I like to use
* [Netlify](https://www.netlify.com/) - For continuous deployment 
* [Material UI](https://material-ui.com/) - To add that sense of style
* [jQuery](https://jquery.com/) - duh

Noisytechnology's public repo here -> [public repository](https://github.com/vkuma/blogtech)
on GitHub.

### Installation

Noisytechnology requires [Node.js](https://nodejs.org/) v4+ to run.

Cloning the Git repo:
```sh
$ cd /path/to/folder
$ git clone https://github.com/vkuma/blogtech.git
$ cd blogtech
```
**NOTE: Do not run the command 'npm audit fix'**
Installing the dependencies:
```sh
$ npm install
```

To run the project of the dev server:
```sh
$ npm start
```
It should be running on loaclhost:3000

To build and run build folder:
```sh
$ npm run build
$ serve -s build
```
It should be running on the localhost:5000
For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### How to Add Articles
Creating new article component:-
 - src > routes > app > routes > articleblog

Copy article_template and paste it into the most recent routes folder and rename
Create article table Data:-
 - src > constants > articleData.js

Create new data entry
Edit this line index: `const article = SITE.articles[0];`
 - in _**ArticleMarkup.js**_
 - and in _**Article.js**_
 
Creating article image folder:-
 - public > article-assets > 

Create folder name: aritcleN; where N is the next index in the created articles\
|---- articleN >\
|----|----| > covers >\
|----|----|---- cover.jpg\
|----|----| > img >\
|----|----|---- [all the img]\

Adding the routes:-
 - src > routes > app > routes > articleblog > index.js

Add the following lines as seen in the file:\
``import ArticleN from './routes/article_N/';``\
``<Route path={`${match.url}/article_2`} component={Article2}/>``

### Commit and Push
Add files to Local Git:-
```sh
$ git add -A
```
Commit to local:-
```sh
$ git commit -m "Your message here"
```
Push to repo:-
```sh
$ git push -u origin master"
```

### DO NOT RUN "NPM AUDIT FIX"
It breaks everything
You recieve the error: `Uncaught TypeError: n.render is not a function`
No fix currently known.

### [Netlify](https://www.netlify.com/)
Currently uses Netlify as to be able to do coninuous deployment.
Needs a netlify.toml in route directory to work.
Inside netlify.toml :-
```sh
[build]
command = "CI= npm run build"
```

### Tips
 - use "container-fluid" to wrap row div




License
----

MIT



