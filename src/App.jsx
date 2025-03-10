import { useState } from "react";
const App = () => {
  const [result, setResult] = useState("");
  return (
    <div>
      <h1>BioConvert</h1>
      <p>Bioinformatics Sequence Translator</p>
    </div>
  );
};
export default App;
