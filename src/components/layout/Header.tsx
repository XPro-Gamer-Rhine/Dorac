import {Link} from 'react-router-dom'
import Navlinks from './Navlinks'
import {useState} from "react"
import {ethers} from 'ethers'
function Header() {
	const [not, setNot]=useState(true)
	const connectWallet=async () => {
		const [account]= await window.ethereum.request({method: 'eth_requestAccounts'});
		const provider=new ethers.providers.Web3Provider(window.ethereum)
		const balance= await provider.getBalance(account)
		const address= await provider._getAddress(account)
	}
	return (
		<header className="rn-header haeder-default header--sticky">
			<div className="container">
				<div className="header-inner">
					<div className="header-left">
						<div className="logo-thumbnail logo-custom-css">
							<Link className="logo-light" to="/">
								<img src="assets/images/logo/logo-white.png" alt="nft-logo" />
							</Link>
							<Link className="logo-dark" to="/">
								<img src="assets/images/logo/logo-dark.png" alt="nft-logo" />
							</Link>
						</div>
						<div className="mainmenu-wrapper">
							<nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
								<Navlinks />
							</nav>
						</div>
					</div>
					<div className="header-right">
						<div className="setting-option d-none d-lg-block">
							<form className="search-form-wrapper" action="#">
								<input type="search" placeholder="Search Here" aria-label="Search" />
								<div className="search-icon">
									<button>
										<i className="feather-search" />
									</button>
								</div>
							</form>
						</div>
						<div className="setting-option rn-icon-list d-block d-lg-none">
							<div className="icon-box search-mobile-icon">
								<button>
									<i className="feather-search" />
								</button>
							</div>
							<form id="header-search-1" action="#" method="GET" className="large-mobile-blog-search">
								<div className="rn-search-mobile form-group">
									<button type="submit" className="search-button">
										<i className="feather-search" />
									</button>
									<input type="text" placeholder="Search ..." />
								</div>
							</form>
						</div>
						<div className="setting-option header-btn rbt-site-header" id="rbt-site-header">
							<div className="icon-box">
								<button id="connectbtn" className="btn btn-primary-alta btn-small" onClick={connectWallet} >
									Wallet connect
								</button>
							</div>
						</div>
						<div className="setting-option rn-icon-list notification-badge">
							<div className="icon-box">
								<a href="activity.html">
									<i className="feather-bell" />
									{!not &&(<span className="badge">6</span>)}
									
								</a>
							</div>
						</div>
						<div className="header_admin" id="header_admin">
							<div className="setting-option rn-icon-list user-account">
								<div className="icon-box">
									<a href="author.html">
										<img src="assets/images/icons/boy-avater.png" alt="Images" />
									</a>
									<div className="rn-dropdown">
										<div className="rn-inner-top">
											<h4 className="title">
												<a href="#">Christopher William</a>
											</h4>
											<span>
												<a href="#">Set Display Name</a>
											</span>
										</div>
										<div className="rn-product-inner">
											<ul className="product-list">
												<li className="single-product-list">
													<div className="thumbnail">
														<a href="product-details.html">
															<img
																src="assets/images/portfolio/portfolio-07.jpg"
																alt="Nft Product Images"
															/>
														</a>
													</div>
													<div className="content">
														<h6 className="title">
															<a href="product-details.html">Balance</a>
														</h6>
														<span className="price">25 ETH</span>
													</div>
													<div className="button" />
												</li>
												<li className="single-product-list">
													<div className="thumbnail">
														<a href="product-details.html">
															<img
																src="assets/images/portfolio/portfolio-01.jpg"
																alt="Nft Product Images"
															/>
														</a>
													</div>
													<div className="content">
														<h6 className="title">
															<a href="product-details.html">Balance</a>
														</h6>
														<span className="price">25 ETH</span>
													</div>
													<div className="button" />
												</li>
											</ul>
										</div>
										<div className="add-fund-button mt--20 pb--20">
											<a className="btn btn-primary-alta w-100" href="connect.html">
												Add Your More Funds
											</a>
										</div>
										<ul className="list-inner">
											<li>
												<Link to="/author">My Profile</Link>
											</li>
											<li>
												<Link to="/edit-profile">Edit Profile</Link>
											</li>
											<li>
												<a href="#">Manage funds</a>
											</li>
											<li>
												<a href="#">Sign Out</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="setting-option mobile-menu-bar d-block d-xl-none">
							<div className="hamberger">
								<button className="hamberger-button">
									<i className="feather-menu" />
								</button>
							</div>
						</div>
						<div id="my_switcher" className="my_switcher setting-option">
							<ul>
								<li>
									<a href="#" data-theme="light" className="setColor light">
										<img className="sun-image" src="assets/images/icons/sun-01.svg" alt="Sun images" />
									</a>
								</li>
								<li>
									<a href="#" data-theme="dark" className="setColor dark">
										<img className="Victor Image" src="assets/images/icons/vector.svg" alt="Vector Images" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
