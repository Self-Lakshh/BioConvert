const OutputBox = ({ result, input, conversionType }) => {
    const handleCopy = () => {
      if (result) {
        navigator.clipboard.writeText(result);
        alert("Copied to clipboard!");
      }
    };
  
    const handleDownload = () => {
      if (!result) return;
  
      const fileContent = `Output: ${result || "No output yet"}`;
      const element = document.createElement("a");
      const file = new Blob([fileContent], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = "sequence_output.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    };
  
    return (
      <div className="bg-white shadow-md rounded-lg p-4 w-full max-h-[50vh] flex flex-col justify-between gap-4 overflow-hidden">
        {/* Header */}
        <div className="bg-primary text-secondary font-semibold text-lg sm:text-xl rounded-md py-1 text-center">
          Output
        </div>
  
        {/* Result display */}
        <div className="bg-gray-100 p-4 rounded-md text-sm sm:text-base min-h-[9rem] break-words overflow-y-auto">
          {result || "No output yet"}
        </div>
  
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
          <button
            onClick={handleCopy}
            disabled={!result}
            className="w-full bg-violet-500  text-white font-bold py-2 px-4 rounded-md text-sm sm:text-base transition disabled:opacity-70"
          >
            Copy
          </button>
          <button
            onClick={handleDownload}
            disabled={!result}
            className="w-full bg-violet-500  text-white font-bold py-2 px-4 rounded-md text-sm sm:text-base transition disabled:opacity-70"
          >
            Download
          </button>
        </div>
      </div>
    );
  };
  
  export default OutputBox;
  