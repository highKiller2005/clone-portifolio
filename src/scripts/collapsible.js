/**
 * @typedef {Object} Page
 * @property {string} name
 * @property {string} path
 * @property {Array.<{ name: string, path: string }>} subpages 
 * 
 * @param {HTMLElement} element 
 * @param {Array.<Page>} pages
 */
function createCollapsible(element, pages) {
  for (const page of pages) {
    let collapsibleContent
    const collapsible = document.createElement('div')

    const title = document.createElement('div')
    const anchor = document.createElement('a')
    if (page.subpages.length > 0) {
      const button = document.createElement('button')
      const icon = document.createElement('i')
      
      icon.classList.add("fa-solid", "fa-caret-down")
      button.classList.add("icon-button")

      button.appendChild(icon)
      title.appendChild(button)

      collapsibleContent = document.createElement('div')
      collapsibleContent.classList.add('collapsible-content')
      
      // for (const subpage of page.subpages) {
        
      // }
    } else {
      const button = document.createElement('button')
      button.classList.add("icon-button")
      button.style.marginLeft = '20px'

      title.appendChild(button)
    }

    anchor.innerText = page.name
    anchor.href = `./${page.path}`

    
    title.classList.add("collapsible-title")
    collapsible.classList.add("collapsible")

    title.appendChild(anchor)
    collapsible.appendChild(title)
    collapsibleContent && collapsible.appendChild(collapsibleContent)

    element.appendChild(collapsible)
  }
}
