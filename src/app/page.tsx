'use client'

import { useState } from "react";
import { sendGTMEvent } from "@/utils/analytics";

export default function Home() {
  // 1. Setup State to hold the values dynamically
  const [itemName, setItemName] = useState("Morning Brew Kit");
  const [price, setPrice] = useState("29.99");
  const [currency, setCurrency] = useState("USD");

  const handleBuyClick = () => {
    // 2. Validate price is a number before sending
    const numericValue = parseFloat(price);

    console.log("Sending to GTM:", { itemName, numericValue, currency });

    // 3. Fire the event with dynamic data
    sendGTMEvent('generate_lead', {
      item_name: itemName,
      value: isNaN(numericValue) ? 0 : numericValue, // Safety check
      currency: currency
    });
    
    alert(`Event Sent!\nItem: ${itemName}\nValue: ${numericValue} ${currency}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f8f5f2] p-6 text-center">
      <div className="max-w-2xl space-y-8">
        
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-5xl font-extrabold tracking-tight text-amber-900 sm:text-7xl">
            Super Coffee ☕️
          </h1>
          <p className="text-lg text-gray-700">
            Dynamic GTM Test Lab
          </p>
        </div>

        {/* The Product Card */}
        <div className="mx-auto max-w-sm rounded-xl border border-amber-200 bg-white p-8 shadow-xl text-left">
          
          <div className="mb-6 h-32 w-full rounded-lg bg-amber-100 flex items-center justify-center text-6xl">
            ☕️
          </div>

          {/* DYNAMIC INPUTS SECTION */}
          <div className="space-y-4 mb-6">
            
            {/* Product Name Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase">Product Name</label>
              <input 
                type="text" 
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full mt-1 rounded-md border-gray-300 border p-2 text-gray-900 focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <div className="flex gap-4">
              {/* Price Input */}
              <div className="w-1/2">
                <label className="block text-xs font-semibold text-gray-500 uppercase">Price</label>
                <input 
                  type="number" 
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full mt-1 rounded-md border-gray-300 border p-2 text-gray-900 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>

              {/* Currency Input */}
              <div className="w-1/2">
                <label className="block text-xs font-semibold text-gray-500 uppercase">Currency</label>
                <select 
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-full mt-1 rounded-md border-gray-300 border p-2 text-gray-900 focus:border-amber-500 focus:ring-amber-500"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="BRL">BRL (R$)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
            </div>

          </div>
          
          <div className="border-t border-gray-100 pt-4">
            <p className="text-xs text-gray-400 mb-2 text-center">
              Clicking below sends the current form data to GTM
            </p>
            
            {/* THE CTA BUTTON */}
            <button
              onClick={handleBuyClick}
              className="w-full rounded-full bg-amber-600 px-8 py-4 text-lg font-bold text-white transition hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300"
            >
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </main>
  );
}