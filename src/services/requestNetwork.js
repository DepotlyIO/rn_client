import { RequestNetwork } from '@requestnetwork/request-client.js';

// Initialize Request Network Client
const requestNetwork = new RequestNetwork({
  httpConfig: {
    nodeUrl: 'https://gateway.request.network/', // You can replace this with another network URL if needed
  },
});

/**
 * Create a payment request on Request Network
 * @param {string} payerAddress - Address of the payer
 * @param {string} currency - Currency type (ETH, USDT, etc.)
 * @param {number} amount - Amount to be paid
 * @param {string} recipientAddress - Address of the payee (freelancer)
 * @returns {object} The created payment request object
 */
export const createPaymentRequest = async (payerAddress, currency, amount, recipientAddress) => {
  try {
    const requestParameters = {
      currency: {
        type: currency, // Currency type like 'ETH', 'ERC20', etc.
      },
      expectedAmount: amount.toString(),
      payer: payerAddress,
      payee: recipientAddress,
    };

    // Create the payment request on Request Network
    const request = await requestNetwork.createRequest(requestParameters);
    return request;
  } catch (error) {
    console.error('Error creating payment request:', error);
    throw error;
  }
};

/**
 * Fetch all payment requests by address (payer or payee)
 * @param {string} address - Address to fetch requests for
 * @returns {Array} An array of payment requests
 */
export const getPaymentRequests = async (address) => {
  try {
    // Fetch the requests for the given address
    const requests = await requestNetwork.getRequestsByTopic(address);
    return requests;
  } catch (error) {
    console.error('Error fetching payment requests:', error);
    throw error;
  }
};

/**
 * Pay a payment request on the Request Network
 * @param {string} requestId - ID of the payment request
 * @param {string} payerAddress - Address of the payer
 * @param {number} amount - Amount to be paid
 * @returns {object} The result of the payment operation
 */
export const payPaymentRequest = async (requestId, payerAddress, amount) => {
  try {
    const paymentInfo = {
      requestId,
      amount,
      payer: payerAddress,
    };

    // Pay the payment request
    const paymentResult = await requestNetwork.pay(paymentInfo);
    return paymentResult;
  } catch (error) {
    console.error('Error paying payment request:', error);
    throw error;
  }
};

/**
 * Get details of a specific payment request by its ID
 * @param {string} requestId - ID of the payment request
 * @returns {object} The detailed information of the payment request
 */
export const getPaymentRequestDetails = async (requestId) => {
  try {
    // Fetch payment request details by request ID
    const requestDetails = await requestNetwork.getRequestFromId(requestId);
    return requestDetails;
  } catch (error) {
    console.error('Error fetching payment request details:', error);
    throw error;
  }
};
