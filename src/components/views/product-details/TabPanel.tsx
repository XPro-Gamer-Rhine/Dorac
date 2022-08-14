interface Props {
	TIER:string,
	BREED_COUNT:string
    AGILITY:string ,
    WEIGHT :string ,
	STAMINA:string,
	HEALTH:string,
    LUCK  :string,
	

}

function TabPanel({TIER,BREED_COUNT,AGILITY,WEIGHT,STAMINA,HEALTH,LUCK}: Props) {
	return (
		<div className="tab-wrapper-one">
			<nav className="tab-button-one">
				<div className="nav nav-tabs" id="nav-tab" role="tablist">
					<button
						className="nav-link active form-controll"
						id="nav-profile-tab"
						data-bs-toggle="tab"
						data-bs-target="#nav-profile"
						type="button"
						role="tab"
						aria-controls="nav-profile"
						aria-selected="true"
					>
						Details
					</button>
				</div>
			</nav>
			<div className="tab-content rn-bid-content" id="nav-tabContent">
				
				<div className="tab-pane fade show active" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
					{/* single */}
					<div className="rn-pd-bd-wrapper">
						<div className="top-seller-inner-one">
							{/* <p class="disc">Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Doloribus debitis nemo deserunt.</p> */}
							<h6 className="name-title">Owner</h6>
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
						{/* single */}
						<div className="rn-pd-sm-property-wrapper">
							<h6 className="pd-property-title">Property</h6>
							<div className="property-wrapper">
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">TIER</span>
									<span className="color-white value">{TIER}</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">LUCK</span>
									<span className="color-white value">{LUCK}</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">BREED_COUNT</span>
									<span className="color-white value">{BREED_COUNT}</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">STAMINA</span>
									<span className="color-white value">{STAMINA}</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">AGILITY</span>
									<span className="color-white value">{AGILITY}</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">WEIGHT</span>
									<span className="color-white value">{WEIGHT}</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">HEALT</span>
									<span className="color-white value">{HEALTH}</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">CITY</span>
									<span className="color-white value">TOKYO</span>
								</div>
								{/* single property End */}
							</div>
						</div>
						{/* single */}
						{/* single */}
						<div className="rn-pd-sm-property-wrapper">
							<h6 className="pd-property-title">Catagory</h6>
							<div className="catagory-wrapper">
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">ZARY</span>
									<span className="color-white value">APP</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">SOMALIAN</span>
									<span className="color-white value">TRIBUTE</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">TUNA</span>
									<span className="color-white value">PIPE</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">BID</span>
									<span className="color-white value">BPEYti</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">ASTRAGENAKAR</span>
									<span className="color-white value">BASTARD</span>
								</div>
								{/* single property End */}
								{/* single property */}
								<div className="pd-property-inner">
									<span className="color-body type">CITY</span>
									<span className="color-white value">TOKYO</span>
								</div>
								{/* single property End */}
							</div>
						</div>
						{/* single */}
					</div>
					{/* single */}
				</div>

			</div>
		</div>
	)
}

export default TabPanel
