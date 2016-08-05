var apiKey = require('./../.env').apiKey;

function User(userName) {
  this.userName = userName;
}

User.prototype.getUserInfo = function(userRetrieval){
  $.get('https://api.github.com/users/' + this.userName + '?access_token=' + apiKey ).then(function(response){
    userRetrieval(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};



User.prototype.getRepos = function(repoRetrieval){
  $.get('https://api.github.com/users/' + this.userName + '/repos?access_token=' + apiKey ).then(function(response){
    repoRetrieval(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
