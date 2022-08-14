
import {Link} from 'react-router-dom'

import {useState, useEffect} from "react"

import { ethers } from 'ethers'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import {Baseurl} from '../../baseurl'
import { useMoralis } from "react-moralis"
function Topbar() {
let navigate=useNavigate()

const INFURA_ID = '22348f916b8944be930ac83951a7a245'
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${INFURA_ID}`)
const { authenticate, isAuthenticated, user } = useMoralis();



const [conecction, setConecction] = useState("connect")
useEffect(() => {
	if (window.ethereum.isConnected) {
		const show=async()=>{
		const [account]= await window.ethereum.request({method: 'eth_requestAccounts'});
		const provider=new ethers.providers.Web3Provider(window.ethereum)
		const balance= await provider.getBalance(account)
		const address= await provider._getAddress(account)
		let first=address.slice(0,4)
		let last=address.slice(40)
		setConecction(first+"...."+last)	
		}
		show()
	}
	else{
		setConecction("Connect")
	}
	
},[])
	const wallet_connect=async()=>{

		const [account]= await window.ethereum.request({method: 'eth_requestAccounts'});
		const provider=new ethers.providers.Web3Provider(window.ethereum)
		const balance= await provider.getBalance(account)
		const address= await provider._getAddress(account)
		console.log(address)
		setConecction(address)
		try {
			const res = await axios.get(`${Baseurl}/nft/checkuser/${address}/`);
      		if (res.data.msg ==="success") {
				  let path='/author'
				 navigate(path) 
			  }
		} catch (error:any) {
			if (error.response.status ===404) {
				let path='/author'
				navigate(path)
			}
		}
	}
	


	const login = async () => {
		
			if (window.screen.orientation===undefined) {
				const login = async () => {
					if (!isAuthenticated) {
			  
					  await authenticate({ provider: "walletconnect" })
						.then(function (user) {
							console.log(user!.get("ethAddress"))
						})
						.catch(function (error) {
						  console.log(error);
					});
				}
			}
			}
			else {
			const [account]= await window.ethereum.request({method: 'eth_requestAccounts'});
			const provider=new ethers.providers.Web3Provider(window.ethereum)
			const balance= await provider.getBalance(account)
			const address= await provider._getAddress(account)
			console.log(address)
			try {
				const res = await axios.get(`${Baseurl}/nft/checkuser/${address}/`);
				if (res.data.msg ==="success") {
					let path='/author'
					navigate(path) 
				}
			} catch (error:any) {
				if (error.response.status ===404) {
					let path='/author'
					navigate(path)
			}
		}
			
	
			
		  }	
	console.log("login")
	  }
  
  
    
	return (
		<div className="rn-top-bar-area">
			<div className="d-none d-lg-block">
				<div className="input-group">
					<input type="text" placeholder="Search Here..." className="form-control bg-color--2" />
					<div className="input-group-append">
						<button className="btn btn-primary-alta btn-outline-secondary" type="button">
							<i data-feather="search" />
						</button>
					</div>
				</div>
			</div>
			<div className="contact-area">
				<div className="rn-icon-list setting-option d-block d-lg-none">
					<div className="icon-box search-mobile-icon">
						<button>
							<i className="feather-search" />
						</button>
					</div>
					<form id="header-search-1" action="#" method="GET" className="large-mobile-blog-search">
						<div className="rn-search-mobile form-group">
							<button type="submit" className="search-button">
								<i className="feather-search" />
							</button>
							<input type="text" placeholder="Search ..." />
						</div>
					</form>
				</div>
				<div className="setting-option">
					<div className="icon-box">
						<a title="Contact With Us" href="contact.html">
							<i className="feather-phone" />
						</a>
					</div>
				</div>
				<div className="setting-option">
					<div className="icon-box">
						<a title="Message" href="#">
							<i className="feather-message-circle" />
						</a>
					</div>
				</div>
				<div className="setting-option header-btn">
					<div className="icon-box">
						<Link className="btn btn-primary-alta btn-small" to="/create">
							Create
						</Link>
					</div>
				</div>
				<div className="setting-option header-btn">
					<div className="icon-box">
						<a className="btn btn-primary-alta btn-small" onClick={login}>
							SIGNUP
						</a>
					</div>
				</div>
				<div className="setting-option mobile-menu-bar ml--5 d-block d-lg-none">
					<div className="hamberger icon-box">
						<button className="hamberger-button">
							<i className="feather-menu" />
						</button>
					</div>
				</div>
				<div className="setting-option rbt-site-header ml--5" id="rbt-site-header">
					<div className="icon-box">
						 <button className="btn btn-prmary" onClick={wallet_connect}>
						 	{conecction}
						 </button>
					</div>
				</div>
				<div className="header_admin" id="header_admin">
					<div className="setting-option rn-icon-list user-account">
						<div className="icon-box">
							<a href="author.html">
								<img src="assets/images/icons/boy-avater.png" alt="Images" />
							</a>
							<div className="rn-dropdown">
								<div className="rn-inner-top">
									<h4 className="title">
										<a href="product-details.html">Christopher William</a>
									</h4>
									<span>
										<a href="#">Set Display Name</a>
									</span>
								</div>
								<div className="rn-product-inner">
									<ul className="product-list">
										<li className="single-product-list">
											<div className="thumbnail">
												<a href="product-details.html">
													<img
														src="assets/images/portfolio/portfolio-07.jpg"
														alt="Nft Product Images"
													/>
												</a>
											</div>
											<div className="content">
												<h6 className="title">
													<a href="product-details.html">Balance</a>
												</h6>
												<span className="price">25 ETH</span>
											</div>
											<div className="button" />
										</li>
										<li className="single-product-list">
											<div className="thumbnail">
												<a href="product-details.html">
													<img
														src="assets/images/portfolio/portfolio-01.jpg"
														alt="Nft Product Images"
													/>
												</a>
											</div>
											<div className="content">
												<h6 className="title">
													<a href="product-details.html">Balance</a>
												</h6>
												<span className="price">25 ETH</span>
											</div>
											<div className="button" />
										</li>
									</ul>
								</div>
								<div className="add-fund-button mt--20 pb--20">
									<a className="btn btn-primary-alta w-100" href="connect.html">
										Add Your More Funds
									</a>
								</div>
								<ul className="list-inner">
									<li>
										<Link to="/author">My Profile</Link>
									</li>
									<li>
										<Link to="/author">Edit Profile</Link>
									</li>
									<li>
										<a href="#">Manage funds</a>
									</li>
									<li>
										<a href="#">Sign Out</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div id="my_switcher" className="my_switcher setting-option">
					<ul>
						<li>
							<a href="#" data-theme="light" className="setColor light">
								<img src="assets/images/icons/sun-01.svg" alt="Sun images" />
							</a>
						</li>
						<li>
							<a href="#" data-theme="dark" className="setColor dark">
								<img src="assets/images/icons/vector.svg" alt="Vector Images" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}
export default Topbar
