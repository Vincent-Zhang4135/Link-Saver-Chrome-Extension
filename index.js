const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLinks = []

inputBtn.addEventListener("click", function() {
    value = inputEl.value
    if (value) {
        myLinks.push(value)
        renderLinks()
    }
    inputEl.value = ""
})

function renderLinks() {
    let listItems = ""
    for (let i = 0; i < myLinks.length; i++) {
        listItems += `<li>
                        <a href ='${myLinks[i]}' target='_blank'>
                        ${myLinks[i]}
                        </a>
                      </li>`
    }

    ulEl.innerHTML = listItems
}