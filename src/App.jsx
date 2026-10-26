import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './NavBar/Navbar'
import Footer from './Footer/Footer'
import Menu from './Pages/Menu'
import Signup from './Pages/Signup'
import Cart from './Pages/Cart'
import { CartProvider } from './CartContext/cartcontext'
function App() {

  const [open, setOpen]=useState(false)
  const [opencart, setOpenCart]=useState(false)
  const [cart, setCart] = useState([])

  const addtocart=(product)=>{
    setCart(prev=>{
      const existing=prev.find(item=>item.id===product.id)
      if(existing){
       return prev.map((item)=>item.id===product.id? {...item,quantity:item.quantity+1}:item)
      }
      return [...prev,{...product, quantity:1}]
    })
    setOpenCart(true)
  }

  localStorage.removeItem("cart")

  const removefromcart=(id)=>{
    setCart(prev=>prev.filter(item=>item.id!==id))
  }

  const total=cart.reduce((acc, val)=>{
     return acc+val.price*val.quantity
  },0)

  const cartCount=cart.reduce((acc, val)=>acc+val.quantity,0)

  const increaseQuantity=(id)=>{
       return setCart(prev=>prev.map((item)=>item.id==id ? {...item,quantity:item.quantity+1}:item))
  }
  const decreaseQuantity=(id)=>{
      return setCart(prev=>prev.map((item)=>item.id==id&& item.quantity>0 ? {...item,quantity:item.quantity-1}:item))
  }
  return (
    <CartProvider value={{addtocart, removefromcart,increaseQuantity,decreaseQuantity}}>
       <Navbar cartCount={cartCount} openCart={()=>setOpenCart(true)} onOpen={()=>setOpen(true)} />
       <Menu cart={cart}/>
       <Footer/>
       <Signup onClose={()=>setOpen(false)} open={open}/>
        <Cart total={total} cart={cart} openCart={opencart}  cartClose={()=>setOpenCart(false)}/>
    </CartProvider>
  )
}

export default App
