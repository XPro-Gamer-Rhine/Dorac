
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import Marketplace from '../../../NFTMarket.json';
import NFTDog from '../../../DogNFT.json';

function CreateProduct() {

	const main = async (i:any) => {
		const web3Modal = new Web3Modal()
    	const connection = await web3Modal.connect()
    	const provider = new ethers.providers.Web3Provider(connection)
    	const signer = provider.getSigner()
		const DogAdress="0xB36992621835Df09618c7e24A6b6201a2c5DcD86"
		const marketplaceAddress="0xe14290A27193c1a31A532e0c22Aca88565E387d0"

		const Market = new ethers.Contract(marketplaceAddress, Marketplace.abi, signer)
		const Dog= new ethers.Contract(DogAdress,NFTDog.abi, signer)
		const price = ethers.utils.parseUnits("0.2", 'ether')
		const count= await Market.marketItemCounter().toString()
		const collectible = await Dog.createCollectible(`https://gateway.pinata.cloud/ipfs/QmeCbMTa64uA2iPxAsReQFM8GmEns5rsx1RERj2VvyNHJo/0.svg`,"sample","sample","smaple","sample","sample","sample","sample")
		const event= Dog.on("CreateCollectible",(
			_creator,
			_mintingTime,
			_URI,
			_tokenId


		)=>{
		console.log("created")
		let id=_tokenId.toNumber()
		// let intId=parseInt(id)
		console.log("id",id)
		Dog.approve(marketplaceAddress,id).then(()=>{
			Dog.on("Approval",()=>{
				console.log("approved")
					 const adding= Market.addMarketItem(id,DogAdress,price).then(()=>{
						const marketAdedd=Market.on("AddMarketItem",(
							id,
							creator,
							tokenID,
							NFTaddress,
							price,
							owner,
							itemId)=>{
								 console.log("adde marketitem")
						})
					 })
				})
		})
			  })

		}


	return (
		<div className="create-area rn-section-gapTop">
			<div className="container">
				<div className="row g-5">
					<div className="col-lg-3 offset-1 ml_md--0 ml_sm--0">
						{/* file upload area */}
						<div className="upload-area">
							<div className="upload-formate mb--30">
								<h6 className="title">Upload file</h6>
								<p className="formate">
									Drag or choose your file to upload
								</p>
							</div>
							<div className="brows-file-wrapper">
								{/* actual upload which is hidden */}
								<input
									name="createinputfile"
									id="createinputfile"
									type="file"
									className="inputfile"

								/>
								<img
									id="createfileImage"
									src="assets/images/portfolio/portfolio-05.jpg"
									alt=""
									data-black-overlay={6}
								/>
								{/* our custom upload button */}
								<label
									htmlFor="createinputfile"
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
						{/* end upoad file area */}
						<div className="mt--100 mt_sm--30 mt_md--30 d-none d-lg-block">
							<h5> Note: </h5>
							<span>
								{' '}
								Service fee : <strong>2.5%</strong>{' '}
							</span>{' '}
							<br />
							<span>
								{' '}
								You will receive : <strong>25.00 ETH $50,000</strong>
							</span>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="form-wrapper-one">
							<form className="row" action="#">
								<div className="col-md-12">
									<div className="input-box pb--20">
										<label htmlFor="name" className="form-label">
											Product Name
										</label>
										<input
											id="name"
											placeholder="e. g. `Digital Awesome Game`"
										/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="input-box pb--20">
										<label
											htmlFor="Discription"
											className="form-label"
										>
											Discription
										</label>
										<textarea
											id="Discription"
											rows={3}
											placeholder="e. g. “After purchasing the product you can get item...”"
											defaultValue={''}
										/>
									</div>
								</div>
								<div className="col-md-4">
									<div className="input-box pb--20">
										<label
											htmlFor="dollerValue"
											className="form-label"
										>
											Item Price in $
										</label>
										<input
											id="dollerValue"
											placeholder="e. g. `20$`"
										/>
									</div>
								</div>
								<div className="col-md-4">
									<div className="input-box pb--20">
										<label htmlFor="Size" className="form-label">
											Size
										</label>
										<input id="Size" placeholder="e. g. `Size`" />
									</div>
								</div>
								<div className="col-md-4">
									<div className="input-box pb--20">
										<label
											htmlFor="Propertie"
											className="form-label"
										>
											Propertie
										</label>
										<input
											id="Propertie"
											placeholder="e. g. `Propertie`"
										/>
									</div>
								</div>
								<div className="col-md-12">
									<div className="input-box pb--20">
										<label
											htmlFor="Royality"
											className="form-label"
										>
											Royality
										</label>
										<input
											id="Royality"
											placeholder="e. g. `20%`"
										/>
									</div>
								</div>
								<div className="col-md-4 col-sm-4">
									<div className="input-box pb--20 rn-check-box">
										<input
											className="rn-check-box-input"
											type="checkbox"
											id="putonsale"
										/>
										<label
											className="rn-check-box-label"
											htmlFor="putonsale"
										>
											Put on Sale
										</label>
									</div>
								</div>
								<div className="col-md-4 col-sm-4">
									<div className="input-box pb--20 rn-check-box">
										<input
											className="rn-check-box-input"
											type="checkbox"
											id="instantsaleprice"
										/>
										<label
											className="rn-check-box-label"
											htmlFor="instantsaleprice"
										>
											Instant Sale Price
										</label>
									</div>
								</div>
								<div className="col-md-4 col-sm-4">
									<div className="input-box pb--20 rn-check-box">
										<input
											className="rn-check-box-input"
											type="checkbox"
											id="unlockpurchased"
										/>
										<label
											className="rn-check-box-label"
											htmlFor="unlockpurchased"
										>
											Unlock Purchased
										</label>
									</div>
								</div>
								<div className="col-md-12 col-xl-4">
									<div className="input-box">
										<button
											type="button"
											className="btn btn-primary-alta btn-large w-100"
											data-bs-toggle="modal"
											data-bs-target="#uploadModal"
										>
											Preview
										</button>
									</div>
								</div>
								<div className="col-md-12 col-xl-8 mt_lg--15 mt_md--15 mt_sm--15">
									<div className="input-box">

									</div>
								</div>
							</form>
							<button onClick={(e)=>{main(e)}} className="btn btn-primary btn-large w-100">
											Submit Item
							</button>
						</div>
					</div>
					<div className="mt--100 mt_sm--30 mt_md--30 d-block d-lg-none">
						<h5> Note: </h5>
						<span>
							{' '}
							Service fee : <strong>2.5%</strong>{' '}
						</span>{' '}
						<br />
						<span>
							{' '}
							You will receive : <strong>25.00 ETH $50,000</strong>
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CreateProduct
