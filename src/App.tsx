import Home from './components/views/home/Home'
import Create from './components/views/create/Create'
import CreateNft from './components/views/CreateNft/Create'
import Activity from './components/views/activity/Activity'
import UpcomingProjects from './components/views/upcoming_projects/UpcomingProjects'
import PrivacyPolicy from './components/views/privacy-policy/PrivacyPolicy'
import Ranking from './components/views/ranking/Ranking'
import Error404 from './components/views/404/Error404'
import ExploreEight from './components/views/explore-eight/ExploreEight'
import Author from './components/views/author/Author'
import EditProfile from './components/views/edit-profile/EditProfile'
import About from './components/views/about/About'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/layout/Layout'
import ProductDetails from './components/views/product-details/ProductDetails'
import OwnedDetails from './components/views/OwnedDetails/ProductDetails'
import {QueryClientProvider,QueryClient} from 'react-query'
import { ethers } from "ethers";
import Web3Modal from "web3modal";

const client=new QueryClient()
const web3Modal = new Web3Modal({
	network: "mainnet",
	cacheProvider: true,
  })
  
function App() {
	async function connectio(){
	const instance = await web3Modal.connect();

	const provider = new ethers.providers.Web3Provider(instance);
	const signer = provider.getSigner();
	provider.on("accountsChanged", (accounts: string[]) => {
		console.log("accountsChanged");
	  })};
	return (
		<QueryClientProvider client={client}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/" element={<Layout />}>
					{/* <Route path="create" element={<Create />} /> */}
					<Route path="createNft" element={<CreateNft />} />
					{/* <Route path="activity" element={<Activity />} /> */}
					{/* <Route path="upcoming_projects" element={<UpcomingProjects />} /> */}
					<Route path="privacy-policy" element={<PrivacyPolicy />} />
					<Route path="product-details/:itemId" element={<ProductDetails />} />
					<Route path="myNft-details/:tokenId" element={<OwnedDetails />} />
					{/* <Route path="ranking" element={<Ranking />} /> */}
					{/* <Route path="explore-eight" element={<ExploreEight />} /> */}
					<Route path="author" element={<Author />} />
					{/* <Route path="edit-profile" element={<EditProfile />} /> */}
					<Route path="about" element={<About />} />
					<Route path="404" element={<Error404 />} />
					<Route path="*" element={<Error404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
		</QueryClientProvider>
	)
}

export default App
