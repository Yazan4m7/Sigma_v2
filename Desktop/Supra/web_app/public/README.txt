# Task Monitoring Application

## Overview
This application is designed to serve as a task monitoring system for employees in a healthcare setting. It provides a visual interface to track appointments, orders, and deliveries, making it suitable for display on large screens, such as smart TVs.

## Purpose
The main purpose of this application is to provide real-time updates on the status of various tasks related to patient care. It allows healthcare professionals to quickly assess the current state of appointments, orders, and deliveries, ensuring efficient workflow management.

## Features
1. **Appointments Section**: 
   - Displays a list of appointments with the doctor's name and the creator of the appointment.
   - Each appointment is presented in a visually distinct card format for easy readability.

2. **Orders Section**: 
   - Shows orders with details including the doctor's name, patient's name, and the current status of the order.
   - Statuses are color-coded for quick identification:
     - **Waiting**: Red background
     - **In Progress**: Blue background with the name of the employee handling the order
     - **Completed**: Green background

3. **Deliveries Section**: 
   - Lists deliveries with the doctor's name, patient's name, and the scheduled delivery date.
   - Each delivery is also presented in a card format for clarity.

## File Structure
- **monitor.html**: The main HTML file that contains the structure and styling for the task monitoring interface.
- **dataHandler.js**: A JavaScript module that manages the data for appointments, orders, and deliveries. It provides methods to add, retrieve, and clear data.

## Usage
- The application is intended to be run in a web browser and can be displayed on large screens for easy visibility.
- Data can be dynamically updated through the `dataHandler` module, allowing for real-time tracking of tasks.

## Future Enhancements
- Consider implementing a backend service to persist data and allow for multi-user access.
- Add filtering and sorting capabilities to enhance user experience.
- Implement notifications for changes in order status or new appointments.

This README serves as a memory for the application's purpose, structure, and future directions.
