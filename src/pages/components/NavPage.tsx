import Link from "next/link";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const NavPage = ({ prev, next }: any) => {
  return (
    <div className="grid md:grid-cols-2 lg:mx-24 pb-6 md:space-x-4 space-y-4 md:space-y-0">
      {prev && (
        <Link
          href={prev.link}
          className="py-8 px-8 text-center md:text-left rounded-lg bg-white bg-opacity-80 backdrop-blur-sm hover:bg-opacity-90 drop-shadow-lg flex flex-col"
        >
          <p className="text-start uppercase font-bold text-purple-900 mb-4">
            Prev
          </p>
          <div className="w-full flex flex-row">
            <FaChevronLeft className="text-start text-purple-900 my-auto" />
            <h4 className="text-3xl mr-0 ml-auto text-purple-600 font-semibold h-full">
              {prev.title}
            </h4>
          </div>
        </Link>
      )}
      {next && (
        <Link
          href={next.link}
          className="py-8 px-8 text-center md:text-left rounded-lg bg-white bg-opacity-80 backdrop-blur-sm hover:bg-opacity-90 drop-shadow-lg flex flex-col"
        >
          <p className="text-end uppercase font-bold text-purple-900 mb-4">
            Next
          </p>
          <div className="w-full flex flex-row">
            <h4 className="text-3xl  text-purple-600 font-semibold h-full">
              {next.title}
            </h4>
            <FaChevronRight className="mr-0 ml-auto text-purple-900 my-auto" />
          </div>
        </Link>
      )}
    </div>
  );
};

export default NavPage;
