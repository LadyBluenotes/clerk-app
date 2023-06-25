import Link from "next/link";

const CustomLinks = ({ href, words }: { href: string; words: string }) => {
  return (
    <Link href={href} className="font-semibold text-purple-800">
      {words}
    </Link>
  );
};

export default CustomLinks;
