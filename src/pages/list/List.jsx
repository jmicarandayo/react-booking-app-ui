import './list.css'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchItem/SearchItem'


const List = () => {
  const location = useLocation();
  const [ openDate, setOpenDate ] = useState(false)
  const [ destination, setDestination ] = useState(location.state.destination)
  const [ date, setDate ] = useState(location.state.date)
  const [ options, setOptions ] = useState(location.state.options)
  console.log(location)
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="list-container">
        <div className="list-search">
          <h1>Search</h1>
          <div className="list-search-items">
            <span className="list-title">Destination</span>
            <input type="text" placeholder={destination}/>
          </div>
          <div className="list-search-items">
            <span className="list-title">Check-in Date</span>
            <span onClick={() => setOpenDate(!openDate)} className='search-date'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
            { openDate && 
            <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            ranges={date}
            minDate = {new Date()}
            />}
          </div>
          <div className="list-search-items">
            <span className="list-title">Options</span>
            <div className="list-options">
              <div className="list-option">
                <span className="option-title">Min price <small>per night</small></span>
                <input type="text" />
              </div>
              <div className="list-option">
                <span className="option-title">Max price <small>per night</small></span>
                <input type="text" />
              </div>
              <div className="list-option">
                <span className="option-title">Adult</span>
                <input type="number" min="1" placeholder={options.adult}/>
              </div>
              <div className="list-option">
                <span className="option-title">Children</span>
                <input type="number" min="0" placeholder={options.children}/>
              </div>
              <div className="list-option">
                <span className="option-title">Room</span>
                <input type="number" min="1" placeholder={options.room}/>
              </div>
            </div>
          </div>
          <button>Search</button>
        </div>
        <div className="list-result">
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
        </div>
      </div>
    </div>
  )
}

export default List