import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-3 lg:px-10 mt-5 sm:mt-16 lg:mt-20 gap-0 lg:gap-0">
      {/* ------ Left Side ------ */}
      <div className="text-center lg:text-left lg:w-[35%] space-y-3 -mt-3">
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-snug mt-3">
          Remove the <br className="max-md:hidden" />
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            background
          </span>{' '}
          from <br className="max-md:hidden" /> images for free.
        </h1>

        <p className="text-[15px] text-gray-500 leading-relaxed mt-1">
          Instantly remove image backgrounds with AI precision. <br className="max-md:hidden" />
          Upload, edit, and download in seconds — no Photoshop needed.
        </p>

        <div className="-mt-1">
          <input type="file" id="upload1" hidden />
          <label
            htmlFor="upload1"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full cursor-pointer 
                       bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white font-medium 
                       hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg"
          >
            <img width={20} src={assets.upload_btn_icon} alt="Upload icon" />
            <p className="text-sm">Upload your image</p>
          </label>
        </div>
      </div>

      {/* ------ Right Side ------ */}
      <div className="w-full lg:w-[41%] flex justify-center lg:justify-end -mt-4">
        <img
          src={assets.header_img}
          alt="Background removal example"
          className="w-[70%] sm:w-[76%] lg:w-[83%] max-w-lg"
        />
      </div>
    </div>
  )
}

export default Header
