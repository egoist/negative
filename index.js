module.exports = function (argv, command) {
  argv = argv || {};
  command = command ? command + ' ' : '';
  var input = argv._ || [];
  input = input.join(' ');
  var flags = '';
  for (var i in argv) {
    if (i !== '_' && argv[i]) {
      var value = Boolean(argv[i]) === argv[i] ? '' : ' ' + argv[i];
      var dashes = '-'.repeat(i.length > 1 ? 2 : 1);
      flags += ' ' + dashes + i + value;
    }
  }
  return command + input + flags;
};
