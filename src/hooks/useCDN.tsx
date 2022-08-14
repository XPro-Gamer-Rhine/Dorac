import {useEffect} from 'react'

function useCDN() {
	function removeJS() {
		window.scrollTo(0, 0)
		document!.getElementById('jsload')!.innerHTML = ''
	}
	function lazyLoadFromCDN(src: string, callback?: Function) {
		const cdn = document.createElement('script')
		cdn.setAttribute('src', src)
		cdn.addEventListener('load', () => callback?.())
		document.getElementById('jsload')?.appendChild(cdn)

		return void 0
	}

	useEffect(() => {
		removeJS()
		lazyLoadFromCDN('/assets/js/vendor/jquery.js', function () {
			lazyLoadFromCDN('/assets/js/vendor/jquery.nice-select.min.js')
			lazyLoadFromCDN('/assets/js/vendor/jquery-ui.js')
			lazyLoadFromCDN('/assets/js/vendor/modernizer.min.js')
			lazyLoadFromCDN('/assets/js/vendor/feather.min.js')
			lazyLoadFromCDN('/assets/js/vendor/slick.min.js')
			lazyLoadFromCDN('/assets/js/vendor/bootstrap.min.js')
			lazyLoadFromCDN('/assets/js/vendor/sal.min.js')
			lazyLoadFromCDN('/assets/js/vendor/particles.js')
			lazyLoadFromCDN('/assets/js/vendor/jquery.style.swicher.js')
			lazyLoadFromCDN('/assets/js/vendor/js.cookie.js')
			lazyLoadFromCDN('/assets/js/vendor/count-down.js')
			lazyLoadFromCDN('/assets/js/vendor/isotop.js')
			lazyLoadFromCDN('/assets/js/vendor/imageloaded.js')
			lazyLoadFromCDN('/assets/js/vendor/backtoTop.js')
			lazyLoadFromCDN('/assets/js/vendor/odometer.js')
			lazyLoadFromCDN('/assets/js/vendor/jquery-appear.js')
			lazyLoadFromCDN('/assets/js/vendor/scrolltrigger.js')
			lazyLoadFromCDN('/assets/js/vendor/jquery.custom-file-input.js')
			lazyLoadFromCDN('/assets/js/main.js')
			lazyLoadFromCDN('/assets/js/vendor/web3.min.js')
			lazyLoadFromCDN('/assets/js/vendor/maralis.js')
			lazyLoadFromCDN('/assets/js/vendor/nft.js')
		})
	}, [])

	return null
}

export default useCDN
