function sec_levels(){
    for(var i=0;i<window.courses.length;i++){
            if(window.courses[i]['level']==="secondary"){
                var cours = document.createElement("li");
                cours.innerHTML = window.courses[i]['name'];
                document.getElementById("lista2").appendChild(cours)
                var prof = document.createElement("li");
                prof.innerHTML = window.courses[i]['professor'];
                document.getElementById("lista2").appendChild(prof)
            }
    }
}
document.getElementById("btn").addEventListener("click", sec_levels)
