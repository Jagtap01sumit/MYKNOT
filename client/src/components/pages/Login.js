import React, { useState } from 'react'
import "../css/login.css"

const Login = () => {

  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  async function submitHandler(){
    try {
      await fetch("/api/auth/login",{
        method:"POST",
        body:JSON.stringify({email,password}),
        headers:{"Content-type":"application/json"}
      }).then((res)=>{
        return res.json()
      }).then((data)=>{
        return data
      }).catch((error)=>[
        console.log(error)
      ])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    
    <div className="l-one">
        <div className="l-two">

        </div>
       <div className="l-three">
        <div className="heading">
          <h1>Login</h1>
        </div>
        <div className="l-form">
          <div className="l-input-control">
            <input
              type="text"
              placeholder="Email"
              className="l-input-common"
              value={email}
              onChange={(e)=>[
                setEmail(e.target.value)
              ]}
            />
            <input
              type="password"
              placeholder="Password"
              className="l-input-common"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
            />
          </div>
          <div className="l-formbtn">
            <button
              type="submit"
              className="l-formbtn-1"
              onClick={()=>{
                submitHandler()
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Login
