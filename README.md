# negative [![Build Status](https://img.shields.io/circleci/project/egoist/negative/master.svg?style=flat-square)](https://circleci.com/gh/egoist/negative/tree/master)

Parse object to cli arguments. It does exactly the opposite of what [minimist](https://github.com/substack/minimist) does.

## Installation

```bash
npm install negative
```

## Example

```javascript
import negative from 'negative';
// simple
// return `entry.js dist.js --verbose -o output.js`
negative({
  _: ['entry.js'],
  verbose: true,
  o: 'output.js'
});
// with a command prefix
// return `mocha test.js --require babel-core/registry`
negative({
  _: ['test.js'],
  require: 'babel-core/registry'
}, 'mocha');
```

## License

MIT &copy; [EGOIST](https://github.com/egoist)
