"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";

interface LoginData {
    email: string;
    password: string;
}

const login = async ({ email, password }: LoginData) => {
    if (!email || !password) return { error: "Insufficient Credentials" };

    const user = await getUserByEmail(email);
    if (!user) return { error: "User not found!" };

    if (!user.hashedPassword) return { error: "Wrong login method" };

    const isCorrect = await bcrypt.compare(password, user.hashedPassword);
    if (!isCorrect) return { error: "Invalid password!" };

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {
                        error: "invalid credentials",
                    };
                default:
                    return {
                        error: "something went wrong",
                    };
            }
        }

        throw error;
    }

    return { success: "Redirecting to home page..." };
};

export default login;
