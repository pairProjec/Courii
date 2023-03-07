//  var professor = window.users.find(function (user) {
//     return user.username === window.localStorage.getItem("professor");
//   });

$(document).ready(function () {
  var professor = {
    username: "admin",
    courses: [
      { name: "Course 1", description: "Description", subject: "subject" },
      { name: "Course 2", description: "Description", subject: "subject" },
      { name: "Course 3", description: "Description", subject: "subject" },
    ],
  };

  //Create H1 title
  var $title = $(`<h1>Welcome to ${professor.username}'s profile </h1>`);

  //Create H2 subtitle
  var $subtitle = $(
    `<h2 id="sub">This is what ${professor.username} teaches</h2>`
  );

  //Append title and subtitle to body
  $("body").prepend($subtitle);
  $("body").prepend($title);

  //Create empty ul
  var $courseList = $("<ul id='courses'></ul>");

  //Loop over courses and fill list
  for (var i = 0; i < professor.courses.length; i++) {
    var $content = $(
      `<div class='course'><li><span class="name">${professor.courses[i].name} </span></li></div>`
    );

    $($content).append(
      $(`<span class="desc">${professor.courses[i].description}</span><br />`)
    );

    $($content).append(
      $(`<span class="subj">${professor.courses[i].subject}</span>`)
    );
    //Append content to list
    $($courseList).append($content);
  }
  //Append filled list to container
  $("#container").append($courseList);
});

//Add course functionality to professors
$("#add").click(function (e) {
  e.preventDefault();
  var isOnline = $('input[name="online"]:checked').val();
  var professor = {
    username: "admin",
    courses: [
      { name: "HAHA 1", description: "Course", subject: "math" },
      { name: "HAHA 2", description: "Course", subject: "math" },
      { name: "HAHA 3", description: "Course", subject: "math" },
    ],
  };

  var newCourse = {
    name: $("#name").val(),
    professor: professor.username,
    level: $("#level").val(),
    subject: $("#subject").val(),
    description: $("#desc").val(),
    isOnline: isOnline === "online",
  };

  window.courses.push(newCourse);
  window.users[window.users.indexOf(professor)].courses.push(newCourse);
});
