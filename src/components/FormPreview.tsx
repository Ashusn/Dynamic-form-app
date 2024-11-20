import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { FormSchema } from "../types/FormSchema";

interface FormPreviewProps {
  schema: FormSchema;
}

export default function FormPreview({ schema }: FormPreviewProps) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submissions, setSubmissions] = useState<any[]>([]);

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    setSubmissions((prev) => [...prev, data]);
    alert("Form submitted successfully!");
  };

  const downloadSubmissions = () => {
    const blob = new Blob([JSON.stringify(submissions, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "form-submissions.json";
    link.click();
  };

  return (
    <div className="border rounded p-4 bg-gray-100 dark:bg-gray-800 dark:text-white">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <h1 className="text-lg font-bold">{schema.formTitle}</h1>
        <p>{schema.formDescription}</p>
        {schema.fields.map((field) => (
          <FormField key={field.id} field={field} register={register} errors={errors} />
        ))}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Submit
        </button>
      </form>

      {submissions.length > 0 && (
        <button
          onClick={downloadSubmissions}
          className="bg-purple-500 text-white p-2 rounded mt-4"
        >
          Download Submissions as JSON
        </button>
      )}
    </div>
  );
}
