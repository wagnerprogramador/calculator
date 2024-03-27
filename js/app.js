// console.log("im testing a javacript code.")

let result = document.getElementById("result")
let log = document.getElementById("log")

function getNumber(num) {
    result.value += num
    return num
}

function getOperation(operation) {
    if(operation == "CE" || operation == "C" || operation == "DEL") {
        result.value = ""
        log.inn
    }
}

function getSignal(signal) {
    result.value += signal
    log.innerHTML = result.value
    setTimeout(()=>{
        result.value = ""
    }, 500)
}
