import React,  {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, Link , useParams} from "react-router-dom";


function Dashboard(props) {
    const {id, update}= useParams();
    const [events, setEvents] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/events")
        .then ((res)=>{
            console.log(res.data)
            setEvents(res.data)
        })
        .catch ((err)=>{
            console.log(err.res)
        })
    }, [update]);

    const handleBook = ()=>{
        alert ("A messagge has been sent to the event manager. You will be contacted shortly")
    }
   

  return (
    <div className='container'>
        <div class="row mt-5">
                {
                    events.map((event, index)=>{
                        return(
                            <div class="col-lg-4 mb-lg-0 mb-4">
                                <div key={index} class="card card-background move-on-hover mb-4">
                                <div class="full-background" style={{ backgroundImage: `url(${event.imageUrl})`}}></div>
                                <div class="card-body pt-12">
                                    <h4 class="text-white">{event.title}</h4>
                                    <p> Date: {event.date}</p>
                                    <p> Special Guests: {event.guests} </p>
                                    <p> Entry: {event.price} </p>
                                    <button type="button" className="btn bg-gradient-primary m-4" onClick={handleBook}>Book</button>
                                    <Link to={`/event/${event._id}`}> <button type="button" className="btn bg-gradient-primary m-4">Edit</button> </Link>
                                </div>
                                </div>
                            </div>
                        )
                    })
                }
        </div>
    </div>
  )
}

export default Dashboard
