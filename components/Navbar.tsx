import React, { useState } from 'react'
import logo from "../Images/ZKSync.png"

function Navbar() {
    const [address,setAddress] = useState("0x84B325e04a106A8A4636914C22319b9daecF2892");
  return (
    <div className='h-[100px] w-full bg-[#CFCAFF] flex justify-between items-center pr-8'>
        <div className='flex items-center'>
            <img className='h-[90px] pt-3 pl-5' src={logo} />
            <p className='font-[600] text-lg mt-3'>ZK.Stable</p>
        </div>
        <div>
            <div className='w-[170px] bg-white h-[40px] rounded-xl flex justify-center items-center cursor-pointer'>
            <p className='font-semibold'>
                      {address.slice(0, 10) +
                        "..." +
                        address.slice(-4)}
                    </p>
            </div>
        </div>
    </div>
  )
}

export default Navbar