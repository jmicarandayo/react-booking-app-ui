import './searchItem.css'

const SearchItem = () => {
  return (
    <div className="si-container">
        <img src="https://cf.bstatic.com/xdata/images/hotel/max500/90327438.jpg?k=c685ade6f4cfb9f0577e4508bcc9f5262d57775452af7997822f0d84b373afc1&o=" alt="" className="si-image" />
        <div className="si-details">
            <span className="si-title">Tower Street Apartment</span>
            <span className="si-distance">500m from center</span>
            <span className="si-ride">Free airport taxi</span>
            <span className="si-type">Studio Apartment with Air conditioner</span>
            <span className="si-features">Entire studio . 1 bathroom . 21m2 1 full bed</span>
            <span className="si-cancel">Free cancellation</span>
            <span className="si-cancelDesc">You can cancel later, so lock in this great price today!</span>
        </div>
        <div className="si-desc">
            <div className="si-rating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="descTexts">
                <span className="si-price">$143</span>
                <span className="si-tax">Includes taxes and fees</span>
                <button className='si-button'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem