import { useEffect, useState } from 'react';
import './SearchResults.css'
const SearchResults = (props) => {
    const [results, setResults] = useState(null);

    useEffect(() => {
        setResults(props.results);
    }, [props.results])

    const handleSort = (e) => {
        switch (e.target.value) {
            case 'Price':
                setResults([...results.sort((a, b) => a.flight_price - b.flight_price)]);
                break;

            case 'Duration':
                setResults([...results.sort((a,b) => a.flight_duration - b.flight_duration)])
                break;

            case 'Departure Time':
                setResults([...results.sort((a,b) => a.departure_time - b.departure_time)])
                break;

            default:
                setResults([...props.results]);
        }
    }

    return ( 
        <div className="searchResultsContainer">
            <h3 style={{textAlign:'center', color:'black'}}>Best Flights</h3>
            <select onChange={(e) => handleSort(e)}>
                <option>Sort By..</option>
                <option>Duration</option>
                <option>Price</option>
                <option>Departure Time</option>
            </select>
            {
                results
                &&
                results.length > 0
                ?
                results.map(flight => {
                    return(
                         <div key={flight.flight_id} className='flightItem'>
                            <p>{flight.origin_airport}</p>
                            <p>{flight.destination_airport}</p>
                            <p>{flight.flight_duration} hrs</p>
                            <p>{flight.flight_price} $</p>
                            <p>{flight.flight_date} / {flight.departure_time}</p>
                        </div>
                    )
                })
                :
                <div style={{display:'flex', justifyContent:'center'}}>
                    <p className='notFound'>No available flights found</p>
                </div>
            }
        </div>
     );
}
 
export default SearchResults;