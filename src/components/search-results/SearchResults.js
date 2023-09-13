import { useEffect, useState } from 'react';
import './SearchResults.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faCity, faArrowRightLong, faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SearchResults = (props) => {
    const [results, setResults] = useState(null);
    const [departureTickets, setDepartureTickets] = useState(null);
    const [returnTickets, setReturnTickets] = useState(null);
    const [departureDate, setDepartureDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [departureTicketSelected, setDepartureTicketSelected] = useState(false);
    const [returnTicketSelected, setReturnTicketSelected] = useState(false);
    const [selectedDeparture, setSelectedDeparture] = useState(null);
    const [selectedReturn, setSelectedReturn] = useState(null);

    useEffect(() => {
        setDepartureDate(new Date(props.departure).toDateString());
        setReturnDate(new Date(props.returnDate).toDateString());
        setDepartureTickets(props.results.filter(flight =>  flight.origin_airport === props.originAirport));
        setReturnTickets(props.results.filter(flight => flight.origin_airport === props.destinationAirport));
    }, [props.results, props.departure, props.returnDate, props.destinationAirport, props.originAirport])

    const handleDepartureSort = (e) => {
        switch (e.target.value) {
            case 'Price':
                setDepartureTickets([...departureTickets.sort((a, b) => a.flight_price - b.flight_price)]);
                break;

            case 'Duration':
                setDepartureTickets([...departureTickets.sort((a,b) => a.flight_duration - b.flight_duration)])
                break;

            case 'Departure Time':
                setDepartureTickets([...departureTickets.sort((a,b) => a.departure_time - b.departure_time)])
                break;

            default:
                setDepartureTickets([...props.results.filter(flight =>  flight.origin_airport === props.originAirport)]);
        }
    }

    const handleReturnSort = (e) => {
        switch (e.target.value) {
            case 'Price':
                setReturnTickets([...returnTickets.sort((a, b) => a.flight_price - b.flight_price)]);
                break;

            case 'Duration':
                setReturnTickets([...returnTickets.sort((a,b) => a.flight_duration - b.flight_duration)])
                break;

            case 'Departure Time':
                setReturnTickets([...returnTickets.sort((a,b) => a.departure_time - b.departure_time)])
                break;

            default:
                setReturnTickets([...props.results.filter(flight =>  flight.origin_airport === props.destinationAirport)]);
        }
    }

    const handleDepartureTicketSelect = (departure_flight) => {
        setSelectedDeparture(departure_flight);
        setDepartureTicketSelected(true);
    }

    const handleReturnTicketSelect = (return_flight) => {
        setSelectedReturn(return_flight);
        setReturnTicketSelected(true);
    }

    const handleBuy = () => {
        alert('Thank you for your purchase');
        window.location.reload()
        
    }

    return ( 
        <div className="searchResultsContainer">
            <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                {
                    !departureTicketSelected || !returnTicketSelected
                    ?
                    <b style={{marginTop: '1rem', marginBottom: '.5rem'}}>
                        {
                            !departureTicketSelected
                            ?
                            `Select a Departure Ticket ${departureDate && departureDate}`
                            :
                            `Select a Return Ticket ${returnDate && returnDate}`
                        }
                    </b>
                    :
                    <b style={{marginTop: '1rem', marginBottom: '.5rem'}}>
                        Checkout
                    </b>
                }

                {
                    !departureTicketSelected || !returnTicketSelected
                    ?
                    <select onChange={(e) => !departureTicketSelected ? handleDepartureSort(e) : handleReturnSort()}>
                        <option>Sort By..</option>
                        <option>Duration</option>
                        <option>Price</option>
                        <option>Departure Time</option>
                        <option>Arrival Time</option>
                    </select>
                    :
                    <p>
                        <span style={{marginRight: '2rem'}}>{props.departureCity} ({props.originCode})</span>
                        <span style={{marginRight: '2rem'}}><FontAwesomeIcon icon={faArrowRightArrowLeft}/></span>
                        <span>{props.returnCity}({props.returnCode})</span>
                    </p>
                }
            </div>
            {
                !departureTicketSelected && departureTickets
                &&
                departureTickets.map(flight => {
                    return(
                         <div key={flight.flight_id} className='flightItem' onClick={() => handleDepartureTicketSelect(flight)}>
                            <p>
                                <FontAwesomeIcon icon={faCity} style={{marginRight: '5px'}}/>
                                {props.departureCity}
                            </p>

                            <div style={{width: '10px', height:'8rem', borderRight: '1px solid red', borderRightStyle:'dashed'}}></div>

                            <div className='rotation'>
                                <div>
                                    <p> {flight.departure_time} </p>
                                    <p style={{textAlign:'center'}}> {props.originCode} </p>
                                </div>

                                <FontAwesomeIcon icon={faArrowRightLong}/>

                                <div>
                                    <p> {flight.arrival_time} </p>
                                    <p style={{textAlign:'center'}}> {props.destinationCode} </p>
                                </div>
                            </div>

                            <p style={{color:'#6C757D'}}>
                                <FontAwesomeIcon icon={faClock} style={{marginRight:'5px', color:'#6C757D'}}/>
                                {flight.flight_duration} hrs
                            </p>
                            <p className='price'>{flight.flight_price} $</p>
                        </div>
                    )
                })
            }
            {
                !departureTicketSelected && (!departureTickets || departureTickets.length === 0)
                &&
                <div style={{display:'flex', justifyContent:'center'}}>
                    <p className='notFound'>No available flights found</p>
                </div>
            }

            {
                (departureTicketSelected && !returnTicketSelected && returnTickets)
                &&
                returnTickets.map(flight => {
                    return(
                        <div key={flight.flight_id} className='flightItem' onClick={() => handleReturnTicketSelect(flight)}>
                            <p>
                                <FontAwesomeIcon icon={faCity} style={{marginRight: '5px'}}/>
                                    {props.returnCity}
                            </p>
                
                            <div style={{width: '10px', height:'8rem', borderRight: '1px solid red', borderRightStyle:'dashed'}}></div>
                
                            <div className='rotation'>
                                <div>
                                    <p> {flight.departure_time} </p>
                                    <p style={{textAlign:'center'}}> {props.returnCode} </p>
                                </div>

                                    <FontAwesomeIcon icon={faArrowRightLong}/>
                
                                    <div>
                                        <p> {flight.arrival_time} </p>
                                        <p style={{textAlign:'center'}}> {props.originCode} </p>
                                    </div>
                            </div>
                
                            <p style={{color:'#6C757D'}}>
                                    <FontAwesomeIcon icon={faClock} style={{marginRight:'5px', color:'#6C757D'}}/>
                                    {flight.flight_duration} hrs
                            </p>
                            <p className='price'>{flight.flight_price} $</p>
                        </div>
                    )
                })
            }

            {
                departureTicketSelected
                &&
                returnDate
                &&
                (!returnTickets || returnTickets.length === 0)
                &&
                <div style={{display:'flex', justifyContent:'center'}}>
                    <p className='notFound'>No available return flights found</p>
                </div>
            }

            {
                returnDate && departureTicketSelected && returnTicketSelected
                &&
                <div className='checkout'>
                    Total Price : $ {Number(selectedDeparture.flight_price) + Number(selectedReturn.flight_price)}
                    <button className='buyButton' onClick={handleBuy}>Buy</button>
                </div>
            }
        </div>
     );
}
 
export default SearchResults;