```
npm install -g webpack gulp eslint karma-cli
npm install
```

Building
--------

For a single build:

`npm run build` or `webpack`

For automatic watched builds

`npm start` or `webpack --watch`


Uploading Built Code
--------------------

Copy `secrets.default.js` to `secrets.js` and fill out your username/password.  Obviously, this should stay
out of version control.

To actually perform the upload:

`npm run upload`

Or:

`node ./scripts/upload.js`


Testing
-------

For a single test run:

`npm test`

For automatic watched tests

`npm starttests` or `karma`
