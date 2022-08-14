import Onsale from "./Onsale";
import Owned from "./Owned"
import MysterBox from "./MysterBox"
import {useState,useEffect} from 'react'

function Profile() {
	
	
	return (
		<div className="rn-authore-profile-area">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="tab-wrapper-one">
							<nav className="tab-button-one">
								<div
									className="nav nav-tabs"
									id="nav-tab"
									role="tablist"
								>
									<button
										className="nav-link"
										id="nav-home-tab"
										data-bs-toggle="tab"
										data-bs-target="#nav-home"
										type="button"
										role="tab"
										aria-controls="nav-home"
										aria-selected="false"
									>
										On Sale
									</button>
									<button
										className="nav-link active"
										id="nav-profile-tab"
										data-bs-toggle="tab"
										data-bs-target="#nav-profile"
										type="button"
										role="tab"
										aria-controls="nav-profile"
										aria-selected="true"
									>
										Owned
									</button>
									<button
										className="nav-link"
										id="nav-contact-tab"
										data-bs-toggle="tab"
										data-bs-target="#nav-contact"
										type="button"
										role="tab"
										aria-controls="nav-contact"
										aria-selected="false"
									>
										MysterBox
									</button>
								</div>
							</nav>
						</div>
					</div>
				</div>
				<div className="tab-content rn-bid-content" id="nav-tabContent">
					<div
						className="tab-pane row g-5 d-flex fade"
						id="nav-home"
						role="tabpanel"
						aria-labelledby="nav-home-tab"
					>
						{/* start single product */}
						<Onsale/>
					</div>
					<div
						className="tab-pane row g-5 d-flex fade show active"
						id="nav-profile"
						role="tabpanel"
						aria-labelledby="nav-profile-tab"
					>
						<Owned/>
					</div>
					<div
						className="tab-pane row g-5 d-flex fade"
						id="nav-contact"
						role="tabpanel"
						aria-labelledby="nav-contact-tab"
					>
						{/* start single product */}
						<MysterBox/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Profile