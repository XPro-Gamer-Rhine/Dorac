interface Props {
	uri:string;
}

function ProductMedia({uri}: Props) {
	return (
		<div className="col-lg-7 col-md-12 col-sm-12">
			<div className="product-tab-wrapper rbt-sticky-top-adjust">
				<div className="pd-tab-inner">
					<div className="tab-content rn-pd-content" id="v-pills-tabContent">
						<div
							className="tab-pane fade show active"
							id="v-pills-home"
							role="tabpanel"
							aria-labelledby="v-pills-home-tab"
						>
							<div className="rn-pd-thumbnail">
								<img src={uri} alt="Nft_Profile" />
							</div>
						</div>
						<div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
							<div className="rn-pd-thumbnail">
								<img src="/assets/images/portfolio/lg/portfolio-02.jpg" alt="Nft_Profile" />
							</div>
						</div>
						<div
							className="tab-pane fade"
							id="v-pills-messages"
							role="tabpanel"
							aria-labelledby="v-pills-messages-tab"
						>
							<div className="rn-pd-thumbnail">
								<img src="/assets/images/portfolio/lg/portfolio-03.jpg" alt="Nft_Profile" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductMedia
