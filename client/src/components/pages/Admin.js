import React, { useState } from 'react'
import { Routes,Route, Link } from 'react-router-dom'
import "../css/admin.css"
import Dashboard from './Admin/Dashboard'
import AdminProducts from './Admin/AdminProducts'
import CreateTheme from './Admin/CreateTheme'


const Admin = () => {
  const [adminDisplay, setAdminDisplay] = useState("Dashboard");
  function displayAdmin(value) {
    setAdminDisplay(value);
  }

  const [showdiv,setShowDiv]=useState(<Dashboard/>)

  return (
    
    <>
    <div className="adm-one">
        <div className="adm-sidebar">
          <div className="adm-s-one">
         <div className="adm-s-one1"><i className="bi bi-person-circle adm-icon1"></i></div> 
         <div className="adm-s-one2"><p className="adm-p1">Leston Aaron Salis</p><p className="adm-p3">lestonaaron321@gmail.com</p>
         </div> 
          </div>
          <div className="adm-child" onClick={()=>{
            setShowDiv(<Dashboard/>)
          }}>
          <i className="bi bi-bar-chart-fill adm-icon2"></i> <p className="adm-p2">Dashboard</p>
          </div>
          <div className="adm-child" onClick={()=>{
            setShowDiv(<CreateTheme/>)
          }}>
          <i className="bi bi-bag-plus-fill adm-icon2"></i> <p className="adm-p2">Add Product</p>
          </div>
          <div className="adm-child" >
          <i className="bi bi-bookmark-plus-fill adm-icon2" ></i> <p className="adm-p2">Orders</p>
          </div>
          <div className="adm-child" onClick={()=>{
            setShowDiv(<AdminProducts/>)
          }}>
          <i className="bi bi-handbag-fill adm-icon2"></i> <p className="adm-p2">Products</p>
          </div>
          <div className="adm-child">
          <i className="bi bi-people-fill adm-icon2"></i> <p className="adm-p2">Cusotmers</p>
          </div>
          <div className="adm-child">
          <i className="bi bi-chat-dots-fill adm-icon2"></i><p className="adm-p2">Reviews</p>
          </div>
          <div className="adm-child">
          <i className="bi bi-person-video2 adm-icon2"></i><p className="adm-p2">Profile</p>
          </div>
        </div>
        <div className="adm-two">
          {showdiv}
        </div>

    </div>
    </>

  )
}

export default Admin
