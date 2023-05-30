# Bitpaywall-client

### Description
The bitpaywall project is a news platform that allows people to read articles after they have paid for some sats. 
It brings into play the concept of a paywall where a user will have to make a payment through lightning to gain access to a valued commodity.  
 
This client app interacts with the server of the application [paywall-server](https://github.com/IgboPharaoh/paywall-server.git) to get responses from the lightning node and also interacts with the user, with a simple interface.


### Setup
- Clone the repository ```git clone https://github.com/IgboPharaoh/bitpaywall-client.git```

- In the home directory run ``npm install`` to install necessary dependencies

- Once all the dependencies have been installed, create a .env file in the root of the project that contains all the configuration parameters

  - API_PATH=http://localhost:3001/api'

  - SOCKET_API_PATH='http://localhost:3001'

You can also manually configure paths according to choice

- When all preliminary steps have been completed, in the terminal of bitpaywall-server run ``npm run dev``


If your application is appropriately connected, you'll be directed to the home page of the application


### Technologies used
- Typescript
- Nextjs
- Socker IO

<img width="1680" alt="Screenshot 2023-05-30 at 11 10 29" src="https://github.com/IgboPharaoh/bitpaywall-client/assets/87058633/9097ed53-680d-440c-88ab-66a5439f229e">

![Screenshot 2023-05-30 at 13 48 38 (2)](https://github.com/IgboPharaoh/bitpaywall-client/assets/87058633/ee1fb4c1-356a-43c5-8699-e9fe14bbde0f)
