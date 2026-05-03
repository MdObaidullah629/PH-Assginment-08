"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

export default function MyProfile() {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div className="min-h-screen flex items-center justify-center font-bold italic">Loading Profile...</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-md mx-auto bg-white rounded-[2.5rem] shadow-2xl p-10 text-center border border-gray-100">
        <h2 className="text-3xl font-black mb-8 tracking-tighter uppercase">My Profile</h2>
        
        {/* প্রোফাইল ফটো */}
        <div className="flex justify-center mb-6">
          <img 
            src={session?.user?.image || "https://i.ibb.co/v3Z69yN/user-placeholder.png"} 
            alt="profile" 
            className="w-32 h-32 rounded-full border-4 border-yellow-500 shadow-xl object-cover"
          />
        </div>

        {/* নাম ও ইমেইল */}
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl font-black text-gray-900">{session?.user?.name}</h1>
          <p className="text-gray-500 font-medium">{session?.user?.email}</p>
        </div>

        {/* আপডেট বাটন (Requirement 2) */}
        <Link href="/my-profile/update">
          <button className="w-full bg-black text-white py-4 rounded-2xl font-black text-lg hover:bg-yellow-500 hover:text-black transition-all shadow-lg active:scale-95">
            Update Information
          </button>
        </Link>
      </div>
    </div>
  );
}