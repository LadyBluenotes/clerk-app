import Paragraph from "./components/Paragraph";
import Heading from "./components/Headings";
import InfoPages from "./components/InfoPages";

const WhyClerk = () => {
  return (
    <InfoPages next={{title:"Why Me?", link: "/hire-me"}}>
        <Heading level={1}>Why Clerk?</Heading>
        <div>
          <Heading level={2}>The Introduction @ Render</Heading>
          <Paragraph>
            One thing I will never forget is just how much outreach Clerk did at the Render ATL conference. I first heard of Clerk through Joe Lazano who partook in a lot of the Clerk events throughout the week. Once introduced to Clerk, I was incredibly curious about the product and how it worked - especially hearing that it aimed to make authentication of apps significantly easier to implement.
            </Paragraph>
          <Paragraph>
            While I didn&apos;t attend any of the Clerk events, I did get to see just how fun the people who are a part of Clerk are. I was able to meet a few of the Clerk team members (Dev Agrawal) and they were all incredibly nice and welcoming. I was able to talk to them about the product a bit and how it worked, and they were able to answer all of my questions. Did it make me jealous? Yes. Do it make me want to join the team? Absolutely.
            </Paragraph>
          <Heading level={2}>The REAL Why</Heading>
          <Heading level={3}>The Tech</Heading>
          <Paragraph>
            A few months ago, I spent <em>ages</em> trying to implement my own auth in an application I made. I wish I was exaggerating when I said out of everything on the project that I did, the auth took the cake for the most annoying. I used Next Auth which, while great, proved to have its own pitfalls. Figuring out how to implement it, how to make it work with my database, and how to make it work with my app took me ages. I spent hours trying to figure out how to make it work, and I still don&apos;t think I got it right.
            </Paragraph>
            <Paragraph>
              But <em>Clerk?</em> Took less than an hour to get my app up and running. Next Auth took <em>days</em>. Will I ever go back? No. I&apos;m not a masochist. What would the point be of going back to something that took me so long to figure out when I can use something that&apos;s so much easier to implement?
            </Paragraph>
            <Paragraph>
              If this tech <em>doesn&apos;t</em> become the standard for auth going forward, I will be incredibly surprised.
            </Paragraph>
          <Heading level={3}>The People</Heading>
          <Paragraph>
            Just to reiterate, the few Clerk people I interacted with at Render ATL are the driving force behind why I want to work with the team. They were all incredibly nice and welcoming, and I&apos;d love to be a part of a team like that. Being with supportive, kind people who foster growth and learning is something I&apos;ve been looking for in a job for a while now. I&apos;m glad to see that Clerk has that culture.
            </Paragraph>
        </div>
    </InfoPages>
  );
};

export default WhyClerk;
