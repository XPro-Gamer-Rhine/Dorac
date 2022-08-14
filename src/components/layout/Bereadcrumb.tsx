import React from 'react'

interface Props {
	title: string
	pages: {
		id: number
		url: string
		name: string
	}[]
}

function Bereadcrumb({title, pages}: Props) {
	return (
		<div className="rn-breadcrumb-inner ptb--30">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-6 col-12">
						<h5 className="title text-center text-md-start">{title}</h5>
					</div>
					<div className="col-lg-6 col-md-6 col-12">
						<ul className="breadcrumb-list">
							{pages.map(({id, url, name}, index) => (
								<React.Fragment key={id}>
									{index !== pages.length - 1 && (
										<>
											<li className="item">
												<a href={url}>{name}</a>
											</li>
											<li className="separator">
												<i className="feather-chevron-right" />
											</li>
										</>
									)}
								</React.Fragment>
							))}
							<li className="item current">{pages[pages.length - 1].name}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Bereadcrumb
