var skillbtn = document.querySelector(".btn");
var skillssec = document.querySelector(".sk");
skillbtn.addEventListener("click", function () {
    if (skillssec) {
        if (skillssec.style.display === "none") {
            skillssec.style.display = "block";
            skillbtn.innerHTML = "Hide skills";
        }
        else {
            skillssec.style.display = "none";
            skillbtn.innerHTML = "Show Skills";
        }
    }
});
var option = document.querySelector("#option");
for (var i = 0; i < option.lenght; i++) {
    console.log(option);
}




