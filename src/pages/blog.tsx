import NavPage from "./components/NavPage";

const Blog = () => {
    return (
      <main className="max-w-3xl mx-auto">
          <section className="bg-white bg-opacity-80 backdrop-blur-sm my-4 rounded-lg h-fit">
              <h1 className="text-5xl font-bold mb-8 text-center pt-3">My Blog</h1>
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center pt-3"></h2>
              </div>
          </section>
        <NavPage
          prev={{
            title: "I'm Social!",
            link: "/resume",
          }}
        />
      </main>
    );
  };

export default Blog;