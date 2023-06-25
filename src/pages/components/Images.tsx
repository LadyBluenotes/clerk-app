import Image from "next/image";

const Images = ({ src, alt }: {src: string, alt: string}) => {
    return (
        <Image src={src} width={300} height={300} alt={alt} className="rounded-xl shadow-lg mx-auto mb-3"/>
    )
}

export default Images;