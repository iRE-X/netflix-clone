"use client";

import login from "@/actions/login";
import register from "@/actions/register";
import Input from "@/components/Input";
import ShowError from "@/components/Show-Error";
import ShowSuccess from "@/components/Show-Success";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const [varient, setVarient] = useState("Login");
    const router = useRouter();

    const toggleVarient = () =>
        setVarient(varient === "Login" ? "Register" : "Login");

    const handleRegister = async () => {
        setError("");
        setSuccess("");

        try {
            const res = await register({ name, email, password });
            if (res.error) {
                setError(res.error);
            } else if (res.success) {
                setSuccess(res.success);
                handleLogin();
            }
        } catch (error) {
            setError("Something went wrong!");
            console.log("REGISTER ERROR - " + error);
        }
    };

    const handleLogin = async () => {
        setError("");
        setSuccess("");

        try {
            const res = await login({ email, password });
            if (res?.error) {
                setError(res.error);
            }
            if (res?.success) setSuccess("Redirecting to the home page...");
            router.push(DEFAULT_LOGIN_REDIRECT);
            window.location.reload();
        } catch (error) {
            console.log("LOGIN ERROR - " + error);
        }
    };

    return (
        <div className="absolute w-full h-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <img src="/images/logo.png" alt="logo" className="h-12" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-3xl mb-8 font-semibold">
                            {varient === "Login"
                                ? "Sign In"
                                : "Create an Account"}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {varient === "Register" && (
                                <Input
                                    id="name"
                                    label="Username"
                                    onChange={(event: any) => {
                                        setName(event.target.value);
                                    }}
                                    value={name}
                                    type="text"
                                />
                            )}
                            <Input
                                id="email"
                                label="Email"
                                onChange={(event: any) => {
                                    setEmail(event.target.value);
                                }}
                                value={email}
                                type="text"
                            />
                            <Input
                                id="password"
                                label="Password"
                                onChange={(event: any) => {
                                    setPassword(event.target.value);
                                }}
                                value={password}
                                type="password"
                            />

                            <div className="mx-3">
                                {error && <ShowError message={error} />}
                                {success && <ShowSuccess message={success} />}
                            </div>

                            <button
                                className="bg-red-600 text-white rounded-md py-4 mt-10 w-full hover:bg-red-700 transition"
                                onClick={
                                    varient === "Login"
                                        ? handleLogin
                                        : handleRegister
                                }
                            >
                                {varient}
                            </button>

                            <div className="flex mt-8 gap-4 items-center justify-evenly">
                                <div
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:opacity-80 transition cursor-pointer"
                                    onClick={() =>
                                        signIn("google", {
                                            callbackUrl: DEFAULT_LOGIN_REDIRECT,
                                        })
                                    }
                                >
                                    <FcGoogle size={30} />
                                </div>
                                <div
                                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white hover:opacity-80 transition cursor-pointer"
                                    onClick={() =>
                                        signIn("github", {
                                            callbackUrl: DEFAULT_LOGIN_REDIRECT,
                                        })
                                    }
                                >
                                    <FaGithub size={30} />
                                </div>
                            </div>

                            <p className="text-neutral-500 mt-12 self-center">
                                {varient === "Login"
                                    ? "First time using Netflix?"
                                    : "Already have an Account?"}
                                <span
                                    className="text-white cursor-pointer hover:underline text-center"
                                    onClick={toggleVarient}
                                >
                                    {varient == "Login"
                                        ? "Create an account"
                                        : "Login"}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
