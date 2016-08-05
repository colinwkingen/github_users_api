var User  = require('./../js/user.js').userModule;


var userRetrieval = function(info) {
  $('#main_info').append(info.id);
  console.log(info)
}


$(document).ready(function() {
  $('#find_user').submit(function(event) {
    event.preventDefault();
    var name = $('#name_field').val();
    $('#main_info').append(name);
    var thisUser = new User(name);
    thisUser.getRepos(userRetrieval);
  });
});
