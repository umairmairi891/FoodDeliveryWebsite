import React, { useState } from 'react'
import { FaTimes, FaShoppingBag, FaTrash } from 'react-icons/fa';
import Button from '../Components/Button';
import { useCartContext } from '../CartContext/cartcontext';
function Cart({ openCart, cartClose, cart, total }) {
    const { removefromcart, decreaseQuantity } = useCartContext()
    const [openDelivery, setOpenDelivery] = useState(false)
    const Deliveryfee = 2

    if (!openCart) return null;


    return (
        <div className="w-full h-screen">
            <div className='fixed z-40 inset-0 animate-fade-in bg-black/60 w-full h-screen'>
                <div className="bg-white w-full h-full flex flex-col p-3 md:p-15 overflow-y-auto ">
                    <div className="w-full  md:w-[90%] mx-auto flex justify-between items-center mb-10">
                        <h1 className='text-lg md:text-4xl font-[Poppins] flex items-center gap-5 '>Shopping Cart <FaShoppingBag className='fill-red-500' /></h1>
                        <FaTimes className='w-5 md:w-8 h-5 md:h-8 font-[Lato] cursor-pointer' onClick={cartClose} />
                    </div>
                    <div className="w-full md:w-[90%] mx-0 md:mx-auto ">
                        <table className='w-full'>
                            <thead className='text-xs md:text-lg w-full border-b py-3 border-gray-300 grid grid-cols-6'>
                                <th>Items</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </thead>
                            <tbody className='py-4 my-5  text-center border-gray-300'>
                                {cart.map((c) => (
                                    <tr className='border-b border-gray-300  grid text-center grid-cols-6 text-sm md:text-xl items-center py-4 '>
                                        <td className='px-1 md:px-14'><img src={c.img} className='w-10 md:w-20 h-10 md:h-20 object-cover rounded-xl' alt={c.title} /></td>
                                        <td className='truncate'>{c.title}</td>
                                        <td>${c.price}</td>
                                        <td>{c.quantity}</td>
                                        <td>${c.price * c.quantity}</td>
                                        <td className='text-center px-5 md:px-25'>{c.quantity > 1 ? <FaTimes onClick={() => decreaseQuantity(c.id)} className='text-center  cursor-pointer' /> : <FaTimes onClick={() => removefromcart(c.id)} className='text-center  cursor-pointer' />}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto gap-4 mt-20 ">
                        <div className="">
                            <h1 className='text-3xl  font-semibold font-[Roboto]'>Cart Total</h1>
                            <div className="flex w-[80%] py-2 mt-4 justify-between border-b border-gray-400 font-[Poppins] text-gray-600">
                                <p >Subtotal</p>
                                <span>${total}</span>
                            </div>
                            <div className="flex w-[80%] py-2 justify-between border-b border-gray-400 font-[Poppins] text-gray-600">
                                <p>Delivery fee</p>
                                <span>${Deliveryfee}</span>
                            </div>
                            <div className="flex w-[80%] py-2 justify-between border-b border-gray-400 font-semibold font-[Poppins] text-gray-600">
                                <h1>Total</h1>
                                <span>${total + Deliveryfee}</span>
                            </div>
                            <div className="mt-5">
                                <Button click={() => setOpenDelivery(true)} label={'Proceed To Check Out'} style={'bg-red-500 uppercasee text-white rounded cursor-pointer'} />
                            </div>
                        </div>
                        <div className="w-full mt-5 md:mt-0 p-0 md:p-10">
                            <p className='text-sm text-gray-600 py-2'>If you have promo code enter here</p>
                            <div className="w-full flex rounded-lg overflow-hidden bg-gray-200">
                                <input type="text" className='w-full p-3' placeholder='Promo Code' />
                                <Button label={'Submit'} style={'bg-black text-white cursor-pointer'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {openDelivery && (
                <div className="fixed inset-0 z-50 bg-black/80 w-full h-screen">
                    <div className="bg-white overflow-y-auto flex flex-col  w-full h-screen p-8 relative shadow-2xl">
                        <div className="w-full flex items-center justify-between">
                            <h1 className="text-lg md:text-2xl font-bold ">Delivery Status</h1>
                            <FaTimes className="  text-gray-400 hover:text-black cursor-pointer text-xl" onClick={() => setOpenDelivery(false)} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 h-full px-0 md:px-10 items-center">
                            <div className="w-full">
                                <h1 className='my-5 w-[80%] text-lg md:text-3xl font-[Poppins]'>Delivery Information</h1>
                                <form action="" className='font-[Roboto]'>
                                    <div className="flex gap-5">
                                        <input className='border px-4 rounded py-1 w-[40%] border-gray-400 ' type="text" placeholder='First Name' />
                                        <input className='border rounded py-1 w-[40%] border-gray-400 px-4' type="text" placeholder='Last Name' />
                                    </div>
                                    <input type="text" className='border rounded py-1 w-[83%] my-4 border-gray-400 px-4' placeholder='Email' />
                                    <input type="text" className='border rounded py-1 w-[83%] mb-4 border-gray-400 px-4' placeholder='Street' />
                                    <div className="flex gap-5">
                                        <input type="text" className='border rounded py-1 w-[40%] border-gray-400 px-4' placeholder='City' />
                                        <input type="text" className='border rounded py-1 w-[40%] border-gray-400 px-4 font-[Roboto] ' placeholder='State' />
                                    </div>
                                    <div className="flex gap-5 my-4">
                                        <input type="text" className='border font-[Roboto] rounded py-1 w-[40%] border-gray-400 px-4' placeholder='Zip Code' />
                                        <input type="text" className='border rounded py-1 w-[40%] border-gray-400 px-4 font-[Roboto]' placeholder='Country' />
                                    </div>
                                    <input type="text" className='border font-[Roboto] rounded py-1 w-[83%]  border-gray-400 px-4' placeholder='Phone' />
                                </form>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <div className="">
                                    <h1 className='text-3xl  font-semibold font-[Roboto]'>Cart Total</h1>
                                    <div className="flex w-[80%] py-2 mt-4 justify-between border-b border-gray-400 font-[Poppins] text-gray-600">
                                        <p >Subtotal</p>
                                        <span>${total}</span>
                                    </div>
                                    <div className="flex w-[80%] py-2 justify-between border-b border-gray-400 font-[Poppins] text-gray-600">
                                        <p>Delivery fee</p>
                                        <span>${Deliveryfee}</span>
                                    </div>
                                    <div className="flex w-[80%] py-2 justify-between border-b border-gray-400 font-semibold font-[Poppins] text-gray-600">
                                        <h1>Total</h1>
                                        <span>${total + Deliveryfee}</span>
                                    </div>
                                    <div className="mt-5">
                                        <Button label={'Proceed To Payment'} style={'bg-red-500 uppercasee text-white rounded cursor-pointer'} />
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            )}
        </div>
    )
}

export default Cart