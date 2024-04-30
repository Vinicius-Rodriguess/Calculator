const calculator = {
    insert(num) {
        const resultDisplay = document.getElementById("result")
        resultDisplay.innerHTML += num
    },

    clean() {
        document.getElementById("result").innerHTML = ""
    },

    backSpace() {
        const resultDisplay = document.getElementById("result")
        resultDisplay.innerHTML = resultDisplay.innerHTML.slice(0, -1)
    },

    calculate() {
        const resultDisplay = document.getElementById("result")
        const result = eval(resultDisplay.innerHTML)
        if (isNaN(result) || !isFinite(result)) {
            resultDisplay.innerHTML = "Error"
        } else {
            resultDisplay.innerHTML = result
        }
    }
}

const btns = document.querySelectorAll(".btn")
btns.forEach(btn => {
    btn.addEventListener("click", e => {
        const btnValue = e.target.innerText
        switch (btnValue) {
            case "C":
                calculator.clean()
                break
            case "<":
                calculator.backSpace()
                break
            case "=":
                calculator.calculate()
                break
            default:
                calculator.insert(btnValue)
                break
        }
    })
})