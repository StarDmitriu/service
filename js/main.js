let collapse = document.querySelectorAll('.collapse')
collapse.forEach(item => {
	item.addEventListener('click', () => {
		item.querySelector('.wrapper').classList.toggle('open')
		item.querySelector('.collapse__content svg').classList.toggle('rotate')
		// wrapper.classList.toggle("open")
		// img.classList.toggle("rotate")
	})
})



function footerFunction() {
	let x = document.getElementById('footer__f')
	let img = document.getElementById('footer__img')
	if (x.style.display === 'none') {
		x.style.display = 'flex'
    	img.style.transform = 'rotate(180deg)'
	} else {
		x.style.display = 'none'
    	img.style.transform = 'rotate(0deg)'
	}
}

footerFunction()