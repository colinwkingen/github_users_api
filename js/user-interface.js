var User  = require('./../js/user.js').userModule;


var userRetrieval = function(info) {

  info.forEach(function(repo) {
    $('#main_info').append("Repo name: " + repo.name + ".<br>");
    $('#main_info').append("Repo description: " + repo.description + ".<br>");
  });
};


$(document).ready(function() {
  $('#find_user').submit(function(event) {
    $('#main_info').empty();
    event.preventDefault();
    var name = $('#name_field').val();
    $('#main_info').append(name);
    var thisUser = new User(name);
    thisUser.getRepos(userRetrieval);
  });
});
