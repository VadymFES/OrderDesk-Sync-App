# OrderDesk-Sync-App

This is a Node.js project that integrates with the Order Desk API to retrieve orders and sync them with another system.

# Getting Started

## Prerequisites

* Node.js 
* npm 
* An Order Desk account and API key

## Dependencies

* **Axios**: A promise-based HTTP client for Node.js.
* **Cron**: A node.js package that allows you to schedule tasks to run at specified intervals.
* **Dotenv**: A zero-dependency module that loads environment variables from a .env file into process.env.

## Installing

1. Clone the repository
`git clone https://github.com/your-username/your-repository.git`
2. Install dependencies

    `cd your-repository`

    `npm install`

3. Set up environment variables
Create a `.env` file in the root directory of the project and add the following variables:
`ORDERDESK_STORE_ID=your-store-id`
`ORDERDESK_API_KEY=your-api-key`

Replace your-store-id and your-api-key with your Order Desk store ID and API key, respectively.
