const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const allLinks = JSON.parse(localStorage.getItem("myLinks"))

let myLinks = []
if (allLinks) {
    myLinks = allLinks
    render(myLinks)
}

inputBtn.addEventListener("click", function() {
    value = inputEl.value
    if (value) {
        myLinks.push(value)
        localStorage.setItem("myLinks", JSON.stringify(myLinks))
        render(myLinks)
    }
    inputEl.value = ""
})

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLinks.push(tabs[0].url)
        localStorage.setItem("myLinks", JSON.stringify(myLinks))
        render(myLinks)
        
    })
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLinks = []
    render(myLinks)
})

function render(links) {
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
        listItems += `<li>
                        <a href ='${links[i]}' target='_blank'>
                        ${links[i]}
                        </a>
                      </li>`
    }
    ulEl.innerHTML = listItems
}