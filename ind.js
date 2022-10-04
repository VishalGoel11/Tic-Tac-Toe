
function turn(turn1) {
    if (turn1 === true)
        return "x";
    return "o";
}
var box = document.getElementsByClassName("innerbox");
function win(winner){
    if((box[0].innerText==="x" && box[1].innerText==="x"&& box[2].innerText==="x")|| (box[0].innerText==="o" && box[1].innerText==="o"&& box[2].innerText==="o")){
        box[0].style.backgroundColor="red";
        box[1].style.backgroundColor="red";
        box[2].style.backgroundColor="red";
        alert(winner+" wins");
    }
    if((box[3].innerText==="x" && box[4].innerText==="x"&& box[5].innerText==="x")||(box[3].innerText==="o" && box[4].innerText==="o"&& box[5].innerText==="o")){
        box[3].style.backgroundColor="red";
        box[4].style.backgroundColor="red";
        box[5].style.backgroundColor="red";
        alert(winner+" wins");
    }
    if((box[6].innerText==="x" && box[7].innerText==="x"&& box[8].innerText==="x")||(box[6].innerText==="o" && box[7].innerText==="o"&& box[8].innerText==="o")){
        box[6].style.backgroundColor="red";
        box[7].style.backgroundColor="red";
        box[8].style.backgroundColor="red";
        alert(winner+" wins");
    }
    if((box[0].innerText==="x" && box[3].innerText==="x"&& box[6].innerText==="x")|| (box[0].innerText==="o" && box[3].innerText==="o"&& box[6].innerText==="o")){
        box[0].style.backgroundColor="red";
        box[3].style.backgroundColor="red";
        box[6].style.backgroundColor="red";
        alert(winner+" wins");
    }
    if((box[1].innerText==="x" && box[4].innerText==="x"&& box[7].innerText==="x")||(box[1].innerText==="o" && box[4].innerText==="o"&& box[7].innerText==="o")){
        box[1].style.backgroundColor="red";
        box[4].style.backgroundColor="red";
        box[7].style.backgroundColor="red";
        alert(winner+" wins");
    }
    if((box[2].innerText==="x" && box[5].innerText==="x"&& box[8].innerText==="x")||(box[2].innerText==="o" && box[5].innerText==="o"&& box[8].innerText==="o")){
        box[2].style.backgroundColor="red";
        box[5].style.backgroundColor="red";
        box[8].style.backgroundColor="red";
        alert(winner+" wins");
    }
    if((box[0].innerText==="x" && box[4].innerText==="x"&& box[8].innerText==="x")|| (box[0].innerText==="o" && box[4].innerText==="o"&& box[8].innerText==="o")){
        box[0].style.backgroundColor="red";
        box[4].style.backgroundColor="red";
        box[8].style.backgroundColor="red";
        alert(winner+" wins");
    }
    if((box[2].innerText==="x" && box[4].innerText==="x"&& box[6].innerText==="x")||(box[2].innerText==="o" && box[4].innerText==="o"&& box[6].innerText==="o")){
        box[2].style.backgroundColor="red";
        box[4].style.backgroundColor="red";
        box[6].style.backgroundColor="red";
        alert(winner+" wins");
    }
}
var flag = 0;
Array.from(box).forEach((element, index, box) => {
    box[index].addEventListener("click", () => {
        let text="0";
        if (box[index].innerText === "") {
            if (flag % 2 == 0) {
                element.innerText = turn(true);
                text=element.innerText;
            } else {
                element.innerText = turn(false);
                text=element.innerText;
            }
            document.getElementById("playerTurn").style.fontWeight="800";
            if(flag%2!=0){
            document.getElementById("playerTurn").innerText="x";
            }
            if(flag%2==0){
            document.getElementById("playerTurn").innerText="o";
            }
            win(text);
            flag++;
        }
    });
});
function resetgame(){
    document.getElementById("playerTurn").innerText="x";
    Array.from(box).forEach((element,index)=>{
            box[index].innerText="";
            // console.log("vishu")

    })
}