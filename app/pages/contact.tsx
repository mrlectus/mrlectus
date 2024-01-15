import Link from "next/link";
import { SVGGoogleMap, SVGMail } from "../components/icons";

const Contact = () => {
  return (
    <section
      className="p-10 flex flex-col justify-center items-center gap-4"
      id="contacts"
    >
      <h2 className="text-blue-400 text-center text-xl font-bold">Contact</h2>
      <h3 className="text-2xl text-center font-black">Hit me up on ⬇️</h3>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="border flex w-fit rounded-full drop-shadow-xl p-2">
          <Link
            href="https://www.google.com/maps"
            target="_blank"
            className="cursor-pointer"
          >
            <SVGGoogleMap />
          </Link>
        </div>
        <p className="text-center font-bold">Location</p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="border flex w-fit rounded-full drop-shadow-xl p-2">
          <Link
            href="mail:waheedjimoh444@gmail.com"
            target="_blank"
            className="cursor-pointer"
          >
            <SVGMail />
          </Link>
        </div>
        <p className="text-center font-bold">Mail</p>
      </div>
    </section>
  );
};

export default Contact;
