"use client";
import { authClient } from "@/lib/auth-client";
import products from "@/data/products.json";
import { redirect, useParams, usePathname } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

export default function ProductDetails() {
  const { data: session, isPending } = authClient.useSession();
  const { id } = useParams();
  const pathname = usePathname(); // বর্তমান ইউআরএল ট্র্যাক করার জন্য
  
  // আইডি অনুযায়ী প্রোডাক্ট খুঁজে বের করা
  const product = products.find((p) => p.id == Number(id));

  // লোডিং স্টেট
  if (isPending) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="font-bold text-gray-500">Loading Product Details...</p>
      </div>
    );
  }
  
  // রিকোয়ারমেন্ট ৪: লগইন না থাকলে রিডাইরেক্ট এবং লগইনের পর ফিরে আসার লজিক
  if (!session) {
    // এখানে 'callbackURL' হিসেবে বর্তমান পাথটি পাঠিয়ে দিচ্ছি
    redirect(`/login?callbackURL=${pathname}`);
  }

  // প্রোডাক্ট না পাওয়া গেলে
  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h2 className="text-4xl font-black text-gray-300 uppercase">Product Not Found</h2>
        <button 
          onClick={() => window.history.back()}
          className="mt-4 text-yellow-600 font-bold hover:underline"
        >
          ← Go Back to Shop
        </button>
      </div>
    );
  }

  const handleBuyNow = () => {
    toast.success(`Success! Order placed for ${product.name}`, {
        icon: '🔥',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* ইমেজ সেকশন - একটু বড় এবং স্টাইলিশ করা হয়েছে */}
          <div className="w-full lg:w-1/2 bg-gray-50 rounded-[3rem] p-10 md:p-20 flex items-center justify-center border border-gray-100 shadow-inner">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-[450px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700" 
            />
          </div>

          {/* ডিটেইলস সেকশন */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="bg-black text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter">
                    {product.category}
                </span>
                {product.stock > 0 && (
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-bold uppercase">
                        In Stock
                    </span>
                )}
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] tracking-tighter">
                {product.name}
              </h1>

              <div className="flex items-center gap-6 text-lg">
                <p className="text-yellow-500 font-black flex items-center gap-1">
                  ⭐ <span>{product.rating}</span>
                </p>
                <div className="w-[1px] h-4 bg-gray-300"></div>
                <p className="text-gray-500 font-bold">Brand: <span className="text-black">{product.brand}</span></p>
              </div>
            </div>

            <div className="border-t border-b border-gray-100 py-6">
                <p className="text-gray-600 leading-relaxed text-lg italic">
                    "{product.description}"
                </p>
            </div>

            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Price</p>
                    <p className="text-5xl font-black text-gray-900">
                        ${product.price}
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">Stock</p>
                    <p className="text-xl font-bold text-gray-800">{product.stock} items left</p>
                </div>
            </div>

            <div className="pt-4">
              <button 
                onClick={handleBuyNow}
                className="w-full bg-yellow-400 hover:bg-black hover:text-white text-black py-5 rounded-[2rem] font-black text-2xl transition-all shadow-[0_10px_0_0_rgba(0,0,0,0.05)] active:shadow-none active:translate-y-1"
              >
                Buy It Now —
              </button>
              <p className="text-center mt-4 text-gray-400 text-sm font-medium">
                Free shipping on orders over $50 • 30-day return policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}