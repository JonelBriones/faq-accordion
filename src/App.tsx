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
    <div className="bg-purple-300 min-h-screen max-h-full bg-[url('../public/images/background-pattern-mobile.svg')] bg-contain bg-top bg-no-repeat flex flex-col justify-between place-items-center ">
      <div className=" font-mono select-none relative mt-40">
        <div className="max-w-sm h-auto bg-white rounded-lg p-6 md:max-w-3xl  md:top-40   ">
          <div className="flex gap-6 items-center">
            <svg
              className="size-8"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              fill="none"
              viewBox="0 0 40 41"
            >
              <path
                fill="#AD28EB"
                d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
              />
            </svg>
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
                {accordion?.show ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    fill="none"
                    viewBox="0 0 30 31"
                  >
                    <path
                      fill="#301534"
                      d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="31"
                    fill="none"
                    viewBox="0 0 30 31"
                  >
                    <path
                      fill="#AD28EB"
                      d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                    />
                  </svg>
                )}
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
