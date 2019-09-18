import React from "react";
import "./ContactUsForm.css";

import {checkIfUserHasSignIn, currentUser, checkString} from "../../services/Util";

// 3. El nombre y apellidos del formulario deben inicializarse a los valores del nombre y apellidos del currentUser()

const initialState = () => {

    return {
        name: currentUser().name,
        surname: currentUser().surname,
        subject: '',
        message: ''
    }
};

export default class ContactUsForm extends React.Component {
    constructor(props) {
        super(props);

        // 3. Comprobar que el usuario se ha registrado
        if (checkIfUserHasSignIn(this.props.history)) {
            this.props.history.replace("/home/contact-us");
        }

        this.state = initialState();

        // 3. Gestionar el formulario y verificar la información (onChange)
        this.handleTyping = this.handleTyping.bind(this);   
        this.handleSubmit = this.handleSubmit.bind(this);     

        
        // 3. Una vez verificada enviar a través de this.props.onSubmit      
      
    }

    handleTyping(event) {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
   
        const {name, surname, subject, message} = this.state;

        var error = this.isError()

        if (error !== '') {
            error = 'Please, correct the following information: \n' + error;

            alert(error);
        }

        this.props.onSubmit({
            name,
            surname,
            subject,
            message
        });
    }

    isError = (errorString) => {
        
        errorString = '';

        if (checkString(this.state.name))
            errorString += "- Name is not valid.\n";
        if (checkString(this.state.surname))
            errorString += "- Surname is not valid.\n";
        if (checkString(this.state.subject))
            errorString += "- Subject must be filled.\n";
        if (checkString(this.state.message))
            errorString += "- Message is required.\n";

        return errorString
    }

    render() {
        return <>
            <h4 className={`ml-2 mb-4`}>Contact with the WallaKeep team</h4>

            <form onSubmit={this.handleSubmit}>
                <div>
                    <h5 className={`ml-2`}><b>Name</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="name" value={this.state.name} onChange={this.handleTyping} />
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Surname</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="surname" value={this.state.surname} onChange={this.handleTyping}/>
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Subject</b></h5>
                    <input className={`form-control d-block contact-form-input`} type="text" name="subject" value={this.state.subject} onChange={this.handleTyping}/>
                </div>
                <div>
                    <h5 className={`ml-2`}><b>Message</b></h5>
                    <textarea className={`form-control d-block contact-form-input`} value={this.state.message} name="message" cols="30" rows="10" onChange={this.handleTyping}/>
                </div>
                <div className={`ml-2`}>
                    <button type="submit" className="btn-primary btn" >Save</button>
                </div>
            </form>
        </>;
    }
}
