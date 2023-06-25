import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <main className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10">
        <div className="flex justify-center">
          <SignedOut>
            <SignInButton mode="modal" redirectUrl="/">
              <button className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md mr-2 text-white text-sm w-fit">
                About Me - Sarah Gerrard {"   "}
                <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                  <svg
                    className="w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <button
              className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md mr-2 text-white text-sm w-fit"
              onClick={() => {
                window.location.href = "/hire-me";
              }}
            >
              About Me - Sarah Gerrard {"   "}
              <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </span>
            </button>
          </SignedIn>
        </div>
        <div className="max-w-3xl text-center mx-auto mt-3">
          <h1 className="block font-semibold text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to my application!
          </h1>
        </div>
        <div className="max-w-2xl text-center mx-auto mt-4">
          <p className="text-lg text-gray-400">
            This demo was created as both a way for me to learn Clerk, as well
            as a way to show off my skills as a developer. Upon sign in, I will
            provide a bit more information about me.
          </p>
        </div>
        <div className="mt-6 text-center">
          <SignedOut>
            <SignInButton mode="modal" redirectUrl="/dash">
              <button className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-l from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-4">
                Have a look around!
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <button
              className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-l from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-white py-2 px-4"
              onClick={() => {
                window.location.href = "/dash";
              }}
            >
              Have a look around!
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </SignedIn>
        </div>
      </main>
    </>
  );
}
