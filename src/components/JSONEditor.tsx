import React, { useState } from "react";

interface JSONEditorProps {
  json: object;
  onJsonChange: (newJson: object) => void;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ json, onJsonChange }) => {
  const [error, setError] = useState<string | null>(null);

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    try {
      const parsedJson = JSON.parse(e.target.value);
      onJsonChange(parsedJson);
      setError(null);
    } catch (err) {
      setError("Invalid JSON format.");
    }
  };

  return (
    <div className="border rounded p-4 bg-gray-100 dark:bg-gray-800">
      <textarea
        id="json-editor"
        value={JSON.stringify(json, null, 2)}
        onChange={handleJsonChange}
        className="w-full h-96 p-2 border rounded bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
      />
      {error && <p className="text-red-500 dark:text-red-400 mt-2">{error}</p>}
    </div>
  );
};

export default JSONEditor;
