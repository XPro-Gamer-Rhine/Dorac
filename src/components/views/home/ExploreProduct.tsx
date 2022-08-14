import {ethers} from 'ethers'
import Card from './Card'


const INFURA_ID = '22348f916b8944be930ac83951a7a245'
const provider = new ethers.providers.JsonRpcProvider(`https://polygon-mumbai.infura.io/v3/${INFURA_ID}`)



function ExploreProduct() {

    return (
        <div id="list-item-3" className="rn-product-area rn-section-gapBottom masonary-wrapper-activation">
            <div className="container">
                <div className="row gx-5 align-items-center">
                    <div className="col-lg-4">
                        <div className="section-title">
                            <h3 className="title mb--0">Explore Product</h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="button-group isotop-filter filters-button-group d-flex justify-content-start justify-content-lg-end mt_md--30 mt_sm--30">
                            <button data-filter="*" className="is-checked">
                                <span className="filter-text">All</span>
                            </button>
                            <button data-filter=".cat--1">
                                <span className="filter-text">Art</span>
                            </button>
                            <button data-filter=".cat--2">
                                <span className="filter-text">Music</span>
                            </button>
                            <button data-filter=".cat--3">
                                <span className="filter-text">Vedio</span>
                            </button>
                            <button data-filter=".cat--4">
                                <span className="filter-text">
                                    Collectionable
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <Card/>
            </div>
        </div>
    )
}

export default ExploreProduct
