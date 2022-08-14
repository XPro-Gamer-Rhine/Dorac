import {useState,useEffect} from 'react'
import {ethers} from 'ethers'
import Web3Modal from 'web3modal'
import Marketplace from '../../../NFTMarket.json';
import NFTDog from '../../../DogNFT.json';
import Loading from './loading'
const INFURA_ID = '22348f916b8944be930ac83951a7a245'
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${INFURA_ID}`)
const marketplaceAddress="0xD912a45382EE246fFcFf2cc38a594DefD1F71Bb0"
const DogAdress="0xc80Fd27169394D67adCDBdA5835C6F56b39E7D79"
const Market = new ethers.Contract(marketplaceAddress, Marketplace.abi, provider)
const Dog= new ethers.Contract(DogAdress,NFTDog.abi, provider)


interface Props {
	TIER:string,
	BREED_COUNT:string
    AGILITY:string ,
    WEIGHT :string ,
	STAMINA:string,
	HEALTH:string,
    LUCK  :string,
    Tokenid :string,
	

}


function TabPanel({TIER,BREED_COUNT,AGILITY,WEIGHT,STAMINA,HEALTH,LUCK,Tokenid}: Props) {
	const [LOading, setLoadING]=useState(false)
	const [Progress, setProgress]=useState(false)
	const [Funcstate, setFuncstate ]=useState("Not approved")
	const putOnsale = async(id:any) =>{
		
		setLoadING(true)
		setProgress(true)
		console.log(id)
		console.log(typeof((document.getElementById("price") as HTMLInputElement).value))
		const web3Modal = new Web3Modal()
		const connection = await web3Modal.connect()
		const provider = new ethers.providers.Web3Provider(connection)
		const signer = provider.getSigner()
			const DogAdress="0xB36992621835Df09618c7e24A6b6201a2c5DcD86"
			const marketplaceAddress="0xe14290A27193c1a31A532e0c22Aca88565E387d0"
			let strprice =(document.getElementById("price") as HTMLInputElement).value
			const Market = new ethers.Contract(marketplaceAddress, Marketplace.abi, signer)
			const Dog= new ethers.Contract(DogAdress,NFTDog.abi, signer)
			const price = ethers.utils.parseUnits(strprice, 'ether')
			const count= await Market.marketItemCounter().toString()
			 let intId=parseInt(id)
			 
			Dog.approve(marketplaceAddress,id).then(()=>{
				Dog.on("Approval",()=>{
					setProgress(true)
					setFuncstate("Approved")
						 const adding= Market.addMarketItem(id,DogAdress,price).then(()=>{
							const marketAdedd=Market.on("AddMarketItem",(
								id,
								creator,
								tokenID,
								NFTaddress,
								price,
								owner,
								itemId)=>{
									setFuncstate("Added On Sale")
							})
						 })
					})
			})
		}
		// for error handling
		function PutForsale(id:any){
		try{
			putOnsale(id)
		}
		catch (error) {
			setLoadING(false)
			console.log(error)
		}}
			
	useEffect(() => {
		setLoadING(false)
		setProgress(false)
		setFuncstate("Not Approved")
	},[])
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
					{!LOading &&
					<>
					<button
						className="nav-link active form-controll"
						id="nav-profile-tab"
						data-bs-toggle="tab"
						data-bs-target="#nav-profile"
						type="button"
						role="tab"
						aria-controls="nav-profile"
						aria-selected="true"
						onClick={()=>{PutForsale(Tokenid)}}
					>
						Put On sale
					</button>
					
					</>
					}
					{LOading && <>
						<button className="nav-link active form-controll"
						id="nav-profile-tab"
						data-bs-toggle="tab"
						data-bs-target="#nav-profile"
						type="button"
						role="tab"
						aria-controls="nav-profile"
						aria-selected="true">
								<Loading />
						</button>
					
					</>}
					{Progress && <>
						<h4 className="">{Funcstate}</h4>
					</>}
					<input id="price" placeholder="e. g. `Prce you want to sell`"/>
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
