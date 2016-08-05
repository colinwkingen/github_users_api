var apiKey = require('./../.env').apiKey;

function User(userName) {
  this.userName = userName;
}

User.prototype.getRepos = function(userRetrieval){
  $.get('https://api.github.com/users/' + this.userName +'?access_token=' + apiKey ).then(function(response){
    userRetrieval(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};



exports.userModule = User;
