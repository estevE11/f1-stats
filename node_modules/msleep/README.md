<img src="http://rawgit.com/caiogondim/msleep/master/img/logo.svg">

# msleep

Small function that mimics the `usleep` C function, blocking the main thread.
But instead of microseconds works with miliseconds, to feel more JS-like.

Useful for:
- Debugging race conditions
- Simulate blocked UI thread on the browser

## API

### msleep(sleepTime)

- `sleepTime`: time in miliseconds to block the thread

## Usage

In **node**, install the package through [npm](https://www.npmjs.com/package/msleep) and just `require` it.
```js
var msleep = require('msleep')
msleep(3000) // Will block the main thread for 3 seconds
```

In the **browser**, you should download the minified version or use browserify.
If you download the minified version, it will expose the `msleep` function to
the `window` global object.
```js
msleep(5000) // Will block the main thread for half a second
```

## Installation

### Bundler

To use the library, install it through [npm](https://npmjs.com)

```shell
npm install --save msleep
```

To port it to Browser or any other (non CJS) environment, use your favorite CJS
bundler. No favorite yet? Try: [Browserify](http://browserify.org/),
[Webmake](https://github.com/medikoo/modules-webmake) or
[Webpack](http://webpack.github.io/)

### Drop-in

If using a bunlder is not your thing, there is a file already minified under
`dist/` folder. Just reference it on your browser (drop it) and use it.

```html
<script src="dist/msleep.min.js"></script>
<script>
  msleep(500)
</script>
```

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
