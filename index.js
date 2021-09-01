const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

let myLeads = []

inputBtn.addEventListener("click", function() {
    value = inputEl.value
    if (value) {
        myLeads.push(value)
        renderLeads()
    }
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li>
                        <a href ='${myLeads[i]}' target='_blank'>
                        ${myLeads[i]}
                        </a>
                      </li>`
    }

    ulEl.innerHTML = listItems
}