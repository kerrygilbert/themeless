themeless
=========

A tool for browsing / filtering tumblr feeds without annoying themes. Some day soon, I'd like to adapt this into a Chrome extension

### Getting Started

Assuming you have node.js and mongodb installed, clone this repository. Then rename the database config example file to config.js :

```
$ git clone git@github.com:colpanik/themeless.git
$ mv themeless/db/config.example.js themeless/db/config.js

```

If you like, you can configure additional database setups in this file. If you're not interested in that sort of thing, it will just work.

When you're ready, hop into the themeless directory, run npm install and fire up the app.

```
$ cd themeless && npm install
$ node app.js
```

If you have configured a different database setup in the config file, run `$ DB=myDifferentConfiguration node app.js`