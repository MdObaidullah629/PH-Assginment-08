import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

// এই অংশটি global variable হিসেবে কাজ করবে যাতে ডেভেলপমেন্টে বারবার নতুন কানেকশন না তৈরি হয়
const prismaClientSingleton = () => {
  return new PrismaClient();
};

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mysql", 
    }),
    emailAndPassword: {
        enabled: true,
    },
    // এনভায়রনমেন্ট ভেরিয়েবলগুলো নিশ্চিত করুন
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
});