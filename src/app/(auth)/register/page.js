"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // BetterAuth-এ রেজিস্ট্রেশন কল
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      // image ফিল্ডটি খালি রাখা হয়েছে যেহেতু আপনি এটি ইনপুট থেকে বাদ দিয়েছেন
    });

    if (error) {
      toast.error(error.message || "Registration failed!");
    } else {
      toast.success("Registration successful! Please login.");
      router.push("/login");
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-black text-center mb-8">Create Account</h2>
        
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-bold mb-2">Name</label>
            <input 
              name="name" 
              type="text" 
              placeholder="Your Full Name" 
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Email</label>
            <input 
              name="email" 
              type="email" 
              placeholder="example@gmail.com" 
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none" 
              required 
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">Password</label>
            <input 
              name="password" 
              type="password" 
              placeholder="At least 8 characters" 
              className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 outline-none" 
              required 
            />
          </div>

          <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all shadow-lg">
            Register
          </button>
        </form>
        
        <div className="mt-8 text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <span className="h-px w-full bg-gray-200"></span>
            <span className="text-gray-400 text-sm">OR</span>
            <span className="h-px w-full bg-gray-200"></span>
          </div>

          <button 
            onClick={handleGoogleLogin} 
            className="w-full border border-gray-200 p-4 rounded-xl flex justify-center items-center gap-3 font-bold hover:bg-gray-50 transition-all"
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6" alt="google" />
            Continue with Google
          </button>

          <p className="text-gray-600">
            Already have an account? <Link href="/login" className="text-yellow-600 font-bold hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}