import Header from "./components/Header";
import Heading from "./components/Headings";
import InfoPages from "./components/InfoPages";
import Paragraph from "./components/Paragraph";
import Links from "./components/Link";

const Blog = () => {

  const docsHelp = [
    "SolidJS",
    "MUI",
    "Accessible for All",
    "Astro"
  ];

  return (
    <InfoPages
      prev={{
        title: "I'm Social!",
        link: "/socials",
      }}
      next={{
        title: "Wrap Up",
        link: "/wrap-up",
      }}
    >
      <Heading level={1}>My Writing</Heading>
      <Paragraph>
        The more I got into the tech industry, the more I realized it suffers
        from similar quirks as the healthcare industry. A lot of the industry
        specific jargon is used to overcomplicate beginner concepts and, felt
        like, it was used to gatekeep people from entering the industry.
      </Paragraph>
      <Paragraph>
        One of my superpowers in life is being able to take complex concepts and
        explain them in a way that anyone can understand. I&apos;ve been able to
        use this superpower to help people understand their health and wellness,
        and now I&apos;ve been using it to help people understand the tech
        industry.
      </Paragraph>
      <Heading level={2}>Documentation</Heading>
      <Paragraph>
        Starting with my first big open source contributions, I assisted the MUI
        team with rewriting some of their new library&apos;s documentation. I
        helped with a handful of pages and, from there, I moved into helping
        other open source projects with their documentation.
      </Paragraph>
      <Paragraph>
        I&apos;ve been helping with the documentation for the following projects:
        <ul className="list-disc pl-16 my-5">
          {docsHelp.map((item, index) => (
            <li key={index}>
              <p className="text-large">{item}</p>
            </li>
          ))}
        </ul>
      </Paragraph>
      <Paragraph>
        Through these projects, I even gained the motivation to create a <Links href="https://docs.sarahgerrard.me/" words="documentation site" /> for my own projects.
      </Paragraph>
      <Heading level={2}>Blog Posts</Heading>
      <Paragraph>
        I&apos;ve also been writing blog posts to help people understand the more complex concepts in the tech industry. I&apos;ve written about:
        <ul className="list-disc pl-16 my-5">
          <li>
            <Links href="https://blog.sarahgerrard.me/unraveling-the-magic-of-the-virtual-dom" words="Unraveling the Magic of the Virtual DOM" />
          </li>
          <li>
            <Links href="https://blog.sarahgerrard.me/the-fundamentals-of-algorithms" words="The Fundamentals of Algorithms" />
          </li>
          <li>
            <Links href="https://blog.sarahgerrard.me/git-and-the-command-line" words="Streamlining Your Workflow with Git and the Command Line" />
          </li>
          </ul>
          Just to name a few! More of my blogs can be found at my <Links href="https://blog.sarahgerrard.me/" words="blog site" />.
      </Paragraph>
    </InfoPages>
  );
};

export default Blog;
