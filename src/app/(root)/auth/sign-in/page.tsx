import SigninForm from "@/components/form/SigninForm";
import Link from "next/link";

export default function SigninPage() {
    return (
        <div className="min-h-dvh bg-linear-to-b from-teal-600/40 via-blue-300/30 to-gray-400 font-sans">
            <div className="px-4 sm:px-8 lg:px-12 flex flex-col py-16">
                <div className="flex flex-col gap-6">
                    <h2 className="font-semibold font-sans text-4xl">
                        Welcome to Careconnect
                    </h2>
                    <p className="text-lg text-muted-foreground font-normal">
                        Please enter your phone number to <br/> receive a secure
                        verification code.
                    </p>
                </div>
                <div className="rounded-md  my-5">
                    <SigninForm/>
                </div>
                <div className={"p-6 bg-gray-300/40 rounded-xl flex flex-col gap-2"}>
                    <h2 className={"font-medium text-lg"}>
                        Secure Connection
                    </h2>
                    <span className={"text-muted-foreground font-light"}>
                        Your health data is encrypted and <br/> protected under HIPPA <br/> regulations
                     </span>
                </div>
                <div className={"flex flex-col gap-2 my-5"}>
                    <p className={"text-lg font-medium text-muted-foreground"}>
                        New to CareConnect?
                    </p>
                    <Link href={"/auth/sign-up"}>
                        <h4 className={"font-semibold text-lg text-blue-600"}>
                            Create Account
                        </h4>
                    </Link>
                </div>
            </div>
        </div>
    );
}
