themeless
=========

A tool for browsing / filtering tumblr feeds without annoying themes. Some day soon, I'd like to adapt this into a Chrome extension

### Getting Started

#### Important!

You will need a Tumblr API key to make this work. This process is fairly simple.
You'll first want to register a new application at http://www.tumblr.com/oauth/apps (this requires you to have a normal tumblr account). Once you've registered your "app", you'll be able to access your OAuth consumer key and secret. In addition to these you will need a token and token secret. Acquire these by entering your new acquired consumer key and secret here: https://api.tumblr.com/console/calls/user/info.


#### Running the app in development

Now, Assuming you have node.js and mongodb installed, clone this repository. Then rename the config AND db/config example files to config.js :

```
$ git clone git@github.com:colpanik/themeless.git
$ cd themeless
$ mv config.example.js config.js
$ mv db/config.example.js db/config.js

```

If you have your Tumblr OAuth consumerKey and secret, config.js is where you'll put them.

If you like, you can configure additional database setups in db/config.js. If you're not interested in that sort of thing, don't worry about it.

When you're ready, run npm install and fire up the app.

```
$ npm install
$ node app.js
```

If you have configured a different database setup in the config file, run `$ DB=myDifferentConfiguration node app.js`