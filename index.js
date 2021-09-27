#!/usr/bin/env node

require('dotenv').config();

var prerender = require('prerender');

var server = prerender();

server.use(prerender.sendPrerenderHeader());
server.use(prerender.browserForceRestart());
server.use(prerender.whitelist());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
