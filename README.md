# DEPOTLY Regular Crypto Payments inqlude Requst Network 
- resources:
  - [SOURCE.md](https://github.com/DepotlyIO/rn_client/blob/main/SOURCE.md)
  - [testnet](https://rn-client.depotly.dev)
  - [demo on youtube]
  - [presentations]
  - [team](https://github.com/DepotlyIO/rn_client/edit/main/README.md#team)
  - [documentation](https://github.com/DepotlyIO/rn_client/edit/main/README.md#interface-architecture-for-managing-regular-crypto-payments-to-freelancers)


## Team
- [@martastew](https://github.com/martastew) Maria Dovnar [marialtlife@gmail.com](mailto:marialtlife@gmail.com) [LinkedIn](https://www.linkedin.com/in/mariadovnar/) 0x411eb79AF0b08472699127FB2d96661feC401173
- [@setlol](https://github.com/dovnar) Maksim Dovnar [ceo@depotly.io](mailto:ceo@depotly.io) [LinkedIn](https://www.linkedin.com/in/getlol/) 0xAec96DEaA44041eFF8F07dB98BA0B695fde2374F



## Interface Architecture for Managing Regular Crypto Payments to Freelancers
-file structure:
```
src/
├── components/             
│   ├── Card.js               # Reusable card for displaying key data
│   ├── Table.js              # Table for displaying payments/contracts
│   ├── Button.js             # Custom button for interactions
│   ├── Modal.js              # Modal for contract creation or viewing
│   ├── Chart.js              # Chart component for graphical representation
│   └── Notification.js       # Notification for alerts and errors
├── pages/                  
│   ├── Dashboard.js          # Main dashboard
│   ├── Contracts.js          # Manage contracts
│   ├── Payments.js           # Track payments and issues
│   ├── CreateContract.js     # Create new contract
│   ├── Profile.js            # Company profile and wallet settings
│   └── Analytics.js          # Analyze expenses and generate reports
├── services/                
│   └── requestNetwork.js     # API services for Request Network
├── App.js                   # Main app component with routing
└── index.js                 # Entry point
```
#### 1. Dashboard
- Description: This is the main page that provides a summary of upcoming payments to freelancers, the status of previous payments, pending payments, and the company’s total expenditure on services. 
- Interface Elements:
  - General Statistics:
    - Total payments for the current month
    - Number of freelancers awaiting payment
    - Number of successfully completed payments
    - Amount of cryptocurrency available for payments (e.g., in USDT, ETH, etc.)
    - Number of pending payments: The number of payments that need to be made soon, with the amount and deadlines specified.
  - Charts and Graphs:
    - “Monthly Payments” chart (comparison of amounts in various cryptocurrencies, number of paid freelancers)
    - “Payment Status” chart (percentage of completed and pending payments)
  - Upcoming Payments:
    - List of freelancers who need to be paid soon, with the date of the next payment and the amount specified.
  - Notifications and Alerts:
    - Notifications about overdue payments that were not made on time.
    - Notifications about errors when sending funds (e.g., insufficient funds in the wallet or network failures).
    - Reminders to top up the cryptocurrency wallet before making the next payments.
#### 2. Contract Creation and Management Page
- Description: A page where companies can create contracts for freelancers, setting payment parameters (amount, frequency, cryptocurrency, and conditions), as well as manage them.
- Interface Elements:
  - Contract Creation Form:
    - Input fields:
      - Freelancer’s name
      - Email or cryptocurrency wallet address of the freelancer
      - Payment amount
      - Cryptocurrency (USDT, ETH, etc.)
      - Payment frequency (monthly, weekly, per project, etc.)
      - Contract conditions (e.g., project milestones)
      - Payment start date
      - Number of stages or payment period
    - Automation Settings:
      - Ability to set up automatic recurring payments under the contract.
      - Notification settings for the company and the freelancer (e.g., notification 3 days before the payment date).
    - Actions:
      - Buttons to edit the contract, pause payments, or terminate the contract.
#### 3. Payment Management
- Description: A page where the company can track all current and past payments, manage payments for different freelancers and in different cryptocurrencies.
- Interface Elements:
  - Payment Table:
    - Columns:
      - Freelancer’s name
      - Cryptocurrency wallet address
      - Payment amount
      - Cryptocurrency
      - Payment status (paid, in process, overdue, pending)
      - Date of last payment
      - Date of next payment
    - Filters and Sorting:
      - Filter by status (pending, paid, overdue).
      - Sort by freelancer, date, or cryptocurrency.
    - Actions:
      - Manual payment (e.g., if the automatic payment failed).
      - Sending a reminder to the freelancer about the upcoming payment or a request for confirmation of work completion.
      - Viewing the history of all transactions with the freelancer.
      - Insufficient funds notifications: If there are not enough funds in the cryptocurrency wallet to make upcoming payments, a warning is displayed with the option to top up the balance.
#### 4. Freelancer Detail Page
- Description: A separate page where you can see detailed information about a specific freelancer, including the history of all contracts, task completion status, and the history of all payments.
- Interface Elements:
    - Freelancer Information:
      - Name, cryptocurrency wallet address, contact details.
      - Current contracts, work status.
    - Payment History:
      - Detailed history of all transactions made for this freelancer.
      - Date, amount, cryptocurrency, payment status (successful, overdue, pending, failed).
    - Documents and Reports:
      - Field for adding reports, documents, or invoices from the freelancer.
      - Option to confirm work completion.
#### 5. Integration with Wallets and Crypto Exchanges
- Description: A page where the company can connect its cryptocurrency wallets and set up automatic payments.
- Interface Elements:
  - Wallet Connection:
    - Ability to connect multiple wallets (e.g., Metamask, Trust Wallet).
    - Default cryptocurrency selection for payments (USDT, DAI, ETH, etc.).
  - Balance Top-Up:
    - Wallet top-up function for payment automation.
    - Notification of insufficient funds in the wallet for upcoming payments.
  - Integration with Crypto Exchanges:
    - Connecting API of crypto exchanges for fund replenishment and automation of fund withdrawal for freelancer payments.
    - Low balance warning: If the wallet balance is too low to make all upcoming payments, the application will automatically notify the user and suggest topping up the balance.
#### 6. Analytics and Forecasts
- Description: A page with analytical data where companies can track expenses on freelancer payments, forecast future payments, and evaluate work efficiency.
- Interface Elements:
  - Expense Charts:
    - Chart showing monthly or weekly expenses on freelancer payments in various cryptocurrencies.
  - Future Expense Forecast:
    - Forecasted expenses based on current contracts with freelancers.
    - Cryptocurrency rate change assessment for more accurate budget planning.
  - Payment Report:
    - Generating a report on paid amounts for a selected period (broken down by freelancers or cryptocurrencies).
  - Upcoming Payments Forecast:
    - Budget modeling based on expected contracts and their frequency.
#### 7. Company Profile and Settings
- Description: A page where the company can set up its information, notification methods, and payment methods.
- Interface Elements:
  - Company Information:
    - Company name,
    - contact details,
    - wallet addresses.
  - Notification Settings: How the company wants to receive notifications (email, SMS, etc.) about payments, overdue payments, and insufficient funds in the wallet.
  - Payment Settings: Selection of the primary cryptocurrency for payments, setting up automatic transactions, notification threshold for insufficient funds.


## License

This project is licensed under the GNU General Public License version 3.0 (GPL v3.0).

### Key Points of GPL v3.0:
- **Freedom to Use**: You can use the software for any purpose.
- **Freedom to Study and Modify**: The source code is available, and you can study and modify it.
- **Freedom to Distribute Copies**: You can distribute copies of the software, both in its original and modified forms.
- **Freedom to Distribute Modified Versions**: You can distribute modified versions of the software, provided they are also licensed under GPL v3.0.

The full text of the license can be found [here](https://www.gnu.org/licenses/gpl-3.0.en.html).
