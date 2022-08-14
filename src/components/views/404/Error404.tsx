import Body from './Body'
import ShareModal from '../../globals/ShareModal'
import ReportModal from '../../globals/ReportModal'
import useCDN from '../../../hooks/useCDN'

function Error404() {
	useCDN()

	return (
		<>
			<Body />
			<ShareModal />
			<ReportModal />
		</>
	)
}

export default Error404
