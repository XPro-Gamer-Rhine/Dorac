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
    const wei = ethers.utils.parseEther(price.toString());
    const value = ethers.utils.parseEther(price.toString());
    const gas = 450000;
    const tx = await marketContract.sellMarketItem(tokenID, {
      value: value,
    });
    console.log('tx', tx);
    const ownerOfAfter = await dogNftContract.ownerOf(tokenID);
    console.log('ownerOfAfter', ownerOfAfter);
    setOwnerOf(ownerOfAfter);
  };
  return [handleBuy, { ownerOf }];
};

export default useBuyNft;
