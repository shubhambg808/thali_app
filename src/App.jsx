import { useEffect, useState } from 'react'; 
import { useSelector } from 'react-redux'
import {  Outlet,useNavigate } from 'react-router-dom';


function App() {
  const [value,setValue]=useState("")
  const Length=useSelector(state=>state.storeSlice.checkOutCart.length)


 useEffect(()=>{
  if(Length>=2){
    setValue("")
  }
  },[Length])

 const navigate=useNavigate();

  const handleClick=()=>{

    if(Length>=2){
    setValue("")
    navigate("/checkout")
    }else{
      setValue("You Need To Add Two Items To CheckOut")
      navigate("/thali")     
    }
  }


return (
    <div className="App" style={{width:"100%"}} >
      <h1 style={{textAlign:'center',}}> <img style={{height:"100px",width:"100px"}} src="https://cdn.icon-icons.com/icons2/1465/PNG/512/141mancook1_100732.png" alt="" /> Welcome To the Thali Shopping.. <img style={{height:"100px",width:"100px"}} src="https://thumbs.dreamstime.com/b/food-online-order-delivery-banner-backdrop-cartoon-vector-illustration-hand-holding-smartphone-icons-various-dishes-210344193.jpg" alt="" /> </h1>
    
     <div style={{display:"flex",justifyContent:"space-evenly",backgroundColor:"blueviolet",width:"100%",boxShadow:"2px 2px 2px 2px rgb(148, 147, 147)",borderRadius:"15px"
      }}>
     <button style={{color:"white"}} onClick={()=> navigate("/thali")}>Thali</button>
      <br />
     <button style={{color:"white"}}  to={"/checkout"} onClick={handleClick} >CheckOut</button>
     </div>
     <p style={{textAlign:"center",textDecoration:"underline",color:'orange'}}> {value}</p>

      <Outlet/>
    </div>  
  )
}

export default App;
