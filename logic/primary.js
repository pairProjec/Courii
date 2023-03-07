
function primary_levels(){
    for(var i=0;i<window.courses.length;i++){
            if(window.courses[i]['level']==="primary"){
                var cours = document.createElement("li");
                cours.innerHTML = "This is your cours.";
                document.getElementById("lista").appendChild(cours)
            }
    }
}
document.getElementById("btn").addEventListener("click", primary_levels)