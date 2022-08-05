import { ReactElement, useState } from "react";
import Image from "next/image";
import SinglePageLayout from "../components/layouts/SingleLayout.component";
import {
  FaHome,
  FaPlus,
  FaStar,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";
import { mumboData } from "../data/mumboData";
import {HermitCard} from "../components/Card.component";

function Hermits() {
  const [show, setShow] = useState(false);
  const [season, setSeason] = useState("8");

  return (
    <div className="flex justify-between w-full h-[90vh] bg-[#40A5DD]">
      <div className="hidden sm:flex flex-col justify-start items-center p-1 bg-[#3C88B2] w-16">
        <a href="https://www.hermitplus.com" target="__blank">
          <div className="flex justify-center items-center w-full mt-16 border-2 border-slate-700 rounded-md">
            <Image
              className="border-2 border-slate-900 rounded-md"
              src="/images/hermits/hermit_logo.png"
              alt="logo"
              width={44}
              height={44}
            />
          </div>
        </a>
        <ul className="text-2xl text-white">
          <li className="my-8">
            <FaHome />
          </li>
          <li className="my-8">
            <FaPlus />
          </li>
          <li className="my-8">
            <FaStar />
          </li>
        </ul>
      </div>

      <div className="hidden sm:flex justify-center items-center w-full">
        <div className="flex flex-col pl-1">
          <div className="flex">
            <div className="flex justify-center items-center border-2 border-[#FFBCD4] text-white rounded-md w-[130px] h-[35px]">
              Hermitcraft
            </div>
            <div className="flex justify-center items-center border-2 border-[#FFBCD4] text-white rounded-md ml-8 w-[130px] h-[35px]">
              Minecraft
            </div>
            <div className="flex justify-center items-center border-2 border-[#FFBCD4] text-white rounded-md ml-8 w-[130px] h-[35px]">
              Red Stone
            </div>
          </div>
          <div>
            <h1 className="md:text-6xl xl:text-9xl text-[#FFBCD4] mt-2 font-Prompt">
              Mumbo Jumbo
            </h1>
          </div>
          <div>
            <span className="text-white ml-4">&#40;2012&#41;</span>
            <span className="text-white ml-6">Family Friendly</span>
            <span className="text-white ml-6">8.12M subs</span>
          </div>
          <div className="flex">
            <p className="text-white mt-4 w-[500px]">
              Mumbo Jumbo, known as Mumbo, is known for his redstone work. Most
              subscribed of the Hermits, he one of nine with over 1 million and
              one of two with over seven million. He has an extensive knowledge
              of redstone mechanics. He has a Volkswagen van that he cherishes
              and a photography YouTube channel.
            </p>
            <img
              className="relative z-10 xl:-mt-28"
              src="/images/hermits/mumbo_skin.png"
              alt="mumbo jumbo"
              width={400}
            />
          </div>
          <div className="flex">
            <a
              href="https://twitter.com/ThatMumboJumbo"
              target="__blank"
              rel="noreferrer">
              <FaTwitter className="text-[#FFBCD4] text-2xl xl:-mt-[250px]" />
            </a>
            <a
              href="https://www.instagram.com/officialmumbo/"
              target="__blank"
              rel="noreferrer">
              <FaInstagram className="text-[#FFBCD4] text-3xl ml-8 xl:-mt-[250px]" />
            </a>
            <a
              href="https://www.youtube.com/user/ThatMumboJumbo"
              target="__blank"
              rel="noreferrer">
              <FaYoutube className="text-[#FFBCD4] text-3xl ml-8 xl:-mt-[250px]" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center p-1 bg-[#3C88B2] w-[530px]">
        <div className="sm:hidden flex bg-[#3C88B2] w-full ">
          <ul className="flex justify-around w-full items-center text-2xl text-white">
            <li>
              <a href="https://www.hermitplus.com" target="__blank">
                <Image
                  className="border-2 border-slate-900 rounded-md"
                  src="/images/hermits/hermit_logo.png"
                  alt="logo"
                  width={44}
                  height={44}
                />
              </a>
            </li>

            <li className="my-8">
              <FaHome />
            </li>
            <li className="my-8">
              <FaPlus />
            </li>
            <li className="my-8">
              <FaStar />
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-start p-2 w-full">
          <h3 className="text-white">Choose a season</h3>
          <button
            onClick={() => setShow(!show)}
            className="flex justify-between items-center bg-white border border-slate-300 w-full mt-3 px-2 py-1 rounded-md">
            {`season ${season}`} <FaChevronDown className="ml-2 pl-1" />
          </button>
          <div className={show ? "block" : "hidden"}>
            <ul className="flex flex-col mr-1 items-end w-full text-white">
              <li className="py-1">Season 9</li>
              <li className="py-1">Season 8</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col mt-4 overflow-y-auto">
          {mumboData.map((item) => (
            <HermitCard
              key={item.id}
              season={item.season}
              episode={item.episode}
              imageUrl={item.imageUrl}
              subText={item.subText}
            />
          ))}
        </div>

        {/* <div className="flex flex-col p-2 w-full my-2 bg-[#40A5DD] rounded-md text-white">
          <h4>Season 8 Episode 1</h4>
          <div className="flex mt-1">
            <img src="images/portfolio/volvo.png" alt="one" className=" bg-red-400 min-w-[150px] h-[84px]" />
            <span className="text-xs px-1">
              In this episode of Hermitcraft Season 8, Mumbo begins work on his
              Hermitcraft 8 Mumbo Mega base. Mumbo lays out the foundations for
              this ...
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Hermits;

Hermits.getLayout = function getLayout(Hermits: ReactElement) {
  return <SinglePageLayout>{Hermits}</SinglePageLayout>;
};
