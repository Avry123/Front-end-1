import React from 'react'


function Card() {
  return (
    <div className='max-w-[300px] min-h-[70%] bg-white rounded-lg flex flex-col justify-between items-center 
                    md:min-[70%]'>
        <img className='w-[85%] h-[50%] mt-auto rounded-lg'
             src='image-qr-code.png'
             alt='' />
    <div className='w-[100%] h-[40%]  text-center p-4'>
        <p
        className='font-outfit font-bold text-xl  text-gray-900'
        >Improve your front-end skills by building projects.</p>
        <p
        className='font-outfit font-normal text-base mt-2 text-gray-400'
        >Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
    </div>
  )
}

export default Card