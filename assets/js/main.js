const main = document.querySelector('.main')
const fullscreen = document.querySelector('.fullscreen')
const loadhiddens = document.querySelectorAll('.load-hidden')
const forloads = document.querySelectorAll('.for-load')
const header = document.querySelector('.header')
const goLeftBtn = document.querySelector('.go-nav-left')
const goRightBtn = document.querySelector('.go-nav-right')
const mainSliderWrapper = document.querySelector(
	'.main__slider .swiper-wrapper'
)

const burger = document.getElementById('burger')
const respomenu = document.getElementById('respomenu')
const matchmadia = window.matchMedia('(min-width: 1024px)')
const respoMainSlider = new Swiper('.respo-main-slider__container', {
	init: false,
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
const projectsSlider = new Swiper('.projects-slider', {
	// init: false,
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	spaceBetween: 10,
	grabCursor: true,
	// loop: true,
	// autoplay: {
	// 	delay: 3500,
	// 	disableOnInteraction: true,
	// },
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.projectSliderPagination',
	},
	breakpoints: {
		1025: {
			spaceBetween: 25
		}
	}
})
const partnerssSlider = new Swiper('.partners_slider', {
	slideToClickedSlide: true,
	slidesPerView: 3,
	grabCursor: true,
	spaceBetween: 25,
	loop: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: true,
	},
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.partners__content__logos__pagination',
	},
})
const partnerssSliderRespo = new Swiper('.partners-sliderRespo', {
	slideToClickedSlide: true,
	slidesPerView: 'auto',
	grabCursor: true,
	spaceBetween: 10,
	loop: true,
	autoplay: {
		delay: 3500,
		disableOnInteraction: true,
	},
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.partners__content__logosRespo__pagination',
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
	init: false,
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
	init: false,
	slidesPerView: 1,
	spaceBetween: 25,
	grabCursor: true,
	pagination: {
		el: '.swiper-paginationRightt',
	},
	thumbs: {
		swiper: mainSliderLeft,
	},
})
window.addEventListener('load', () => {	
	mainSliderRight.init()
	mainSliderLeft.init()
	respoMainSlider.init()
	main.classList.add('loaded')
	setTimeout(() => {
		fullscreen.classList.add('hidden')
		loadhiddens.forEach(loadhidden => {
			loadhidden.classList.remove('load-hidden')
		})
	}, 801)
	setTimeout(() => {
		forloads.forEach(forload => {
			forload.classList.add('loaded')
		})
	}, 800)
	setTimeout(() => {
		forloads.forEach(forload => {
			forload.classList.remove('loaded')
			forload.classList.remove('for-load')
			// main.classList.remove('loaded')
		})
	}, 2400);
	aboutImgHeightFix()
})
burger.addEventListener('click', () => {
	respomenu.classList.toggle('active')
})

