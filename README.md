# Impress with WebSockets

An unholy fusion of [Impress.js](https://github.com/bartaz/impress.js) and [socket.io](https://github.com/Automattic/socket.io), this fork allows you to run a presentation on a local Node server and use your mobile as a controller.

Clone the repo, run `npm install` in the root and then run `node server`.

Go to `http://YOUR-IP-ADDRESS:3000` to see the presentation and visit `http://YOUR-IP-ADDRESS:3000/remote.html` to access the remote. Both presentation and remote need to access the same hostname for socket.io to do its magic.

Currently, anyone on the same network with your computer's IP address can control your presentation, which is probably not optimal. I'll see if I can get some sort of authorisation in place for the next release.

## Acknowledgements:

[Bartek Szopka](https://github.com/bartaz) for the brilliant Impress.js

[Automattic](https://github.com/Automattic) for the ease of socket.io

## Changelog

v 1.0.0 (15/09/2014) First run, which works!