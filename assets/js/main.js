const main = document.querySelector('.main')
const header = document.querySelector('.header')
const goLeftBtn = document.querySelector('.go-nav-left')
const goRightBtn = document.querySelector('.go-nav-right')
const mainSliderWrapper = document.querySelector(
	'.main__slider .swiper-wrapper'
)
const matchmadia = window.matchMedia('(min-width: 1024px)')
const respoMainSlider = new Swiper('.respo-main-slider__container', {
	// init: false,
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	spaceBetween: 21,
	grabCursor: true,
	loop: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: true,
	},
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.swiper-paginationR',
	},
})
respoMainSlider.slideNext()
if (!matchmadia) {
	// respoMainSlider.init()
}
const headerBotFixer = (headerMinSize) => {
	if (window.innerWidth > 1024) {
		let vhMinusHeader = window.innerHeight - headerMinSize
		let vhMinusHeaderMax = window.innerHeight - 130
		let height =
			window.pageYOffset >= vhMinusHeader
				? headerMinSize
				: window.innerHeight - window.pageYOffset

		let transformTop = window.innerHeight - height

		let offsett =
			window.pageYOffset >= window.innerHeight
				? window.innerHeight
				: window.pageYOffset

		main.style.height = `${height}px`
		document.querySelector(
			'body'
		).style.marginTop = `calc(${window.innerHeight}px + ${11}rem)`
		if (window.pageYOffset > vhMinusHeaderMax) {
			main.classList.add('scrolled')
		} else {
			main.classList.remove('scrolled')
		}
	}
}
const aboutImgHeightFix = () => {
	const img = document.querySelector('.img-outter img')
	const offWidth = img.offsetWidth
	img.style.height = offWidth
}

window.addEventListener('scroll', () => {
	headerBotFixer(65)
})
window.addEventListener('resize', () => {
	aboutImgHeightFix()
})
const mainSliderLeft = new Swiper('.sw-cntr-left', {
	// effect: 'flip',
	slidesPerView: 1,
	spaceBetween: 25,
	grabCursor: true,
	on: {
		slideChange: () => {
			mainSliderRight.slideTo(mainSliderLeft.activeIndex)
		},
	},
	navigation: {
		nextEl: '.go-nav-right',
		prevEl: '.go-nav-left',
	},
})

const mainSliderRight = new Swiper('.sw-cntr-right', {
	// effect: 'flip',
	slidesPerView: 1,
	spaceBetween: 25,
	grabCursor: true,
	on: {
		slideChangeTransitionEnd: () => {
			// console.log('haha')
		},
	},
	pagination: {
		el: '.swiper-pagination',
	},
	thumbs: {
		swiper: mainSliderLeft,
	},
})
window.addEventListener('load', () => {
	aboutImgHeightFix()
})