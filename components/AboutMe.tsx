// "use client";
// import React from "react";
// import TypingAnimation from "./ui/typing-animation";

// export function AboutMe() {
//   return (
//     <div
//       className="bg-black dark:bg-white max-w-full h-fit rounded-3xl p-6 min-h-36"
//     >
//       <div className="flex space-x-2 mb-4">
//       <div
//         className="w-3 h-3 rounded-full bg-red-500"
//       ></div>
//       <div
//         className="w-3 h-3 rounded-full bg-yellow-500"
//       ></div>
//       <div
//         className="w-3 h-3 rounded-full bg-green-500"
//       ></div>
//       </div>

//       <TypingAnimation
//       className="text-lg text-left text-white dark:text-black font-medium"
//       text="Results-driven Computer Science senior at Texas A&M University, passionate about leveraging AI, cloud, and scalable software to solve real-world problems and drive business impact."
//       duration={10}
//       />
//     </div>
//   );
// }

// "use client"

"use client";

import React, { useState, useEffect } from "react";

export function AboutMe() {
  const text =
    "Results-driven Computer Science senior at Texas A&M University, passionate about leveraging AI, cloud, and scalable software to solve real-world problems and drive business impact.";

  const [displayText, setDisplayText] = useState("");
  const typingInterval = 50; // Adjust the typing speed here (milliseconds per character)

  useEffect(() => {
    let index = 0;

    const typeLetter = () => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(typeLetter, typingInterval);
      }
    };

    typeLetter();

    // Cleanup function to clear any pending timeouts if the component unmounts
    return () => {
      index = text.length;
    };
  }, [text]);

  return (
    <div className="min-h-fit bg-gradient-to-br from-background to-muted rounded-xl p-10 mb-10">
    <h2 className="text-4xl font-bold mb-6">About Me</h2>
    <div className="max-w-full rounded-3xl">
      <div className="bg-[#1e1e1e] dark:bg-[#ffffff] rounded-lg shadow-xl">
        <div className="bg-[#3a3a3a] dark:bg-[#e0e0e0] px-4 py-2 flex items-center">
          <div className="flex space-x-2 mr-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-white dark:text-black text-xs font-semibold">
            root@personal-website ~
          </div>
        </div>
        <div className="p-4 font-mono text-normal">
          <p className="text-green-400 dark:text-green-600">
            $ cat about-me.txt
          </p>
          <p className="text-gray-400 dark:text-gray-600 min-h-20">
            {displayText}
            <span className="blinking-cursor">|</span>
          </p>
        </div>
      </div>

      {/* Include custom CSS for the blinking cursor */}
      <style jsx>{`
        .blinking-cursor {
          font-weight: 100;
          font-size: 16px;
          color: green;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from,
          to {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
    </div>
  );
}
