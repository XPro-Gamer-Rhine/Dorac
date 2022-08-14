import {useState, useEffect} from "react"
import {ethers} from "ethers"
import {UploadIpfs} from '../create/ipfs'
import axios from "axios"
import {Baseurl} from '../../baseurl'



export const NewUser=(props)=>{
    const [image2,SetImage2]=useState("") 
	{/* cover*/}
    const [image1,SetImage1]=useState("")
	{/* profile*/}
	 async function adduser(){
		const [account]= await window.ethereum.request({method: 'eth_requestAccounts'});
		const provider=new ethers.providers.Web3Provider(window.ethereum)
		const balance= await provider.getBalance(account)
		const address= await provider._getAddress(account)
		try {
			let axiosConfig = {
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
				
				}
			  }
			  let postData={username:"sample",profile_pic:image2,cover_pic:image1,address:address}
			  
			let res = await axios.post(`${Baseurl}/nft/adduser/`,postData,axiosConfig)
			console.log(res.data)
		}catch (error){
			console.log(error)
		}
		
	}
    async function showPreview(event){
		if(event.target.files.length > 0){
		  var src2 = URL.createObjectURL(event.target.files[0]);
		 const url= await UploadIpfs(event.target.files[0])
		 console.log(url)
		 if (url !==undefined) {
			
			SetImage1(url)
		 }
		
		}
	  }
    async function showPreview2(event){
		if(event.target.files.length > 0){
		  var src = URL.createObjectURL(event.target.files[0]);
		  const url= await UploadIpfs(event.target.files[0])
		  console.log(url)
		  console.log("worked")
		  SetImage2(src)
		 
		}
	  }
    useEffect(() => {
        SetImage2("assets/images/portfolio/portfolio-05.jpg")
        SetImage1("/assets/images/profile/cover-01.jpg")
    },[])

	return (
       
        <>
        <div className="rn-author-bg-area bg_image" style={{backgroundImage: `url(${image1})` }}>
		<input type="file" name="cover" id="cover-pic" style={{height:"300px",opacity:"0",cursor: "copy"}} onChange={(e)=>{showPreview(e)}}/>
		</div>
		<div className="rn-author-area mb--30 mt_dec--120">
			<div className="container">
				<div className="row padding-tb-50 align-items-center d-flex">
					<div className="col-lg-12">
						<div className="author-wrapper">
							<div className="author-inner">
								<div className="user-thumbnail">
								<img
									id="file-ip-1-preview"
									src={image2}
									alt=""
									data-black-overlay={6}
								/>
								<input
									name="profile"
									id="createinputfile1"
									type="file"
									className="inputfile"
									onChange={(e) =>{showPreview2(e)}}
									required={true}
								style={{marginLeft:"-170px", zIndex:"10", position:"relative",height:"180px", width:"170px",opacity:"0",cursor: "copy"}} />	
									
								</div>
								<div className="rn-author-info-content">
									<h4 className="title">MRS SUNAYRA AHSAN {props.user}</h4>
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
												<button className="color-body btn" onClick={adduser}>
													Add User
												</button>
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

export default NewUser
