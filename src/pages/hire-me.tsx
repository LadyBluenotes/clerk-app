import Heading from "./components/Headings";
import InfoPages from "./components/InfoPages";
import Paragraph from "./components/Paragraph";
import Link from "./components/Link";

const HireMe = () => {
  const techItems = [
    "I've demonstrated skill in working with libraries and frameworks such as React and NextJS (this website included!).",
    "Proficient in various programming languages and frameworks such as SolidJS, TypeScript, JavaScript, Node.JS, HTML, CSS, and React.",
    "I'm comfortable with frontend development, including designing visually appealing web pages and applications, but am also able to work full-stack.",
    "I'm familiar with the open source world as a software developer.",
    "I'm adept at writing and maintaining clear and concise documentation.",
    "I'm skilled in translating complex topics into easily digestible content",
    "Experienced in contributing to code improvements, bug fixes, and new features in collaboration with maintainers.",
  ];

  const personalItems = [
    "I'm passionate about exploring and experimenting with different frameworks and languages to enhance work quality.",
    "I'm highly motivated and independent, with a proven ability to work remotely and as part of a global team.",
    "I'm a strong communicator, being able to coordinate and collaborate effectively with various stakeholders including maintainers, contributors, and users.",
    "I'm a quick learner, able to pick up new skills and juggle different projects and roles with relative ease.",
    "I'm a creative thinker, able to apply my knowledge and skills to solve complex problems and come up with innovative solutions.",
  ];

  return (
    <InfoPages
      prev={{
        title: "Why Clerk?",
        link: "/why-clerk",
      }}
      next={{
        title: "Proof I Work",
        link: "/work",
      }}
    >
      <Heading level={1}>Why Hire Me?</Heading>
      <Paragraph>
        As you can tell from this website, I love going above and beyond with
        the work that I do. This isn&apos;t just a website that I&apos;m using
        to apply for this job - this is a website that I&apos;m using to show
        off my skills and what I can do. I learned Clerk in an afternoon and
        built an app with it - a testament to my ability to learn things quickly
        and apply them to my work.
      </Paragraph>
      <Paragraph>
        The biggest question, however,{" "}
        <em>is what makes me a good candidate for Clerk?</em>
      </Paragraph>
      <Heading level={2}>My Tech Knowledge</Heading>
      <ul className="list-disc px-6 ml-3 my-5">
        {techItems.map((item, index) => (
          <li key={index}>
            <p className="text-lg">{item}</p>
          </li>
        ))}
      </ul>
      <Heading level={2}>My Personal Skills</Heading>
      <ul className="list-disc px-6 ml-3 my-5">
        {personalItems.map((item, index) => (
          <li key={index}>
            <p className="text-lg">{item}</p>
          </li>
        ))}
      </ul>
      <Paragraph>
        I&apos;ve said a lot up to this point, but I think the best way to show
        you what I can do is to show you what I&apos;ve done. Check out{" "}
        <Link href={"/resume"} words={"my resume"} /> to see my work experience,
        or check out <Link href={"/projects"} words={"my portfolio"} /> to see
        what I&apos;ve built.
      </Paragraph>
    </InfoPages>
  );
};

export default HireMe;
