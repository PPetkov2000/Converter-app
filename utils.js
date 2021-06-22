function capitalize(text) {
  return text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase()
}

function generateOption(value) {
  const option = document.createElement("option")
  option.value = value
  option.textContent = capitalize(value)
  return option
}

function generateOptions(systems, parent) {
  return systems.map(generateOption).forEach((el) => {
    parent.appendChild(el)
  })
}

export { capitalize, generateOption, generateOptions }