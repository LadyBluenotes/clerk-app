import { RedirectToSignIn, SignedOut, SignedIn, useUser } from "@clerk/nextjs";
import {
  FaUserAstronaut,
  FaPuzzlePiece,
  FaPaperclip,
  FaLaptop,
  FaFilePen,
  FaCode,
} from "react-icons/fa6";

export default function Dash() {
  const { user } = useUser();

  const cards = [
    {
      name: "Why Clerk?",
      description:
        "I've met some of the fanatastic people who work at Clerk! But I have more reasons why I want to join the team. Here, you'll find out why.",
      icon: <FaPuzzlePiece className="text-violet-400 text-4xl" />,
      link: "/why-clerk",
    },
    {
      name: "Why Hire Me?",
      description:
        "So you know why I want to join Clerk. But why should you hire me? I'll tell you why.",
      icon: <FaUserAstronaut className="text-violet-400 text-4xl" />,
      link: "/hire-me",
    },
    {
      name: "Proof I Work",
      description:
        "I swear I have work experience. If you click on this card, my resume will pop up.",
      icon: <FaPaperclip className="text-violet-400 text-4xl" />,
      link: "/work",
    },
    {
      name: "I'm Social!",
      description:
        "Who doesn't have social media these days? I'm on Twitter, LinkedIn, and GitHub. Care to see them? Click on this card!",
      icon: <FaLaptop className="text-violet-400 text-4xl" />,
      link: "/socials",
    },
    {
      name: "I Can Write",
      description:
        "I have a blog! When I really grasp topics (or have time), I like to write about them as if they're directed at me of the past. Click on this card, and you'll be taken to my blog.",
      icon: <FaFilePen className="text-violet-400 text-4xl" />,
    },
    {
      name: "I Can Code",
      description:
        "I've written a lot of words, but I've also written a lot of code. I even coded a documentation site for myself! Want to see? Click me!",
      icon: <FaCode className="text-violet-400 text-4xl" />,
      link: "https://docs.sarahgerrard.me/",
    },
  ];

  return (
    <>
      <SignedIn>
        <section className="text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-3xl font-bold sm:text-5xl drop-shadow-lg">
                Welcome {user?.firstName}!
              </h1>

              <p className="mt-4 text-gray-300">
                It&apos;s great to have you here. Thanks to Clerk, you&apos;re
                now able to access this page.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((card, i) => (
                <a
                  key={i}
                  className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-violet-500/10 hover:shadow-violet-300/10"
                  href={card.link}
                >
                  {card.icon}

                  <h2 className="mt-4 text-xl font-bold text-white">
                    {card.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-300">
                    {card.description}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
