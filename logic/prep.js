function prep_levels(){
    for(var i=0;i<window.courses.length;i++){
            if(window.courses[i]['level']==="preparatory"){
                var cours = document.createElement("li");
                cours.innerHTML = "This is your courses.";
                document.getElementById("lista1").appendChild(cours)
            }
    }
}
document.getElementById("btn").addEventListener("click", prep_levels)