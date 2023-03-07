
function primary_levels(){
    for(var i=0;i<window.courses.length;i++){
        if(window.courses[i]['level']==="primary"){
            var cours = document.createElement("li");
            cours.innerHTML = window.courses[i]['name'];
            $( cours ).addClass( "couri" )
            document.getElementById("lista").appendChild(cours)
            var prof = document.createElement("li");
            prof.innerHTML = window.courses[i]['professor'];
            $( prof ).addClass( "profi" )
            document.getElementById("lista").appendChild(prof)
            
        }
}
}
document.getElementById("btn").addEventListener("click", primary_levels)

$(".bt").click(function(){
    window.localStorage.setItem("professor",$(this).text())
    window.location.assign("../pages/professor.html")
})