import Bereadcrumb from '../../layout/Bereadcrumb'
import UpcommingTable from './UpcomingTable'
import useCDN from '../../../hooks/useCDN'

const bereadcrumb = [
	{
		id: 7657,
		url: '/',
		name: 'Home',
	},
	{
		id: 56345,
		url: '/',
		name: 'Upcoming Projects',
	},
]

function UpcomingProjects() {
	useCDN()

	return (
		<>
			<Bereadcrumb title="Upcoming NFT Projects" pages={bereadcrumb} />
			<div className="rn-upcoming-area rn-section-gap">
				<div className="container">
					{[...Array(3)].map((value, index) => (
						<UpcommingTable className={index > 0 ? 'mt--80' : ''} key={Math.random()} />
					))}
				</div>
			</div>
		</>
	)
}

export default UpcomingProjects
