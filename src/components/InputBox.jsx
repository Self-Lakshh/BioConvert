import { useState } from "react";
const InputBox = ({ setResult }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <label>Enter Sequence</label>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};
export default InputBox;
