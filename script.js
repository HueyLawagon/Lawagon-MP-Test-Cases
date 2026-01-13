let txtInput = document.querySelector("#txtInput");
let btnReplaceAll = document.querySelector("#btnReplaceAll");
let txtOutput = document.querySelector("#MP1txtOutput");
btnReplaceAll.addEventListener("click", function(){
    let str = txtInput.value;
    let output = str.replaceAll(" ","");
    console.log(output);
    txtOutput.innerText = output;
});

let btnSearchWord = document.querySelector("#btnSearchWord");
let txtInput1 = document.querySelector("#txtInput1");
let txtInput2 = document.querySelector("#txtInput2");
let MP2txtOutput = document.querySelector("#MP2txtOutput")
btnSearchWord.addEventListener("click",function(){
    let txt1 = txtInput1.value;
    let txt2 = txtInput2.value;
    let output = txt1.includes(txt2);
    if (output === true){
        MP2txtOutput.innerText = "Found";
    } else {
        MP2txtOutput.innerText = "Not Found"
    }
});
