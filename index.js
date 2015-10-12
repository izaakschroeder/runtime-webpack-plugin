
function RuntimeWebpackPlugin(name) {
  this.name = name || 'init';
}

RuntimeWebpackPlugin.prototype.apply = function apply(compiler) {
  var name = this.name;
  compiler.plugin('this-compilation', function(compilation) {
    compilation.plugin([
      'optimize-chunks',
      'optimize-extracted-chunks',
    ], function(chunks) {
      var root = this.addChunk(name);
      chunks.forEach(function(chunk) {
        if (chunk.entry) {
          chunk.entry = false;
          chunk.parents = [root];
          root.chunks.push(chunk);
        }
      });
      root.entry = root.initial = true;
    });
  });
}

module.exports = RuntimeWebpackPlugin;
