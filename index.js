module.exports = CarlyRaeJepsen;

function CarlyRaeJepsen (cb) {
  var stopped = false;

  return {
    callback: wrapped,
    cancel: cancel
  };

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
