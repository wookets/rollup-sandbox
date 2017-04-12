
import resolve from 'rollup-plugin-node-resolve';

export default {
  entry: 'src/main-answer.js',
  format: 'cjs',
  plugins: [ resolve() ],
  dest: 'dist/bundle-answer.js' // equivalent to --output
};