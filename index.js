function justInvoke(fn) {
  return fn()
}

function setThisWithCall(fn, thisValue, arg) {
const bob = fn.call(thisValue, arg)
return bob
}

function setThisWithApply(fn, thisValue, args) {
  const bob = fn.call(thisValue, ['args'])
  return bob
}
