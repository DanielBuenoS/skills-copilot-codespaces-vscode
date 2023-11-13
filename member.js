function skillsMember() {
    var member = document.getElementById("member");
    member.innerHTML = "";
    var h1 = document.createElement("h1");
    h1.innerHTML = "Skills";
    var p = document.createElement("p");
    p.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quibusdam?";
    member.appendChild(h1);
    member.appendChild(p);
}