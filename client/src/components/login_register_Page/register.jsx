import React from 'react'
import '../../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { register } from '../../state/authSlice'
import Bottom from '../footer/bottom'


const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpassword, setCPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`http://localhost:3001/auth/register`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000/'
        },
        method: "POST",
        body: JSON.stringify({ name, email, password, confirmpassword })
      })
      const data = await res.json()
      console.log(data)
      dispatch(register(data))
      if (data.error) {
        throw data.error
      }
      navigate("/")
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
        <h2 className="subHeading">Register</h2>
      </div>
      <div className='login-body-flex-item'>
        <form onSubmit={handleRegister} className="frm">
          <div>
            <input type="text" name="name" id="name" placeholder="Name" required autoComplete="off" onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <input type="email" name="email" id="email" placeholder="Email ID" required autoComplete="off" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder="Password" required autoComplete="off" minLength="8" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <input type="password" name="confirmpass" id="confirmpass" placeholder="Confirm Password" required autoComplete="off" onChange={(e) => setCPassword(e.target.value)} />
          </div>
          <button className="btn">Register</button>
        </form>
        <a href="/" className="acr">Already have an account? Login Here</a>
        {
          error && <div className="invalid">{`${error}`}</div>
        }
      </div>
      <Bottom />
    </div>
  )
}

export default Register