function turn(turn1) {
    if (turn1 === true)
        return "x";
    return "o";
}
var flag = 0;
var box = document.getElementsByClassName("innerbox");
Array.from(box).forEach((element, index, box) => {
    box[index].addEventListener("click", () => {
        if (box[index].innerText === "") {
            if (flag % 2 == 0) {
                element.innerText = turn(true);
            } else {
                element.innerText = turn(false);
            }
            flag++;
        }
    });
});