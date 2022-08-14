import useCDN from '../../../hooks/useCDN'
import Bereadcrumb from '../../layout/Bereadcrumb'
import RankingTable from './RankingTable'

const bereadcrumb = [
	{
		id: 5234,
		url: '/',
		name: 'Home',
	},
	{
		id: 343457,
		url: '/',
		name: 'Ranking',
	},
]

function UpcomingProjects() {
	useCDN()

	return (
		<>
			<Bereadcrumb title="Our Top NFTs" pages={bereadcrumb} />
			<div className="rn-upcoming-area rn-section-gap">
				<div className="container">
					<RankingTable />
				</div>
			</div>
		</>
	)
}

export default UpcomingProjects
