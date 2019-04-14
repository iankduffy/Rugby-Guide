const scrollButton = document.getElementsByClassName("js-scroll")

Array.prototype.forEach.call(scrollButton, scroll => {
  scroll.addEventListener('click', (e) => {
    e.preventDefault()
    let targetId = scroll.hash
    let target = document.querySelector(targetId)
    
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  })
})