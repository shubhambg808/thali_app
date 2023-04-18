import { useDispatch,useSelector } from 'react-redux'
import { add,remove,less } from '../counterSlice/storeSlice';
import css from "./Thali.module.css"
import { useEffect, useState } from 'react';
const Thali = () => {
  const [show,setShow]=useState(false)
    const dispatch=useDispatch();
  const myStore=useSelector(state=>state.storeSlice)
  const Length=useSelector(state=>state.storeSlice.checkOutCart.length)

  const removeItem=(ele)=>{
    dispatch(remove(ele))
  }

  const addToThali=(ele)=>{
    dispatch(add(ele))
  }

  const lessItem=(ele)=>{
    dispatch(less(ele))
  }

  useEffect(()=>{
    if(Length==0){
      setShow(true)
    }
    else{
      setShow(false)
    }
  },[Length]) 

  return (
    <div className="App"  >
            <p className={css.italicLine}>Your plate is having <span className={css.dishItem}> {Length}  </span> Dishes</p>    
        <div className={show ? css.hide:css.itemsListTop}>
            {myStore.checkOutCart.map((ele,ind)=>(
              <div style={{margin:"10px 40px"}}key={ind} >
                  <img src={ele.img} alt={ele.title} className={css.topImgs} />
                  <p>quantity : {ele.quantity}</p>
                <button className={css.qtyIncDec} style={{width:"100px"}} onClick={()=>removeItem(ele)} >Remove</button>
              </div>
            ))}
     </div>
     
  <div className={css.itemsList}>
   {myStore.cart.map((ele,ind)=>(
      <div key={ind} className={css.products} style={{display:"flex"}}>
        <div key={ind} style={{margin:"20px"}} >
         <img src={ele.img} alt={ele.title} className={css.itmsListImgs} />
         <br />
         <input type='button' value={"+"}  className={css.qtyIncDec} onClick={()=>addToThali(ele)} />  <input type='button' min={0}  className={css.qtyIncDec} onClick={()=>lessItem(ele)} value={"-"} />
        </div>
        <div>
         <p className={css.prodtitle} >{ele.title}</p>
         <p>{ele.discription}</p>
         <p className={css.price}>Rs : {ele.price}</p>
        </div>
      </div>
    ))}
  </div>
  </div>  
  )
}

export default Thali