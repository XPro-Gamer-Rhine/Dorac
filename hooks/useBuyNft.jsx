import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import useContract from './useContract';

const useBuyNft = () => {
  const { dogNftContract, marketContract } = useContract();
  const [ownerOf, setOwnerOf] = useState();
  const handleBuy = async (tokenID, price) => {
    const ownerOfBefore = await dogNftContract.ownerOf(tokenID);
    console.log('ownerOfBefore', ownerOfBefore);
    setOwnerOf(ownerOfBefore);
    // const options = {
    //   value: ethers.utils.formatEther(price).toString(),
    // };
    const wei = ethers.utils.parseEther(price.toString());
    const value = ethers.utils.formatEther(wei);

    await marketContract.sellMarketItem(tokenID, {
      value: String(price),
    });

    const ownerOfAfter = await dogNftContract.ownerOf(tokenID);
    console.log('ownerOfAfter', ownerOfAfter);
    setOwnerOf(ownerOfAfter);
  };
  return [handleBuy, { ownerOf }];
};

export default useBuyNft;
