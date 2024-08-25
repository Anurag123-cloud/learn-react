import { useState, useCallback,useEffect ,useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null)

  const generatedPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "123567890";
    if (charAllowed) str += "!~@#$%^&*()_+{}:>?<";
    for (let i=1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
   
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPassword=useEffect(()=>{
    window.navigator.clipboard.writeText(password)
  },[password])
 
  useEffect(() => {
    generatedPassword()
  }, [length,numberAllowed,charAllowed,generatedPassword])
  

  return (
    <>
      <div
        className="w-full max-w-md m-auto shadow-md rounded-lg 
     px-4 py-4 my-8 text-orange-500 bg-gray-500"
      >
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={()=>copyPassword}
            className="p-2 bg-blue-700 text-white font-medium"
            
          >
            gene
          </button>
        </div>

        <div className="flex text-sm gap-x-5">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              max={100}
              min={8}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              className="cursor-pointer"
              id="numberId"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              className="cursor-pointer"
              id="charId"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label>Number</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
