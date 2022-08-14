import {useState,useEffect} from 'react'
import {ethers} from 'ethers'
import { useMoralisQuery, useMoralis } from "react-moralis";
import Moralis from "moralis";
import { Link } from "react-router-dom";
import Marketplace from '../../../NFTMarket.json';
import NFTDog from '../../../DogNFT.json';
const INFURA_ID = '22348f916b8944be930ac83951a7a245'
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${INFURA_ID}`)
const marketplaceAddress="0xD912a45382EE246fFcFf2cc38a594DefD1F71Bb0"
const DogAdress="0xc80Fd27169394D67adCDBdA5835C6F56b39E7D79"
const myterybox="0xe5BAd6ae12efD5C3526a59224d5Efb98ecf88351"
const Market = new ethers.Contract(marketplaceAddress, Marketplace.abi, provider)
const Dog= new ethers.Contract(DogAdress,NFTDog.abi, provider)



function ItemsPreview( props) {
	const [allNft,SetAllNft]= useState(null);
   const [loading,setLoading]=useState(false);
   const [error,setError]=useState(false);
   const [connected,setConnected]=useState(false);
    window.ethereum.on('accountsChanged',() => {
    window.reload();
  });
	const { fetch } = useMoralisQuery("AllToken", (query) => query, [], {
		autoFetch: false,
	  });


	  //  getting onsale nfts
	  const basicQuery2 = async () => {
		const [account]= await window.ethereum.request({method: 'eth_requestAccounts'});
		const provider=new ethers.providers.Web3Provider(window.ethereum)
		const address= await provider._getAddress(account)
		let Alltoken = [];
		let allItems = [];
		const results = await fetch();
		const Items = Moralis.Object.extend("AllItemsMarket");
		let lowerCaseAddress=address.toLowerCase()
		const Itemquery = new Moralis.Query(Items);
		Itemquery.equalTo("owner", lowerCaseAddress);
		const ItemsResults = await Itemquery.find();

		const Tokens = Moralis.Object.extend("AllToken");
		const tokeQuery = new Moralis.Query(Tokens)
		tokeQuery.equalTo("creator", lowerCaseAddress);
		const TokensResults = await tokeQuery.find();



		let getToken = () => {
		  for (let i in TokensResults) {
			const element = TokensResults[i];
		   if (element.attributes.status !==1) {
			Alltoken.push({
			  tokenId: element.attributes.tokenId,
			  uri: element.attributes.URI,
			});
		   }
		  }
		};


		let getmarket = () => {
		  for (let i in ItemsResults) {
			const element = ItemsResults[i];

		   if (element.attributes.status !==true) {
			allItems.push({
			  tokenId: element.attributes.tokenID,
			  itemId: element.attributes.itemId,
			  price: ethers.utils.formatUnits(element.attributes.price),
			});
		   }
		  }

		};
		getmarket();
		getToken();
		// function data formating

		const test = () => {
		  var owners = Alltoken ,
			cars = allItems,
			obj = {},
			result;

		  owners.forEach(function (a) {
			obj[a.tokenId] = a;
		  });

		  result = cars.map(function (a) {
			return {
			  uri: obj[a.tokenId].uri,
			  tokenId: obj[a.tokenId].tokenId,
			  itemId: a.itemId,
			  price: a.price,
			};
		  });
		  SetAllNft(result);
		  setLoading(false);
		  setError(false);
		};
		test();

	  };
	  useEffect(() => {
		SetAllNft(null)
		 setLoading(true)
		setError(false)
		basicQuery2()

	  },[])

	  if (loading && allNft===null) {
		return(
		   <div className="row g-5 my-2 container">
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
	  else if(allNft && !loading){
	return (
		<div className="rn-new-items rn-section-gapTop">
			<div className="container">
				<div className="row mb--30 align-items-center">
					<div className="col-12">
						<h3 className="title mb--0" data-sal-delay={150} data-sal="slide-up" data-sal-duration={800}>
							All Related Items
						</h3>
					</div>
				</div>
				<div className="row g-5">
					{/* start single product */}
					{allNft.map((item)=>{
            return(
            <div className="col-5 col-lg-4 col-md-6 col-sm-6 col-12 my-2" key={item.itemId}>
                    <div className="product-style-one no-overlay with-placeBid">
                        <div className="card-thumbnail">
                            <a href="product-details.html">
                                <img src={item.uri} alt="NFT_portfolio"/>
                            </a>
                        </div>
                        <div className="product-share-wrapper">
                            <div className="profile-share">
                                <a href="author.html" className="avatar" data-tooltip="Sadikur Ali">
                                    <img src="assets/images/client/client-2.png" alt="Nft_Profile"/>
                                </a>
                                <a href="author.html" className="avatar" data-tooltip="Ali">
                                    <img src="assets/images/client/client-3.png" alt="Nft_Profile"/>
                                </a>
                                <a href="author.html" className="avatar" data-tooltip="Sadikur">
                                    <img src="assets/images/client/client-4.png" alt="Nft_Profile"/>
                                </a>
                                <a className="more-author-text" href="#">
                                    9+ Place Bit.
                                </a>
                            </div>
                            <div className="share-btn share-btn-activation dropdown">
                                <button className="icon" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <svg viewBox="0 0 14 4" fill="none"
                                        width={16}
                                        height={16}
                                        className="sc-bdnxRM sc-hKFxyN hOiKLt">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z" fill="currentColor"/>
                                    </svg>
                                </button>
                                <div className="share-btn-setting dropdown-menu dropdown-menu-end">
                                    <button type="button" className="btn-setting-text share-text" data-bs-toggle="modal" data-bs-target="#shareModal">
                                        Share
                                    </button>
                                    <button type="button" className="btn-setting-text report-text" data-bs-toggle="modal" data-bs-target="#reportModal">
                                        Report
                                    </button>
                                </div>
                            </div>
                        </div>
                        <Link to={"/product-details/" + item.itemId}>
                            <span className="product-name">BadBo66</span>
                        </Link>
                        <span className="latest-bid">Highest bid 6/20</span>
                        <div className="bid-react-area">
                            <div className="last-bid">0.234wETH</div>
                            <div className="react-area">
                                <svg viewBox="0 0 17 16" fill="none"
                                    width={16}
                                    height={16}
                                    className="sc-bdnxRM sc-hKFxyN kBvkOu">
                                    <path d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z" stroke="currentColor"
                                        strokeWidth={2}/>
                                </svg>
                                <span className="number">322</span>
                            </div>
                        </div>
                    </div>
            </div>
            )
            })}
					{/* end single product */}
				</div>
			</div>
		</div>

	) }
	else{
		return(
			<h4>loading ...</h4>
		)
	}
}

export default ItemsPreview
