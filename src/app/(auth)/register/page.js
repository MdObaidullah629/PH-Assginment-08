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

    // Better Auth-এ পাসওয়ার্ড কমপক্ষে ৮ ক্যারেক্টার হতে হয়
    if (password.length < 8) {
      return toast.error("Password must be at least 8 characters long!");
    }

    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      image: "", // ৪২২ এরর এড়াতে এটি খালি রাখা হলো
    });

    if (error) {
      toast.error(error.message || "Registration failed!");
    } else {
      toast.success("Registration successful! Please login.");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4">
      <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl">
        <h2 className="text-3xl font-black text-center mb-8">Create Account</h2>
        <form onSubmit={handleRegister} className="space-y-5">
          <input name="name" type="text" placeholder="Your Name" className="w-full p-4 border rounded-xl" required />
          <input name="email" type="email" placeholder="example@gmail.com" className="w-full p-4 border rounded-xl" required />
          <input name="password" type="password" placeholder="At least 8 characters" className="w-full p-4 border rounded-xl" required />
          <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all">Register</button>
        </form>
      </div>
    </div>
  );
}