import React, {Component} from 'react';
import './Auth.css'
import {Link} from "react-router-dom";
import {connect} from "react-redux";

class Auth extends Component {
    state = {
        login: '',
        password: ''
    }

    handleUserInput = e => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    render() {
        let disabled = true
        if(this.props.login === this.state.login && this.props.password === this.state.password) {
            disabled = false
        }
        return (
        <form className={'forms'}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input name={'login'} value={this.state.login} className='form-control' type="text" onChange={this.handleUserInput}/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input name={'password'} value={this.state.password} type="password" className='form-control' onChange={this.handleUserInput}/>
            </div>
            <Link to={'/home'}><button type={'button'} disabled={disabled} className={disabled ? 'buttons': 'btn btn-outline-primary'}>Войти</button></Link>
        </form>
        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login,
        password: state.password
    }
}

export default connect(mapStateToProps, null)(Auth);