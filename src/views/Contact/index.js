import {useState} from 'react';
import axios from 'axios';
import './style.css'

function Contact() {
    const [userInput, setUserInput] = useState({name: "", email: "", phone: "", message: ""})
    const [showAlert, setShowAlert] = useState(false)
    const handleChange = function (event) {
        setShowAlert(false)

        const property = event.target.id
        const value =  event.target.value
        setUserInput({...userInput, [property]: value})
    }

    const handleSubmit = function (event){
        event.preventDefault()
        axios({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            data: userInput
        }).then( result => {
            console.log(result)
            setShowAlert(true)
            setUserInput({name: "", email: "", phone: "", message: ""})
        })
        .catch( error => console.log(error))
    }

    return (
        <section id="Contact"> 
        <img id="img-contacto" src={`../assets/contact-image.png`} alt="foto de contacto"/>       
        <h1>Get in touch</h1>
        <h2>Were are hiring!</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    value={userInput.name}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    value={userInput.email}
                />
            </div>
            <div className="form-group">
                <input
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone"
                    value={userInput.phone}

                />
             </div>
            <div className="form-group">
                <textarea
                    onChange={handleChange}
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Message"
                    value={userInput.message}
                ></textarea>
            </div>
            <button disabled={(userInput.name==="")||(userInput.email==="")||(userInput.phone==="")||(userInput.message==="")} type="submit" className="btn btn-primary submitForm">Submit</button>
        </form>
        {showAlert && <div className="alert alert-success">Mensaje enviado correctamente</div>}
        </section>
  );
}

export default Contact;