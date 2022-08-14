import useCDN from '../../../hooks/useCDN'
import FollowingActivity from './FollowingActivity'

function Acitvity() {
	useCDN()

	return (
		<div>
			<FollowingActivity />
		</div>
	)
}

export default Acitvity
