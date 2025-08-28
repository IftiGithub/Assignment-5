
//Heart section
const divs = document.getElementsByClassName("heart")

for (const div of divs) {
    div.addEventListener("click", function () {
        const heartCount = parseInt(document.getElementById("heart-count").innerText)
        const finalHeartCount = heartCount + 1;
        document.getElementById("heart-count").innerText = finalHeartCount
    })
}

//call section
const calls = document.getElementsByClassName("call")

for (const call of calls) {
    call.addEventListener("click", function () {
        const card = call.closest(".bg-white")
        const numberData = card.querySelector(".number")
        const nameData = card.querySelector(".name")
        const data = {
            name: nameData.innerText,
            number: numberData.innerText,
            date: new Date().toLocaleTimeString()
        }
        const coinCount = parseInt(document.getElementById("coin-count").innerText)
        if (coinCount >= 20) {
            const finalCoinCount = coinCount - 20
            document.getElementById("coin-count").innerText = finalCoinCount
            alert(`${data.name}\n${data.number}`)
        }
        else {
            alert("Insufficient currency")
            return
        }
        const historyContainer = document.getElementById("history-container")
        const division = document.createElement("div")
        division.innerHTML = `
                <div class="flex justify-between items-center bg-gray-100 rounded-2xl p-[10px] my-3">
                    <div>
                        <p class="font-bold">${data.name}</p>
                        <p>${data.number}</p>
                    </div>
                    <div>
                        <p>${data.date}</p>
                    </div>
                </div>
            `
        historyContainer.appendChild(division)
    })
}
//copy-count section
const copies = document.getElementsByClassName("copy-btn")

for (const copy of copies) {
    copy.addEventListener("click", function () {
        const copyCount = parseInt(document.getElementById("copy-count").innerText)
        const finalCopyCount = copyCount + 1
        document.getElementById("copy-count").innerText = finalCopyCount
    })
}
//add to clipboard section
const copyNumbers = document.getElementsByClassName("copy-btn")
for (const copyNumber of copyNumbers) {
    copyNumber.addEventListener("click", function () {
        const card = copyNumber.closest(".bg-white")
        const numberEl = card.querySelector(".number")
        const numberText = numberEl.innerText
        navigator.clipboard.writeText(numberText)
        alert("Number Copied")
    })
}
//clear section
document.getElementById("clear-btn")
    .addEventListener("click", function () {
        document.getElementById("history-container").innerHTML = ``
    })