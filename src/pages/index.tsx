import Image from "next/image";
import { UserButton, SignInButton, SignOutButton, SignedOut, SignedIn } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <header className="bg-blue-400 h-12 max-w-full flex">
        <p className="pl-5 text-sm font-semibold flex items-center content-center h-full w-1/2">
          Logo
        </p>
        <div className="pr-5 text-sm font-semibold flex items-center h-full w-1/2 justify-end">
          <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-blue-900 hover:bg-blue-800 px-3 py-2 rounded-lg text-white">
            Sign In
          </button>
        </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
           />
        </SignedIn>
        </div>
        
      </header>
      <main>
        <h1 className="text-4xl text-center font-bold pt-10">
          Welcome to my Clerk Demo!
          </h1>
      </main>
    </>
  );
}
