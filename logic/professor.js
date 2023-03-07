$(document).ready(function () {
  var professor = window.users.find(function (user) {
    return user.username === window.localStorage.getItem("professor");
  });
  
  var $title = $(`<h1>Welcome to ${professor.username}'s profile </h1>`);
  $("#container").append($title);
  var $courseList = $("<ul></ul>");
  for (var i = 0; i < professor.courses.length; i++) {
    $($courseList).append(`<li>${professor.courses[i]} </li>`);
  }
  $("#container").append($courseList);
});
