const navBtn = document.querySelector('.nav-btn')
const nav = document.querySelector('nav ul')
let ind = false

function toggleNav() {
	if (!ind) {
		nav.style.left = '0'
		ind = !ind
	} else {
		nav.style.left = '100%'
		ind = !ind
	}
}

navBtn.addEventListener('click', toggleNav)
window.addEventListener('click', e => {
	if (e.target != navBtn) {
		nav.style.left = '100%'
		ind = false
	}
})
