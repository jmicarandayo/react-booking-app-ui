import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import './hotel.css'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Hotel = () => {
  const [ open, setOpen ] = useState(false);
  const [ index, setIndex ] = useState(0);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/265825241.jpg?k=c9336215c087cc5b799515904abb7e42f3ca76d01c6b2d8da6e36d2e3376c5cf&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/279037580.jpg?k=6ad139cb74a4033a6389a8aae533362e4cd0ae594e1be3214812c944a03e9f31&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278951725.jpg?k=c1dcfad8b590151321ef018764bd95692b1df302774c98d8d4efa56af2d2fd87&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278951724.jpg?k=1ec570680260621e3a6062a09b17fef216282e054ea8d54e3b3c5bdc97fae853&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278951723.jpg?k=75ce0555a95ea8447dd53a8e70f2e33138503d9302ab6cc40054098e1f902f48&o=&hp=1"
    },
    {  
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/265771448.jpg?k=42901b97b1932b06bc734fe6d279002b1e887a39d347814433e2bcd1f13280a2&o=&hp=1"
    }
  ]
  const handleOpen = (i) => {
    setIndex(i)
    setOpen(true)
  }
  const handleCLose = () => {
    setOpen(false)
  }
  const handleMove = (direction) => {
    let indexNumber;

    if(direction === "l") {
      indexNumber = index === 0 ? photos.length - 1 : index - 1
    } else {
      indexNumber = index === photos.length - 1 ? 0 : index + 1
    }
    setIndex(indexNumber)
  }
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotel-container">
      { open && 
          <div className="slider">
            <FontAwesomeIcon icon={faCircleXmark} onClick={handleCLose} className="close"/>
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className="arrow" onClick={() => handleMove('l')}/>
            <div className="slider-wrapper">
              <img src={photos[index].src} alt="" className='slider-image' />
            </div>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="arrow" onClick={() => handleMove('r')}/>
          </div>
          }
        <div className="hotel-wrapper">
          <div className="hotel-desc">
          <button className='reserve-button'>Reserve or Book Now!</button>
            <h1 className="hotel-name">Tower Street Apartment</h1>
            <div className="">
              <FontAwesomeIcon icon={faLocationDot}/>
              <span className="hotel-address">5 Basztowa, Old Town, 33-332 Krakow, Poland</span>
            </div>
            <span className="hotel-distance">Excellent location - 500m from center</span>
            <span className="hotel-book">Book a stay over 114 at this property and get a free airport taxi</span>
          </div>
          <div className="hotel-images">
            { photos.map((photo, i) => (
                <div className="hotel-image-wrapper" key={i}>
                  <img src={photo.src} alt="" className="hotel-image" 
                  onClick={() => handleOpen(i)}/>
                </div>
              ))
            }
          </div>
          <div className="hotel-info">
            <div className="hotel-details">
              <h1 className='hotel-title'>Stay in the heart of Krakow</h1>
              <p className='hotel-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ex, cupiditate nesciunt aliquid recusandae eaque asperiores. Tempora minima libero, fugiat, voluptatibus id voluptate aperiam, eveniet maxime omnis facilis alias officia? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ex, cupiditate nesciunt aliquid recusandae eaque asperiores. Tempora minima libero, fugiat, voluptatibus id voluptate aperiam, eveniet maxime omnis facilis alias officia?</p>
            </div>
            <div className="hotel-detail-price">
              <h1>Perfect for a 9-night stay!</h1>
              <p>Located in the real heart of Krakow, this property has an excellent location score of 9.8!</p>
              <h2><b>$975</b> (9 nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
      </div>
      <MailList/>
      <Footer/>
    </div>
  )
}

export default Hotel