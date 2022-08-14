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
		name: 'Crete a New File',
	},
]

function CreateNft() {
	useCDN()

	return (
		<div>
			<Bereadcrumb title="Crete a New File" pages={bereadcrumb} />
			<CreateProduct />
			<UploadModal />
		</div>
	)
}

export default CreateNft
