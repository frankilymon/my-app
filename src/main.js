import React from "react";
import {observer} from "mobx-react-lite";
import {FinalPage} from "./final_page";
import {main_store} from "./main_store";
import Cards from './Cards';
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';



const Menu = observer(() => {
    return <div className="menu">
        {main_store.pizza.map((item, i) => {
            return <div className='menu-item'>
                <span style={{fontWeight: 'bold', fontSize: '1.2em'}}>{item.title}</span>
                <img src={item.image_url} alt="food" height='150px' width='150px' style={{objectFit: 'contain', backgroundColor: 'white'}} />

                <div>
                    <div style={{display: 'grid', gridTemplateColumns: '30px 20px 30px 30px 30px', placeItems: 'center'}}>
                        ${item.price.toFixed(2)}
                        <div></div>
                        <button disabled={item.quantity === 0} onClick={() => main_store.pizza[i].quantity = main_store.pizza[i].quantity - 1}>-</button>
                        <h3 style={{textAlign: 'center'}}>{item.quantity}</h3>
                        <button onClick={() => main_store.pizza[i].quantity = main_store.pizza[i].quantity + 1}>+</button>
                    </div>
                </div>

            </div>
        })}
    </div>
})

const Sidebar = observer(() => {
    return <div className='sidebar'>
        <center style={{marginTop: '20px'}}>Your Order</center>
        <div>
            {main_store.pizza
                .filter(el => el.quantity > 0)
                .map(el => <div style={{display: 'grid', marginLeft: '20px', gridTemplateColumns: '1fr 1fr 1fr'}}>
                    <span>{el.title}</span>
                    <span>x{el.quantity}</span>
                    <span>${(el.price * el.quantity).toFixed(2)}</span>
                </div>)}
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'auto 80px', marginLeft: '20px', textAlign: 'left'}}>
            <div>Subtotal</div>
            <div>${(main_store.pizza.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)).toFixed(2)}</div>
            <div>Tax</div>
            <div>${((main_store.pizza.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)) * 0.09975).toFixed(2)}</div>
            <div>Total</div>
            <div>${(main_store.pizza.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0) + (main_store.pizza.map(item => item.quantity * item.price).reduce((a, b) => a + b, 0)) * 0.09975).toFixed(2)}</div>
        </div>
        <Button  size="small" 
        variant="contained" 
        color="secondary" onClick={() => main_store.current_page = main_store.current_page + 1}>Next</Button>
    </div>
})




export const Main = observer(() => <>
    { main_store.current_page === 0 && <div className='frame'>
    
   

    <Grid container spacing={4} >
        <Grid item xs={12} sm={6} md={4}>
        <Cards />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Cards />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Cards />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <Cards />
        </Grid>
    </Grid>

    
    
    <Sidebar />
  
    
    </div>
    }

    { main_store.current_page === 1 && <FinalPage />}

</>
)