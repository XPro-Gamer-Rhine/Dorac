function DataContent() {
	return (
		<>
			<div className="pd-title-area">
				<h4 className="title">The Amazing Game</h4>
				<div className="pd-react-area">
					<div className="heart-count">
						<i data-feather="heart" />
						<span>33</span>
					</div>
					<div className="count">
						<div className="share-btn share-btn-activation dropdown">
							<button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<svg viewBox="0 0 14 4" fill="none" width={16} height={16} className="sc-bdnxRM sc-hKFxyN hOiKLt">
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
										fill="currentColor"
									/>
								</svg>
							</button>
							<div className="share-btn-setting dropdown-menu dropdown-menu-end">
								<button
									type="button"
									className="btn-setting-text share-text"
									data-bs-toggle="modal"
									data-bs-target="#shareModal"
								>
									Share
								</button>
								<button
									type="button"
									className="btn-setting-text report-text"
									data-bs-toggle="modal"
									data-bs-target="#reportModal"
								>
									Report
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<span className="bid">
				Height bid <span className="price">0.11wETH</span>
			</span>
			<h6 className="title-name">#22 Portal , Info bellow</h6>
			<div className="catagory-collection">
				<div className="catagory">
					<span>
						Catagory <span className="color-body">10% royalties</span>
					</span>
					<div className="top-seller-inner-one">
						<div className="top-seller-wrapper">
							<div className="thumbnail">
								<a href="#">
									<img src="/assets/images/client/client-1.png" alt="Nft_Profile" />
								</a>
							</div>
							<div className="top-seller-content">
								<a href="#">
									<h6 className="name">Brodband</h6>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="collection">
					<span>Collections</span>
					<div className="top-seller-inner-one">
						<div className="top-seller-wrapper">
							<div className="thumbnail">
								<a href="#">
									<img src="/assets/images/client/client-2.png" alt="Nft_Profile" />
								</a>
							</div>
							<div className="top-seller-content">
								<a href="#">
									<h6 className="name">Brodband</h6>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DataContent
