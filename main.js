const
    inputs   = document.getElementsByClassName("field"),
    btn      = document.getElementsByClassName("btn")[0],
    submit   = document.getElementsByClassName("btn")[1],
    table    = document.getElementsByClassName("tbl")[0],
    finish   = document.getElementsByClassName("final")[0]
    matrices = []
let
    matrix,
    r,
    c

function areInputsValid(inputArray, limit = false) {
    for (i of inputArray)
        if (typeof i.value !== "number" && isNaN(i.value)) {
            i.value = ""
            i.placeholder = "please input a valid number"
            return false
        }
        else if ((i.value > 10 || i.value < 1) && limit) {
            i.value = ""
            i.placeholder = "use numbers between 1-10"
            return false
        }
    return true
}

btn.addEventListener("click", (e) => {
    if (!areInputsValid(inputs, true)) return
    submit.style.display = "block"
    table.textContent = ""
    r = +inputs[0].value
    c = +inputs[1].value
    matrix = [...Array(r)].map(e => Array(c))
    for (let i = 0; i < r; i++) {
        const row = document.createElement("tr")
        table.appendChild(row)
        for (let j = 0; j < c; j++) {
            const col = document.createElement("td")
            const input = document.createElement("input")
            input.type = "text"
            row.appendChild(col)
            col.appendChild(input)
            matrix[i][j] = input
        }
    }
    console.log(matrix)
})

submit.addEventListener("click", (e) => {
    let failed = false
    matrix.forEach((n) => {
        if(!areInputsValid(n)) {
            window.alert('matrix contains NaN')
            failed = true
            return
        }
    })
    if (failed) return
    submit.style.display = "none"
    table.textContent = ""
    matrix.forEach((n, i) => {
        n.forEach((m, j) => {
            matrix[i][j] = +m.value
        })
    })
    matrices.push(matrix);
    console.log(matrix)

    for (let i = 0; i < r; i++) {
        const row = document.createElement("tr")
        finish.appendChild(row)
        for (let j = 0; j < c; j++) {
            const col = document.createElement("td")
            row.appendChild(col)
            col.appendChild(document.createTextNode(matrix[i][j]))
        }
    }
})