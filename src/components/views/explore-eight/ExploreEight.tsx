import Header from '../../layout/Header'
import PopupMobileMenu from '../../layout/PopupMobileMenu'
import Bereadcrumb from '../../layout/Bereadcrumb'
import Footer from '../../layout/Footer'
import CopyrightFooter from '../../layout/CopyrightFooter'
import Cursor from '../../layout/Cursor'
import TopToBottom from '../../layout/TopToBottom'
import ShareModal from '../../globals/ShareModal'
import ReportModal from '../../globals/ReportModal'
import CarouselArrows from './CarouselArrows'
import CarouselDot from './CarouselDots'
import CarouselBoth from './CarouselBoth'
import useCDN from '../../../hooks/useCDN'

const bereadcrumb = [
	{
		id: 35894,
		url: '/',
		name: 'Home',
	},
	{
		id: 4384,
		url: '/',
		name: ' Place Bid With Carousel',
	},
]

function ExploreEight() {
	useCDN()

	return (
		<>
			<Bereadcrumb title="Place Bid With Carousel" pages={bereadcrumb} />

			<CarouselArrows />
			<CarouselDot />
			<CarouselBoth />

			<ShareModal />
			<ReportModal />
		</>
	)
}

export default ExploreEight
