import NavPage from "./components/NavPage";

const Socials = () => {
    return (
      <main className="max-w-3xl mx-auto">
          <section className="bg-white bg-opacity-80 backdrop-blur-sm my-4 rounded-lg h-fit">
              <h1 className="text-5xl font-bold mb-8 text-center pt-3">My Socials</h1>
          </section>
        <NavPage
          prev={{
            title: "Proof I Work",
            link: "/resume",
          }}
          next={{
            title: "I Can Write",
            link: "/blog",
          }}
        />
      </main>
    );
  };

export default Socials;