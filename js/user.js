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

var pageNumber = 1;

User.prototype.nextPage = function() {
  pageNumber += 1;
};
User.prototype.previousPage = function() {
  pageNumber -= 1;
};

User.prototype.getRepos = function(repoRetrieval){
  $.get('https://api.github.com/users/' + this.userName  + '/repos?&page=' + pageNumber + '&access_token=' + apiKey ).then(function(response){
    repoRetrieval(response, pageNumber);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.userModule = User;
