import axios from 'axios'
import qs from 'qs'

const Run = ({language, code, setOutput, input}) => {
  
    const handleSubmit = async () => {
      const payload = {
        language: language,
        code: code,
        input: input
      }
      try {
  
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/x-www-form-urlencoded' },
          data: qs.stringify(payload),
          url: 'http://localhost:5000/run',
        };
        const res = await axios(options);
        setOutput(res.data.output);
      } catch (e) {
        console.error(e);
      }
    }

    return (
        <div className='m-2'>
          <button onClick={handleSubmit} className='bg-blue-600 text-white w-20 rounded'>Run</button>
        </div>
    );
}

export default Run;