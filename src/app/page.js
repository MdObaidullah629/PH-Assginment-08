// "use client";
// import React from "react";
// import products from "@/data/products.json"; 
// import Link from "next/link";

// export default function Home() {
//   // রিকোয়ারমেন্ট ৩ অনুযায়ী হোমে ৩টি প্রোডাক্ট দেখানোর জন্য slice(0, 3) ব্যবহার করা হয়েছে
//   const popularProducts = products.slice(0, 3); 

//   return (
//     <div className="w-full bg-white">
//       {/* --- HERO SECTION --- */}
//       <section className="bg-gradient-to-r from-yellow-50 to-orange-50 py-16 md:py-24 px-6 overflow-hidden">
//         <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
//           <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
//             <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
//               SUMMER <span className="text-yellow-500">SALE</span> <br />
//               <span className="text-red-600 italic">50% OFF</span>
//             </h1>
//             <p className="text-xl font-bold text-gray-700">🔥 Hot Deals Just for You! Limited Time Only.</p>
//             <Link href="/products">
//                 <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-yellow-500 hover:text-black hover:scale-105 transition-all shadow-xl">
//                 Shop Now
//                 </button>
//             </Link>
//           </div>
//           <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
//             {/* Background Decoration */}
//             <div className="absolute inset-0 bg-yellow-200 blur-3xl opacity-30 rounded-full"></div>
//             <div className="relative w-72 h-72 md:w-96 md:h-96 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse shadow-2xl border-8 border-white">
//                 <span className="text-white font-black text-3xl uppercase tracking-tighter transform -rotate-12">Summer Vibe</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- POPULAR PRODUCTS (Only 3 Products for Home) --- */}
//       <section className="max-w-7xl mx-auto py-20 px-6">
//         <div className="flex justify-between items-end mb-12">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Popular Products</h2>
//             <div className="h-2 w-24 bg-yellow-500 mt-2"></div>
//           </div>
//           <Link href="/products" className="text-yellow-600 font-bold hover:text-black transition-colors flex items-center gap-1 group">
//              View All <span className="group-hover:translate-x-1 transition-transform">→</span>
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {popularProducts.map((product) => (
//             <div key={product.id} className="group bg-white border border-gray-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
//               <div className="relative h-64 w-full bg-gray-50 rounded-3xl overflow-hidden mb-6 flex items-center justify-center">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="h-48 w-auto object-contain group-hover:scale-110 transition-transform duration-700"
//                 />
//                 <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black shadow-sm uppercase">
//                     {product.category}
//                 </div>
//               </div>
//               <h3 className="text-xl font-bold text-gray-800 line-clamp-1">{product.name}</h3>
//               <div className="flex justify-between items-center mt-3">
//                 <p className="text-yellow-500 font-bold flex items-center gap-1 text-lg">⭐ {product.rating}</p>
//                 <span className="text-3xl font-black text-gray-900">${product.price}</span>
//               </div>
//               <div className="mt-6">
//                 <Link href={`/products/${product.id}`}>
//                   <button className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-yellow-500 hover:text-black transition-all">
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* --- EXTRA SECTION: SUMMER CARE TIPS --- */}
//       <section className="bg-sky-50 py-24 px-6 rounded-[3rem] mx-4 mb-10">
//         <div className="max-w-7xl mx-auto text-center">
//           <h2 className="text-4xl font-black mb-16 uppercase tracking-tight">☀️ Summer Care Tips</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border-b-8 border-sky-400">
//               <div className="text-5xl mb-6">💧</div>
//               <h4 className="font-bold text-2xl mb-3">Stay Hydrated</h4>
//               <p className="text-gray-600 leading-relaxed font-medium">Drink at least 8-10 glasses of water daily to keep your body fresh and cool.</p>
//             </div>
//             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border-b-8 border-yellow-400">
//               <div className="text-5xl mb-6">🧴</div>
//               <h4 className="font-bold text-2xl mb-3">Sunscreen Always</h4>
//               <p className="text-gray-600 leading-relaxed font-medium">Protect your skin with SPF 50+ whenever you step outside under the sun.</p>
//             </div>
//             <div className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow border-b-8 border-red-400">
//               <div className="text-5xl mb-6">🍎</div>
//               <h4 className="font-bold text-2xl mb-3">Seasonal Fruits</h4>
//               <p className="text-gray-600 leading-relaxed font-medium">Enjoy water-rich fruits like watermelon and cucumber to maintain energy levels.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- EXTRA SECTION: TOP BRANDS --- */}
//       <section className="max-w-7xl mx-auto py-20 px-6 text-center">
//         <h2 className="text-3xl font-black mb-12 uppercase tracking-widest text-gray-400">Top Summer Brands</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           {['Ray-Ban', 'Nivea', 'CoolBreeze', 'AquaSafe'].map((brand) => (
//             <div key={brand} className="border-2 border-dashed border-gray-200 p-10 rounded-3xl flex items-center justify-center grayscale hover:grayscale-0 hover:border-yellow-500 hover:bg-yellow-50 transition-all group cursor-pointer">
//               <span className="text-2xl font-black text-gray-400 group-hover:text-yellow-600 transition-colors uppercase italic tracking-tighter">{brand}</span>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }