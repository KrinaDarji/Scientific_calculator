let answer = document.getElementById("inptext");
//taking input of numbers 1 to 0 
let calculate = (number) => {
    answer.value += number;
};

let Answer = () => {
    answer.value = eval(answer.value);
}

function clr(){
    answer.value= "";
}