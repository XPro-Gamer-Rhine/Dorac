import Banner from './Banner'
import CollectNFTs from './CollectNFTs'
import NuronStatistics from './NuronStatistics'
import DiscoverRare from './DiscoverRare'
import Blogs from './Blogs'
import useCDN from '../../../hooks/useCDN'

function About() {
	useCDN()

	return (
		<>
			<Banner />
			<CollectNFTs />
			<NuronStatistics />
			<DiscoverRare />
			<Blogs />
		</>
	)
}

export default About
