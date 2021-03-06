import { flushAsCss } from 'stylemug-compiler';
import { RawSource } from 'webpack-sources';

export class StylemugPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    compiler.plugin('emit', (compilation, cb) => {
      const css = flushAsCss();
      compilation.assets[this.options.name] = new RawSource(css);
      cb();
    });
  }
}
