// "use client";
// import { useState } from "react";
// import { authClient } from "@/lib/auth-client";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

// export default function UpdateForm({ user }) {
//   const [name, setName] = useState(user?.name || "");
//   const [image, setImage] = useState(user?.image || "");
//   const router = useRouter();

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     const { data, error } = await authClient.updateUser({
//       name: name,
//       image: image,
//     });

//     if (error) {
//       toast.error(error.message || "Update failed!");
//     } else {
//       toast.success("Profile updated!");
//       router.push("/my-profile");
//       router.refresh();
//     }
//   };

//   return (
//     <form onSubmit={handleUpdate} className="space-y-4">
//       <div>
//         <label className="block text-sm font-bold mb-1">Full Name</label>
//         <input 
//           value={name} 
//           onChange={(e) => setName(e.target.value)} 
//           className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-500" 
//           required 
//         />
//       </div>
//       <div>
//         <label className="block text-sm font-bold mb-1">Photo URL</label>
//         <input 
//           value={image} 
//           onChange={(e) => setImage(e.target.value)} 
//           className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-500" 
//         />
//       </div>
//       <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all">
//         Save Changes
//       </button>
//     </form>
//   );
// }