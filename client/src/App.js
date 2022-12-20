import { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Editor from './components/Editor';
import IO from './components/IO';

function App() {
  const [language, setLanguage] = useState("c");
  const [code, setCode] = useState("");
  const [output, setOutput] = useState('');
  const [input, setInput] = useState('');
  const [dark, setDark] = useState(true);

  useEffect(()=> {
    const language = localStorage.getItem('language');
    setLanguage(language);
    
   const theme = localStorage.getItem('theme');
   if(theme === 'dark') {
    setDark(true);
   } else {
    setDark(false);
   }
  }, [])

  return (
     
        <div className={` ${dark? 'dark' : ''} bg-slate-500 h-full dark:bg-slate-500 `}>
        <Header language={language} setLanguage={setLanguage} code={code} setOutput={setOutput} input={input} dark={dark} setDark={setDark} />
          <div className='mx-auto container my-3 flex  flex-col sm:flex sm:flex-row justify-around items-center'>
            <Editor language={language} code={code} setCode={ setCode} dark={dark} />
            <IO setInput={setInput} output={output} />
          </div>
          <Footer/>
        </div>
        
  );
}

export default App;
