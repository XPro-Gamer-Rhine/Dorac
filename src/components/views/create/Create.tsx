import useCDN from '../../../hooks/useCDN'
import Bereadcrumb from '../../layout/Bereadcrumb'
import CreateProduct from './CreateProduct'
import UploadModal from './UploadModal'

const bereadcrumb = [
	{
		id: 7657,
		url: '/',
		name: 'Home',
	},
	{
		id: 5635,
		url: '/',
		name: 'REGISTER HERE',
	},
]

function Create() {
	useCDN()

	return (
		<div>
			<Bereadcrumb title="SIGNUP" pages={bereadcrumb} />
			<CreateProduct />
			<UploadModal />
		</div>
	)
}

export default Create
