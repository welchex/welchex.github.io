$(function() {
  $('#terminal').terminal({
    help: function() {
      this.echo('Available: ls, about, contact');
    },
    ls: function() {
      this.echo('about    contact');
    },
    about: function() {
      window.location = 'about.html';
    },
    contact: function() {
      window.location = 'contact.html';
    }
  }, {
    greetings: 'Type "help" for commands.',
    name: 'retro',
    height: 400,
    prompt: '➜ '
  });
});
