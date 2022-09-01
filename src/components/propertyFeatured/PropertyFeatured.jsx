import './propertyFeatured.css'

const PropertyFeatured = () => {
  return (
    <div className="pf">
        <div className="pf-item">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/123802411.jpg?k=0c02ecedcf0ece5f23d2c8136c9b7a1a4b45155199063fcfac3af6ffd5825e84&o=" alt="" className="pf-image" />
            <span className='pf-name'>Six Continents</span>
            <span className='pf-city'>Madrid</span>
            <span className='pf-price'>Starting from 5,203</span>
            <div className="pf-rating">
                <button>8.7</button>
                <span>Excellent</span>
                <span className='hyphen'> - </span>
                <span className='pf-reviews'>298 reviews</span>
            </div>
        </div>
        <div className="pf-item">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/64768746.jpg?k=b0a62a2eb299aaa31553ffcb9887d54cb5ea112e81a7a942a45aa25f88c84921&o=" alt="" className="pf-image" />
            <span className='pf-name'>Codeland</span>
            <span className='pf-city'>Amsterdam</span>
            <span className='pf-price'>Starting from 7,230</span>
            <div className="pf-rating">
                <button>8.9</button>
                <span>Excellent</span>
                <span className='hyphen'> - </span>
                <span className='pf-reviews'>132 reviews</span>
            </div>
        </div>
        <div className="pf-item">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/74594395.jpg?k=d5a71c0578774c302d2b8854482beaa8785077c616f956aac74766124023a319&o=" alt="" className="pf-image" />
            <span className='pf-name'>Sun Spalato</span>
            <span className='pf-city'>Split</span>
            <span className='pf-price'>Starting from 3,286</span>
            <div className="pf-rating">
                <button>8.8</button>
                <span>Excellent</span>
                <span className='hyphen'> - </span>
                <span className='pf-reviews'>345 reviews</span>
            </div>
        </div>
        <div className="pf-item">
            <img src="https://cf.bstatic.com/xdata/images/hotel/max500/93164515.jpg?k=48b6d7931e47382ff8b765df2fdcb4b5d05669db1f4b01859852aea44cba3367&o=" alt="" className="pf-image" />
            <span className='pf-name'>Park Residence</span>
            <span className='pf-city'>Australia</span>
            <span className='pf-price'>Starting from 8,348</span>
            <div className="pf-rating">
                <button>8.8</button>
                <span>Excellent</span>
                <span className='hyphen'> - </span>
                <span className='pf-reviews'>354 reviews</span>
            </div>
        </div>
    </div>
  )
}

export default PropertyFeatured