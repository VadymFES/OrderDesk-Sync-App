// Import the necessary packages
const axios = require('axios');
const cron = require('node-cron');
require('dotenv').config(); // Load environment variables from .env file

// Get the Order Desk store ID and API key from environment variables
const { ORDERDESK_STORE_ID, ORDERDESK_API_KEY } = process.env;

// Define a function to get Order Desk orders
const getOrderDeskOrders = async () => {
  // Use Axios to make a GET request to the Order Desk API
  const { data } = await axios.get(
    `https://app.orderdesk.me/api/v2/orders`,
    {
      headers: {
        'ORDERDESK-STORE-ID': ORDERDESK_STORE_ID,
        'ORDERDESK-API-KEY': ORDERDESK_API_KEY,
      },
    }
  );
  return data; // Return the response data
};

// Define a function to sync orders
const syncOrders = async () => {
  try {
    // Call the getOrderDeskOrders function to get the orders
    const response = await getOrderDeskOrders();
    const orders = response.orders; // Extract the orders from the response

    // Iterate over the orders and log the order ID and shipping address
    orders.forEach((order) => {
      console.log(`Order ID: ${order.id}`);
      console.log(
        `Shipping Address: ${
          order.shipping.address1 ? order.shipping.address1 + ', ' : ''
        }${order.shipping.address2 ? order.shipping.address2 + ', ' : ''}`.replace(
          /,\s*$/,
          ''
        )
      );
    });
  } catch (error) {
    console.error('Error fetching orders:', error.message); // Log any errors
  }
};

// Schedule the syncOrders function to run every hour
cron.schedule('0 * * * *', syncOrders);
