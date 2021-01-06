import React from 'react'
import {Link} from 'react-router-dom'
import Loading from './Loading';


const EventShowcase = () => {
    const [events, setEvents]=React.useState([]);
    const[load, setLoad]=React.useState(false)
    const[read, setRead]=React.useState(false);
    const fetchEvents = async () => {
       setLoad(true)
        try {
          const response = await fetch(`https://5ff2d7c228c3980017b18b06.mockapi.io/events`)
          const events = await response.json()
          console.log(events)
          setLoad(false)
          setEvents(events)
        } catch (error) {
         setLoad(false)
          console.log(error)
        }
      }
      React.useEffect(() => {
        fetchEvents()
      }, [])

      const removeEvent= (id) => {
        const newEvents = events.filter((event) => event.id !== id)
        setEvents(newEvents)
      }
      if(load){
       return <Loading/>
      }
      else{
    return (
        <React.Fragment>
             <Link to="/"> <button className="err-btn">Return Home</button></Link><hr/>
             
              <div className="event-container">
              {events.map(event=>(
                  <div className="Event-wrapper" key={event.id}>
                      <div className="head">
                          <h2>{event.name}</h2>
                          <hr></hr>
                          <img src={event.image} alt={event.id}/>
                          <div className="event-body">
                              <p>{read ? event.details :`${event.details.substring(0, 100)}......`}
                              <button onClick={() => setRead(!read)}>
                                  {read ? 'show less' : ' read more'}
                          </button></p>
                          </div>
                          <button onClick={()=>removeEvent(event.id)} className="btn">Clear Event</button>
                      </div>
                  </div>

              ))}
     </div>
             
             
        </React.Fragment>
       
    );
              }
}

export default EventShowcase

