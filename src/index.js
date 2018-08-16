function generateTag() {
  let e = document.createElement('p')
  e.innerText = 'Hello!'
  return e
}

document.body.appendChild(generateTag())
