const cells = document.querySelectorAll('.box-sm');
const info = document.getElementsByClassName("turn")[0];
let audioTurn = new Audio("ting.mp3")
const xplay ="X"
const oplay = "O"
let gameover = new Audio("sfx-defeat1.mp3");
let bg = new Audio("music.mp3") 
const player1_name = document.getElementById("p1");
const player2_name = document.getElementById("p2");
const Input_Fields = document.getElementsByClassName("inputs")[0]
const head = document.getElementsByClassName("happy")[0];





function run(){
    Input_Fields.setAttribute(
        "style",
         "display: none;"
    );
   head.innerHTML = (player1_name.value) + "    V/s      "    + (player2_name.value) 
   info.innerText = "Turn of " + (player1_name.value);
   bg.play();
  

}

const winscheck = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

]

console.log(info)
const turnO = "O";
const turnX = "X";
let turnchange = true;
console.log(cells);
cells.forEach(el =>{
    el.onclick = ()=>{
        let currentplay = turnchange ? turnX : turnO
        el.classList.add("disable");
        classadd(el , currentplay);
        change();
        audioTurn.play();
        el.innerHTML = currentplay;

        if(winnercheck(currentplay)){
            // info.innerHTML = (currentplay + " winner")
            document.getElementsByClassName("wins")[0].setAttribute(
                "style",
                "display: initial"
            )
            if(currentplay == "X"){
                document.getElementsByClassName("winnerlo")[0].innerHTML = ((player1_name.value) + " Wins")

            }
            else{
                document.getElementsByClassName("winnerlo")[0].innerHTML = ((player2_name.value) + " Wins")
            }

            gameover.play();
           
        }
          else if(Draw()){
         console.log("DEREA")
         gameover.play();
         document.getElementsByClassName("wins")[0].setAttribute(
            "style",
            "display: initial"
        )
         document.getElementsByClassName("winnerlo")[0].innerHTML = ("Draw")

          }
    
        else if(currentplay == "X"){
           
            info.innerText = "Turn of " + (player2_name.value);
            


         
        }
        else{
            var b = "Rahul ";

            document.getElementsByClassName("turn")[0].innerHTML = "Turn of " + (player1_name.value);
        }
    }     
});
function classadd(el , currentplay){
    el.classList.add(currentplay);
    el.classList.add(currentplay);
}

function winnercheck(currentplay){
    return winscheck.some(condition=>{

     return condition.every(index=>{

       return cells[index].classList.contains(currentplay);
      })
    })
}
function Draw(){
 return [...cells].every (cellu =>{
    return cellu.classList.contains(xplay) || cellu.classList.contains(oplay);
 })
}

function change(){
    turnchange = !turnchange 
}


