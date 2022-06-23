import { useState } from "react";

import Run from "./Run.js";

import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

const Header = ({language, setLanguage, code, setOutput, input, dark, setDark }) => {
  const [toggle, setToggle] = useState(false);
  
  let dispLang;
  switch (language) {
    case "java":
      dispLang = "Java";
      break;
    case "python3":
      dispLang = "Python";
      break;
    case "cpp17":
      dispLang = "C++";
      break;
    default:
      dispLang = "C";
      break;
  }

  return (
    <header className=' w-[100%] bg-white text-black dark:bg-slate-700 dark:text-white '>
      <div className='flex justify-between items-center p-1.5 '>
        <div className='m-2 ml-4'>Code It - Online Compiler</div>

        <Run
          language={language}
          code={code}
          setOutput={setOutput}
          input={input}
        />

        <div className='relative'>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className='bg-blue-600 text-white w-20 rounded '
          >
            {dispLang}
          </button>
          {toggle && (
            <div className=' absolute mt-2 bg-slate-800 dark:bg-slate-600 text-white rounded py-2 w-20'>
              <button
                onClick={() => {
                  setLanguage("c");
                  setToggle(false);
                  localStorage.setItem('language', 'c');
                }}
                className='block px-4 py-1 w-20 text-center hover:bg-blue-600 hover:text-white '
              >
                C
              </button>
              <button
                onClick={() => {
                  setLanguage("cpp17");
                  setToggle(false);
                  localStorage.setItem('language', 'cpp17');
                }}
                className='block px-4 py-1 w-20 text-center hover:bg-blue-600 hover:text-white '
              >
                C++
              </button>
              <button
                onClick={() => {
                  setLanguage("java");
                  setToggle(false);
                  localStorage.setItem('language', 'java');
                }}
                className='block px-4 py-1 w-20 text-center hover:bg-blue-600 hover:text-white'
                >
                Java
              </button>
              <button
                onClick={() => {
                  setLanguage("python3");
                  setToggle(false);
                  localStorage.setItem('language', 'python3');
                }}
                className='block px-4 py-1 w-20 text-center hover:bg-blue-600 hover:text-white'
              >
                Python
              </button>
            </div>
          )}
        </div>
        <div className='pt-1 pr-4'>
          <button
            onClick={() => {
              setDark(!dark);
              if(dark === true) {
                localStorage.setItem('theme', 'light');
              } else {
                localStorage.setItem('theme', 'dark');
              }
            }}
          >
            {!dark ? <MdDarkMode size='20px' /> : <BsFillSunFill size='20px' />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
