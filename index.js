module.exports = function (argv, command) {
  argv = argv || {};
  command = command ? command + ' ' : '';
  var input = argv._;
  input = input.join(' ');
  var flags = '';
  for (var i in argv) {
    if (i !== '_') {
      flags += ' --' + i + ' ' + argv[i];
    }
  }
  return command + input + flags;
};
