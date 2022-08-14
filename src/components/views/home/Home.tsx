import useCDN from '../../../hooks/useCDN'
import ReportModal from '../../globals/ReportModal'
import ShareModal from '../../globals/ShareModal'
import Cursor from '../../layout/Cursor'
import TopToBottom from '../../layout/TopToBottom'
import Banner from './Banner'
import ExploreProduct from './ExploreProduct'
import Footer from './Footer'
import Header from './Header'
import LiveBidding from './LiveBidding'
import MakeEasyer from './MakeEasyer'
import Notification from './Notification'
import PopupMobileMenu from './PopupMobileMenu'
import TopArtist from './TopArtist'
import Topbar from './Topbar'
import TopCollection from './TopCollection'

function Home() {
	useCDN()

	return (
		<div>
			<Header />
			<PopupMobileMenu />
			<div className="rn-nft-mid-wrapper">
				<div id="list-item-1">
					<Topbar />
					<Banner />
				</div>
				{/* <LiveBidding /> */}
				<TopCollection />
				<ExploreProduct />
				<MakeEasyer />
			</div>
			<div className="header-left-fixed">
				<Notification />
				<TopArtist />
			</div>
			<Footer />

			<ShareModal />
			<ReportModal />

			<Cursor />

			<TopToBottom />
		</div>
	)
}

export default Home
