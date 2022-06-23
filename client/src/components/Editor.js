import CodeMirror from '@uiw/react-codemirror';
import {cpp} from '@codemirror/lang-cpp'
import {java} from '@codemirror/lang-java'
import {python} from '@codemirror/lang-python'

const Editor = ({language, code, setCode, dark}) => {

    let langExt;
    if(language === 'java') {
        langExt = java();
    } else if(language === 'python3') {
        langExt = python();
    } else {
        langExt = cpp();
    }

    
    return(
        <div className='sm:w-[60%] sm:h-[500px] items-center w-[90%]'>

              <CodeMirror
                value={code}
                height='500px'
                theme={dark? 'dark': 'light'}
    
                extensions={[langExt]}
                onChange={(value) => {
                 setCode(value);
                }}
                />
        </div>
    );
}

export default Editor;