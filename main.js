var getOperator = document.querySelectorAll(".operator");
var getNumber = document.querySelectorAll(".number");
/**
    *setting the id for every operator and number's element
 */
function setId(){
    for(let i = 0; i<getOperator.length; i++){
        getOperator[i].setAttribute("id", getOperator[i].innerText);
    }
    for(let i = 0; i<getNumber.length; i++){
        getNumber[i].setAttribute("id", getNumber[i].innerText);
    }
}
/**Get the history value */
function getHistory(){
    return document.querySelector("#to_calculate").innerText;
}
/**Printing the value on calculator screen */
function printHistory(num){
    document.querySelector("#to_calculate").innerText = num;
}
/**Get every value to operate with */
function getOutput(){
    return document.querySelector("#result").innerText;
}
function printOutput(num){
    if(num == ""){
        return document.querySelector("#result").innerText = "";
    }else{
        return document.querySelector("#result").innerText = getFormattedNumber(num);
    }
}
/**Formating the value to english format */
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    let n = Number(num);
    let value = n.toLocaleString("en");
    return value;
}
/**Turn the number format into nomal number while we could operate it */
function reverseNumberFormat(num){
    return Number(num.replace(/,/g, ''));
}
setId();
/**calculation procedure */
for(let j = 0; j<getOperator.length; j++){
    getOperator[j].addEventListener('click', function(){
        if(this.id=="AC"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="DEL"){
            let output = reverseNumberFormat(getOutput()).toString();
            if(output!=""){//output has value
                output = output.substr(0, output.length-1);
                printOutput(output);
            }
        }
        else if(this.id=="+/-"){}
        else{
            let output = getOutput();
            let history = getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0, history.length-1);
                }
            }
            if(output!="" || history!=""){
                output = output==""?output:reverseNumberFormat(output);
                history += output;
                if(this.id=="="){
                    let FinResult = eval(history);
                    printOutput(FinResult==0?"0":FinResult);
                    printHistory("");
                }else{
                    history += this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}
/**Displaying each clicked value */
for(let i = 0; i<getNumber.length; i++){
    getNumber[i].addEventListener('click', function(){
        let output = reverseNumberFormat(getOutput());
        if(output != NaN){
            output = output+this.id;
            printOutput(output);
        }
    })
}