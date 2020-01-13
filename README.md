# cookie

A JavaScript snippet which sets a bunch of cookies so you can see what your
browser will complain about. Paste this into your browser's console to run:

```js
(function(src) {
    var s = document.createElement('script');
    s.src = src;
    document.body.appendChild(s);
})('https://cdn.jsdelivr.net/gh/icio/cookies/cookies.js')
```
