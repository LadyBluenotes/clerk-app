import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-violet-50 h-12 max-w-full flex">
      <Link
        className="pl-5 font-semibold flex items-center content-center h-full w-1/2 text-violet-900"
        href="/"
      >
        Home
      </Link>
      <div className="pr-5 text-sm font-semibold flex items-center h-full w-1/2 justify-end">
        <SignedOut>
          <SignInButton mode="modal" redirectUrl="/dash">
            <button className="bg-violet-900 hover:bg-violet-800 px-3 py-2 rounded-lg text-white">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
}
