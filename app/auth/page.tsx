"use client";

import Input from "@/components/Input";
import React, { useCallback, useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [varient, setVarient] = useState("Login");

    const toggleVarient = () =>
        setVarient(varient === "Login" ? "Register" : "Login");

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
                            <button className="bg-red-600 text-white rounded-md py-4 mt-10 w-full hover:bg-red-700 transition">
                                {varient}
                            </button>

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
