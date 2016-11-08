# Carly
A cancelable callback function implementation.

Only let a callback run when if you still want it to, *so call me maybe*

# Installation

`npm install carly`

## Usage

```js
var Carly = require('carly');

var cb = Carly(myHandler);

// cb is a normal function that can be called
// it will proxy everything into myHandler
doWork(data, cb);

/* ... */

// we can cancel the cb at any time with
cb.cancel();
// now even if doWork finishes the cb will not be called
```

## Contributing
`npm run test`

# License
MIT
