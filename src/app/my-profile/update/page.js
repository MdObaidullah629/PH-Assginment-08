// "use client";
// import { useState, useEffect } from "react";
// import { authClient } from "@/lib/auth-client";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

// export default function UpdateProfile() {
//   const { data: session } = authClient.useSession();
//   const [name, setName] = useState("");
//   const [image, setImage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     if (session?.user) {
//       setName(session.user.name || "");
//       setImage(session.user.image || "");
//     }
//   }, [session]);

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const { error } = await authClient.updateUser({
//       name: name,
//       image: image,
//     });

//     if (error) {
//       toast.error(error.message || "Failed to update!");
//       setLoading(false);
//     } else {
//       toast.success("Profile updated!");
//       router.refresh(); 
//       router.push("/my-profile");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="max-w-md w-full bg-white p-10 rounded-[2.5rem] shadow-xl">
//         <h2 className="text-2xl font-black mb-8 text-center uppercase tracking-widest">Update Info</h2>
        
//         <form onSubmit={handleUpdate} className="space-y-5">
//           <div>
//             <label className="block text-xs font-black text-gray-400 uppercase mb-2 ml-1">New Name</label>
//             <input 
//               value={name} 
//               onChange={(e) => setName(e.target.value)} 
//               className="w-full p-4 border-2 border-gray-50 rounded-2xl outline-none focus:border-yellow-400 transition-all font-bold" 
//               placeholder="Your Name"
//               required 
//             />
//           </div>
//           <div>
//             <label className="block text-xs font-black text-gray-400 uppercase mb-2 ml-1">New Image URL</label>
//             <input 
//               value={image} 
//               onChange={(e) => setImage(e.target.value)} 
//               className="w-full p-4 border-2 border-gray-50 rounded-2xl outline-none focus:border-yellow-400 transition-all font-bold" 
//               placeholder="Image URL"
//             />
//           </div>
//           <button 
//             disabled={loading}
//             className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-black text-lg hover:bg-black hover:text-white transition-all shadow-lg disabled:bg-gray-200"
//           >
//             {loading ? "Updating..." : "Update Information Button"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }