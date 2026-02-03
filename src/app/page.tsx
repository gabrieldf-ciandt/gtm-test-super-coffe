'use client'
import { sendGTMEvent } from "@/utils/analytics";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f8f5f2] p-6 text-center">
      <div className="max-w-2xl space-y-8">
        {/* Mock Logo / Header */}
        <h1 className="text-5xl font-extrabold tracking-tight text-amber-900 sm:text-7xl">
          Super Coffee ☕️
        </h1>
        
        <p className="text-lg text-gray-700">
          The most delicious dummy product you'll never taste. 
          Perfect for debugging tags and firing events.
        </p>

        {/* The Product Card */}
        <div className="mx-auto max-w-sm rounded-xl border border-amber-200 bg-white p-8 shadow-xl">
          <div className="mb-6 h-48 w-full rounded-lg bg-amber-100 flex items-center justify-center text-4xl">
            ☕️
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Morning Brew Kit</h2>
          <p className="mt-2 text-gray-500">$29.99 - One time purchase</p>
          
          {/* THE CTA BUTTON - The Star of the Show */}
          <button
            className="..." // You can now remove the ID if you want!
            onClick={() => {
              sendGTMEvent('generate_lead', {
                item_name: 'Morning Brew Kit',
                value: 29.99,
                currency: 'USD'
              });
              // Add navigation logic here if needed
            }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}