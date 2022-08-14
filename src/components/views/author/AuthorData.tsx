import {useNavigate} from "react-router-dom"
import axios from 'axios'
import Profile from './Profile'
import {Baseurl} from '../../baseurl'
import useCDN from '../../../hooks/useCDN'
import {NewUser} from './AuthorUnsigned'
import {ethers} from 'ethers'
import {useState,useEffect} from 'react'
import { use } from 'chai'
import { AxiosResponse } from "axios";

export default function AuthorData() {
	const [user,setUser]=useState<AxiosResponse| null | void>(null);
	const [loading,setLoading]=useState(false)
	const [cover, Setcover]=useState("")
	const [profile, setProfile]=useState("")
	const checkuser1=async()=>{
		const [account]= await window.ethereum.request({method: 'eth_requestAccounts'});
		const provider=new ethers.providers.Web3Provider(window.ethereum)
		const balance= await provider.getBalance(account)
		const address= await provider._getAddress(account)
		console.log(address)
		try {
			const res = await axios.get(`${Baseurl}/nft/checkuser/${address}/`);
      		if (res.data.msg ==="success") {
					Setcover(res.data.data[0].cover_pic)
					setProfile(res.data.data[0].profile_pic)
				  console.log(res.data.data[0].profile_pic)
			  }
		} catch (error:any) {
			if (error.response.status ===404) {
				console.log(error)
				setUser(null)
				console.log(user)

			}
		}
	}
useEffect(() => {
	setLoading(true)
	setProfile("assets/images/profile/profile-01.jpg")
	Setcover("assets/images/profile/profile-01.jpg")
	setUser(null)
	checkuser1()
},[])
	return (
		<>
		<div className="rn-author-bg-area bg_image" style={{backgroundImage: `url(${cover})`,height:"300px" }}>
		h
		</div>
		<div className="rn-author-area mb--30 mt_dec--120">
			<div className="container">
				<div className="row padding-tb-50 align-items-center d-flex">
					<div className="col-lg-12">
						<div className="author-wrapper">
							<div className="author-inner">
								<div className="user-thumbnail">
									<img
										src={profile}
										alt=""
									/>
									
								</div>
								<div className="rn-author-info-content">
									<h4 className="title">MRS SUNAYRA AHSAN</h4>
									<a href="#" className="social-follw">
										<i data-feather="twitter" />
										<span className="user-name">it0bsession</span>
									</a>
									<div className="follow-area">
										<div className="follow followers">
											<span>
												186k{' '}
												<a href="#" className="color-body">
													followers
												</a>
											</span>
										</div>
										<div className="follow following">
											<span>
												156{' '}
												<a href="#" className="color-body">
													following
												</a>
											</span>
										</div>
									</div>
									<div className="author-button-area">
										<span className="btn at-follw follow-button">
											<i data-feather="user-plus" /> Follow
										</span>
										<span
											className="btn at-follw share-button"
											data-bs-toggle="modal"
											data-bs-target="#shareModal"
										>
											<i data-feather="share-2" />
										</span>
										<div className="count at-follw">
											<div className="share-btn share-btn-activation dropdown">
												<button
													className="icon"
													type="button"
													data-bs-toggle="dropdown"
													aria-expanded="false"
												>
													<svg
														viewBox="0 0 14 4"
														fill="none"
														width={16}
														height={16}
														className="sc-bdnxRM sc-hKFxyN hOiKLt"
													>
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
														className="btn-setting-text report-text"
														data-bs-toggle="modal"
														data-bs-target="#reportModal"
													>
														Report
													</button>
													<button
														type="button"
														className="btn-setting-text report-text"
													>
														Claim Owenership
													</button>
												</div>
											</div>
										</div>
										<a
											href="edit-profile.html"
											className="btn at-follw follow-button edit-btn"
										>
											<i data-feather="edit" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	)


}