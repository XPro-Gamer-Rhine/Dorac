import { Link } from 'react-router-dom'

function Navlinks({ closer }: { closer?: () => void }) {
	return (
		<ul className="mainmenu">
			<li>
				<Link onClick={closer} to="/">
					Home
				</Link>
			</li>
			<li>
				<Link onClick={closer} to="/about">
					About
				</Link>
			</li>
			<li>
				<Link onClick={closer} to="/explore-eight">
					Explore Eight
				</Link>
			</li>
			<li className="with-megamenu">
				<a href="#">Pages</a>
				<div className="rn-megamenu">
					<div className="wrapper">
						<div className="row row--0">
							<div className="col-lg-4 single-mega-item">
								<ul className="mega-menu-item">
									<li>
										<Link onClick={closer} to="/create">
											Create NFT
											<i data-feather="file-plus" />
										</Link>
									</li>
									<li>
										<Link onClick={closer} to="/activity">
											Activity
											<i data-feather="activity" />
										</Link>
									</li>
									<li>
										<Link onClick={closer} to="/upcoming_projects">
											Upcoming Projects
											<i data-feather="loader" />
										</Link>
									</li>
								</ul>
							</div>
							<div className="col-lg-4 single-mega-item">
								<ul className="mega-menu-item">
									<li>
										<Link onClick={closer} to="/author">
											Author/Profile(User){' '}
											<i data-feather="user" />
										</Link>
									</li>
									<li>
										<Link onClick={closer} to="/404">
											404 <i data-feather="alert-triangle" />
										</Link>
									</li>
									<li>
										<Link onClick={closer} to="/privacy-policy">
											Privacy Policy
											<i data-feather="file-text" />
										</Link>
									</li>
								</ul>
							</div>
							<div className="col-lg-4 single-mega-item">
								<ul className="mega-menu-item">
									<li>
										<Link onClick={closer} to="/ranking">
											NFT Ranking
											<i data-feather="trending-up" />
										</Link>
									</li>
									<li>
										<Link onClick={closer} to="/product-details">
											Product Details
											<i data-feather="trending-up" />
										</Link>
									</li>
									<li>
										<Link onClick={closer} to="/edit-profile">
											Edit Profile
											<i data-feather="edit" />
										</Link>
									</li>
									<li>
										<Link onClick={closer} to="/about">
											About Us
											<i data-feather="award" />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</li>
			<li className="has-droupdown has-menu-child-item">
				<a className="down" href="blog.html">
					Blog
				</a>
				<ul className="submenu">
					<li>
						<a href="blog-single-col.html">
							Blog Single Column
							<i className="feather-fast-forward" />
						</a>
					</li>
					<li>
						<a href="blog-col-two.html">
							Blog Two Column
							<i className="feather-fast-forward" />
						</a>
					</li>
					<li>
						<a href="blog-col-three.html">
							Blog Three Column
							<i className="feather-fast-forward" />
						</a>
					</li>
					<li>
						<a href="blog.html">
							Blog Four Column
							<i className="feather-fast-forward" />
						</a>
					</li>
					<li>
						<a href="blog-details.html">
							Blog Details
							<i className="feather-fast-forward" />
						</a>
					</li>
				</ul>
			</li>
		</ul>
	)
}

export default Navlinks
