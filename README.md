themeless
=========

A tool for browsing / filtering tumblr feeds without annoying themes. Some day soon, I'd like to adapt this into a Chrome extension

### Getting Started

IMPORTANT: You will need a Tumblr API key to make this work.

Assuming you have node.js and mongodb installed, clone this repository. Then rename the config AND db/config example files to config.js :

```
$ git clone git@github.com:colpanik/themeless.git
$ cd themeless
$ mv config.example.js config.js
$ mv db/config.example.js db/config.js

```

If you have your Rumblr OAuth consumerKey and secret, config.js is where you'll put them.

If you like, you can configure additional database setups in db/config.js. If you're not interested in that sort of thing, don't worry about it.

When you're ready, run npm install and fire up the app.

```
$ npm install
$ node app.js
```

If you have configured a different database setup in the config file, run `$ DB=myDifferentConfiguration node app.js`