import {customAlert} from '../../../utilities/savePopup'

function EditOption() {
	return (
		<div className="edit-profile-area rn-section-gapTop">
			<div className="container">
				<div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
					<div className="col-12 d-flex justify-content-between mb--30 align-items-center">
						<h4 className="title-left">Edit Your Profile</h4>
						<a href="author.html" className="btn btn-primary ml--10">
							<i className="feather-eye mr--5" /> Preview
						</a>
					</div>
				</div>
				<div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
					<div className="col-lg-3 col-md-3 col-sm-12">
						{/* Start tabs area */}
						<nav className="left-nav rbt-sticky-top-adjust-five">
							<div className="nav nav-tabs" id="nav-tab" role="tablist">
								<button
									className="nav-link active"
									id="nav-home-tab"
									data-bs-toggle="tab"
									data-bs-target="#nav-home"
									type="button"
									role="tab"
									aria-controls="nav-home"
									aria-selected="true"
								>
									<i className="feather-edit" />
									Edit Profile Image
								</button>
								<button
									className="nav-link"
									id="nav-home-tabs"
									data-bs-toggle="tab"
									data-bs-target="#nav-homes"
									type="button"
									role="tab"
									aria-controls="nav-homes"
									aria-selected="false"
								>
									<i className="feather-user" />
									Personal Information
								</button>
								<button
									className="nav-link"
									id="nav-profile-tab"
									data-bs-toggle="tab"
									data-bs-target="#nav-profile"
									type="button"
									role="tab"
									aria-controls="nav-profile"
									aria-selected="false"
								>
									{' '}
									<i className="feather-unlock" />
									Change Password
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
									<i className="feather-bell" />
									Notification Setting
								</button>
							</div>
						</nav>
						{/* End tabs area */}
					</div>
					<div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
						<div className="tab-content tab-content-edit-wrapepr" id="nav-tabContent">
							{/* sigle tab content */}
							<div
								className="tab-pane fade show active"
								id="nav-home"
								role="tabpanel"
								aria-labelledby="nav-home-tab"
							>
								{/* start personal information */}
								<div className="nuron-information">
									<div className="profile-change row g-5">
										<div className="profile-left col-lg-4">
											<div className="profile-image mb--30">
												<h6 className="title">Change Your Profile Picture</h6>
												<img
													id="rbtinput1"
													src="assets/images/profile/profile-01.jpg"
													alt="Profile-NFT"
												/>
											</div>
											<div className="button-area">
												<div className="brows-file-wrapper">
													{/* actual upload which is hidden */}
													<input name="fatima" id="fatima" type="file" />
													{/* our custom upload button */}
													<label htmlFor="fatima" title="No File Choosen">
														<span className="text-center color-white">Upload Profile</span>
													</label>
												</div>
												{/* <a href="#" class="btn-primary-alta btn" onClick={customAlert.alert('Confirm to Delete Your Profile Picture?')}>Delete</a> */}
											</div>
										</div>
										<div className="profile-left right col-lg-8">
											<div className="profile-image mb--30">
												<h6 className="title">Change Your Cover Photo</h6>
												<img id="rbtinput2" src="assets/images/profile/cover-01.jpg" alt="Profile-NFT" />
											</div>
											<div className="button-area">
												<div className="brows-file-wrapper">
													{/* actual upload which is hidden */}
													<input name="nipa" id="nipa" type="file" />
													{/* our custom upload button */}
													<label htmlFor="nipa" title="No File Choosen">
														<span className="text-center color-white">Upload Cover</span>
													</label>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/* End personal information */}
							</div>
							{/* End single tabv content */}
							{/* sigle tab content */}
							<div className="tab-pane fade" id="nav-homes" role="tabpanel" aria-labelledby="nav-home-tab">
								{/* start personal information */}
								<div className="nuron-information">
									<div className="profile-form-wrapper">
										<div className="input-two-wrapper mb--15">
											<div className="first-name half-wid">
												<label htmlFor="contact-name" className="form-label">
													First Name
												</label>
												<input name="contact-name" id="contact-name" type="text" defaultValue="Mr." />
											</div>
											<div className="last-name half-wid">
												<label htmlFor="contact-name-last" className="form-label">
													Last Name
												</label>
												<input
													name="contact-name"
													id="contact-name-last"
													type="text"
													defaultValue="Sunayra"
												/>
											</div>
										</div>
										<div className="email-area">
											<label htmlFor="Email" className="form-label">
												Edit Your Email
											</label>
											<input name="email" id="Email" type="email" defaultValue="example@gmail.com" />
										</div>
									</div>
									{/* edit bio area Start*/}
									<div className="edit-bio-area mt--30">
										<label htmlFor="Discription" className="form-label">
											Edit Your Bio
										</label>
										<textarea
											id="Discription"
											defaultValue={'Hello, I am Alamin, A Front-end Developer...'}
										/>
									</div>
									{/* edit bio area End */}
									{/*  */}
									<div className="input-two-wrapepr-prifile">
										{/* start Role area */}
										<div className="role-area mt--15">
											<label htmlFor="Role" className="form-label mb--10">
												Your Role
											</label>
											<input name="Role" id="Role" type="text" defaultValue="Front-end Developer" />
										</div>
										{/* End Role area */}
										{/* select gender */}
										<select defaultValue="" className="profile-edit-select">
											<option value="">Select Your Gender</option>
											<option value={1}>Male</option>
											<option value={2}>Female</option>
											<option value={3}>Third Gender</option>
										</select>
										{/* end gender */}
									</div>
									<div className="input-two-wrapper mt--15">
										<div className="half-wid currency">
											{/* select gender */}
											<select defaultValue="" className="profile-edit-select">
												<option value="">Currency</option>
												<option value={1}>($)USD</option>
												<option value={2}>wETH</option>
												<option value={3}>BIT Coin</option>
											</select>
											{/* end gender */}
										</div>
										<div className="half-wid phone-number">
											<label htmlFor="PhoneNumber" className="form-label">
												Phone Number
											</label>
											<input
												name="contact-name"
												id="PhoneNumber"
												type="text"
												defaultValue={+880100000000}
											/>
										</div>
									</div>
									<div className="input-two-wrapper mt--15">
										<div className="half-wid currency">
											{/* select gender */}
											<select defaultValue="" className="profile-edit-select">
												<option value="">Location</option>
												<option value={1}>United State</option>
												<option value={2}>Katar</option>
												<option value={3}>Canada</option>
											</select>
											{/* end gender */}
										</div>
										<div className="half-wid phone-number">
											<label htmlFor="PhoneNumbers" className="form-label">
												Address
											</label>
											<input name="contact-name" id="PhoneNumbers" type="text" defaultValue="USA Cidni" />
										</div>
									</div>
									<div className="button-area save-btn-edit">
										<a
											href="#"
											className="btn btn-primary-alta mr--15"
											onClick={() => customAlert.alert('Cancel Edit Profile?')}
										>
											Cancel
										</a>
										<a
											href="#"
											className="btn btn-primary"
											onClick={() => {
												customAlert.alert('Successfully Saved Your Profile?')
											}}
										>
											Save
										</a>
									</div>
								</div>
								{/* End personal information */}
							</div>
							{/* End single tabv content */}
							<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
								{/* change password area Start */}
								<div className="nuron-information">
									<div className="condition">
										<h5 className="title">Create Your Password</h5>
										<p className="condition">
											Passwords are a critical part of information and network security. Passwords serve to
											protect user accounts but a poorly chosen password, if compromised, could put the
											entire network at risk.
										</p>
										<hr />
										<div className="email-area">
											<label htmlFor="Email2" className="form-label">
												Enter Email
											</label>
											<input name="email" id="Email2" type="email" defaultValue="" />
										</div>
									</div>
									<div className="input-two-wrapper mt--15">
										<div className="old-password half-wid">
											<label htmlFor="oldPass" className="form-label">
												Enter Old Password
											</label>
											<input name="pass" id="oldPass" type="password" />
										</div>
										<div className="new-password half-wid">
											<label htmlFor="NewPass" className="form-label">
												Create New Password
											</label>
											<input name="password" id="NewPass" type="password" />
										</div>
									</div>
									<div className="email-area mt--15">
										<label htmlFor="rePass" className="form-label">
											Confirm Password
										</label>
										<input name="Password" id="rePass" type="password" defaultValue="" />
									</div>
									<a
										href="#"
										className="btn btn-primary save-btn-edit"
										onClick={() => {
											customAlert.alert('Successfully Changed Password?')
										}}
									>
										Save
									</a>
								</div>
								{/* change password area ENd */}
							</div>
							<div className="tab-pane fade " id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
								{/* start Notification Setting  */}
								<div className="nuron-information">
									<h5 className="title">Make Sure Your Notification setting </h5>
									<p className="notice-disc">
										Notification Center is where you can find app notifications and Quick Settings—which give
										you quick access to commonly used settings and apps. You can change your notification
										settings at any time from the Settings app. Select Start , then select Settings
									</p>
									<hr />
									{/* start notice wrapper parrent */}
									<div className="notice-parent-wrapper d-flex">
										<div className="notice-child-wrapper">
											{/* single notice wrapper */}
											<div className="single-notice-setting">
												<div className="input">
													<input
														type="checkbox"
														id="themeSwitch"
														name="theme-switch"
														className="theme-switch__input"
													/>
													<label htmlFor="themeSwitch" className="theme-switch__label">
														<span />
													</label>
												</div>
												<div className="content-text">
													<p>Order Confirmation Notice</p>
												</div>
											</div>
											{/* single notice wrapper End */}
											{/* single notice wrapper */}
											<div className="single-notice-setting mt--15">
												<div className="input">
													<input
														type="checkbox"
														id="themeSwitchs"
														name="theme-switch"
														className="theme-switch__input"
													/>
													<label htmlFor="themeSwitchs" className="theme-switch__label">
														<span />
													</label>
												</div>
												<div className="content-text">
													<p>New Items Notification</p>
												</div>
											</div>
											{/* single notice wrapper End */}
											{/* single notice wrapper */}
											<div className="single-notice-setting mt--15">
												<div className="input">
													<input
														type="checkbox"
														id="OrderNotice"
														name="theme-switch"
														className="theme-switch__input"
													/>
													<label htmlFor="OrderNotice" className="theme-switch__label">
														<span />
													</label>
												</div>
												<div className="content-text">
													<p>New Bid Notification</p>
												</div>
											</div>
											{/* single notice wrapper End */}
											{/* single notice wrapper */}
											<div className="single-notice-setting mt--15">
												<div className="input">
													<input
														type="checkbox"
														id="newPAy"
														name="theme-switch"
														className="theme-switch__input"
													/>
													<label htmlFor="newPAy" className="theme-switch__label">
														<span />
													</label>
												</div>
												<div className="content-text">
													<p>Payment Card Notification</p>
												</div>
											</div>
											{/* single notice wrapper End */}
											{/* single notice wrapper */}
											<div className="single-notice-setting mt--15">
												<div className="input">
													<input
														type="checkbox"
														id="EndBid"
														name="theme-switch"
														className="theme-switch__input"
													/>
													<label htmlFor="EndBid" className="theme-switch__label">
														<span />
													</label>
												</div>
												<div className="content-text">
													<p>Ending Bid Notification Before 5 min</p>
												</div>
											</div>
											{/* single notice wrapper End */}
											{/* single notice wrapper */}
											<div className="single-notice-setting mt--15">
												<div className="input">
													<input
														type="checkbox"
														id="Approve"
														name="theme-switch"
														className="theme-switch__input"
													/>
													<label htmlFor="Approve" className="theme-switch__label">
														<span />
													</label>
												</div>
												<div className="content-text">
													<p>Notification for approving product</p>
												</div>
											</div>
											{/* single notice wrapper End */}
										</div>
										<div className="notice-child-wrapper"></div>
									</div>
									{/* end notice wrapper parrent */}
									<a
										href="#"
										className="btn btn-primary save-btn-edit"
										onClick={() => customAlert.alert('Successfully saved Your Notificationm setting')}
									>
										Save
									</a>
								</div>
								{/* End Notification Setting  */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default EditOption
