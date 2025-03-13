import { useState, useEffect } from "react";
import {
  detectInputType,
  dnaToRna,
  dnaToProtein,
  rnaToDna,
  rnaToProtein,
  proteinToDna,
  proteinToRna,
} from "../utils/translator";

const conversionOptions = {
  DNA: [
    { value: "dnaToRna", label: "DNA → RNA" },
    { value: "dnaToProtein", label: "DNA → Protein" },
  ],
  RNA: [
    { value: "rnaToDna", label: "RNA → DNA" },
    { value: "rnaToProtein", label: "RNA → Protein" },
  ],
  Protein: [
    { value: "proteinToDna", label: "Protein → DNA" },
    { value: "proteinToRna", label: "Protein → RNA" },
  ],
};

const conversionFunctions = {
  dnaToRna,
  dnaToProtein,
  rnaToDna,
  rnaToProtein,
  proteinToDna,
  proteinToRna,
};

const InputBox = ({ setResult }) => {
  const [input, setInput] = useState("");
  const [inputType, setInputType] = useState("Unknown");
  const [conversionType, setConversionType] = useState("");

  useEffect(() => {
    if (conversionOptions[inputType]) {
      setConversionType(conversionOptions[inputType][0].value);
    } else {
      setConversionType("");
    }
  }, [inputType]);

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase();
    setInput(value);
    setInputType(detectInputType(value));
  };

  const handleConvert = () => {
    const conversionFunction = conversionFunctions[conversionType];
    setResult(conversionFunction ? conversionFunction(input) : "Invalid conversion");
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-h-[50vh] flex flex-col justify-between space-y-4 overflow-hidden">
      {/* Title */}
      <div className="bg-primary text-secondary font-semibold text-lg sm:text-xl rounded-md py-1 text-center">
        Conversion Input
      </div>

      {/* Input fields */}
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Enter Sequence</label>
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="e.g. ATGCGT..."
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm sm:text-base"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Convert To</label>
          <select
            value={conversionType}
            onChange={(e) => setConversionType(e.target.value)}
            disabled={!conversionOptions[inputType]}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500 text-sm sm:text-base disabled:opacity-60"
          >
            {conversionOptions[inputType]?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Convert Button */}
      <button
        onClick={handleConvert}
        disabled={!conversionType}
        className="w-full bg-violet-500 hover:bg-primary text-white font-bold py-2 px-4 rounded-md text-sm sm:text-base transition-colors disabled:bg-primary disabled:text-white disabled:opacity-80"
      >
        Translate
      </button>
    </div>
  );
};

export default InputBox;
