"use client";

import * as React from "react";
import {useState} from "react";
import {useForm} from "@tanstack/react-form";
import toast from "react-hot-toast";
import {ArrowRight, Mail, Phone} from "lucide-react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {authClient} from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function SignInForm() {
    const [method, setMethod] = useState<"phone" | "email">("phone")
    const router = useRouter();

    const form = useForm({
        defaultValues: {
            countryCode: "+1",
            phone: "",
            email: "",
            password: "",
        },
        onSubmit: async ({value}) => {
            if (method === "phone") {
                if (!value.phone) {
                    toast.error("Please enter a valid phone number.");
                    return;
                }
                // Handle sending OTP to phone
                toast.success(`OTP sent to ${value.countryCode} ${value.phone}`);
            } else {
                if (!value.email) {
                    toast.error("Please enter a valid email address.");
                    return;
                }
                await authClient.signIn.email({
                    email: value.email,
                    password: value.password,
                }, {
                    onError: (ctx) => {
                        // Handle the error
                        if (ctx.error.status === 403) {
                            toast.error("Please verify your email address");
                        }
                        //you can also show the original error message
                        toast.error(ctx.error.message);
                    },
                    onSuccess: () => {
                        // toast.success(`OTP sent to ${value.email}`);
                        router.push("/onboard");
                    }
                })

                // Handle sending OTP to email
            }
        },
    });

    return (
        <div className="w-full p-6 mx-auto shadow-sm">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    form.handleSubmit();
                }}
                className="space-y-4"
            >
                {method === "phone" ? (
                    /* Phone Input View */
                    <div className="space-y-2">
                        <Label
                            htmlFor="phone"
                            className="text-sm font-semibold text-gray-800"
                        >
                            Phone Number
                        </Label>
                        <div className="flex gap-2">
                            <form.Field name="countryCode">
                                {(field) => (
                                    <Select
                                        value={field.state.value}
                                        onValueChange={(val) => field.handleChange(val as string)}
                                    >
                                        <SelectTrigger
                                            className="w-20 h-11 border-gray-800 rounded font-medium focus:ring-0 px-4">
                                            <SelectValue placeholder="+88"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="+880">🇧🇩 +88</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            </form.Field>

                            <form.Field name="phone">
                                {(field) => (
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="000-000-0000"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className="h-11 flex-1 border-gray-800 rounded text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-blue-900 px-4"
                                    />
                                )}
                            </form.Field>
                        </div>
                    </div>
                ) : (
                    /* Email Input View */
                    <div className=" flex flex-col gap-4">
                        <div className={" space-y-2 "}>
                            <Label
                                htmlFor="email"
                                className="text-sm font-semibold text-gray-800"
                            >
                                Email Address
                            </Label>
                            <form.Field name="email">
                                {(field) => (
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className="h-11 placeholder:text-muted-foreground px-4"
                                    />
                                )}
                            </form.Field>
                        </div>

                        <div className={" space-y-2 "}>
                            <Label
                                htmlFor="password"
                                className="text-sm font-semibold text-gray-800"
                            >
                                Password
                            </Label>
                            <form.Field name="password">
                                {(field) => (
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="*****"
                                        value={field.state.value}
                                        onChange={(e) => field.handleChange(e.target.value)}
                                        className="h-11 placeholder:text-muted-foreground px-4"
                                    />
                                )}
                            </form.Field>
                        </div>

                    </div>
                )}

                {/* Submit Button */}
                <form.Subscribe
                    selector={(state) => [state.canSubmit, state.isSubmitting]}
                >
                    {([canSubmit, isSubmitting]) => (
                        <Button
                            type="submit"
                            disabled={!canSubmit || isSubmitting}
                            className="w-full h-12 text-base font-semibold text-white  hover:bg-[#001747] rounded flex items-center justify-center gap-2 transition-colors"
                        >
                            Sign In <ArrowRight className="w-4 h-4 stroke-[2.5]"/>
                        </Button>
                    )}
                </form.Subscribe>
            </form>

            {/* Divider */}
            <div className="relative my-5 flex items-center justify-center">
                <div className="absolute inset-0 flex items-center ">
                    <div className="w-full border-t border-gray-400"/>
                </div>
                <span
                    className="relative rounded-full px-2 py-2 text-xs bg-gray-100 font-medium text-gray-400 uppercase tracking-wider">
          OR
        </span>
            </div>

            {/* Toggle Method Button */}
            {method === "phone" ? (
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => setMethod("email")}
                    className="w-full h-12 text-base font-semibold text-[#002266] border-[#002266] hover:bg-blue-50/50 rounded-xl flex items-center justify-center gap-2"
                >
                    <Mail className="w-5 h-5 stroke-2"/>
                    Sign in with Email
                </Button>
            ) : (
                <Button
                    type="button"
                    variant="outline"
                    onClick={() => setMethod("phone")}
                    className="w-full h-12 text-base font-semibold text-[#002266] border-[#002266] hover:bg-blue-50/50 rounded-xl flex items-center justify-center gap-2"
                >
                    <Phone className="w-5 h-5 stroke-2"/>
                    Sign in with Phone
                </Button>
            )}
        </div>
    );
}
