import {
  SVGAstro,
  SVGBash,
  SVGCSS,
  SVGGitHub,
  SVGGo,
  SVGHTML,
  SVGLinkedin,
  SVGNext,
  SVGNode,
  SVGREACT,
  SVGRust,
  SVGTailwind,
  SVGTypeScript,
} from "../components/icons";
import Link from "next/link";
const HomePage = () => {
  return (
    <section id="home" className="mt-24 p-10 bg-[#8e8e8e]/10">
      <div className="flex justify-center items-center">
        {/* <div className="m-2 h-96 w-96 border-2 border-black rounded-full p-4 bg-photo object-scale-down bg-no-repeat bg-cover"></div> */}
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-6xl font-black text-center">
            Software Engineer 👋
          </h1>
          <p className="text-center">
            Hi, I am a Software developer experience in building and maintaining
            responsive, user-friendly websites and applications.{" "}
          </p>
          <div className="flex justify-center items-center gap-2 m-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/abdulwaheed-j-64561494"
            >
              <SVGLinkedin />
            </Link>
            <Link target="_blank" href="https://www.github.com/mrlectus">
              <SVGGitHub />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold underline text-center text-xl">
            Tech Stack
          </h4>
          <div className="flex flex-col gap-4 justify-center items-center">
            <div className="flex gap-1">
              <SVGHTML />
              <SVGCSS />
              <SVGTailwind />
              <SVGTypeScript />
            </div>
            <div className="flex gap-1">
              <SVGREACT />
              <SVGNext />
              <SVGAstro />
            </div>
            <div className="flex gap-1">
              <SVGNode />
              <SVGBash />
              <SVGGo />
              <SVGRust />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
