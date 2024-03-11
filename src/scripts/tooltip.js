let tooltipInterval

/**
 * @param {HTMLAnchorElement} element 
 */
function handleTooltipMouseEnter(element) {
  clearTimeout(tooltipInterval)
  const tooltip = document.querySelector('.tooltip')
  const text = element.getAttribute('tooltip-content')
  const position = {
    x: element.offsetLeft + element.offsetWidth / 2,
    y: element.offsetTop + element.offsetHeight + 4 - window.scrollY,
  }

  if (element.hasAttribute('tooltip-fixed')) {
    position.y = element.offsetTop + element.offsetHeight + 4 + window.scrollY / document.body.offsetHeight
  }

  if (element.hasAttribute('direction')) {
    const direction = element.getAttribute('direction')
    position.x = element.offsetLeft + element.offsetWidth * direction
  }

  if (tooltip) {
    tooltip.style.left = `${position.x}px`
    tooltip.style.top = `${position.y}px`
    tooltip.innerText = text
    return
  }
  
  tooltipInterval = setTimeout(() => addTooltip(position, text), 400)
}

function handleTooltipMouseOut() {
  clearTimeout(tooltipInterval)

  const tooltip = document.querySelector('.tooltip')

  if (tooltip) {
    tooltipInterval = setTimeout(removeTooltip, 300)
    return
  }
}

/**
 * @param {{ x: Number, y: Number }} position
 * @param {String} text
 */
function addTooltip(position, text) {
  const body = document.querySelector('body')
  const tooltip = document.createElement('span')

  tooltip.classList.add('tooltip')
  tooltip.style.opacity = 1
  tooltip.style.left = `${position.x}px`
  tooltip.style.top = `${position.y}px`
  tooltip.innerText = text
  
  body.appendChild(tooltip)
}

function removeTooltip() {
  const tooltip = document.querySelector('.tooltip')
  const body = document.querySelector('body')

  body.removeChild(tooltip)
}