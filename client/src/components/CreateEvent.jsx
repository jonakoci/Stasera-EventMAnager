import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate} from 'react-router-dom'

function CreateEvent(props) {
  const {update, setUpdate}= props;
  const navigate = useNavigate()
  const [validation, setValidation] = useState({})
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [date, setDate] = useState();
  const [guests, setGuests] = useState("");
  const [price, setPrice] = useState("");

  const submitHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/newevent', {
      title,
      imageUrl,
      date,
      guests,
      price
        
    })
      .then(res => {
        console.log(res.data);
        navigate("/dashboard")
        setUpdate(!update)
      })
      .catch((err) => {
        console.log(err.data)
        setValidation(err.response.data.err.errors);
      });
  }

  return (
    <div style={{backgroundColor: "linear-gradient(#f953c6, #b91d73)",  
    margin: '20px',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px', }}>
      
        <h3>Adding a new Event</h3>
        <form className='w-100' onSubmit={submitHandler}>
            <div>
                <div className='p-2'>
                  <input className='p-1' type="text" placeholder="Title" onChange = {(e)=>setTitle(e.target.value)} /> <br />
                  <p style={{color:"#8F00FF"}}>{ validation.title? validation.title.message : ""}</p>
                </div>
                <div className='p-2'>
                  <input className='p-1' type="text" placeholder="Image/Poster Url" onChange = {(e)=>setImageUrl(e.target.value)} /> <br />
                  <p style={{color:"#8F00FF"}}>{ validation.imageUrl? validation.imageUrl.message : ""}</p>
                </div>
                <div className='p-2'>
                  <input className='p-1' type="text" placeholder="Guest/s" onChange = {(e)=>setGuests(e.target.value)} /> <br />
                  <p style={{color:"#8F00FF"}}>{ validation.guests? validation.guests.message : ""}</p>
                </div>
                <div className='p-2'>
                  <input className='p-1' type="datetime-local" id="meeting-time"  value="2023-06-01T08:30"  placeholder="Date and Time" onChange = {(e)=>setDate(e.target.value)} /> <br />
                  <p style={{color:"#8F00FF"}}>{ validation.date? validation.date.message : ""}</p>
                </div>
                <div className='p-2'>
                  <input className='p-1' type="text" placeholder="Entry Fee" onChange = {(e)=>setPrice(e.target.value)}/> <br />
                  <p style={{color:"#8F00FF"}}>{ validation.price? validation.price.message : ""}</p>
                </div>
            </div>
            <button type="submit" value="Submit" id="input-submit" class="btn btn-sm bg-gradient-primary btn-round m-2"> Create </button>
        </form>
    </div>
  )
}

export default CreateEvent;
