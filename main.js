const get_button = document.querySelectorAll('.calc_container .button');
const toCalculate = document.querySelector('.calc_container .to_calculate');
const result = document.querySelector('.calc_container .result');

displayValue = function(button){
    toCalculate.innerHTML += button.innerHTML;
}
setInit = function() {
    toCalculate.innerHTML = "";
}
displayResult = function(){
}