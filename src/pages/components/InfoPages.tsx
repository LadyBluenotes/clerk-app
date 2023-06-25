import NavPage from "./NavPage";

const InfoPages = ({children, next, prev}: {children: React.ReactNode, prev?: any, next?: any}) => {
    return (
        <main className="max-w-3xl mx-auto text-purple-950">
        <section className="bg-white bg-opacity-80 backdrop-blur-sm my-4 rounded-lg h-fit px-5 py-6">
            {children}
        </section>
        if (prev || next) {
            <NavPage
                prev={prev}
                next={next}
            />
        }
        </main>
    )
}

export default InfoPages;