import Bereadcrumb from '../../layout/Bereadcrumb'
import PolicyText from './PolicyText'
import useCDN from '../../../hooks/useCDN'

const bereadcrumb = [
	{
		id: 43354584,
		url: '/',
		name: 'Home',
	},
	{
		id: 4357656384,
		url: '/',
		name: 'Follow Privacy Policy',
	},
]

function PrivacyPolicy() {
	useCDN()

	return (
		<>
			<Bereadcrumb title="Follow Privacy Policy" pages={bereadcrumb} />
			<PolicyText />
		</>
	)
}

export default PrivacyPolicy
