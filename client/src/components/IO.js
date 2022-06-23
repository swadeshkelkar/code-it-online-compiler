
const IO = ({setInput, output}) => {
    return(
        <div className=' w-[90%] sm:w-[30%] flex flex-col '>

                <div className='container my-3 mx-auto bg-slate-800 dark:bg-slate-600  rounded '>
                  <p className='mt-2 text-center font text-white ' >Give Your Input</p>
                  <textarea rows='8' onChange={(e)=>{
                    setInput(e.target.value);
                  }} className='block w-full mt-3 p-1  mx-auto dark:bg-[#282c34] dark:text-white ' type='text'></textarea>
                </div>

                <div className="container mx-auto my-3 bg-slate-800 dark:bg-slate-600 rounded">
                  <p className="mt-2 text-center font text-white dark:text-white ">
                    Output
                  </p>
                  <textarea rows='9' defaultValue={output} className='block mt-3 p-1 mx-auto w-full dark:bg-[#282c34] dark:text-white' type='text' ></textarea>
              </div>

        </div>
    )
}

export default IO;