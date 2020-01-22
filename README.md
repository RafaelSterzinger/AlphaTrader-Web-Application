This project is a complementary web-application to the Applied-Deep-Learning project.

![Demo of the application](https://github.com/RafaelSterzinger/ADL-Application/blob/master/demo.png)

In this app you can visualise financial data from YahooFinance and view the taken actions of the model for the specific dataset.
You will also start with a balance of € 1000,- which will update accordingly.

To start the web-application run the following commands in your directory:

### `npm install`

### `npm start`

To start the web-application with docker, run the following command in your directory:

### `sudo docker-compose up -d`

Afterwards the website will be hosted at **localhost:3000**.

To use the trained model to predict your stock data, execute the [**server.py**](https://github.com/RafaelSterzinger/Applied-Deep-Learning) file from the Applied-Deep-Learning project to start the backend.

