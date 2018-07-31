import React, { Component } from 'react'
import './contact.module.css'
import firebase from '../utils/firebase'

const responseLinkedin = response => {
  const itemsRef = firebase.database().ref('items');
  itemsRef.push(response)
  this.setState((prevState) => ({...prevState, ...response, submitted: true}))
}

class ContactForm extends Component {
  state = {
    email: "",
    submitted: false
  }

  handleChange = ({index, value}) => {
    this.setState((prevState) => ({...prevState, [index]: value }), () => {console.log(this.state)})
  }

  componentDidMount() {
    import('react-linkedin-sdk').then(Component => {
      this.Component = Component
      this.forceUpdate()
    })
  }

  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center'}} className="contact-form">
        {/* <input type="text" name="email" value={this.state.email} onChange={(event) => this.handleChange({index: "email", value: event.target.value})}/> */}
        {this.Component ? this.state.submitted !== true && (<this.Component.default
          clientId="77kpzih8n7ayy7"
          callBack={responseLinkedin}
          fields=":(id,email-address,num-connections,picture-urls::(original),picture-url,public-profile-url,first-name,last-name,formatted-name,headline,location,industry,summary,positions,specialties,)"
          className={'className'}
          loginButtonText={'Sign up with Linkedin'}
          logoutButtonText={'Thanks! You are set!'}
          buttonType={'button'}
        />) : <h2>Thanks! You're all set!</h2>}
      </div>
    )
  }
}

export default ContactForm