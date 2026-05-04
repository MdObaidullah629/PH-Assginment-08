import { auth } from "@/lib/auth";

import { toNextJsHandler } from "better-auth/next-js";



// এই লাইনটি যোগ করুন যাতে Next.js এটাকে স্ট্যাটিক হিসেবে বিল্ড না করে

export const dynamic = "force-dynamic"; 



export const { GET, POST } = toNextJsHandler(auth);