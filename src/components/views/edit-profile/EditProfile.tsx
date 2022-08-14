import useCDN from '../../../hooks/useCDN'
import Bereadcrumb from '../../layout/Bereadcrumb'
import EditOption from './EditOption'

const bereadcrumb = [
	{
		id: 4545,
		url: '/',
		name: 'Home',
	},
	{
		id: 34232,
		url: '/',
		name: 'Edit Profile',
	},
]

function EditProfile() {
	useCDN()

	return (
		<>
			<Bereadcrumb title="Edit Profile" pages={bereadcrumb} />
			<EditOption />
		</>
	)
}

export default EditProfile
