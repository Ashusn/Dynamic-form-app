# Dynamic Form Builder

This is a dynamic form builder application that allows users to generate forms and customize them using JSON. The app includes a JSON editor to define the form schema and a form preview section to visualize the generated form. It also supports dark mode for better user experience and customization.

## Features

- **Dynamic Form Generation**: Allows you to define a form using a JSON schema.
- **JSON Editor**: Edit the form schema directly in the app with real-time updates.
- **Form Preview**: Preview the form generated from the schema.
- **Form Submission**: Users can submit the form, and the submission data is stored.
- **Download Submissions**: After submitting, users can download all form submissions as a JSON file.
- **Dark Mode**: Toggle between light and dark mode for improved accessibility.

## Technologies Used

- **React**
- **Tailwind CSS**
- **React Hook Form**

## Deployment
- **Vercel Link**: https://dynamic-form-app-theta.vercel.app/

## Installation

1. clone the repository:
 ```bash
git clone https://github.com/Ashusn/Dynamic-form-app.git
cd my-form-app
```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the server
   ```bash
   npm run start
   ```
4. Paste the JSON Schema
```bash
{

  "formTitle": "Project Requirements Survey",

  "formDescription": "Please fill out this survey about your project needs",

  "fields": [

    {

      "id": "name",

      "type": "text",

      "label": "Full Name",

      "required": true,

      "placeholder": "Enter your full name"

    },

    {

      "id": "email",

      "type": "email",

      "label": "Email Address",

      "required": true,

      "placeholder": "you@example.com",

      "validation": {

        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",

        "message": "Please enter a valid email address"

      }

    },

    {

      "id": "companySize",

      "type": "select",

      "label": "Company Size",

      "required": true,

      "options": [

        { "value": "1-50", "label": "1-50 employees" },

        { "value": "51-200", "label": "51-200 employees" },

        { "value": "201-1000", "label": "201-1000 employees" },

        { "value": "1000+", "label": "1000+ employees" }

      ]

    },

    {

      "id": "industry",

      "type": "radio",

      "label": "Industry",

      "required": true,

      "options": [

        { "value": "tech", "label": "Technology" },

        { "value": "healthcare", "label": "Healthcare" },

        { "value": "finance", "label": "Finance" },

        { "value": "retail", "label": "Retail" },

        { "value": "other", "label": "Other" }

      ]

    },

    {

      "id": "timeline",

      "type": "select",

      "label": "Project Timeline",

      "required": true,

      "options": [

        { "value": "immediate", "label": "Immediate (within 1 month)" },

        { "value": "short", "label": "Short-term (1-3 months)" },

        { "value": "medium", "label": "Medium-term (3-6 months)" },

        { "value": "long", "label": "Long-term (6+ months)" }

      ]

    },

    {

      "id": "comments",

      "type": "textarea",

      "label": "Additional Comments",

      "required": false,

      "placeholder": "Any other details you'd like to share..."

    }

  ]

}
```

5. Light mode 

![image](https://github.com/user-attachments/assets/2970310d-85c3-4072-a609-dbc7b196a9fc)

6. Dark Mode

![image](https://github.com/user-attachments/assets/81b6e092-e8c6-42f5-bb80-337a587e58ad)

7. Form Generated using json schema

![image](https://github.com/user-attachments/assets/29565284-b851-4970-94f2-50f095e5a022)

8. Download the form submissions

![image](https://github.com/user-attachments/assets/6d111758-5719-4f62-b778-f24f065ecc5d)
