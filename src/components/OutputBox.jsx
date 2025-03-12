const OutputBox = ({ result }) => {
  return (
    <div>
      <h3>Output</h3>
      <div>{result || "No output yet"}</div>
    </div>
  );
};
export default OutputBox;
