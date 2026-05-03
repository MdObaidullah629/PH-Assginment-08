"use client";
import Lottie from "lottie-react";
// যেহেতু ফাইলটি এখন একই ফোল্ডারে আছে, তাই নিচের লাইনটি ব্যবহার করুন
import loadingData from "./loading.json"; 

export default function LoadingAnim() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="w-64">
        {/* ইম্পোর্ট করা ডাটা সরাসরি পাস করুন */}
        <Lottie animationData={loadingData} loop={true} />
      </div>
      <p className="font-black text-gray-400 animate-pulse mt-4 uppercase tracking-widest">
        Loading...
      </p>
    </div>
  );
}