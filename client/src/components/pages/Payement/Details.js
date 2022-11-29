import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import "../../css/details.css"
import "../../css/login.css"
import { useParams } from 'react-router-dom'

const Details = () => {

    const [show,setShow]=useState(false)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    const [price,setPrice]=useState()

    const [s1,setS1]=useState(false)
    const [s2,setS2]=useState(false)
    const [s3,setS3]=useState(false)

    let userID=localStorage.getItem("userID")
    const { id } = useParams();

    function updateHandler(){
        setS1(false)
        setS2(false)
        setS3(false)
    }

   async function getuserdetails(){
        await fetch(`http://localhost:3001/api/auth/getuserdetails`, {
          // await fetch(`https://myknot-official.herokuapp.com/api/auth/getuserdetails`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            userID: userID,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(data)
            setName(data.user.name)
            setEmail(data.user.email)

            })
          .catch((error) => {
            console.log(error);
          });
    }

    useEffect(()=>{
        getuserdetails()
    },[])

    useEffect(() => {
        // fetch(`https://myknot-official.herokuapp.com/api/themes/getonetheme`, {
         fetch(`http://localhost:3001/api/themes/getonetheme`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            themeID: id,
          },
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if(data.success==true){
                // console.log(data)
                setPrice(data.theme.price)
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

   async function proceedHandler(){
        try {
            await fetch("http://localhost:3001/api/payement/getclientdetails", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ price ,email, phone, name,customerId:userID }),
              })
                .then((res) => {
                  return res.json();
                })
                .then((data) => {
                  if(data.success==true){
                    window.location.href = `${data.data.data.payment_link}`
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
        } catch (error) {
            
        }
    }

  return (
    <>

    <Navbar/>
    <div className="d-one">
        <div className="d-two">
            <h1 className='d-h1'>Check your details</h1>
        </div>
        <div className="d-three">
                <div className="d-three-childone">
                    <h2 className='d-h2'>Please check your details before you proceed to payement</h2>
                </div>
                <div className="d-three-childtwo">
                    <div className="d-tc-one">
                        <h3>Name : {name}</h3>
                        <button onClick={()=>{
                            {   updateHandler()
                                setShow(true);
                                setS1(true)
                            }
                        }} className="d-button-update" onCl>Update</button>
                    </div>
                    <div className="d-tc-one">
                        <h3>Email :{email}</h3>
                        <button onClick={()=>{
                            {   updateHandler()
                                setShow(true);
                                setS2(true)
                            }
                        }} className="d-button-update">Update</button>
                    </div>
                    <div className="d-tc-one">
                        <h3>Phone :{phone}</h3>
                        <button onClick={()=>{
                            {   updateHandler()
                                setShow(true);
                                setS3(true)
                            }
                        }} className="d-button-update">Update</button>
                    </div>
                    <button className='d-btn2' onClick={()=>{
                        proceedHandler()
                    }}>Proceed to payement</button>
                </div>
            </div>
            
    </div>
   {
    show? <div className="dd-one">
    <div className="dd-two">  
        <div className="d-h4-one">{
            s1===true?"Name":s2===true?"Email":"Phone"
        }</div>
        <textarea name="" id="" cols="50" rows="10" value={
            s1===true?name:s2===true?email:phone
        } onChange={(e)=>{
            s1===true?setName(e.target.value):s2===true?setEmail(e.target.value):setPhone(e.target.value)
        }}></textarea>
        <button onClick={()=>{
            setShow(false)
            updateHandler()
        }} className="dd-button">Done</button>
    </div>
</div>:null
   }

    </>
  )
}

export default Details
