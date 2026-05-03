// import Link from "next/link";

// export default function ProductCard({ product }) {
//   return (
//     <div className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300">
//       <div className="relative h-64 w-full bg-gray-50 rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
//         <img 
//           src={product.image} 
//           alt={product.name} 
//           className="h-48 object-contain group-hover:scale-110 transition-transform duration-500"
//         />
//       </div>
//       <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
//       <div className="flex justify-between items-center mt-2">
//         <p className="text-yellow-500 font-bold">⭐ {product.rating}</p>
//         <p className="text-gray-500 text-sm font-semibold">{product.category}</p>
//       </div>
//       <div className="flex justify-between items-center mt-4">
//         <span className="text-3xl font-black text-gray-900">${product.price}</span>
//         <Link href={`/products/${product.id}`}>
//           <button className="bg-gray-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-yellow-500 transition-colors">
//             Details
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }