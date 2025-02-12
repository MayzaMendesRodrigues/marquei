# Marquei App

## Overview

This application allows clients to book appointments for aesthetic services, choosing between available services and choosing to perform them at home or in the office.

![image](https://github.com/user-attachments/assets/4d4e96a3-4e35-435e-b3bb-527d56d9260c)

## Main Features
- **Registration and Login:** Customers can create an account and log in to the app.

- **Service Exploration:** List of available aesthetic services with details such as name, description, price and duration.

- **Shift Scheduling:** Clients can choose the date, time and location (at home or in the office) for the service.

- **Shift Management:** Viewing, canceling and rescheduling scheduled shifts.

- **Notifications:** Reminders for scheduled shifts.

## Technologies Used

- **Mobile:** React Native
- **Expo:** application test
- **API:** https://github.com/MayzaMendesRodrigues/marqueiAPI

## Flowchart
 - **APP flow:** https://miro.com/app/board/uXjVLgY4gmQ=/
## Installation and Configuration

Prerequisites:

- Node.js installed

- Package manager (npm or yarn)

## Project Structure

- **components/**: Reusable components.
- **screens/**: Application pages.
- **services/**: API calls.
- **App.js**: Application entry point.

## How to Execute

- Clone the API repository

The application depends on an API to function. Clone and configure the API repository before starting the project:

```bash
 # Clone the API repository
git clone  https://github.com/MayzaMendesRodrigues/marqueiAPI

# Install dependencies
npm install # or yarn install

# Start the server
dev: npm run dev # or yarn dev
```

- Clone the application repository

After configuring the API, clone the application repository:

```bash
 # Clone the API repository
git clone  https://github.com/MayzaMendesRodrigues/marquei

# Install dependencies
npm install # or yarn install

# Start the server
dev: npm run dev # or yarn dev
```

## Run on device
- If you are testing on your cell phone, install the Expo Go app (available for Android and iOS) and scan the QR Code that appears on the terminal.
- If running on the emulator, make sure Android Studio or Xcode (for iOS) is configured correctly.

