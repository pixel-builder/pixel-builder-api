# Pixel Builder Kafka

This repository hosts tools to run Kafka for local development.

Kafka is a distributed event store and stream-processing platform. It will be the sole service of our backend for Pixel Builder MVP.

## NPM Commands

- `npm start` runs all Kafka services defined in docker-compose.yml
- `npm run clean` deletes all data from Kafka services defined in docker-compose.yml

## Kafka UI

To view and manage Kafka clusters, visit http://localhost:8083 once all services are started.

## Kafka REST API

A Kafka REST API service is provided at http://localhost:8082. There are Postman Collection JSON files with sample requests for a Pixel Builder gameplay. Feel free to import those JSON files into Postman and play around.

This may not be used in the implementation as REST APIs are static and requires polling, but it may be good for MVP. Using some sort of reliable streaming methods are preferred. Kafka Connect? Web sockets? Ably? Others?

This might be a very good way to populate data for development though.
