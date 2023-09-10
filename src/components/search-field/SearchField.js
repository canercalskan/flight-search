import './SearchField.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival, faArrowRightArrowLeft, faMailReply } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const SearchField = () => {
    const [isOneWay, setIsOneWay] = useState(false);
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);

    const [showDeparturePicker, setShowDeparturePicker] = useState(false);
    const [departure, setDeparture] = useState(new Date());
    const [properDeparture, setProperDeparture] = useState(null);
    const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);
    const [returnDate, setReturnDate] = useState(null);

    const swapLocations = () => {
        let tempOrigin = origin;
        setOrigin(destination);
        setDestination(tempOrigin);
    }

    return ( 
        <div className='searchFieldContainer'>
            <h1 id='slogan'> Find the best flight ticket! </h1>
            <div className='searchBoxContainer'>
                <div className='flightType'>
                    <input type='checkbox' className='' onChange={() => {setIsOneWay(!isOneWay)}}/>   
                    <label style={{position:'relative', left: '3px', bottom: '1px'}}>One Way</label>
                </div>
                <form className='searchForm'>
                    <div className='searchFormContent'>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faPlaneDeparture}/>
                                <label>Origin</label>
                            </div>
                            <input className='w-2x' value={origin} placeholder='Where from?' onChange={(e) => setOrigin(e.target.value)}/>
                            <FontAwesomeIcon 
                                icon={faArrowRightArrowLeft} 
                                id='swapLocationsIcon' 
                                style={{marginLeft: !isOneWay ? '1rem' : '4rem'}} 
                                onClick={swapLocations}/>
                        </div>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faPlaneArrival}/>
                                <label>Destination</label>
                            </div>
                            <input className='w-2x' value={destination} placeholder='Where to?' onChange={(e) => setDestination(e.target.value)}/>
                        </div>
                        <div>
                            <div>
                                <FontAwesomeIcon icon={faCalendar}/>
                                <label>Departure</label>
                            </div>
                            <input value={properDeparture}/>
                        </div>
                        {
                            !isOneWay
                            &&
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faCalendarDays}/>
                                    <label>Return</label>
                                </div>
                                <input value={properDeparture}/>
                            </div>
                        }
                        <button>Search</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SearchField;