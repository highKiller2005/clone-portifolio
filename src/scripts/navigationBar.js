function handleScroll() {
  const nav = document.querySelector('nav')

  if (window.scrollY >= 40) {
    nav.classList.remove('initial')
  } else {
    nav.classList.add('initial')
  }
}
