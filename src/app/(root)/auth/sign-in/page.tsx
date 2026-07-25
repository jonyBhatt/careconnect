import SigninForm from "@/components/form/SigninForm";

export default function SigninPage() {
  return (
    <div className="h-screen bg-linear-to-b from-teal-600/40 via-blue-300/30 to-gray-400/20 font-sans">
      <div className="px-4 sm:px-8 lg:px-12 flex flex-col py-16">
        <div className="flex flex-col gap-6">
          <h2 className="font-semibold font-sans text-4xl">
            Welcome to Careconnect
          </h2>
          <p className="text-lg text-muted-foreground font-normal">
            Please enter your phone number to <br /> receive a secure
            verification code.
          </p>
        </div>
        <div className="rounded-md  my-5">
          <SigninForm />
        </div>
      </div>
    </div>
  );
}
