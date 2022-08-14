import {useState, useEffect} from 'react'
import {UploadIpfs} from './ipfs'
import axios from 'axios'


function CreateProduct() {
	const [image1,SetImage1]=useState("")
	const [image2,SetImage2]=useState("")
	async function handleSubmit(e:any){
		e.preventDefault()
		if (window.ethereum.isConnected()) {
			console.log("connected")
			console.log("success")
			console.log(e.target.username.value)
	
		}
		else{
			console.log("not connected")
		}
		
	}
	async function showPreview(event:any){
		if(event.target.files.length > 0){
		  var src2 = URL.createObjectURL(event.target.files[0]);
		 const url= await UploadIpfs(event.target.files[0])
		 console.log(url)
		 if (url !==undefined) {
			
			SetImage1(url)
		 }
		
		}
	  }
	  async function showPreview2(event:any){
		if(event.target.files.length > 0){
		  var src = URL.createObjectURL(event.target.files[0]);
		  const url= await UploadIpfs(event.target.files[0])
		  console.log(url)
		  console.log("worked")
		  SetImage2(src)
		 
		}
	  }

useEffect(() => {
	SetImage1("assets/images/portfolio/portfolio-05.jpg")
	SetImage2("assets/images/portfolio/portfolio-05.jpg")
},[])
	return (
		<div className="create-area rn-section-gapTop">
			<div className="container">
			<form onSubmit={(e)=>{
					e.preventDefault()
					handleSubmit(e)
					}}>
				<div className="row g-5">
					<div className="col-lg-12 offset-1 ml_md--0 ml_sm--0">
						{/* file upload area */}
						
						<div className="upload-area 1 col-lg-12">
							<div className="upload-formate mb--30">
								<h6 className="title">Upload Profile</h6>
								<p className="formate">
									Drag or choose your file to upload
								</p>
							</div>
							<div className="brows-file-wrapper">
								{/* actual upload which is hidden */}
								<input
									name="createinputfiless"
									id="file-ip-2-preview"
									type="file"
									className="inputfile"
									onChange={(e)=>{showPreview(e)}}
									required={true}
								/>
								<img
									id="createfileImage"
									src={image1}
									alt=""
									data-black-overlay={6}
								/>
								{/* our custom upload button */}
								<label
									htmlFor="file-ip-2-preview"
									title="No File Choosen"
								>
									<i className="feather-upload" />
									<span className="text-center">Choose a File</span>
									<p className="text-center mt--10">
										PNG, GIF, WEBP, MP4 or MP3. <br /> Max 1Gb.
									</p>
								</label>
							</div>
						</div>
						<div className="upload-area  2">
							<div className="upload-formate mb--30">
								<h6 className="title mt-3">Upload Cover</h6>
								<p className="formate mt-2">
									Drag or choose your file to upload
								</p>
							</div>
							<div className="brows-file-wrapper">
								{/* actual upload which is hidden */}
								<input
									name="createinputfile1"
									id="createinputfile1"
									type="file"
									className="inputfile"
									onChange={(e:any)=>{showPreview2(e)}}
									required={true}
								/>
								<img
									id="file-ip-1-preview"
									src={image2}
									alt=""
									data-black-overlay={6}
								/>
								{/* our custom upload button */}
								<label
									htmlFor="createinputfile1"
									title="No File Choosen"
								>
									<i className="feather-upload" />
									<span className="text-center">Choose a File</span>
									<p className="text-center mt--10">
										PNG, GIF, WEBP, MP4 or MP3. <br /> Max 1Gb.
									</p>
								</label>
							</div>
						</div>
						
						
					</div>
					
				</div>
				<div className="container">
				<div className="col-lg-6">
						<div className="form-wrapper-one">
								<div className="col-md-12">
									<div className="input-box pb--20">
										<label htmlFor="name" className="form-label">
											USERNAME
										</label>
										<input
											id="name"
											placeholder="e.g Jhon Doe"
											name="username"
										/>
									</div>
								</div>
								{/*  */}

								
								<div className="col-md-12 col-xl-4">
									<div className="input-box">
										
									</div>
								</div>
								<div className="col-md-12 col-xl-12 mt_lg--15 mt_md--15 mt_sm--15">
									<div className="input-box">
										<button className="btn btn-primary form-control btn-large w-100" type="submit" >
											SIGNUP
										</button>
									</div>
								</div>
							
					</div>
					</div>
				</div>
				</form>
			</div>
		</div>
	)
}

export default CreateProduct
