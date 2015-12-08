module.exports = function (argv, command) {
  argv = argv || {};
  command = command ? command + ' ' : '';
  var input = argv._ || [];
  input = input.join(' ');
  var flags = '';
  for (var i in argv) {
    if (i !== '_') {
      var value = Boolean(argv[i]) === argv[i] ? '' : ' ' + argv[i];
      flags += ' --' + i + value;
    }
  }
  return command + input + flags;
};
