import './ItemCart.css';
import { ItemCount2 } from '../ItemCount2/ItemCount2'
import { useState, useEffect } from 'react'
import { findAllInRenderedTree } from 'react-dom/test-utils';





export const ItemCart = (props) => {

    const [deleteId, setDeleteId]=useState(0)

    useEffect( () =>{
        props.remove(deleteId)
    },[deleteId])

    const removeItem = () => {
        if (window.confirm(`Está seguro de eliminar el producto ${props.name} de su carrito?`)) {
            setDeleteId(props.id)
            //console.log(deleteId)
        }       
    }

    const increase = (e) => { 
        props.increase(props.id)
    }

    const decrease = (e) => {
        props.decrease(props.id)
    }


    

    return(
        <div className="itemCart">
            <div className="remove" onClick={removeItem}>X</div>
            <div className="subItemCart">
                <h3>
                    {props.name}            
                </h3>
                <div className="subItemCart1">                
                    <div className="drinkImgCart"><img src={props.img}/></div>   
                    <div className="">Unit price: <b>$ {props.price}</b></div>             
                    <ItemCount2 quantity={props.quantity} increase={increase} decrease={decrease}/>
                    <div className=""><b>Total: </b>$ {props.price * props.quantity}</div> 
                </div>
            </div>      
        </div>
    )
}