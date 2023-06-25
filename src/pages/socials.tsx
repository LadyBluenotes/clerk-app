import Heading from "./components/Headings";
import InfoPages from "./components/InfoPages";
import NavPage from "./components/NavPage";
import Paragraph from "./components/Paragraph";
import { FaSquareTwitter, FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";

const Socials = () => {

  const socialLinks = [
    {
      title: "Twitter",
      link: "https://twitter.com/ladybluenotes",
      icon: <FaSquareTwitter />
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/sarahgerrard/",
      icon: <FaLinkedin />
    },
    {
      title: "GitHub",
      link: "https://github.com/ladybluenotes",
      icon: <FaSquareTwitter />
    }
  ]

    return (
      <InfoPages 
          prev={{
            title: "Proof I Work",
            link: "/work",
          }}
          next={{
            title: "I Can Write",
            link: "/blog",
          }}
        >
          <Heading level={1}>
            I&apos;m on Social Media!
          </Heading>
          <Paragraph>
            I&apos;m on Twitter, LinkedIn, and GitHub. Curious to see what I&apos;m up to? Click on the links below!
          </Paragraph>
          <div className="flex flex-col md:flex-row md:space-x-4">
            {socialLinks.map((link, i) => (
              <Link href={link.link} className="relative group mt-5 md:w-1/3" key={i}>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <div className="text-2xl">{link.icon}</div>
              <div className="space-y-2">
                    <div className="text-xl">{link.title}</div>
              </div>
            </div>
            </Link>
            ))}
          </div>
        </InfoPages>
    );
  };

export default Socials;