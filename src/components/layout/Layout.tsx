import CopyrightFooter from './CopyrightFooter'
import Cursor from './Cursor'
import Footer from './Footer'
import Header from './Header'
import PopupMobileMenu from './PopupMobileMenu'
import TopToBottom from './TopToBottom'
import {Outlet} from 'react-router-dom'

function Layout() {
	return (
		<div>
			<Header />
			<PopupMobileMenu />

			<Outlet />

			<Footer />
			<CopyrightFooter />
			<Cursor />
			<TopToBottom />
		</div>
	)
}

export default Layout
