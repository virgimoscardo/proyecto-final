import {useState} from 'react';
import axios from 'axios';
import './style.css'

function Formulario() {
    const [userInput, setUserInput] = useState({name: "", email: "", phone: "", message: ""})
    const [showSuccess, setShowSuccess] = useState(false)
    const [showErrors, setShowErrors] = useState([])

    const handleChange = function (event) {
        setShowSuccess(false)

        const property = event.target.id
        const value =  event.target.value
        setUserInput({...userInput, [property]: value})
    }

    const handleSubmit = function (event){
        event.preventDefault()
        axios({
            url: 'https://watts-25-back.herokuapp.com/api/contacto',
            method: 'POST',
            data: userInput
        }).then( result => {
            console.log(result)
            setShowSuccess(true)
            setShowErrors([])
            setUserInput({name: "", email: "", phone: "", message: ""})
        })
        .catch (error => {
            console.log(error)
            error && error.response && setShowErrors(error.response.data)
        })
        
    }

    return (
    <section id="Contact">        
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
            <button /*disabled={(userInput.name==="")||(userInput.email==="")||(userInput.phone==="")||(userInput.message==="")}*/  type="submit" className="btn btn-primary submitForm">Submit</button>
        </form>
        {showSuccess && <div className="alert alert-success">Mensaje enviado correctamente</div>}
        {showErrors.error &&
            <div className='alert alert-error'>{showErrors.data.name || showErrors.data.email || showErrors.data.phone || showErrors.data.message}</div>                 
        }
    
    </section>
    )
}

export default Formulario;