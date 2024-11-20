import React from "react";
import { FormField as FormFieldType } from "../types/FormSchema";

interface FormFieldProps {
  field: FormFieldType;
  register: any;
  errors: any;
}

const FormField: React.FC<FormFieldProps> = ({ field, register, errors }) => {
  if (["text", "email", "textarea"].includes(field.type)) {
    const InputTag = field.type === "textarea" ? "textarea" : "input";
    return (
      <div className="mb-4">
        <label
          htmlFor={field.id}
          className="block mb-1 text-gray-800 dark:text-gray-200"
        >
          {field.label}
        </label>
        <InputTag
          id={field.id}
          {...register(field.id, {
            required: field.required && `${field.label} is required`,
            pattern: field.validation?.pattern
              ? {
                  value: new RegExp(field.validation.pattern),
                  message: field.validation.message,
                }
              : undefined,
          })}
          placeholder={field.placeholder}
          className="border rounded w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        />
        {errors[field.id] && (
          <p className="text-red-500 dark:text-red-400">
            {errors[field.id].message}
          </p>
        )}
      </div>
    );
  }

  if (field.type === "select") {
    return (
      <div className="mb-4">
        <label
          htmlFor={field.id}
          className="block mb-1 text-gray-800 dark:text-gray-200"
        >
          {field.label}
        </label>
        <select
          id={field.id}
          {...register(field.id, {
            required: field.required && `${field.label} is required`,
          })}
          className="border rounded w-full p-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          <option value="" disabled>
            Select an option
          </option>
          {field.options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors[field.id] && (
          <p className="text-red-500 dark:text-red-400">
            {errors[field.id].message}
          </p>
        )}
      </div>
    );
  }

  if (field.type === "radio") {
    return (
      <div className="mb-4">
        <label className="block mb-1 text-gray-800 dark:text-gray-200">
          {field.label}
        </label>
        {field.options?.map((option) => (
          <label key={option.value} className="block text-gray-800 dark:text-gray-200">
            <input
              {...register(field.id, {
                required: field.required && `${field.label} is required`,
              })}
              type="radio"
              value={option.value}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
        {errors[field.id] && (
          <p className="text-red-500 dark:text-red-400">
            {errors[field.id].message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div>
      <p className="text-gray-500 dark:text-gray-400">
        Unsupported field type: {field.type}
      </p>
    </div>
  );
};

export default FormField;
