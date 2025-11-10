import React from 'react'
import { assets } from '../assets/assets'

const Upload = () => {
  return (
    <div className='pb-16'>
    <h1 className="text-center mb-5 sm:mb-5 text-2xl md:text-3xl lg:text-4xl mt-5 font-semibold bg-gradient-to-r from-gray-900 to-gray-400  md:py-16 py-6 bg-clip-text text-transparent">See the magic. Try now</h1>
    <div className="text-center ">
              <input type="file" id="upload2" hidden />
              <label
                htmlFor="upload2"
                className="inline-flex items-center gap-3 px-8 py-3 rounded-full cursor-pointer 
                           bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-medium 
                           hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
              >
                <img width={20} src={assets.upload_btn_icon} alt="Upload icon" />
                <p className="text-sm">Upload your image</p>
              </label>
            </div>
    </div>
  )
}

export default Upload
