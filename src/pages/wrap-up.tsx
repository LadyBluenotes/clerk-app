import InfoPages from "./components/InfoPages";
import Heading from "./components/Headings";
import Paragraph from "./components/Paragraph";
import Link from "next/link";

const WrapUp = () => {
  return (
    <InfoPages
      prev={{
        title: "I Can Code!",
        link: "/code",
      }}
    >
      <Heading level={1}>That&apos;s Me!</Heading>
      <Paragraph>
        I hope you enjoyed learning a little bit about me. I know I really
        enjoyed creating this site and getting to know a bit more about Clerk in
        the process.
      </Paragraph>
      <Paragraph>
        If you&apos;d like to get in touch, you can find me on all my socials{" "}
        <a href="https://sarahgerrard.me/socials">here</a>, or I can be reached
        via email at{" "}
        <Link
          href="mailto:gerrardsarah@gmail.com" className="font-semibold text-purple-800"
          >gerrardsarah@gmail.com
        </Link>
        .
      </Paragraph>
      <div className="text-center">
        <Heading level={2}>Thanks for reading!</Heading>
      </div>
    </InfoPages>
  );
};

export default WrapUp;
