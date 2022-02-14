const navBtn = document.querySelector('.nav-btn')
const nav = document.querySelector('nav ul')
let ind = false

function toggleNav() {
	if (!ind) {
		nav.style.top = '100%'
		ind = !ind
	} else {
		nav.style.top = '-1000px'
		ind = !ind
	}
}

navBtn.addEventListener('click', toggleNav)
window.addEventListener('click', e => {
	if (e.target != navBtn) {
		nav.style.top = '-1000px'
		ind = false
	}
})
