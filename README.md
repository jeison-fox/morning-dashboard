# Morning Dashboard

A personalized dashboard to start your day with the information that matters most to you, including the weather forecast and an inspiring quote.

## Table of Contents

- [Morning Dashboard](#morning-dashboard)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Setup](#setup)
  - [Running the Project](#running-the-project)
  - [Running Tests](#running-tests)
  - [Code Quality](#code-quality)
    - [Linting and Formatting](#linting-and-formatting)
    - [Pre-commit Hooks](#pre-commit-hooks)

## Requirements

- [Node.js](https://nodejs.org/) (v20 or newer recommended)
- [npm](https://www.npmjs.com/) or a compatible package manager

## Setup

1.  **Clone the repository:**

    ```bash
    git clone [git@github.com:jeison-fox/morning-dashboard.git](https://github.com/jeison-fox/morning-dashboard.git)
    cd morning-dashboard
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a file named `.env.local` in the root of the project and add the following variables:

    ```bash
    API_KEY=your_secret_api_key
    DEFAULT_LATITUDE=34.0522
    DEFAULT_LONGITUDE=-118.2437
    DEFAULT_CITY="Los Angeles"
    DEFAULT_REGION="CA"
    DEFAULT_COUNTRY="US"
    ```

    > **Note on Environment Variables:**
    >
    > -   `API_KEY`: This is a secret key you create to protect the `/api/geo` endpoint. It ensures that only authorized requests can access the geolocation data.
    > -   `DEFAULT_*` variables: These provide a fallback location for the weather forecast. They are used when the application is running in an environment where Vercel's automatic geolocation is not available (e.g., your local machine).

## Running the Project

To run the development server, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the dashboard.

## Running Tests

To run the automated tests for the project, use the following command:

```bash
npm run test
```

## Code Quality

This project uses several tools to ensure code quality and consistency.

### Linting and Formatting

-   **Linting:** `eslint` is used to identify and report on patterns in the code. To run the linter, use:
    ```bash
    npm run lint
    ```
-   **Formatting:** `prettier` is used to automatically format the code. To format all files, use:
    ```bash
    npm run format
    ```

### Pre-commit Hooks

This project uses `husky` and `lint-staged` to automatically lint and format your code before you commit your changes. This ensures that only high-quality code that adheres to the project's style guide is committed to the repository.
