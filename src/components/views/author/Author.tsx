import Header from '../../layout/Header'
import PopupMobileMenu from '../../layout/PopupMobileMenu'
import Footer from '../../layout/Footer'
import CopyrightFooter from '../../layout/CopyrightFooter'
import Cursor from '../../layout/Cursor'
import TopToBottom from '../../layout/TopToBottom'
import ShareModal from '../../globals/ShareModal'
import ReportModal from '../../globals/ReportModal'
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import Profile from './Profile'
import {Baseurl} from '../../baseurl'
import useCDN from '../../../hooks/useCDN'
import {NewUser} from './AuthorUnsigned'
import AuthorData from './AuthorData'
import {ethers} from 'ethers'
import {useState,useEffect} from 'react'
function Author() {
	useCDN()
	const [user,setUser]=useState("new")

	const checkuser=async()=>{

		const [account]= await window.ethereum.request({method: 'eth_requestAccounts'});
		const provider=new ethers.providers.Web3Provider(window.ethereum)
		const balance= await provider.getBalance(account)
		const address= await provider._getAddress(account)
		console.log(address)
		try {
			const res = await axios.get(`${Baseurl}/nft/checkuser/${address}/`);
      		if (res.data.msg ==="success") {
				  setUser("old")
				  console.log(user)
			  }
		} catch (error:any) {
			if (error.response.status ===404) {
				console.log(error)
				setUser("new")
				console.log(user)

			}
		}
	}
useEffect(() => {

	setUser("new")
	checkuser()
},[])
if (user==="old") {



	return (
		<>
			<AuthorData />
			<Profile/>
			<ShareModal />
			<ReportModal />
		</>
	)
}


else{
	return (
		<>
			<NewUser user={user}/>
			<Profile/>
			<ShareModal />
			<ReportModal />
		</>
	)
	}
}
export default Author
