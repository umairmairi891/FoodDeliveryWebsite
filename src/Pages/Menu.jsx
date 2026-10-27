import React, { useState } from 'react'
import Button from '../Components/Button'
import '../index.css'
import { topMenu } from '../data'
import { FaStar, FaPlus } from 'react-icons/fa'
import { useCartContext } from '../CartContext/cartcontext'
function Menu({ cart }) {

    const [filter, setFilter] = useState('All')
    const [button, setButton] = useState(false)
    const category = [
        {
            img: 'menu_1.png',
            cat: 'Salad'
        },
        {
            img: 'menu_2.png',
            cat: 'Rolls'
        },
        {
            img: 'menu_3.png',
            cat: 'Deserts'
        },
        {
            img: 'menu_4.png',
            cat: 'Sandwich'
        },
        {
            img: 'menu_5.png',
            cat: 'Cake'
        },
        {
            img: 'menu_6.png',
            cat: 'Pure Veg'
        },
        {
            img: 'menu_7.png',
            cat: 'Pasta'
        },
        {
            img: 'menu_8.png',
            cat: 'Noodles'
        },
    ]

    const filteredMenu = topMenu.filter((m) => {
        let category = m.category.toLowerCase().trim() === filter.toLowerCase().trim() || filter === "All"

        return category
    })

    const { addtocart, removefromcart, increaseQuantity, decreaseQuantity } = useCartContext()

    return (
        <div className=' h-auto w-[90%] py-30 mx-auto'>
            <div className="h-auto">
                <div className="hero">
                    <div className="relative w-[90%]  mx-auto">

                        <div className="absolute inset-0 bg-linear-to-r from-black/70 rounded-2xl to-white/10 "></div>
                        <img src="header_img.png" className='' alt="" />
                        <div className="hero_animation absolute top-5 md:top-[25%] left-[10%] flex flex-col items-start">
                            <h1 className='text-lg md:text-6xl leading-6 md:leading-20 text-white font-[Golivery] font-bold'>Order Your</h1>
                            <h1 className='text-lg md:text-6xl text-white font-[Golivery] font-bold capitalize'>favourite food here</h1>
                            <span className='text-white hidden md:block font-serif max-w-150 py-3'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and calinary expertise. Our mission is to satisfy your carvings and elevate your dining experience,one delicious meal at a time.</span>
                            <Button style={'bg-white text-gray-600m py-1 md:py-3 rounded-4xl'} label={'View Menu'} />
                        </div>
                    </div>
                </div>
                <div className="menu w-[90%] mx-auto">
                    <div className=" border-b-2 border-gray-300">
                        <div className="mt-5">
                            <h1 className='text-3xl font-[Poppins] my-3'>Explore Menu</h1>
                            <span className='text-lg  text-gray-500 w-100 py-4'>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and calinary expertise. Our mission is to satisfy your carvings and elevate your dining experience,one delicious meal at a time.</span>
                        </div>
                        <div className=" w-full">
                            <ul className='flex flex-wrap   my-10 gap-4 md:gap-10 items-center justify-around md:justify-center '>
                                {category.map((c) => (
                                    <li onClick={() => setFilter(c.cat)} className='flex cursor-pointer   flex-col gap-3 items-center'><img src={c.img} className={` h-30 object-cover  p-1 ${c.cat === filter ? 'border-4 border-orange-600  scale-90 duration-200 rounded-[50%] ' : ''}`} /> <span className='text-lg h-4 text-gray-500 font-[Poppins] '>{c.cat}</span></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className='text-3xl font-[Poppins]  font-semibold my-10 '>Top dishes near you</h1>
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                            {filteredMenu.map((m) => {
                                const itemsinCart = cart.find(item=>item.id===m.id)

                                return <div className="bg-white h-90  hero_animation hover:-translate-y-2 duration-200 cursor-pointer  rounded-xl overflow-hidden shadow-xl">
                                    <div className="relative">
                                        <img src={m.img} className='object-cover' alt="" />
                                        <div className="absolute bottom-3 right-3 shadow-md rounded-full overflow-hidden">
                                            {!itemsinCart  || itemsinCart.quantity===0 ? (
                                                <button
                                                    onClick={() => addtocart(m) }
                                                    className='bg-white text-orange-600 w-8 h-8 flex items-center justify-center rounded-full hover:bg-orange-50 transition-colors'
                                                >
                                                    <FaPlus size={14} />
                                                </button>
                                            ) : (
                                                <div className="bg-white text-black h-8 px-2 gap-3 flex items-center rounded-full">
                                                    {
                                                        itemsinCart.quantity>1 ?  <button
                                                        onClick={() => decreaseQuantity(m.id)}
                                                        className='w-5 h-full text-lg font-bold text-gray-600 hover:text-orange-600'
                                                    >
                                                        -
                                                    </button> :
                                                     <button
                                                        onClick={() => removefromcart(m.id)}
                                                        className='w-5 h-full text-lg font-bold text-gray-600 hover:text-orange-600'
                                                    >
                                                        -
                                                    </button>

                                                    }
                                                   
                                                    <span className='font-semibold min-w-3 text-center'>{itemsinCart.quantity}</span>
                                                    <button
                                                        onClick={(e) =>  increaseQuantity(m.id)}
                                                        className='w-5 h-full text-lg font-bold text-gray-600 hover:text-orange-600'
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="px-5 py-3">
                                        <div className="py-2 flex justify-between">
                                            <h1 className='text-lg font-[Poppins font-semibold] '>{m.title}</h1>
                                            <div className="flex items-center gap-3">
                                                <FaStar className='fill-yellow-300' />
                                                <p className='text-orange-400 font-bold'>{m.rating}</p>
                                            </div>
                                        </div>
                                        <p className='text-xs font-[Golivery] my-1'>{m.description}</p>
                                        <span className=' text-xl mb-5   text-orange-500'>$ {m.price}</span>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="mobile flex flex-col items-center w-[80%] mx-auto mt-15">
                    <h1 className='text-xl md:text-4xl max-w-130 text-center font-semibold font-[Poppins]'>For Better Experiance Download Tomato App</h1>
                    <div className="flex flex-col md:flex-row gap-5  mt-10">
                        <img src="play_store.png" alt="" />
                        <img src="app_store.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu