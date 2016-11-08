module.exports = CarlyRaeJepsen;

function CarlyRaeJepsen (cb) {
  var stopped = false;
  wrapped.cancel = cancel;

  return wrapped;

  function cancel () {
    stopped = true;
  }

  function wrapped () {
    if (stopped) {
      return;
    }
    return cb.apply(this, arguments);
  }
}
