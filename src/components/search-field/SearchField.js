import './SearchField.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';

const months = ['Jan' , 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const SearchField = () => {
    const [isOneWay, setIsOneWay] = useState(false);

    const [origin, setOrigin] = useState(null);
    const [originError, setOriginError] = useState(null);

    const [destination, setDestination] = useState(null);
    const [destinationError, setDestinationError] = useState(null);

    const [showDeparturePicker, setShowDeparturePicker] = useState(false);
    const [departure, setDeparture] = useState(new Date());
    const [properDeparture, setProperDeparture] = useState(null);
    const [departureError, setDepartureError] = useState(null);

    const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);
    const [returnDate, setReturnDate] = useState(new Date());
    const [properReturnDate, setProperReturnDate] = useState(null);
    const [returnDateError, setReturnDateError] = useState(null);

    const swapLocations = () => {
        let tempOrigin = origin;
        setOrigin(destination);
        setDestination(tempOrigin);
    }

    const handleDepartureSelect = (selectedDate) => {
        let tempDate = new Date(selectedDate);
        let tempProperDate = '';
        tempDate.getDate() < 10 ? tempProperDate += `0${tempDate.getDate()}` : tempProperDate += tempDate.getDate();
        tempProperDate += ` ${months[tempDate.getMonth()]}`
        tempProperDate += ` ${tempDate.getFullYear()}`
        setProperDeparture(tempProperDate);
    }

    const handleReturnDateSelect = (selectedDate) => {
        let tempDate = new Date(selectedDate);
        let tempProperDate = '';
        tempDate.getDate() < 10 ? tempProperDate += `0${tempDate.getDate()}` : tempProperDate += tempDate.getDate();
        tempProperDate += ` ${months[tempDate.getMonth()]}`
        tempProperDate += ` ${tempDate.getFullYear()}`
        setProperReturnDate(tempProperDate);
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
                                <FontAwesomeIcon style={{color: originError ? '#DC4B64' : 'black'}} icon={faPlaneDeparture}/>
                                <label style={{color: originError ? '#DC4B64' : 'black'}}>Origin</label>
                            </div>
                            <input style={{border: originError ? '1px solid #DC4B64' : '.5px solid grey'}} className='w-2x' value={origin} placeholder='Where from?' onChange={(e) => setOrigin(e.target.value)}/>
                            <FontAwesomeIcon 
                                icon={faArrowRightArrowLeft} 
                                id='swapLocationsIcon' 
                                style={{marginLeft: !isOneWay ? '1rem' : '4rem'}} 
                                onClick={swapLocations}/>
                        </div>
                        <div>
                            <div>
                                <FontAwesomeIcon style={{color: destinationError ? '#DC4B64' : 'black'}} icon={faPlaneArrival}/>
                                <label style={{color: destinationError ? '#DC4B64' : 'black'}}>Destination</label>
                            </div>
                            <input style={{border: destinationError ? '1px solid #DC4B64' : '.5px solid grey'}} className='w-2x' value={destination} placeholder='Where to?' onChange={(e) => setDestination(e.target.value)}/>
                        </div>
                        <div>
                            <div>
                                <FontAwesomeIcon style={{color: departureError ? '#DC4B64' : 'black'}} icon={faCalendar}/>
                                <label style={{color: departureError ? '#DC4B64' : 'black'}}>Departure</label>
                            </div>
                            <div style={{border: (departureError && '1px solid #DC4B64' || showDeparturePicker && '1px solid blue'), display:'flex', justifyContent:'center', alignItems:'center' }} className='datePickInput' onClick={() => {setShowReturnDatePicker(false); setShowDeparturePicker(!showDeparturePicker)}}>
                                {properDeparture}
                            </div>
                            {
                                showDeparturePicker
                                &&
                                <span style={{position:'absolute', paddingTop: 5, paddingBottom: 10}}>
                                    <Calendar value={properDeparture} onChange={(value) => {handleDepartureSelect(value)}}/>
                                </span>
                            }
                        </div>
                        {
                            !isOneWay
                            &&
                            <div>
                                <div>
                                    <FontAwesomeIcon style={{color: returnDateError ? '#DC4B64' : 'black'}} icon={faCalendarDays}/>
                                    <label style={{color: returnDateError ? '#DC4B64' : 'black'}}>Return</label>
                                </div>
                                <div style={{border: (returnDateError && '1px solid #DC4B64' || showReturnDatePicker && '1px solid blue'), display:'flex', justifyContent:'center', alignItems:'center'}} className='datePickInput' onClick={() => {setShowDeparturePicker(false); setShowReturnDatePicker(!showReturnDatePicker)}}>
                                    {properReturnDate}
                                </div>
                                {
                                    showReturnDatePicker
                                    &&
                                    <span style={{position:'absolute', paddingTop: 5, paddingBottom: 10}}>
                                        <Calendar value={departure} onChange={(value) => handleReturnDateSelect(value)}/>
                                    </span>
                                }
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