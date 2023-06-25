import Header from "./Header";


export default function LayOut({ children } : { children: React.ReactNode}) {
    return (
        <>
            <Header />
            {children}
        </>
    )
}