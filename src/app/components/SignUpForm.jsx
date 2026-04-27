"use client";

import { authClient } from "@/lib/auth-client";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";

import { Check } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

function SignUpForm() {

    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const userData = Object.fromEntries(formData)

        const { data, error } = await authClient.signUp.email({
            name: userData.name, // required
            email: userData.email, // required
            password: userData.password, // required
            image: userData.image,

        });


        // 
        if (data) {
            toast.success(`Logged in as ${data.user.email}`);
        }

        if (error) {
            toast.warning(error.message)
        }
    };
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        if (data) {
            toast.success(`Logged in as ${data.user.email}`);
        }

    }
    const handleGithubLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
        if (data) {
            toast.success(`Logged in as ${data.user.email}`);
        }

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4 py-10">

            <div className="w-full max-w-xl bg-white shadow-2xl rounded-2xl p-6 sm:p-8">

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Create Account
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Join and start reading news
                    </p>
                </div>

                {/* Form */}
                <Form className="flex flex-col gap-4" onSubmit={handleRegister}>

                    {/* Name */}
                    <TextField isRequired name="name">
                        <Label>Name</Label>
                        <Input placeholder="Your name" />
                        <FieldError />
                    </TextField>

                    {/* Email */}
                    <TextField isRequired name="email" type="email">
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    {/* Image URL */}
                    <TextField
                        isRequired
                        name="image"
                        type="url"
                        validate={(v) =>
                            v.startsWith("http") ? null : "Enter valid image URL"
                        }
                    >
                        <Label>Profile Image URL</Label>
                        <Input placeholder="https://..." />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        name="password"
                        type="password"
                        validate={(v) => {
                            if (v.length < 8) return "Min 8 characters";
                            if (!/[A-Z]/.test(v)) return "1 uppercase required";
                            if (!/[0-9]/.test(v)) return "1 number required";
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="••••••••" />
                        <Description className="text-xs text-gray-400">
                            8+ chars, 1 uppercase, 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">

                        <Button
                            type="submit"
                            className="flex-1 bg-black text-white hover:bg-gray-800"
                        >
                            <Check className="w-4 h-4 mr-1" />
                            Register
                        </Button>

                        <Button
                            type="reset"
                            variant="bordered"
                            className="flex-1"
                        >
                            Reset
                        </Button>
                    </div>
                </Form>

                {/* Divider */}
                <div className="flex items-center gap-3 my-5">
                    <div className="h-px bg-gray-200 flex-1" />
                    <span className="text-xs text-gray-400">OR</span>
                    <div className="h-px bg-gray-200 flex-1" />
                </div>

                {/* Social Login */}
                <div className="flex  gap-3">

                    <Button
                        onClick={handleGoogleLogin}
                        fullWidth
                        className="flex items-center justify-center gap-2"
                    >
                        <FaGoogle />
                        Continue with Google
                    </Button>

                    <Button
                        onClick={handleGithubLogin}
                        fullWidth
                        className="flex items-center justify-center gap-2"
                    >
                        <FaGithub className="w-5 h-5" />
                        Continue with GitHub
                    </Button>
                </div>

                {/* Footer */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Already have an account?{" "}
                    <Link
                        href="/sign-in"
                        className="text-black font-semibold hover:underline"
                    >
                        Sign In
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default SignUpForm;