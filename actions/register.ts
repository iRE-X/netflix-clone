"use server";

import { getUserByEmail } from "@/data/user";
import bcrypt from "bcryptjs";
import prisma from "@/prisma/db";

interface RegisterData {
    name: string;
    email: string;
    password: string;
}

const register = async ({ name, email, password }: RegisterData) => {
    if (!name || !email || !password) return { error: "Insufficient Data!" };

    const exUser = await getUserByEmail(email);
    if (exUser) return { error: "Email already exists!" };
    console.log(email);

    const hashed = await bcrypt.hash(password, 15);

    await prisma.user.create({
        data: {
            name,
            email,
            hashedPassword: hashed,
        },
    });

    return { success: "Verification email sent!" };
};

export default register;
