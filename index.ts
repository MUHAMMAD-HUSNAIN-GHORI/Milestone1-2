const skillbtn= document.querySelector(".btn")as HTMLButtonElement;
const skillssec =document.querySelector(".sk") as HTMLDivElement;
skillbtn.addEventListener("click",()=>{
    if(skillssec){
        if(skillssec.style.display ==="none"){
            skillssec.style.display ="block";
            skillbtn.innerHTML="Hide skills"
        } else{
            skillssec.style.display ="none";
            skillbtn.innerHTML ="Show Skills";
        }
    }
});

