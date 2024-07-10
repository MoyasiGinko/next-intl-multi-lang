# Next.js Multi-Language Template with next-intl

This repository provides a template for creating a multi-language Next.js application using next-intl. This template allows for easy switching between languages and ensures that the selected language persists across different pages and sessions.

### Features

- **Multi-language support:** Easily switch between multiple languages (English and Arabic) using next-intl.

- **Language persistence:** The selected language is saved in local storage and will be persisted across sessions.

- **Context API:** Utilizes React Context API to manage and provide the active language state throughout the application.

- **Dynamic routing:** Automatically updates routes based on the selected language.

- **Modular design:** Easy to add new languages and extend functionality.

### Installation

**Clone the repository:**

```bash

git clone https://github.com/MoyasiGinko/next-intl-multi-lang.git

cd next-intl-multi-lang
cd client
```

**Install dependencies:**

```bash
npm install
```

**Or**

```bash
yarn install
```

**Run the development server:**

```bash
npm run dev
```

# or

```bash
yarn dev
```

Open **_http://localhost:3000_** with your browser to see the result.

### Usage

**Adding a New Language**

- Create a JSON file in the `public/locales` directory for your new language (e.g., `fr.json` for French).

- Update `i18n.js` to include your new language in the list of supported locales:

`javascript`

```bash
const locales = ["en", "ar", "fr"];
```

- Update `middleware.js` to include your new language:

`javascript`

```bash
export default createMiddleware({
locales: ["en", "ar", "fr"],
defaultLocale: "en",
});
```

- Update your components to support the new language by adding the necessary translations in the corresponding JSON files.

**Changing Language in the App**

The `LocalSwitcher` component allows users to switch between available languages. The active language is managed via the `LanguageProvider` context and is persisted in local storage.

### Project Structure

`/public/locales`: Contains the translation JSON files for each language.

### Support

A huge thanks to the person who guided me to build this. Please support if this was helpful.

### _Thank you_
