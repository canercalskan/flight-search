import './SearchField.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faPlaneArrival, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCalendar, faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Loader from '../loader/Loader';
import { months } from '../../constants/constants';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchResults from '../search-results/SearchResults';

const SearchField = () => {
    const [isOneWay, setIsOneWay] = useState(false);
    const [airports, setAirports] = useState(null);

    const [origin, setOrigin] = useState(null);
    const [originText, setOriginText] = useState('');
    const [originError, setOriginError] = useState(null);
    const [originSearchResults, setOriginSearchResults] = useState([]);

    const [destination, setDestination] = useState(null);
    const [destinationText, setDestinationText] = useState('');
    const [destinationError, setDestinationError] = useState(null);
    const [destinationSearchResults, setDestinationSearchResults] = useState([]);

    const [showDeparturePicker, setShowDeparturePicker] = useState(false);
    const [departure, setDeparture] = useState();
    const [properDeparture, setProperDeparture] = useState(null);
    const [departureError, setDepartureError] = useState(null);

    const [showReturnDatePicker, setShowReturnDatePicker] = useState(false);
    const [returnDate, setReturnDate] = useState(null);
    const [properReturnDate, setProperReturnDate] = useState(null);
    const [returnDateError, setReturnDateError] = useState(null);

    const [showLoading, setShowLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(null);
    const [searchError, setSearchError] = useState(null);

    useEffect(() => {
        const fetchAirports = async () => {
            try {
                const airportListResponse = await axios.get('//localhost:4500/api/getAirportList');
                setAirports(airportListResponse.data.airports);
            }
            catch (error) {
                console.log(error);
            }
        };

        fetchAirports()
    }, [])

    const handleOneWaySelection = () => {
        setReturnDateError(null);
        setReturnDate(null);
        setProperReturnDate(null);
        setShowReturnDatePicker(false);
        setIsOneWay(!isOneWay);
    }

    const swapLocations = () => {
        let tempOrigin = origin;
        setOrigin(destination);
        setDestination(tempOrigin);

        let tempOriginText = originText;
        setOriginText(destinationText);
        setDestinationText(tempOriginText);
    }

    const handleOriginChange = async (input) => {
        setOriginSearchResults([]);
        try {
            setOriginText(input);
            if(originText.length >= 2 && airports) { // enable search logic only if the input length is greater than or equal to 2.
                airports.forEach(airport => {
                    if(airport.name.toLowerCase().includes(originText.toLowerCase()) || airport.code.toLowerCase().includes(originText.toLowerCase()) || airport.city.toLowerCase().includes(originText.toLowerCase()) || airport.country.toLowerCase().includes(originText.toLowerCase())) {
                        let newSearchResults = originSearchResults;
                        if(!newSearchResults.find(item => item.id === airport.id)) {
                            if(destination) {
                                destination.id !== airport.id && newSearchResults.push(airport);
                            }
                            else {
                                newSearchResults.push(airport);
                            }
                            setOriginSearchResults(newSearchResults);
                        }
                    }
                })
            }
        }
        
        catch(error) {
            setOriginError('Something went wrong..');
        }
    }

    const handleDestinationChange = async (input) => {
        setDestinationSearchResults([]);
        try {
            setDestinationText(input);
            if(destinationText.length >= 2 && airports) { // enable search logic only if the input length is greater than or equal to 2.
                airports.forEach(airport => {
                    if(airport.name.toLowerCase().includes(destinationText.toLowerCase()) || airport.code.toLowerCase().includes(destinationText.toLowerCase()) || airport.city.toLowerCase().includes(destinationText.toLowerCase()) || airport.country.toLowerCase().includes(destinationText.toLowerCase())) {
                        let newSearchResults = destinationSearchResults;
                        if(!newSearchResults.find(item => item.id === airport.id)) {
                            if(origin) {
                                if(origin.id !== airport.id) {
                                    newSearchResults.push(airport);
                                }
                            }
                            else {
                                newSearchResults.push(airport);
                            }
                            setDestinationSearchResults(newSearchResults);
                        }
                    }
                })
            }
        }
        
        catch(error) {
            setOriginError('Something went wrong..');
        }
    }

    const handleDateSelect = (target, selectedDate) => {
        let tempDate = new Date(selectedDate);
        let tempProperDate = '';
        tempDate.getDate() < 10 ? tempProperDate += `0${tempDate.getDate()}` : tempProperDate += tempDate.getDate();
        tempProperDate += ` ${months[tempDate.getMonth()]}`
        tempProperDate += ` ${tempDate.getFullYear()}`

        switch(target) {
            case 'departure':
                setDeparture(selectedDate);
                setProperDeparture(tempProperDate);
                setShowDeparturePicker(false);
                break;
            case 'returnDate':
                setReturnDate(selectedDate);
                setProperReturnDate(tempProperDate);
                setShowReturnDatePicker(false);
                break;
            default:
                break;
        }
    }

    const handleOriginSelect = (airport) => {
        setOriginSearchResults([]);
        setOrigin(airport);
        setOriginText(`${airport.name} (${airport.code}), ${airport.country} - ${airport.city} `);
    }

    const handleDestinationSelect = (airport) => {
        setDestinationSearchResults([]);
        setDestination(airport);
        setDestinationText(`${airport.name} (${airport.code}), ${airport.country} - ${airport.city} `);
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        setOriginError(null);
        setDestinationError(null);
        setDepartureError(null);
        setReturnDateError(null);
        if(!origin) {
            setOriginError('Please select a valid origin airport');
            return;
        }

        if(!destination) {
            setDestinationError('Please select a valid destination airport');
            return;
        }

        if(!departure) {
            setDepartureError('Please select a departure date');
            return;
        }

        if(!isOneWay && !returnDate) {
            setReturnDateError('Please select a return date');
            return;
        }

        if(origin && destination) {
            if(originText.trim() !== `${origin.name} (${origin.code}), ${origin.country} - ${origin.city}`) {
                setOriginError('Please select a valid origin airport');
                return;
            }

            else if(destinationText.trim() !== `${destination.name} (${destination.code}), ${destination.country} - ${destination.city}`) {
                setDestinationError('Please select a valid destination airport');
                return;
            }

            else {
                setShowLoading(true);
                let postData = {
                    origin: origin,
                    destination: destination,
                    departure: departure,
                    returnDate: returnDate ? returnDate : null
                };

                try {
                    const searchResults = await axios.post('//localhost:4500/api/searchFlights', postData, {
                      headers: {
                        'Content-Type': 'application/json'
                      }
                    });
                    setSearchResults(searchResults.data.availableFlights);
                    setTimeout(() => {
                        setShowLoading(false);
                    }, 3000)
                }

                catch (error) {
                    setSearchError(error.message);
                }
            }
        }
    }

    return (
        <>
        <div className='searchFieldContainer'>
            {
                showLoading
                &&
                <Loader/>
            }
            <h1 id='slogan'>Find the best flight ticket! </h1>
            <div className='searchBoxContainer'>
                <div className='flightType'>
                    <input type='checkbox' onChange={handleOneWaySelection} required/>   
                    <label style={{position:'relative', left: '3px', bottom: '1px'}}>One Way</label>
                </div>
                <form className='searchForm' onSubmit={(event) => handleSearch(event)}>
                    <div className='searchFormContent'>
                        <div>
                            <div>
                                <FontAwesomeIcon style={{color: originError ? '#DC4B64' : 'black'}} icon={faPlaneDeparture}/>
                                <label style={{color: originError ? '#DC4B64' : 'black'}}>Origin</label>
                            </div>
                            <input 
                                style={{border: originError ? '1px solid #DC4B64' : '.5px solid grey'}} 
                                className='w-2x' 
                                value={originText}
                                placeholder='Where from?' 
                                onChange={(e) => handleOriginChange(e.target.value)} 
                                required
                            />
                            {
                                originSearchResults.length > 0
                                &&
                                <div className='originSearchResults'>
                                    <ul>
                                        {originSearchResults.map(airport => {
                                            return(
                                                <li key={airport.id} onClick={() => handleOriginSelect(airport)}>
                                                    {airport.name} ({airport.code}) - {airport.city}, {airport.country}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            }

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
                            <input 
                                style={{border: destinationError ? '1px solid #DC4B64' : '.5px solid grey'}} 
                                className='w-2x' 
                                value={destinationText} 
                                placeholder='Where to?' 
                                onChange={(e) => handleDestinationChange(e.target.value)} 
                                required
                            />
                                                        {
                                destinationSearchResults.length > 0
                                &&
                                <div className='originSearchResults'>
                                    <ul>
                                        {destinationSearchResults.map(airport => {
                                            return(
                                                <li key={airport.id} onClick={() => handleDestinationSelect(airport)}>
                                                    {airport.name} ({airport.code}) - {airport.city}, {airport.country}
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            }
                        </div>
                        <div>
                            <div>
                                <FontAwesomeIcon style={{color: departureError ? '#DC4B64' : 'black'}} icon={faCalendar}/>
                                <label style={{color: departureError ? '#DC4B64' : 'black'}}>Departure</label>
                            </div>
                            <div style={{border: (departureError && '1px solid #DC4B64') || (showDeparturePicker && '1px solid blue'), display:'flex', justifyContent:'center', alignItems:'center' }} className='datePickInput' onClick={() => {setShowReturnDatePicker(false); setShowDeparturePicker(!showDeparturePicker)}}>
                                {properDeparture}
                            </div>
                            {
                                showDeparturePicker
                                &&
                                <span style={{position:'absolute', paddingTop: 5, paddingBottom: 10}}>
                                    <Calendar 
                                        minDate={new Date()} 
                                        maxDate={returnDate ? returnDate : null} 
                                        value={properDeparture} 
                                        onChange={(value) => {handleDateSelect('departure', value)}}
                                    />
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
                                <div style={{border: ((returnDateError && '1px solid #DC4B64') || (showReturnDatePicker && '1px solid blue')), display:'flex', justifyContent:'center', alignItems:'center'}} className='datePickInput' onClick={() => {setShowDeparturePicker(false); setShowReturnDatePicker(!showReturnDatePicker)}}>
                                    {properReturnDate}
                                </div>
                                {
                                    showReturnDatePicker
                                    &&
                                    <span style={{position:'absolute', paddingTop: 5, paddingBottom: 10}}>
                                        <Calendar 
                                            minDate={departure ? departure : new Date()} 
                                            value={properReturnDate} 
                                            onChange={(value) => handleDateSelect('returnDate', value)}
                                        />
                                    </span>
                                }
                            </div>
                        }
                        <button>Search</button>
                    </div>
                    {
                        originError
                        &&
                        <p className='errorText'>{originError}</p>
                    }

                    {
                        destinationError
                        &&
                        <p className='errorText'>{destinationError}</p>
                    }

                    {
                        departureError
                        &&
                        <p className='errorText'>{departureError}</p>
                    }

                    {
                        returnDateError
                        &&
                        <p className='errorText'>{returnDateError}</p>
                    }
                </form>
            </div>
        </div>

        {
            searchResults
            &&
            !showLoading
            &&
            <SearchResults 
                originAirport = { origin.name }
                destinationAirport = { destination.name }
                originCode = { origin.code }
                returnCode = { destination.code }
                destinationCode = { destination.code}
                departureCity = { origin.city } 
                returnCity = { returnDate ? destination.city : null} 
                departure = { departure } 
                returnDate = { returnDate } 
                results = { searchResults }
            />
        }
        
        </> 
     );
}
 
export default SearchField;