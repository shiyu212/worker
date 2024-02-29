self.onmessage = function(e) {
  console.log('111111', e)
}

self.addEventListener('message', function(e) {
  self.postMessage('You said: ' + e.data)
}, false)
