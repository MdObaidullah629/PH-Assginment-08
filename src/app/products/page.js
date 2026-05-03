// "use client";
// import React from "react";
// import Link from "next/link";

// const products = [
//   { id: "1", name: "Water Bottle", price: "$10", image: "/assets/products/bottle.png" },
//   { id: "2", name: "Electric Fan", price: "$25", image: "/assets/products/fan.png" },
//   { id: "3", name: "Summer Powder", price: "$12", image: "/assets/products/powder.png" },
//   { id: "4", name: "Cool Sunglass", price: "$15", image: "/assets/products/sunglass.png" },
//   { id: "5", name: "Sunscreen", price: "$20", image: "/assets/products/sunscrin.png" }, // আপনার ফাইলের বানান অনুযায়ী
//   { id: "6", name: "Large Umbrella", price: "$18", image: "/assets/products/umbrella.png" },
// ];

// export default function ProductsPage() {
//   return (
//     <div className="container mx-auto py-12 px-6">
//       <h1 className="text-4xl font-black text-center mb-10 uppercase tracking-tighter">
//         SunCart Essentials
//       </h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {products.map((p) => (
//           <div key={p.id} className="border-4 border-black p-6 rounded-[2.5rem] bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col">
            
//             {/* ইমেজের অংশ */}
//             <div className="rounded-2xl h-56 mb-6 overflow-hidden border-2 border-black bg-gray-50 flex items-center justify-center">
//               <img 
//                 src={p.image} 
//                 alt={p.name} 
//                 className="w-full h-full object-contain p-4" // object-contain দিলে ছবি কাটবে না
//               />
//             </div>
            
//             <div className="flex-grow">
//               <h2 className="text-2xl font-black mb-1">{p.name}</h2>
//               <p className="text-xl font-bold text-yellow-600 mb-6">{p.price}</p>
//             </div>
            
//             <Link href={`/products/${p.id}`}>
//               <button className="w-full bg-black text-white py-4 rounded-2xl font-black text-lg hover:bg-yellow-400 hover:text-black transition-colors border-2 border-black">
//                 Details
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }