import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {ethers} from 'ethers'

export default function Authotr() {
    function limit (string = '', limit = 0) {  
        return string.substring(0, limit)
      }
    const [Balance,setBalance]=useState("0");
    async function getBalance(){
        const [account]= await window.ethereum.request({method: 'eth_requestAccounts'});
        const provider=new ethers.providers.Web3Provider(window.ethereum)
        const balance= await provider.getBalance(account)
        const signer= await provider._getAddress(account)
        const connection=window.ethereum.isConnected()
        console.log(connection)

        console.log(signer)
        interface ConnectInfo {
            chainId: string;
          }
          
          window.ethereum.on('connect',(account:any)=>{
          console.log("")
          });
        window.ethereum.on('accountsChanged', (account:any) => {
            console.log(account)
          });
        window.ethereum.on('connect', (account:any) => {
            console.log(account,"coonnected")
          });
        let formated=ethers.utils.formatEther(balance)
        let formstr=limit(formated,6)
        setBalance(formstr)
        
        

    }
    useEffect(()=>{
       
        
    },[])
  return (
    <div className="authore-profile">
    <div className="thumbnail">
        <Link to="/author">
            <img src="assets/images/client/testimonial-1.jpg" alt="Nft_marketplaces" />
        </Link>
    </div>
    <div className="au-content">
        <p className="name">Mark Jordan</p>
        <p className="blc">
            Balance:<span className="value">{Balance}</span>
        </p>
    </div>
    
</div>
  )
}

  
  