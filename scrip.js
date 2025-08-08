let b = prompt(' text color')
let c = prompt('bg color')

let h1 = document.createElement('h1')



let body = document.querySelector('body')
body.appendChild(h1)
body.style.backgroundColor = c
h1.style.color = b

h1.textContent = a

    