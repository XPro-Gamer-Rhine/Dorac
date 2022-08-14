import Bereadcrumb from '../../layout/Bereadcrumb';
import useCDN from '../../../hooks/useCDN';
import DataContent from './DataContent';
import ProductMedia from './ProductMedia';
import TabPanel from './TabPanel';
import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import Marketplace from '../../../NFTMarket.json';
import NFTDog from '../../../DogNFT.json';
import { useEffect, useState, useCallback } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from './loading';
import { useMoralisQuery } from 'react-moralis';

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
];
const INFURA_ID = '22348f916b8944be930ac83951a7a245';
const provider = new ethers.providers.JsonRpcProvider(
  `https://polygon-mumbai.infura.io/v3/${INFURA_ID}`
);
const marketplaceAddress =
  '0xe14290A27193c1a31A532e0c22Aca88565E387d0';
const DogAdress = '0xB36992621835Df09618c7e24A6b6201a2c5DcD86';

const Market = new ethers.Contract(
  marketplaceAddress,
  Marketplace.abi,
  provider
);
const Dog = new ethers.Contract(DogAdress, NFTDog.abi, provider);

function OwnedDetails() {
  useCDN();
  const { tokenId } = useParams();
  const [loading, setLoading] = useState(false);
  const [detail, setDetail] = useState([]);

  const itemArray = [];
  const { fetch } = useMoralisQuery(
    'AllToken',
    (query) => query,
    [],
    {
      autoFetch: false,
    }
  );
  async function showDetail() {
    let inToken = parseInt(tokenId);
    const dog = await Dog.NFTList(inToken);
    let tier = dog.TIER.toString();
    let luck = dog.LUCK.toString();
    let breedCount = dog.BREED_COUNT.toString();
    let health = dog.HEALTH.toString();
    let weight = dog.WEIGHT.toString();
    let uri = dog.TOKENURI.toString();
    let stamina = dog.STAMINA.toString();
    let agility = dog.AGILITY.toString();
    let tokenID = inToken;
    let data2 = {
      stamina: stamina,
      uri: uri,
      tier: tier,
      luck: luck,
      health: health,
      weight: weight,
      breedCount: breedCount,
      agility: agility,
    };
    // console.log("data",data2)/

    itemArray.push(data2);

    setDetail(itemArray);
    return itemArray;
  }

  useEffect(() => {
    showDetail();
    setLoading(false);
  }, []);

  return (
    <>
      <Bereadcrumb title="Product Details" pages={bereadcrumb} />
      <div className="product-details-area rn-section-gapTop">
        <div className="container">
          <div className="row g-5">
            {detail.map((item, i) => (
              <ProductMedia uri={item.uri} key={tokenId} />
            ))}
            <div className="col-lg-5 col-md-12 col-sm-12 mt_md--50 mt_sm--60">
              <div className="rn-pd-content-area">
                <DataContent />
                <div className="rn-bid-details">
                  {detail.map((item, i) => (
                    <TabPanel
                      BREED_COUNT={item.breedCount}
                      LUCK={item.luck}
                      WEIGHT={item.weight}
                      HEALTH={item.health}
                      STAMINA={item.stamina}
                      TIER={item.tier}
                      AGILITY={item.agility}
                      Tokenid={tokenId}
                      key={item.tokeId}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <ItemsPreview title="Recent View" /> */}
      {/* <ItemsPreview title="Related Item" /> */}
    </>
  );
}

export default OwnedDetails;
