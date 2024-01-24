import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar"

export default function ErrorPage() {

  return (
    <>
      <NavBar backgroundColor={"rgba(62, 52, 91, 0.8)"} />
      <div className="max-w-[1040px] mx-auto md:pl-4 md:pr-4 lg:pr-20 p-4 py-16 pt-40 text-gray-500 bg-white text-center">
        <h1 className="text-4xl mt-6 font-bold text-indigo-900">Page not found</h1>
        <p className="py-8">Sorry, I was not able to locate this page.</p>
        <p>Return back to <NavLink to="/" className="text-indigo-400 font-bold hover:underline">HOME</NavLink></p>
      </div>
    </>
  );
}