import React from 'react'
import './logreg.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../state/authSlice'
import Bottom from '../footer/bottom'

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3001/auth/login`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000/'
        },
        method: "POST",
        body: JSON.stringify({ email, password })
      })
      const data = await res.json()
      console.log(data)
      dispatch(login(data))
      if (data.error) {
        throw data.error
      }
      navigate("/home")
    } catch (error) {
      setError(error)
      setTimeout(() => {
        setError("")
      }, 2000)
    }
  }

  return (
    <div className="login_body">
      <div>
        <h1><a href="/" className="hLinkSign">Mess and Canteen Booking</a></h1>
        <h2 className="subHeading">Login</h2>
      </div>
      <div className='login-body-flex-item'>
        <form onSubmit={handleLogin} className="frm">
          <div>
            <input type="email" name="email" id="email" placeholder="Email ID" required autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder="Password" required autoComplete="off" minLength="8" onChange={(e) => setPassword(e.target.value)} />
            <a href="https://www.google.co.in/" className="acr">Forgot Password</a>
          </div>
          <button className="btn">Log In</button>
        </form>
        <a href="/register" className="acr">Don't have an account? Register Here</a>
        {
          error && <div className="invalid">{`${error}`}</div>
        }
      </div>
      <Bottom />
    </div>
  )
}

export default Login