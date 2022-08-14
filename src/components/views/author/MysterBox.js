import Moralis from 'moralis'
import {ethers} from 'ethers'
import Web3Modal from "web3modal"
// import Marketplace from "../../../NFTMarket.json";
import NFTDog from "../../../DogNFT.json";
import {useState,useEffect} from 'react'
export default function MysterBox() {
    const [ MysterBoxnNft,SetMysterBoxnNft] = useState(null)
    const [ loading,setLoading] = useState(true)
    const allNft= async()=>{
        const [account]= await window.ethereum.request({method: 'eth_requestAccounts'});
        const provider=new ethers.providers.Web3Provider(window.ethereum)
        const balance= await provider.getBalance(account)
        const address= await provider._getAddress(account)
        const options1 = {
            chain: "mumbai",
            address: `${address}`,

            token_address: "0xc80Fd27169394D67adCDBdA5835C6F56b39E7D79",
          };
          const Dog = await Moralis.Web3API.account.getNFTsForContract(options1);
          SetMysterBoxnNft(Dog.result)
    }
    const createMyterBox= async(tokeId,uri)=>{
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        let id=parseInt(tokeId)
        const contract = new ethers.Contract("0xc80Fd27169394D67adCDBdA5835C6F56b39E7D79", NFTDog.abi, signer)
        const contract1 = new ethers.Contract("0xB36992621835Df09618c7e24A6b6201a2c5DcD86", NFTDog.abi, signer)
        contract.approve("0xB36992621835Df09618c7e24A6b6201a2c5DcD86",id).then((result)=>{
             contract1.burnNFT(id).then(() =>{
                contract1.createCollectible(uri,"sample","sample","sample","sample","sample","sample","sample").then(() =>{
                    console.log("worked..................")
                })
            })
        })
       
        console.log("created",tokeId);
    }
    useEffect(()=>{
        SetMysterBoxnNft(null)
        setLoading(true)
        allNft()
    },[])

    if (MysterBoxnNft!=null || !loading) {
      return(
    <>
        {MysterBoxnNft.map((item)=>{
        return(
            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12" key={item.token_id}>
        <div className="product-style-one no-overlay with-placeBid">
            <div className="card-thumbnail">
                <a href="product-details.html">
                    <img src={item.token_uri} alt="NFT_portfolio"/>
                </a>
                
            </div>
            <button href="#" className="btn btn-sm btn-primary" style={{marginTop:"30px"}} onClick={()=>{createMyterBox(item.token_id,item.token_uri)}}>
               CreateMyterBox 
            </button>
        </div>
        </div>
        )
      }) }
    </>
        
      )  
    }
    else{
        return (
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
}
