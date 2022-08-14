import {Link} from 'react-router-dom'

function PopupMobileMenu() {
	return (
		<div className="popup-mobile-menu one-page-vavigation-popup">
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
						<button className="close-button">
							<i className="feather-x" />
						</button>
					</div>
				</div>
				<nav>
					{/* Start Mainmanu Nav */}
					<ul className="mainmenu" id="navbar-example2">
						<li className="nav-item">
							<a className="nav-link smoth-animation" href="#list-item-1">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link smoth-animation" href="#list-item-2">
								Live Auction
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link smoth-animation" href="#list-item-3">
								Newest Item
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link smoth-animation" href="#list-item-4">
								Explore Product
							</a>
						</li>
					</ul>
					{/* End Mainmanu Nav */}
				</nav>
			</div>
		</div>
	)
}

export default PopupMobileMenu
