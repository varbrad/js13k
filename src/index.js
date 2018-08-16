function generateTag() {
  let e = document.createElement('p')
  e.innerText = 'Mayn!'
  return e
}

document.body.appendChild(generateTag())
