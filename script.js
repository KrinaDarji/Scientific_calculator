let answer = document.getElementById("inptext");
//taking input of numbers 1 to 0 
let calculate = (number) => {
    answer.value += number;
};
// equal operator
let Answer = () => {
    answer.value = eval(answer.value);
}
//clear function
function clr(){
    answer.value= "";
}