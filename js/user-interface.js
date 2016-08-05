var User  = require('./../js/user.js').userModule;

var clearAll = function() {
  $('#main_info').empty();
  $('#user_info').empty();
};

var updateContent = function(user) {
  user.getUserInfo(userRetrieval);
  user.getRepos(repoRetrieval);
}

var userRetrieval = function(user) {
  if (user.avatar_url) {
    $('#user_info').append('<img src="' + user.avatar_url + '" ></img>');
  }
  $('#user_info').append("<li><h3>User name: " + user.login + ".</h3></li><br><li><h3>User Id: " + user.id + ".</h3><br></li>");
  if (user.bio) {
    $('#user_info').append('<li><h4>' + user.bio + '</h4></li>');
  }
  $('#user_info').append('<li><h4>Following ' + user.following + ' users.</h4></li><li><h4>Being followed by ' + user.followers + ' users.</h4></li>');
};

var repoRetrieval = function(info, pageNumber) {
  info.forEach(function(repo) {
    $('#main_info').append("<h2><a href=" + repo.html_url + ">" + repo.name + "</a></h2><br>");

    if ( repo.description ) {
      $('#main_info').append("Repo Description: " + repo.description + "<br>");
    } else {
      $('#main_info').append("No Description Saved.<br>");
    }
    $('#main_info').append("<h3>Language: " + repo.language + ".</h3><br>");
  });
  if ( pageNumber > 1 ) {
    $('#previous_page').show();
  }
  $('#next_page').show();
};

$(document).ready(function() {
  $('#find_user').submit(function(event) {
    clearAll()
    event.preventDefault();
    var name = $('#name_field').val();
    var thisUser = new User(name);
    updateContent(thisUser);
    $('#next_page').click(function(event) {
      clearAll();
      thisUser.nextPage();
      updateContent(thisUser)
    });
    $('#previous_page').click(function(event) {
      clearAll();
      thisUser.previousPage();
      updateContent(thisUser);
    });
  });
});
