import Paragraph from "./components/Paragraph";
import Heading from "./components/Headings";
import InfoPages from "./components/InfoPages";
import Links from "./components/Link";

const Resume = () => {
  return (
    <InfoPages
      prev={{
        title: "Why Me?",
        link: "/work-exp",
      }}
      next={{
        title: "I'm Social!",
        link: "/socials",
      }}
    >
      <Heading level={1}>Proof I Work</Heading>
      <Heading level={2}>The Elephant in the Room</Heading>
      <Paragraph>
        So, I haven&apos;t always been a software developer (shocking, right?)
        but I don&apos;t come from a traditional background. I am actually from
        a healthcare-based background, having made the intentional decision to
        switch in 2021. There&apos; a long story with me and technology, ranging
        back to the early 2000&apos;s with my first computer to pursuing a
        certificate in Computer Aided Design while in High school. But, for me,
        tech has always been instrumental in my life. Being surrouneded by
        people talking about &quot;traditional&quot; careers, I succumed to that
        pressure and followed the path I was told. But, truth be told, I never
        felt like it was the place for me and since spending time in the tech
        industry, I&apos;ve never felt more at home.
      </Paragraph>
      <Heading level={2}>With All That Said...</Heading>
      <Paragraph>
        I work incredibly hard. My resume shows this. I spend a lot of time
        contributing to open source, both with the intention to continue to
        learn and develop and to give back to the community that has supported
        my learning. In my spare time, I&apos;m either working on a side project
        or learning a new tech (I do have hobbies outside of tech tho).
      </Paragraph>
      <Paragraph>
        I believe that I can be a great candidate and asset to Clerk. Given my
        strong work ethic, dedication to continuous learning, and my passion for
        technology, I believe that I can be a great addition to the team. My
        background in healthcare has equipped me with a unique perspective and a
        deep understanding of the importance of precision, attention to detail,
        and efficient processes. This, combined with my expertise as a software
        developer, allows me to bring a diverse skill set to the role. I know
        that I can be a great asset to Clerk and I would love the opportunity to
        prove it.
      </Paragraph>
          <div className="relative group mt-5">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
              <svg
                className="w-8 h-8 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"
                ></path>
              </svg>
              <div className="space-y-2">
                <p className="mb-2">
                  Take a look at my resume!
                </p>
                <Links href="/resume" words="Click Here →" />
              </div>
            </div>
          </div>
    </InfoPages>
  );
};

export default Resume;
