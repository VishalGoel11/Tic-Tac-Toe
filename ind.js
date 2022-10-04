
function turn(turn1) {
    if (turn1 === true)
        return "x";
    return "o";
}
var audio = new Audio("87631833.mp3");
var box = document.getElementsByClassName("innerbox");
var whiwin= document.getElementById("whowin");
var flag2=false;
function win(winner){
    if((box[0].innerText==="x" && box[1].innerText==="x"&& box[2].innerText==="x")|| (box[0].innerText==="o" && box[1].innerText==="o"&& box[2].innerText==="o")){
        box[0].style.backgroundColor="red";
        box[1].style.backgroundColor="red";
        box[2].style.backgroundColor="red";
        flag2=true;
        whiwin.innerHTML="<h1> "+winner+" wins</h1>";
        audio.play();
    }
    if((box[3].innerText==="x" && box[4].innerText==="x"&& box[5].innerText==="x")||(box[3].innerText==="o" && box[4].innerText==="o"&& box[5].innerText==="o")){
        box[3].style.backgroundColor="red";
        box[4].style.backgroundColor="red";
        box[5].style.backgroundColor="red";
        flag2=true;
        whiwin.innerHTML="<h1> "+winner+" wins</h1>";
        audio.play();

    }
    if((box[6].innerText==="x" && box[7].innerText==="x"&& box[8].innerText==="x")||(box[6].innerText==="o" && box[7].innerText==="o"&& box[8].innerText==="o")){
        box[6].style.backgroundColor="red";
        box[7].style.backgroundColor="red";
        box[8].style.backgroundColor="red";
        flag2=true;
        whiwin.innerHTML="<h1> "+winner+" wins</h1>";
        audio.play();

    }
    if((box[0].innerText==="x" && box[3].innerText==="x"&& box[6].innerText==="x")|| (box[0].innerText==="o" && box[3].innerText==="o"&& box[6].innerText==="o")){
        box[0].style.backgroundColor="red";
        box[3].style.backgroundColor="red";
        box[6].style.backgroundColor="red";
        flag2=true;
        whiwin.innerHTML="<h1> "+winner+" wins</h1>";
        audio.play();

    }
    if((box[1].innerText==="x" && box[4].innerText==="x"&& box[7].innerText==="x")||(box[1].innerText==="o" && box[4].innerText==="o"&& box[7].innerText==="o")){
        box[1].style.backgroundColor="red";
        box[4].style.backgroundColor="red";
        box[7].style.backgroundColor="red";
        flag2=true;
        whiwin.innerHTML="<h1> "+winner+" wins</h1>";
        audio.play();

    }
    if((box[2].innerText==="x" && box[5].innerText==="x"&& box[8].innerText==="x")||(box[2].innerText==="o" && box[5].innerText==="o"&& box[8].innerText==="o")){
        box[2].style.backgroundColor="red";
        box[5].style.backgroundColor="red";
        box[8].style.backgroundColor="red";
        flag2=true;
        whiwin.innerHTML="<h1> "+winner+" wins</h1>";
        audio.play();

    }
    if((box[0].innerText==="x" && box[4].innerText==="x"&& box[8].innerText==="x")|| (box[0].innerText==="o" && box[4].innerText==="o"&& box[8].innerText==="o")){
        box[0].style.backgroundColor="red";
        box[4].style.backgroundColor="red";
        box[8].style.backgroundColor="red";
        flag2=true;
        whiwin.innerHTML="<h1> "+winner+" wins</h1>";
        audio.play();

    }
    if((box[2].innerText==="x" && box[4].innerText==="x"&& box[6].innerText==="x")||(box[2].innerText==="o" && box[4].innerText==="o"&& box[6].innerText==="o")){
        box[2].style.backgroundColor="red";
        box[4].style.backgroundColor="red";
        box[6].style.backgroundColor="red";
        flag2=true;
        whiwin.innerHTML="<h1> "+winner+" wins</h1>";
        audio.play();
    }
}
function draw()
{
    whiwin.innerHTML="<h1>It's a draw .</h1>";
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
            if(flag2==false&& box[0].innerText!="" && box[1].innerText!="" && box[2].innerText!=""&& box[3].innerText!="" && box[4].innerText!="" && box[5].innerText!=""&& box[6].innerText!=""&& box[7].innerText!=""&& box[8].innerText!=""){
                draw();
            }
            flag++;
        }
    });
});
function resetgame(){
    document.getElementById("playerTurn").innerText="x";
    Array.from(box).forEach((element,index)=>{
            box[index].innerText="";
            box[index].style.backgroundColor="white";
            flag=0;
            whiwin.innerHTML="";
            // console.log("vishu")

    })
}