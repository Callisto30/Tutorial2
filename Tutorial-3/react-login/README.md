# Registration Page

This README provides information about the Registration Page project.

## Table of Contents

- [Project Description](#project-description)
- [Installation](#installation)
- [Usage](#usage)
- [Validation Checks](#validation-checks)
- [Dependencies](#dependencies)


## Project Description

The Registration Page is a React application that allows users to register by providing their first name, last name, email address, password, and confirming the password. It includes validation checks to ensure that the entered information is valid before submitting the registration form.

## Installation

To run the Registration Page project locally, follow these steps:

1. Clone the repository:

```
git clone 
```

2. Navigate to the project directory:

```
cd registration-page
```

3. Install the dependencies:

```
npm install
```

## Usage

To start the Registration Page application, use the following command:

```
npm start
```

The application will be running at `http://localhost:3000`. Open this URL in your web browser to access the registration page.

## Validation Checks

The Registration Page includes the following validation checks for the registration form:

- All fields are required. If any field is left empty, an error message is displayed.
- The first name and last name fields should only contain letters. If a user enters any other character, an error message is displayed.
- The email field requires a valid email address format. If an invalid format is entered, an error message is displayed.
- The password should be at least 8 characters long. If a shorter password is entered, an error message is displayed.
- The confirm password field should match the password field. If the passwords do not match, an error message is displayed.

## Dependencies

The Registration Page project uses the following dependencies:

- React
- React Router DOM

For detailed information about the versions and usage of these dependencies, please refer to the `package.json` file.

