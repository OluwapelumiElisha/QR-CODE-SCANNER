import React from 'react'
import search from "@/assets/search.png"
import { handleQrHistory } from '../hook/handleQrHistory'
const QRHISTORY = () => {
    const {handleHistory} = handleQrHistory()
  return (
    <div>
      <div className='bg-customColor h-screen overflow-auto'>
        <p className='pt-10 text-white ml-12 font-extralight italic'>Search</p>
        <div className='flex'>
        <input className='rounded-lg border-2 ml-12 w-[50%] bg-transparent' placeholder='Search List qr-code' type="text" />
        <img className='-ms-8 w-5 h-5 mt-1' src={search} alt="" />
        </div>
        <button onClick={handleHistory} className='text-white'></button>
      </div>
    </div>
  )
}

export default QRHISTORY
