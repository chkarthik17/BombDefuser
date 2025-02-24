let userInput = document.getElementById("defuser");
let timerE1 = document.getElementById("timer");
let startTime = 10;
let timerId = setInterval(function() {
    startTime -= 1;
    timerE1.textContent = startTime;
    if (startTime === 0) {
        timerE1.textContent = 'BOOM';
        clearInterval(timerId);
    }
}, 1000);

userInput.addEventListener("keydown", function(event) {
    let userValue = userInput.value;
    if (event.key === "Enter" && userValue === "defuser" && startTime !== 0) {
        timerE1.textContent = "YOU DID IT.";
        clearInterval(timerId);
        userInput.value = "";
    }
})
