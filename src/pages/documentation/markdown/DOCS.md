## Project Description

The "atmo-sense-backend" project is a backend application developed using the [Nest.js](https://github.com/nestjs/nest) framework. This application is designed for interacting with the frontend, working with a database, and connecting to sensors on Raspberry Pi.

## Project Features

- RESTful API for interacting with the frontend.
- Use of a chosen database (e.g., PostgreSQL, MongoDB, MySQL) for storing application data.
- Connection and interaction with sensors on Raspberry Pi for data collection.
- Easily extensible application architecture thanks to Nest.js.

## Requirements

Before getting started, you need to have the following components installed:

- [Node.js](https://nodejs.org/en) (LTS version is recommended)
- [npm](https://www.npmjs.com/) (installed together with Node.js)
- [Nest.js](https://nestjs.com/)
- [InfluxDB](https://www.influxdata.com/)
- Raspberry Pi

## Installation

Clone the repository:

```bash
$ git clone https://github.com/DAWN-LV/atmo-sense-backend.git
$ cd your-project
```

Install dependencies:

```bash
$ npm install
```

## Configuration

Create a .env file in the project's root directory and specify the necessary settings such as database parameters and Raspberry Pi connection settings.

Example .env file:

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

## Running

Start the backend server with the following command:

```bash
$ npm run start
```

By default, the server will run on port 3000.

## Our Projects

- [Frontend](https://github.com/DAWN-LV/aqm-frontend)
- [Raspberry pi client](https://github.com/PepeWarrior69/aqm-sensor-client)

## Our Team
- Aleksandrs Babulis
- Vitalijs Pankovs
- Karina Jodzevica
- Aleksejs Ivanovs
- Anastasija Baranovska
- Glebs Poznaks
  
## Contact
If you have any questions or suggestions, feel free to reach out to us:

- Email: vitalijs.pankovs@gmail.com
- GitHub Profile: [GitHub](https://github.com/DAWN-LV)