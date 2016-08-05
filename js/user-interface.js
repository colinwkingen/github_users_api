var User  = require('./../js/user.js').userModule;


var userRetrieval = function(user) {
  if (user.avatar_url) {
    $('#user_info').append('<img src="' + user.avatar_url + '" ></img>')
  }
  $('#user_info').append("<li>User name: " + user.login + ".</li><br><li>User Id: " + user.id + ".<br></li>");
};

var repoRetrieval = function(info) {

  info.forEach(function(repo) {
    $('#main_info').append("<h3>Repo name: " + repo.name + ".</h3><br>");

    if ( repo.description ) {
      $('#main_info').append("Repo Description: " + repo.description + "<br><hr>");
    } else {
      $('#main_info').append("No Description Saved.<br><hr>");
    }
  });
};


$(document).ready(function() {
  $('#find_user').submit(function(event) {
    $('#main_info').empty();
    event.preventDefault();
    var name = $('#name_field').val();
    var thisUser = new User(name);
    thisUser.getUserInfo(userRetrieval);
    thisUser.getRepos(repoRetrieval);
  });
});
