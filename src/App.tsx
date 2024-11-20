import React, { useState } from "react";
import JSONEditor from "./components/JSONEditor";
import FormPreview from "./components/FormPreview";
import { FormSchema } from "./types/FormSchema";

const initialSchema: FormSchema = {
  formTitle: "Dynamic Form",
  formDescription: "Fill out the fields below",
  fields: [],
};

function App() {
  const [schema, setSchema] = useState<FormSchema>(initialSchema);
  const [darkMode, setDarkMode] = useState(false);

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(JSON.stringify(schema, null, 2));
      alert("Form JSON copied to clipboard!");
    } catch (err) {
      alert("Clipboard copy failed.");
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen`}>
      <div className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
        <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Dynamic Form Builder</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 p-4  bg-gray-100 dark:bg-gray-900">
        <div className="w-full lg:w-1/2 h-screen">
          <JSONEditor
            json={schema}
            onJsonChange={(newJson) => {
              if ("formTitle" in newJson && "fields" in newJson) {
                setSchema(newJson as FormSchema);
              } else {
                alert("Invalid schema structure.");
              }
            }}
          />
          <button
            onClick={copyToClipboard}
            className="bg-green-500 text-white p-2 rounded mt-2 w-full sm:w-auto"
          >
            Copy Form JSON
          </button>
        </div>

        <div className="w-full lg:w-1/2 h-full">
          <FormPreview schema={schema} />
        </div>
      </div>
    </div>
  );
}

export default App;
