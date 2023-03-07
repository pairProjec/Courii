function prep_levels(){
    for(var i=0;i<window.courses.length;i++){
        if(window.courses[i]['level']==="preparatory"){
            var cours = document.createElement("li");
            cours.innerHTML = window.courses[i]['name'];
            $( cours ).addClass( "couri" )
            document.getElementById("lista1").appendChild(cours)
            var prof = document.createElement("li");
            prof.innerHTML = window.courses[i]['professor'];
            $( prof ).addClass( "profi" )
            document.getElementById("lista1").appendChild(prof)
            
        }
}
}
document.getElementById("btn").addEventListener("click", prep_levels)
$(".bt").click(function pp(){
    window.localStorage.setItem("professor",$(this).text())
    window.location.assign("../pages/professor.html")
})
   




