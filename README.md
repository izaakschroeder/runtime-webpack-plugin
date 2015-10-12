# runtime-webpack-plugin

Put the webpack runtime into its own chunk.

Using the `CommonsChunkPlugin` results in the common chunk having the webpack runtime in it; sometimes this is not desirable. Isolating the webpack runtime also means you can leverage CDN caching since the runtime bundle changes every time the hash changes.

```javascript
module.exports = {
  // ...
  plugins: [
    new optimize.CommonsChunkPlugin(),
    new RuntimePlugin('initial')
  ]
};
```
