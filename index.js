const form = document.querySelector('form')
const ul = document.querySelector('ul')
const button = document.querySelector('button.delete')

form.onsubmit = function (event) {
    event.preventDefault()

    const input = document.querySelector('input')
    const value = input.value

    if (value === '') return

    const li = ul.querySelector('li').cloneNode(true)
    li.querySelector("span").textContent = value
    ul.appendChild(li)
    input.value = ''
}

ul.onclick = function (event) {
    if (!event.target.classList.contains('delete')) return

    // return console.log('remove item')
    event.target.parentElement.remove()


}


// button.onclick = function (event) {
//     // console.log(event.target)
//     console.log(event.target.parentElement)    
//     event.target.parentElement.remove()

//     // console.log(event.target.)
// }

// ul.innerHTML += ` <li
// class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between">
// <span>${value}</span><button class="text-red-700 delete">ⅹ</button></li>`

// input.value = ''




// form.onsubmit = function(event){
//     event.preventDefault() 

//     const input = document.querySelector('input')
//     const value = input.value

//     const li = document.createElement('li')
//     li.setAttribute('class', 'px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between')

//     li.textContent = value

//     const button = document.createElement('button')
//     button.setAttribute('class', 'text-red-700 delete')
//     button.textContent = 'x'

//     li.appendChild(button)
//     ul.appendChild(li)

// }
