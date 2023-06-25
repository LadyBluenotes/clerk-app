import InfoPages from "./components/InfoPages";
import Heading from "./components/Headings";
import Paragraph from "./components/Paragraph";
import Link from "next/link";
import Images from "./components/Images";

const Code = () => {
  const projectLinks = [
    {
      link: "https://trackmyfunds.app",
      title: "Track My Funds",
      type: "Full Stack Web App",
      image: "#",
    },
    {
      link: "https://pokedex.sarahgerrard.me",
      title: "Poke-Dex",
      type: "Front End Web App",
      image: "#",
    },
  ];

  return (
    <InfoPages
      prev={{
        title: "I Can Write!",
        link: "/writing",
      }}
      next={{
        title: "Wrap Up",
        link: "/wrap-up",
      }}
    >
      <Heading level={1}>I Can Code!</Heading>
      <Images src="/assets/superhero.jpg" alt="Cartoon astronaut with a superhero cape on and in a superman pose with a fist in the air and one on his hips." />
      <Paragraph>
        I&apos;ve written a lot of words, but I&apos;ve also written a lot of code. I even
        coded a documentation site for myself! If you want to see my
        documentation site, you can click{" "}
        <Link
          href="https://docs.sarahgerrard.me"
          className="font-semibold text-purple-800"
        >
          here
        </Link>{" "}
        but I want to warn you it&apos;s still a work in progress.
      </Paragraph>
      <Paragraph>
        Care to see some of my other projects? Admittedly some are a little rough around the edges, but I&apos;ve listed a few of my favorites
        below:
      </Paragraph>
      <div className="flex flex-row justify-center">
      {projectLinks.map((link, i) => (
        <Link href={link.link} className="relative group mt-5 mx-3 md:w-1/3" key={i}>
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="text-2xl">{link.image}</div>
            <div className="space-y-2">
              <div className="text-xl">{link.title}</div>
              <div className="text-sm">{link.type}</div>
            </div>
          </div>
        </Link>
      ))}
      </div>
    </InfoPages>
  );
};

export default Code;
