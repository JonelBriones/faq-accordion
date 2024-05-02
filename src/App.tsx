import { useState } from "react";
import "./App.css";
const data = [
  {
    title: "What is Frontend Mentor, and how will it help me?",
    description:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    title: "Is Frontend Mentor free?",
    description:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    title: "Can I use Frontend Mentor projects in my portfolio?",
    description:
      " Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    title: "How can I get help if I'm stuck on a challenge?",
    description:
      "  The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

type Accordion = {
  title: string;
  description: string;
  show?: boolean;
};

function App() {
  const [accordionData, setAccordionData] = useState<Accordion[]>(data);

  const handleClick = (i: number) => {
    setAccordionData(
      accordionData.map((accordion: any, idx) =>
        idx == i ? { ...accordion, show: !accordion.show } : accordion
      )
    );
  };

  return (
    <div className="bg-purple-300 min-h-screen max-h-full bg-[url('../src/assets/images/background-pattern-mobile.svg')] bg-contain bg-top bg-no-repeat flex flex-col justify-between place-items-center ">
      <div className=" font-mono select-none relative mt-40">
        <div className="max-w-sm h-auto bg-white rounded-lg p-6 md:max-w-3xl  md:top-40   ">
          <div className="flex gap-6 items-center">
            <img
              src="../public/assets/images/icon-star.svg"
              alt="icon-star.svg"
              className="size-8"
            />
            <h1 className="font-bold text-4xl">FAQs</h1>
          </div>
          {accordionData.map((accordion: Accordion, idx) => (
            <div
              key={accordion.title}
              className={`py-6 ${idx > 0 ? "border-t" : ""} border-slate-200  ${
                !accordion.show ? "hover:text-[purple]" : ""
              } cursor-pointer `}
              onClick={() => handleClick(idx)}
            >
              <div className="flex place-items-center justify-between">
                <h4 className="font-bold text-xl">{accordion.title}</h4>
                <img
                  src={`../public/assets/images/icon-${
                    accordion.show ? "minus" : "plus"
                  }.svg`}
                  alt="icon-star.svg"
                  className="size-8"
                />
              </div>
              <div
                className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
                  accordion?.show
                    ? "py-4 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">{accordion.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-xs py-6 flex flex-col justify-center place-items-center m-4 md:bottom-10">
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Challenge by Frontend Mentor
        </a>
        <span>
          Coded by{" "}
          <a href="https://github.com/JonelBriones" target="_blank">
            Jonel Briones
          </a>
        </span>
      </div>
    </div>
  );
}

export default App;
