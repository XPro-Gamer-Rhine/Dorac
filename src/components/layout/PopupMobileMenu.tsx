import {useRef} from 'react'
import {Link} from 'react-router-dom'
import Navlinks from './Navlinks'

function PopupMobileMenu() {
	const closer = useRef<any>(null)
	const handleCloser = () => closer.current.click()

	return (
		<div className="popup-mobile-menu">
			<div className="inner">
				<div className="header-top">
					<div className="logo logo-custom-css">
						<Link className="logo-light" to="/">
							<img src="assets/images/logo/logo-white.png" alt="nft-logo" />
						</Link>
						<Link className="logo-dark" to="/">
							<img src="assets/images/logo/logo-dark.png" alt="nft-logo" />
						</Link>
					</div>
					<div className="close-menu">
						<button className="close-button" ref={closer}>
							<i className="feather-x" />
						</button>
					</div>
				</div>
				<nav>
					<Navlinks closer={handleCloser} />
				</nav>
			</div>
		</div>
	)
}

export default PopupMobileMenu
