# Collaborative-Online-Judge-System

    • Implemented a web-based collaborative code editor which supports multiple user editing simultaneously (ACE, Socket.io, Redis);

    • Designed and developed a single-page web application for coding problems (Angular2, Auth0, Node.js, MongoDB);

    • Built a user-code executor service which can build and execute user’s code (Docker, Flask);

    • Refactored and Improved system throughput by decoupling services using RESTful API and loading balancing by Nginx (REST API, Nginx).



## Development environment
- **AngularJS** is a JavaScript-based open-source front-end web application framework to develop **single-page applications**.
- **Angular CLI** is a command line interface for Angular. We use commands such as **"ng generate"**, **"ng serve"** and so on.
- **Bootstrap** contains HTML- and CSS-based design templates for typography, forms, buttons, **navigation** and other interface components, as well as optional JavaScript extensions.
- **Express** is a node.js web framework with **routing** and **middleware**. It helps us to build node.js server.
- **Nodemon** monitors for any changes in your source and automatically restart your server.
- We need **body-parser** to parse t JSON format request body.
- **Mongoose** is a JavaScript framework that is commonly used in a Node.js application to connect to **MongoDB** database.
- **MongoDB** let us store all the problems.
- **RxJS** is a set of libraries to compose asynchronous and event-based programs using **observable** collections  in JavaScript.
- **HttpClientModule** let **client** fetch the problem from **server** through API call.
- **Ace** is an embeddable code editor written in JavaScript.
- **socketIO** is to connect the server and the client and synchronous the content on the editor to all clients who are editing the same problem.
- **restoreBuffer** is emitted when user enters a collaboration session, and this event asks server to send back all the cached instructions for the current session.
- **redis** is cache to save current data in a collaboration session.
- **Flask** Flask is a micro web framework written in Python, we use Flask to compile and execute code in **Docker**.
- **Docker** is a container which we compile and execute code in.
- **body-parse** is to parse the request body from client to server which is JSON format.
- **HttpClientModule** let client fetch the problem from server through API call.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Install Redis

```
wget http://download.redis.io/releases/redis-3.2.6.tar.gz
tar xzf redis-3.2.6.tar.gz
cd redis-3.2.6
make
sudo make install
cd utils
sudo ./install_server.sh
```
Install Docker

```
curl -fsSL https://get.docker.com/ | sh
sudo usermod -aG docker $(whoami)
sudo systemctl enable docker
```
### Installing



After install, restart Redis

```
sudo service redis_6379 restart
```


## Authors

* **Haosen Wang** - [hxw5204](https://github.com/hxw5204)



