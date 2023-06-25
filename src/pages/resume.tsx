import NavPage from "./components/NavPage";

const Resume = () => {
    return (
      <main className="max-w-3xl mx-auto">
          <section className="bg-white bg-opacity-80 backdrop-blur-sm my-4 rounded-lg h-fit">
              <h1 className="text-5xl font-bold mb-8 text-center pt-3">My Resume</h1>
          </section>
        <NavPage
          prev={{
            title: "Why Me?",
            link: "/hire-me",
          }}
          next={{
            title: "I'm Social!",
            link: "/socials",
          }}
        />
      </main>
    );
  };

export default Resume;