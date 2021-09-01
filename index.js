const deleteBtn = document.getElementById("delete-btn")
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let allLinks = JSON.parse(localStorage.getItem("myLinks"))
if (allLinks) {
    myLinks = allLinks
    renderLinks()
}

inputBtn.addEventListener("click", function() {
    value = inputEl.value
    if (value) {
        myLinks.push(value)
        localStorage.setItem("myLinks", JSON.stringify(myLinks))
        renderLinks()
    }
    inputEl.value = ""
})

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    myLinks = []
    renderLinks()
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