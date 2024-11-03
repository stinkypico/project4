const gun = document.querySelectorAll(".gun")
const AIpick = document.querySelector("#AIpick");
const AIpickIMG = document.querySelector("#AIpick > img");
const tabbleScore = document.querySelector("#score");
const baner = document.querySelector("#baner")
game();

function game(){  

    let score = 0;

    for(let i = 0; i < gun.length; i++){
        gun[i].addEventListener("click", ()=>{
            let los = Math.floor(Math.random()*3);
            let choice;
            

            if(gun[i].id == "paper"){
                choice = 0;
                console.log(los + "+"+ choice);
                
                if(choice == los){
                    selectColor("yellow");
                    banerText("draw");
                    alert("remis");
                }else if(los == 1){
                    selectColor("green");
                    banerText("win");
                    alert("wygrales");
                    score++;
                }else{
                    selectColor("red");
                    banerText("lose");
                    alert("przegrales");
                    score = 0;
                }

            }
            
            if(gun[i].id == "rock"){
                choice = 1;
                console.log(los + "+"+ choice);

                if(choice == los){
                    selectColor("yellow");
                    banerText("draw");
                    alert("remis");
                }else if(los == 0){
                    selectColor("red");
                    banerText("lose");
                    alert("przegrales");
                    score = 0;
                }else{
                    selectColor("green");
                    banerText("win");
                    alert("wygrales");
                    score++;
                }
            }

            if(gun[i].id == "scissors"){
                choice = 2;
                console.log(los + "+"+ choice);

                if(choice == los){
                    selectColor("yellow");
                    banerText("draw");
                    alert("remis");
                }else if(los == 0){
                    selectColor("green");
                    banerText("win");
                    alert("wygrales");
                    score++;
                }else{
                    selectColor("red");
                    banerText("lose");
                    alert("przegrales");
                    score = 0;
                }
            }
            tabbleScore.textContent = "Twoj wynik to: " + score;
            result(los);
            for(let i =0; i<gun.length;i++){
                gun[i].style.display = "none";
                setTimeout(()=>{gun[i].style.display = "block"}, 3000);
            }
            
        }) 

        gun[i].addEventListener("mouseover", ()=>{
            gun[i].style.width = "150px";
            gun[i].style.height = "150px";
        })
        gun[i].addEventListener("mouseout", ()=>{
            gun[i].style.width = "100px";
            gun[i].style.height = "100px";
        })
        
        
    }
}

function selectColor(color){
    document.body.style.backgroundColor = color;
    baner.style.backgroundColor = color
    if(color == "yellow"){
        baner.style.color = "pink";
    }else if(color == "green"){
        baner.style.color  = 'navy';
    }else{
        baner.style.color = "black";
    }
    setTimeout(()=>{document.body.style.backgroundColor = "black"}, 3500);
    baner.style.visibility = "visible";
    setTimeout(()=>{baner.style.visibility = "hidden";},3000);
}

function result(lottery){
    if(lottery == 0){
        AIpickIMG.src = ("img/papier1.png");
    }else if(lottery == 1){
        AIpickIMG.src = ("img/kamien1.png");
    }else{
        AIpickIMG.src = ("img/nozyce1.png");
    }
    AIpick.style.visibility = "visible";
    setTimeout(()=>{AIpick.style.visibility =  "hidden";}, 3000)
    
}
function banerText(what){
    if(what == "win"){
        baner.textContent = "Wygrales";
    }else if(what == "lose"){
        baner.textContent = "Przegrales";
    }else if(what == "draw"){
        baner.textContent = "Remis";
    }
}