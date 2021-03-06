import test from 'ava';
import negative from './';

test('main', t => {
  const cli = {
    _: ['init', 'hello'],
    x: 3,
    verbose: true,
    noQuiet: true
  };
  console.log(negative(cli))
  t.same(negative(cli, 'mocha'), 'mocha init hello -x 3 --verbose --no-quiet');
});
