import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InputBox from "./components/InputBox";
import OutputBox from "./components/OutputBox";

const App = () => {
  const [result, setResult] = useState("");

  return (
    <div className="min-h-screen flex flex-col">
      <div className="hidden md:block">
        <Header />
      </div>

      <main className="flex-1 container mx-auto py-5 px-4">
        <div className="flex flex-col gap-6 md:flex-row">
          <InputBox setResult={setResult} />
          <OutputBox result={result} />
        </div>
      </main>

      <div className="hidden md:block">
        <Footer />
      </div>
    </div>
  );
};

export default App;
