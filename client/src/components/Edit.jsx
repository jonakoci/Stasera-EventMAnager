import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function Edit(props) {
    const { id, update } = useParams();
    const [validation, setValidation] = useState({})
    const navigate = useNavigate()
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [date, setDate] = useState();
    const [guests, setGuests] = useState("");
    const [price, setPrice] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:8000/event/${id}`)
        .then (res=> {
          console.log (res.data)
          setTitle(res.data.title)
          setImageUrl(res.data.imageUrl)
          setDate(res.data.date)
          setGuests(res.data.guests)
          setPrice(res.data.price)
        })
        .catch(err=>console.log("errrrrrr"+err))
    
      }, [update])

      const handleSubmit = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/event/${id}` ,{
        title, 
        imageUrl,
        date,
        guests,
        price})
        .then((response) => {
          console.log(response);
          navigate (-1)
        })
        .catch((err) => {
          setValidation(err.response.data.err.errors);;
        });
      }

  return (
<div style={{background: "linear-gradient(#FC5C7D, #6A82FB)",  
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderRadius:"10px"}}>
        <h3>Edit Event</h3>
        <form onSubmit={handleSubmit}>
            <div>
                <div className='p-2'>
                  <input className='p-1 input-group' type="text" value={title} onChange = {(e)=>setTitle(e.target.value)}  /> <br />
                  <p style={{color:"#8F00FF"}}>{ validation.title? validation.title.message : ""}</p>
                </div>
                <div className='p-2'>
                  <input className='p-1 input-group' type="text"  value={imageUrl} onChange = {(e)=>setImageUrl(e.target.value)}  /> <br />
                  <p style={{color:"#8F00FF"}}>{ validation.imageUrl? validation.imageUrl.message : ""}</p>
                </div>
                <div className='p-2'>
                  <input className='p-1 input-group' type="text" value={guests} onChange = {(e)=>setGuests(e.target.value)} /> <br />
                  <p style={{color:"#8F00FF"}}>{ validation.guests? validation.guests.message : ""}</p>
                </div>
                <div className='p-2'>
                  <input className='p-1 input-group' type="datetime-local" id="meeting-time"  value={date} onChange = {(e)=>setDate(e.target.value)}  /> <br />
                  <p style={{color:"#8F00FF"}}>{ validation.date? validation.date.message : ""}</p>
                </div>
                <div className='p-2'>
                  <input className='p-1 input-group' type="text"  value={price} onChange = {(e)=>setPrice(e.target.value)} /> <br />
                  <p style={{color:"#8F00FF"}}>{ validation.price? validation.price.message : ""}</p>
                </div>
            </div>
            <button type="submit" value="Submit" id="input-submit" class="btn btn-sm bg-gradient-primary btn-round m-2"> Submit </button>
            <button type="button" class="btn btn-sm bg-gradient-primary btn-round m-2"> Delete </button>
        </form>
    </div>
  )
}

export default Edit
