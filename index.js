function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
const bob = fn.call(thisValue, arg)
}
