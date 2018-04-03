import React, {Component} from 'react'
import {AUTH_TOKEN} from '../constants'

class Login extends Component {
    state = {
        login: true,
        email: '',
        password: '',
        name: ''
    }

    render() {
        return (
            <div>
                <h4 className="mv3">{this.state.login
                        ? 'Login'
                        : 'Sign Up'}</h4>
                <div className="flex flex-column">
                    {!this.state.login && (<input
                        value={this.state.name}
                        onChange={e => this.setState({name: e.target.value})}
                        type="text"
                        placeholder="Your name"/>)
}
                    <input
                        value={this.state.email}
                        onChange={e => this.setState({email: e.target.value})}
                        type="text"
                        placeholder="Your email address"/>
                    <input
                        value={this.state.password}
                        onChange={e => this.setState({password: e.target.value})}
                        type="text"
                        placeholder="Choose a safe password"/>
                </div>
                <div className="flex mt3">
                    <div className="pointer mr2 button" onClick={_ => this._confirm()}>
                        {this.state.login
                            ? 'login'
                            : 'create account'}
                    </div>
                    <div
                        className="pointer button"
                        onClick={_ => this.setState({
                        login: !login.state.login
                    })}>
                        {this.state.login
                            ? 'need to create an account'
                            : 'already have an account'}
                    </div>
                </div>
            </div>
        )
    }

    _confirm = async _ => {}

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token)
    }
}

export default Login