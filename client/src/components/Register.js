import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    register(user).then(res => {
      if (res) {
        this.props.history.push('/login')
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-md-6 mt-5 mx-auto'>
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
              <div className='form-group'>
                <label htmlFor='firstName'>First Name</label>
                <input type='text'
                  className='form-control'
                  name='firstName'
                  placeholder='Enter first name'
                  value={this.state.firstName}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text'
                  className='form-control'
                  name='lastName'
                  placeholder='Enter last name'
                  value={this.state.lastName}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email'
                  className='form-control'
                  name='email'
                  placeholder='Enter email'
                  value={this.state.email}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password'
                  className='form-control'
                  name='password'
                  placeholder='Enter password'
                  value={this.state.password}
                  onChange={(e) => this.onChange(e)}
                />
              </div>
              <button type='submit'
                className='btn btn-lg btn-primary btn-black'>
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register