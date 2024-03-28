// console.log("im testing a javacript code.")

let result = document.getElementById("result")
let log = document.getElementById("log")

function getNumber(num) {
    result.value += num
}

function getOperation(operation) {
    if(operation == "CE" || operation == "C" || operation == "DEL") {
        result.value = "" 
        log.innerHTML = ""
    }
}

function getSignal(signal) {
    result.value += signal
    log.innerHTML = result.value
    setTimeout(()=>{
        result.value = ""
    }, 100)
    console.log(log)
}

function setResult() {
    log.innerText += result.value
    operation = eval(log.innerText)
    result.value = operation
    setTimeout(()=>{
        log.innerHTML = ""
        log.innerText = ""
    }, 500)
}
