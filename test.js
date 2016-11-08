var test = require('tape');
var Carly = require('./');

test('basic', function (t) {
  t.plan(2);

  var context = {};
  var jepsen = Carly(function (arg1) {
    // plan is 2, should only run once
    t.equal(arg1, 'param', 'params get passed through');
    t.equal(this, context, 'context get passed through');
  });

  jepsen.callback.apply(context, ['param']);
  jepsen.cancel();
  jepsen.callback();

  t.end();
});
