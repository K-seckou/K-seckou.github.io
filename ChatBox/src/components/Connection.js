import React, { Component } from 'react'
import { Redirect } from 'react-router-dom' 

class Connection extends Component {

    state = {
        pseudo: '',
        goToChat: false,
    }
    
    handleChange = event => {
    const pseudo = event.target.value 
    this.setState({pseudo})
    }
    goToChat = event => {
        event.preventDefault()
        this.setState({goToChat : true})

    }

    render(){

        if (this.state.goToChat){
            return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
        }

        return(
            <div className='connexionBox'>
                <form className='connexion' onSubmit={this.goToChat}>
                    <input 
                    value={this.state.pseudo}
                    onChange={this.handleChange}
                    type='text' 
                    placeholder='Pseudo'
                    required
                    />
                    <button type='submit'> envoyer</button>
                </form>

            </div>
        )
    }
}

export default Connection