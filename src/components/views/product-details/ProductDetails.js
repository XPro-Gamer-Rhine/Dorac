import Bereadcrumb from '../../layout/Bereadcrumb'
import useCDN from '../../../hooks/useCDN'
import DataContent from './DataContent'
import ProductMedia from './ProductMedia'
import TabPanel from './TabPanel'
import ItemsPreview from './ItemsPreview'
import { useParams } from 'react-router-dom'
import {ethers} from 'ethers'
import Marketplace from '../../../NFTMarket.json';
import NFTDog from '../../../DogNFT.json';
import {useEffect,useState,useCallback} from "react"
import Web3modal from "web3modal"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Baseurl} from '../../baseurl'
import Moralis from 'moralis'
import {useMoralisQuery} from 'react-moralis'
import Loading from './loading'
const bereadcrumb = [
	{
		id: 7657,
		url: '/',
		name: 'Home',
	},
	{
		id: 56345,
		url: '/',
		name: 'Product Details',
	},
]
const INFURA_ID = '22348f916b8944be930ac83951a7a245'
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${INFURA_ID}`)
const marketplaceAddress="0xe14290A27193c1a31A532e0c22Aca88565E387d0"
const DogAdress="0xB36992621835Df09618c7e24A6b6201a2c5DcD86"

const Market = new ethers.Contract(marketplaceAddress, Marketplace.abi, provider)
const Dog= new ethers.Contract(DogAdress,NFTDog.abi, provider)

function ProductDetails() {

	useCDN()
	const {itemId}=useParams()
	const [loading,setLoading]=useState(false)

	const [detail,setDetail]= useState([])
	const [sold, setSold]=useState(false)
	let basearray=[0]
	const itemArray=[]
	const { fetch } = useMoralisQuery("AllToken", (query) => query, [], {
		autoFetch: false,
	  });
	async function showDetail(itemID){

			let data=await Market.marketItemsList(itemID)
			let currentStatus=data.currentStatus.toString()
			console.log(currentStatus)
			let strtToken=data.tokenID.toString()
			let inToken=parseInt(strtToken)
			const dog=await Dog.NFTList(inToken)
			let tier=dog.TIER.toString()
			let luck =dog.LUCK.toString()
			let breedCount=dog.BREED_COUNT.toString()
			let health=dog.HEALTH.toString()
			let weight=dog.WEIGHT.toString()
			let uri=dog.TOKENURI.toString()
			let stamina=dog.STAMINA.toString()
			let agility=dog.AGILITY.toString()
			let price=ethers.utils.formatUnits(data.price.toString(), 'ether')
			let tokenId=inToken
			let data2={stamina:stamina,uri:uri,tier:tier,luck:luck,health:health,weight:weight,breedCount:breedCount,price:price,agility:agility,}
			// console.log("data",data2)/

		if (currentStatus==="1"){
			setSold(true);
		}
  // let item={market:data,token:dog}

  itemArray.push(data2)

	setDetail(itemArray)
	return itemArray

  }


 useEffect(() => {
	 showDetail(itemId)
	 setLoading(false)


},[])

const buyNft= async(price)=>{

	const web3Modal = new Web3modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const signedMarket = new ethers.Contract(marketplaceAddress, Marketplace.abi, signer)
	const prica = ethers.utils.parseUnits(price.toString(), 'ether')
	await signedMarket.sellMarketItem(itemId,{value:prica})
	signedMarket.on("ChangeOwnership",async()=>{
		const fetsh= await fetch()
		const Monster = Moralis.Object.extend("AllItemsMarket");
		const query = new Moralis.Query(Monster);
		query.equalTo("itemId", `${itemId}`);
		const results = await query.first();
		console.log(results)
		if(results) {
		results.set("status", true);
		results.save();
		}
		setSold(true)

	})
}
function checksate(){
setLoading(true)
}



	return (
		<>
			<Bereadcrumb title="Product Details" pages={bereadcrumb} />
			<div className="product-details-area rn-section-gapTop">
				<div className="container">
					<div className="row g-5">
					{detail.map((item,i) =>(
						<ProductMedia uri={item.uri} key={item.tokenId}/>
					))}
						<div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
							<div className="rn-pd-content-area">
								<DataContent />
								<div className="row">
									<div className="col-6">

										{!sold && detail.map((item,i) =>(

											<>
											{!loading &&
											<button onClick={()=>{buyNft(item.price)}}  className="btn btn-primary-alta mt--30 w-100" key={item.tokenID}>


											Buy Now {item.price}
											</button>}
											{
												loading &&
											<button className="btn btn-primary-alta mt--30 w-100" key={item.tokenID}>
												<Loading className="mx-5" />
											</button>
											}
											<ToastContainer/>

											</>

											)
										)}

									</div>

								</div>
								<div className="rn-bid-details">
								{detail.map((item,i) =>(
									<TabPanel BREED_COUNT={item.breedCount} LUCK={item.luck} WEIGHT={item.weight} HEALTH={item.health} STAMINA={item.stamina} TIER={item.tier} AGILITY={item.agility} key={item.tokeId}/>)
								)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <ItemsPreview title="Recent View" /> */}
			<ItemsPreview title="Related Item" />
		</>
	)
}

export default ProductDetails
