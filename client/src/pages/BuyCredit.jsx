import React from 'react'
import { assets, plans } from '../assets/assets'

const BuyCredit = () => {
  return (
    <div className="min-h-[80vh] text-center pt-12 bg-[#f9fbff]">
      {/* Header Button */}
      <button className="border border-blue-500 text-gray-700 font-medium px-5 py-1.5 rounded-full text-sm hover:bg-blue-500 hover:text-white transition-all">
        OUR PLANS
      </button>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mt-5 mb-10">
        Choose the plan that’s right for you
      </h1>

      {/* Plans Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto px-4">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all p-6 border border-gray-100 flex flex-col items-start text-left"
          >
            {/* Logo */}
            <img width={32} src={assets.logo_icon} alt="" className="mb-3" />

            {/* Plan Info */}
            <p className="text-base font-semibold text-gray-800 mb-1">
              {item.id}
            </p>
            <p className="text-gray-500 text-sm mb-4">
              {item.desc}
            </p>

            {/* Price */}
            <div className="mb-6">
              <p className="text-2xl font-bold text-gray-800">
                ${item.price}
                <span className="text-gray-500 text-sm font-normal">
                  {' '} / {item.credits} credits
                </span>
              </p>
            </div>

            {/* Purchase Button */}
            <div className="w-full flex justify-center">
  <button className="bg-black text-white text-sm font-medium py-2.5 px-8 rounded-md hover:bg-gray-800 transition-all">
    Purchase
  </button>
</div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default BuyCredit
