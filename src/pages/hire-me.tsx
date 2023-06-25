import NavPage from "./components/NavPage";

const HireMe = () => {
  return (
    <main className="max-w-3xl mx-auto">
        <section className="bg-white bg-opacity-80 backdrop-blur-sm my-4 rounded-lg h-fit">
            <h1 className="text-5xl font-bold mb-8 text-center pt-3">Hire Me</h1>
        </section>
      <NavPage
        prev={{
          title: "Why Clerk?",
          link: "/why-clerk",
        }}
        next={{
          title: "Proof I Work",
          link: "/resume",
        }}
      />
    </main>
  );
};

export default HireMe;
