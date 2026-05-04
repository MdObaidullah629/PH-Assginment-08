import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mongodb", // MongoDB প্রোভাইডার নিশ্চিত করুন
    }),
    emailAndPassword: {
        enabled: true,
    },
    // এই অংশটি যোগ করা অত্যন্ত জরুরি
    advanced: {
        generateId: false, // Better Auth আইডি জেনারেট করবে না
    },
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: process.env.BETTER_AUTH_URL,
});