"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { toast } from "react-toastify";

function SignInForm() {

    const handleSignIn = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData)

        const { data, error } = await authClient.signIn.email({
            email: userData.email, // required
            password: userData.password, // required
            rememberMe: true,
            callbackURL: "/",
        });

        if (data) {
            toast.success('Log In success')
        }

        if (error) {
            toast.warning(error.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">

                {/* Header */}
                <div className="mb-6 text-center">
                    <h1 className="text-2xl font-bold text-gray-800">
                        Welcome Back
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Sign in to your account
                    </p>
                </div>

                <Form className="flex flex-col gap-5" onSubmit={handleSignIn}>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                    value
                                )
                            ) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-medium text-gray-700">
                            Email
                        </Label>
                        <Input
                            placeholder="john@example.com"
                            className="w-full"
                        />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "At least 8 characters required";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Must contain uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Must contain a number";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-sm font-medium text-gray-700">
                            Password
                        </Label>
                        <Input
                            placeholder="Enter your password"
                            className="w-full"
                        />
                        <Description className="text-xs text-gray-400">
                            8+ chars, 1 uppercase, 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button
                            type="submit"
                            className="w-full sm:w-auto flex-1 bg-black text-white hover:bg-gray-800"
                        >
                            <Check />
                            Sign In
                        </Button>

                        <Button
                            type="reset"
                            variant="secondary"
                            className="w-full sm:w-auto flex-1"
                        >
                            Reset
                        </Button>
                    </div>
                </Form>

                {/* Footer */}
                {/* Footer */}
                <div className="mt-6 text-center space-y-2">
                    <p className="text-xs text-gray-400">
                        By signing in, you agree to our terms & privacy policy
                    </p>

                    <p className="text-sm text-gray-600">
                        Don’t have an account?{" "}
                        <Link
                            href="/sign-up"
                            className="text-black font-medium hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );

}
export default SignInForm;