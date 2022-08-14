import {Link} from 'react-router-dom'
import Authotr from './Authotr'
function Header() {
	return (
		<div className="d-none d-lg-block">
			<div className="header-area right-header-style d-flex">
				<div className="logo-area logo-custom-css">
					<Link className="logo-light" to="/">
						<img src="assets/images/logo/logo-white.png" alt="nft-logo" />
					</Link>
					<Link className="logo-dark" to="/">
						<img src="assets/images/logo/logo-dark.png" alt="nft-logo" />
					</Link>
				</div>
{/* changes */}<Authotr/>
				<div className="sidebar-nav-wrapper">
					<nav className="mainmenu-nav">
						<ul className="mainmenu list-group">
							<li className="nav-item">
								<a className="nav-link smoth-animation" href="#list-item-1">
									{' '}
									<i data-feather="home" />
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link smoth-animation" href="#list-item-2">
									{' '}
									<i data-feather="heart" />
									Live Auction
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link smoth-animation" href="#list-item-3">
									{' '}
									<i data-feather="trending-up" />
									Explore Product
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link smoth-animation" href="#list-item-4">
									{' '}
									<i data-feather="trending-up" />
									Newest Item
								</a>
							</li>
						</ul>
					</nav>
					<div className="help-center-area mainmenu-nav mt--30">
						<ul className="mainmenu">
							<li className="nav-item">
								<a className="nav-link" href="#">
									{' '}
									<i data-feather="settings" />
									Settings
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									{' '}
									<i data-feather="activity" />
									Help Center
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
