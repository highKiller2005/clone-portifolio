function paralax() {
  const imageContainer = document.querySelector('.header-image-container')
  const containerChildren = imageContainer.querySelector('div')
  const image = document.createElement('div')

  image.classList.add('header-image')
  image.style.transform = `translate3d(0px, ${window.scrollY / 2}px, 0px)`

  imageContainer.removeChild(containerChildren)
  imageContainer.appendChild(image)
}