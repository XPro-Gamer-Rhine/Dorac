import {useState,useEffect} from 'react'
import {ethers} from 'ethers'
import Web3Modal from 'web3modal'
import Marketplace from '../../../NFTMarket.json';
import NFTDog from '../../../DogNFT.json';
import { useMoralisQuery } from "react-moralis";
import {Link} from 'react-router-dom'
import Moralis from "moralis";
const INFURA_ID = '22348f916b8944be930ac83951a7a245'
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${INFURA_ID}`)
const marketplaceAddress="0xD912a45382EE246fFcFf2cc38a594DefD1F71Bb0"
const DogAdress="0xc80Fd27169394D67adCDBdA5835C6F56b39E7D79"
const Market = new ethers.Contract(marketplaceAddress, Marketplace.abi, provider)
const Dog= new ethers.Contract(DogAdress,NFTDog.abi, provider)




export default function Owned() {
   const [allNft,SetAllNft]= useState(null);
   const [loading,setLoading]=useState(false);
   const [error,setError]=useState(false);
   const { fetch } = useMoralisQuery("AllToken", (query) => query, [], {
    autoFetch: false,
  });
// only owned item that arent on sale yet
 const getOwned= async ()=> {
   let allItems=[]
   let ownedNft=[]
   const [account]= await window.ethereum.request({method: 'eth_requestAccounts'});
   const provider=new ethers.providers.Web3Provider(window.ethereum)
   const address= await provider._getAddress(account)
   let lowerCaseAddress=address.toLowerCase()
    const results = await fetch();
    const Items = Moralis.Object.extend("AllItemsMarket");
    const Itemquery = new Moralis.Query(Items);
    Itemquery.equalTo("owner", lowerCaseAddress);
    const ItemsResults = await Itemquery.find();

    const options = {
        chain: "mumbai",
        address: `${address}`,
        token_address: "0xB36992621835Df09618c7e24A6b6201a2c5DcD86",
      };
      const polygonNFTs = await Moralis.Web3API.account.getNFTsForContract(options);
    // console.log(polygonNFTs.result)
    // console.log(ItemsResults)

    let getmarket = () => {
      for (let i in ItemsResults) {
        const element = ItemsResults[i];

       if (element.attributes.status !==true) {
        allItems.push(
       element.attributes.tokenID,

        );
       }

      }
    };
    getmarket()
    console.log(allItems)
    const Alltokens = polygonNFTs.result.filter(checkInmarket);
      console.log(Alltokens)
    function checkInmarket(obj) {
      return !allItems.includes(obj.token_id);
    }
    SetAllNft(Alltokens)
    setLoading(false)
    setError(false)
 }

// putting onsale
const putOnsale = async(id) =>{
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
		 let intId=parseInt(id)
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
			  

		}


useEffect(() => {
  SetAllNft(null)
   setLoading(true)
  setError(false)
  getOwned()
},[])




  if (loading && allNft===null) {
     return(
        <div className="row g-5 my-2">
      {/* place holder */}
    <div className="ph-item col-lg-3 col-sm-12 col-md-6 bg-dark ">
      <div className="ph-col-12">
        <div className="ph-picture" />
        <div className="ph-row">
          <div className="ph-col-6 big" />
          <div className="ph-col-4 empty big" />
          <div className="ph-col-2 big" />
          <div className="ph-col-4" />
          <div className="ph-col-8 empty" />
          <div className="ph-col-6" />
          <div className="ph-col-6 empty" />
          <div className="ph-col-12" />
        </div>
      </div>

    </div>{/* place holder */}
    <div className="ph-item col-lg-3 col-sm-12 col-md-6 bg-dark ">
      <div className="ph-col-12">
        <div className="ph-picture" />
        <div className="ph-row">
          <div className="ph-col-6 big" />
          <div className="ph-col-4 empty big" />
          <div className="ph-col-2 big" />
          <div className="ph-col-4" />
          <div className="ph-col-8 empty" />
          <div className="ph-col-6" />
          <div className="ph-col-6 empty" />
          <div className="ph-col-12" />
        </div>
      </div>

    </div>{/* place holder */}
    <div className="ph-item col-lg-3 col-sm-12 col-md-6 bg-dark ">
      <div className="ph-col-12">
        <div className="ph-picture" />
        <div className="ph-row">
          <div className="ph-col-6 big" />
          <div className="ph-col-4 empty big" />
          <div className="ph-col-2 big" />
          <div className="ph-col-4" />
          <div className="ph-col-8 empty" />
          <div className="ph-col-6" />
          <div className="ph-col-6 empty" />
          <div className="ph-col-12" />
        </div>
      </div>

    </div>{/* place holder */}
    <div className="ph-item col-lg-3 col-sm-12 col-md-6 bg-dark ">
      <div className="ph-col-12">
        <div className="ph-picture" />
        <div className="ph-row">
          <div className="ph-col-6 big" />
          <div className="ph-col-4 empty big" />
          <div className="ph-col-2 big" />
          <div className="ph-col-4" />
          <div className="ph-col-8 empty" />
          <div className="ph-col-6" />
          <div className="ph-col-6 empty" />
          <div className="ph-col-12" />
        </div>
      </div>

    </div>{/* place holder */}
        </div>

     )
  }
  else if(allNft && !loading) {
     return(


            <>
            {allNft.map((item)=>{
            return(
                <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12 my-2" key={item.token_id}>
                    <div className="product-style-one no-overlay with-placeBid">
                        <div className="card-thumbnail">
                            <Link to={"/myNft-details/"+ item.token_id}>
                                <img src={item.token_uri} alt="NFT_portfolio"/>
                            </Link >
                        </div>
                        <button className="btn btn-primary my-5" onClick={()=>{putOnsale(item.token_id)}}>
                          Put On Sale
                        </button>
                    </div>
            </div>
            )


            })}
        </>

     )
  }
  else {
     return (
        <h4>loading ...</h4>
     )
  }
}
