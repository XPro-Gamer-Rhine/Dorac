function ActionDateTime() {
	return (
		<div className="place-bet-area">
			<div className="rn-bet-create">
				<div className="bid-list winning-bid">
					<h6 className="title">Winning bit</h6>
					<div className="top-seller-inner-one">
						<div className="top-seller-wrapper">
							<div className="thumbnail">
								<a href="#">
									<img src="assets/images/client/client-7.png" alt="Nft_Profile" />
								</a>
							</div>
							<div className="top-seller-content">
								<span className="heighest-bid">
									Heighest bid <a href="#">Atif aslam</a>
								</span>
								<span className="count-number">0.115wETH</span>
							</div>
						</div>
					</div>
				</div>
				<div className="bid-list left-bid">
					<h6 className="title">Auction has ended</h6>
					<div className="countdown mt--15" data-date="2025-12-09">
						<div className="countdown-container days">
							<span className="countdown-value">87</span>
							<span className="countdown-heading">D's</span>
						</div>
						<div className="countdown-container hours">
							<span className="countdown-value">23</span>
							<span className="countdown-heading">H's</span>
						</div>
						<div className="countdown-container minutes">
							<span className="countdown-value">38</span>
							<span className="countdown-heading">Min's</span>
						</div>
						<div className="countdown-container seconds">
							<span className="countdown-value">27</span>
							<span className="countdown-heading">Sec</span>
						</div>
					</div>
				</div>
			</div>
			{/* <a class="btn btn-primary-alta mt--30" href="#">Place a Bid</a> */}
			<button type="button" className="btn btn-primary-alta mt--30" data-bs-toggle="modal" data-bs-target="#placebidModal">
				Place a Bid
			</button>
		</div>
	)
}

export default ActionDateTime
