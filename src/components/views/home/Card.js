import { useMoralisQuery, useMoralis } from "react-moralis";
import Moralis from "moralis";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Marketplace from "../../../NFTMarket.json";
import NFTDog from "../../../DogNFT.json";
import axios from "axios";

import { Baseurl } from "../../baseurl";
import ReactPaginate from "react-paginate";
import useCDN from "../../../hooks/useCDN";
const INFURA_ID = "22348f916b8944be930ac83951a7a245";
const provider = new ethers.providers.JsonRpcProvider(
  `https://polygon-mumbai.infura.io/v3/${INFURA_ID}`
);


const marketplaceAddress = "0xD912a45382EE246fFcFf2cc38a594DefD1F71Bb0";
const DogAdress = "0xc80Fd27169394D67adCDBdA5835C6F56b39E7D79";
const Market = new ethers.Contract(
  marketplaceAddress,
  Marketplace.abi,
  provider
);
const Dog = new ethers.Contract(DogAdress, NFTDog.abi, provider);

export default function Card() {
  useCDN();
  const [allNft, SetAllNft] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { isInitialized } = useMoralis();

  async function handlePageClick(data) {
    let pageNo = data.selected + 1;

    const res = await axios.get(`${Baseurl}/nft/api/?page=${pageNo}`);
    SetAllNft(res.data);
  }

  //   just for initialized moralis
  const { fetch } = useMoralisQuery("AllToken", (query) => query, [], {
    autoFetch: false,
  });

  const basicQuery2 = async () => {
    let AllNft = [];
    let Alltoken = [];
    let allItems = [];
    const results = await fetch();
    const Items = Moralis.Object.extend("AllItemsMarket");
    const Itemquery = new Moralis.Query(Items);
    const ItemsResults = await Itemquery.find();
    const Tokens = Moralis.Object.extend("AllToken");
    const tokeQuery = new Moralis.Query(Tokens);
    const TokensResults = await tokeQuery.find();
    // console.log("result2" , TokensResults)
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
    SetAllNft(null);
    setLoading(true);
    setError(false);
    basicQuery2();
  }, []);

  if (allNft !=null && !loading) {
    return (

        <>
        <div className="col-12 my-4">
            <div className="row g-5">

          {allNft.map((item) => {

            return (


                <div className="grid-metro-item cat--1 cat--3 col-lg-3 col-sm-12 col-md-6" key={item.itemId}>
              <div className="product-style-one no-overlay">
                <div className="card-thumbnail">
                  <Link to={"product-details/" + item.itemId}>
                    <img src={item.uri} alt="NFT_portfolio" />
                  </Link>
                </div>
                <Link to={"product-details/" + item.itemId}>
                  <span className="product-name">Preatent</span>
                </Link>
                <div className="bid-react-area">
                  <div className="last-bid">
                    {item.price}
                    BNB
                  </div>
                  <div className="react-area">
                    <svg
                      viewBox="0 0 17 16"
                      fill="none"
                      width={16}
                      height={16}
                      className="sc-bdnxRM sc-hKFxyN kBvkOu"
                    >
                      <path
                        d="M8.2112 14L12.1056 9.69231L14.1853 7.39185C15.2497 6.21455 15.3683 4.46116 14.4723 3.15121V3.15121C13.3207 1.46757 10.9637 1.15351 9.41139 2.47685L8.2112 3.5L6.95566 2.42966C5.40738 1.10976 3.06841 1.3603 1.83482 2.97819V2.97819C0.777858 4.36443 0.885104 6.31329 2.08779 7.57518L8.2112 14Z"
                        stroke="currentColor"
                        strokeWidth={2}
                      />
                    </svg>
                    <span className="number">322</span>
                  </div>
                </div>
              </div>
            </div>

            )
          })}
        </div>
        </div>
        </>
      );
  }
  else {
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
