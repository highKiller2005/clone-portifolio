addEventListener('load', start)
addEventListener('scroll', () => {
  handleScroll()
  paralax()
})

function start() {
  /**
   * @type {NodeListOf<HTMLAnchorElement>}
   */
  const buttons = document.querySelectorAll('.tooltip-trigger')

  for (const button of buttons) {
    button.addEventListener('mouseenter', () => handleTooltipMouseEnter(button))
    button.addEventListener('mouseout', () => handleTooltipMouseOut(button))
  }

  const navigationMenuContents = document.querySelectorAll('.navigation-menu-content')

  for (const navigationMenuContent of navigationMenuContents) {
    createCollapsible(navigationMenuContent, data.pages)
  }

  const header = document.querySelector('header')
  const title = header.querySelector('h1').innerText.toLocaleLowerCase()

  document.title = `Thiago Luciano da Silveira - ${title.charAt(0).toUpperCase() + title.slice(1)}`
}
