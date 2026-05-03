"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react"; // Suspense ইম্পোর্ট করুন

// ১. আপনার আসল লগইন ফর্মের লজিক এখানে
function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackURL = searchParams.get("callbackURL") || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Invalid email or password!");
    } else {
      toast.success("Welcome back!");
      router.push(callbackURL);
      router.refresh();
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({ 
      provider: "google",
      callbackURL: callbackURL,
    });
  };

  return (
    <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl">
      <h2 className="text-3xl font-black text-center mb-8 uppercase">Login Page</h2>
      
      <form onSubmit={handleLogin} className="space-y-4">
        <input name="email" type="email" placeholder="Email" className="w-full p-4 border rounded-xl" required />
        <input name="password" type="password" placeholder="Password" className="w-full p-4 border rounded-xl" required />
        <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all">
          Login button
        </button>
      </form>

      <div className="mt-6 text-center space-y-4">
        <button 
          onClick={handleGoogleLogin} 
          className="w-full border p-4 rounded-xl flex justify-center items-center gap-3 font-bold hover:bg-gray-50 transition-all"
        >
          <img src="https://www.google.com/favicon.ico" className="w-5" alt="google" />
          Social Login Button (Google)
        </button>

        <p className="text-gray-600">
          Link for Register? <Link href="/register" className="text-yellow-600 font-bold underline">Register page</Link>
        </p>
      </div>
    </div>
  );
}

// ২. মেইন এক্সপোর্ট যেখানে Suspense ব্যবহার করা হয়েছে
export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Suspense fallback={<div className="text-center font-bold">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}