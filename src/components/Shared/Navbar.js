"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { data: session } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login"); // লগআউটের পর লগইন পেজে নিয়ে যাবে
          router.refresh(); // সেশন ক্লিয়ার করার জন্য রিফ্রেশ
        },
      },
    });
  };

  return (
    <nav className="bg-white border-b sticky top-0 z-50 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-tighter">
          SUMMER<span className="text-yellow-500">SHOP</span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link href="/" className="font-bold hover:text-yellow-500 transition-colors">Home</Link>
          <Link href="/products" className="font-bold hover:text-yellow-500 transition-colors">Products</Link>
          
          {session ? (
            <div className="flex items-center gap-5">
              {/* Profile Link updated to /my-profile */}
              <Link href="/my-profile" title="My Profile">
                <img 
                  src={session.user.image || `https://ui-avatars.com/api/?name=${session.user.name}`} 
                  alt="user" 
                  className="w-10 h-10 rounded-full border-2 border-yellow-500 hover:scale-105 transition-transform" 
                />
              </Link>
              <button 
                onClick={handleLogout} 
                className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-black transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
               <Link href="/login" className="font-bold">Login</Link>
               <Link href="/register" className="bg-black text-white px-6 py-2 rounded-full font-bold hover:bg-yellow-500 hover:text-black transition-all">
                Register
               </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}