interface Props {
	className: string
}

function UpcommingTable({className}: Props) {
	return (
		<div className={`row ${className}`}>
			<div className="col-12">
				{/* start Table Title */}
				<div className="table-title-area d-flex">
					<i data-feather="calendar" />
					<h3>December 18th</h3>
				</div>
				{/* End Table Title */}
				{/* table area Start */}
				<div className="box-table table-responsive">
					<table className="table upcoming-projects">
						<thead>
							<tr>
								<th>
									<span>Project</span>
								</th>
								<th>
									<span>Time</span>
								</th>
								<th>
									<span>Count</span>
								</th>
								<th>
									<span>Price</span>
								</th>
								<th>
									<span>Extras</span>
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="color-light">
								<td>
									<span>Secure 25</span>
								</td>
								<td>
									<span className="color-green">10 PM UTC</span>
								</td>
								<td>
									<span className="color-danger">100%</span>
								</td>
								<td>
									<span className="color-info">$90</span>
								</td>
								<td>
									<span>If SOL is above $200</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Portable Fire</span>
								</td>
								<td>
									<span className="color-green">12 PM UTC</span>
								</td>
								<td>
									<span className="color-danger">10%</span>
								</td>
								<td>
									<span className="color-info">$190</span>
								</td>
								<td>
									<span>If SOL is above $200</span>
								</td>
							</tr>
							<tr className="color-light">
								<td>
									<span>Buddistras</span>
								</td>
								<td>
									<span className="color-green">10 PM UTC</span>
								</td>
								<td>
									<span className="color-danger">900%</span>
								</td>
								<td>
									<span className="color-info">$200</span>
								</td>
								<td>
									<span>If SOL is above $200</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Mopsquersd</span>
								</td>
								<td>
									<span className="color-green">11 PM UTC</span>
								</td>
								<td>
									<span className="color-danger">200%</span>
								</td>
								<td>
									<span className="color-info">$90</span>
								</td>
								<td>
									<span>If SOL is above $200</span>
								</td>
							</tr>
							<tr className="color-light">
								<td>
									<span>Trads562</span>
								</td>
								<td>
									<span className="color-green">2 PM UTC</span>
								</td>
								<td>
									<span className="color-danger">300%</span>
								</td>
								<td>
									<span className="color-info">$560</span>
								</td>
								<td>
									<span>If SOL is above $200</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Raresable</span>
								</td>
								<td>
									<span className="color-green">10 PM UTC</span>
								</td>
								<td>
									<span className="color-danger">600%</span>
								</td>
								<td>
									<span className="color-info">$190</span>
								</td>
								<td>
									<span>If SOL is above $200</span>
								</td>
							</tr>
							<tr className="color-light">
								<td>
									<span>Firetab</span>
								</td>
								<td>
									<span className="color-green">6 PM UTC</span>
								</td>
								<td>
									<span className="color-danger">100%</span>
								</td>
								<td>
									<span className="color-info">$85</span>
								</td>
								<td>
									<span>If SOL is above $200</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>TheEnd</span>
								</td>
								<td>
									<span className="color-green">5 PM UTC</span>
								</td>
								<td>
									<span className="color-danger">85%</span>
								</td>
								<td>
									<span className="color-info">$90</span>
								</td>
								<td>
									<span>If SOL is above $200</span>
								</td>
							</tr>
							<tr className="color-light">
								<td>
									<span>Firetab</span>
								</td>
								<td>
									<span className="color-green">6 PM UTC</span>
								</td>
								<td>
									<span className="color-danger">100%</span>
								</td>
								<td>
									<span className="color-info">$85</span>
								</td>
								<td>
									<span>If SOL is above $200</span>
								</td>
							</tr>
							<tr>
								<td>
									<span>Raresable</span>
								</td>
								<td>
									<span className="color-green">10 PM UTC</span>
								</td>
								<td>
									<span className="color-danger">600%</span>
								</td>
								<td>
									<span className="color-info">$190</span>
								</td>
								<td>
									<span>If SOL is above $200</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				{/* table End */}
			</div>
		</div>
	)
}

export default UpcommingTable
