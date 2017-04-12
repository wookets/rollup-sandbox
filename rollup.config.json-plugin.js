
import json from 'rollup-plugin-json';

export default {
  entry: 'src/main-json.js',
  format: 'cjs',
  plugins: [ json() ],
  dest: 'dist/bundle-json.js' // equivalent to --output
};