# Pixel Builder Kafka

This repository hosts tools to run Kafka for local development.

Kafka is a distributed event store and stream-processing platform. It will be the sole service of our backend for Pixel Builder MVP.

## NPM Commands

- `npm run kafka` runs all Kafka services defined in docker-compose.yml
- `npm run kafka:clean` deletes all containers and data from Kafka services defined in docker-compose.yml
- `npm run producer` example of KafkaJS producing stream messages (input from command-line)
- `npm run consumer` example of KafkaJS consuming stream messages

## Kafka UI

To view and manage Kafka clusters, visit http://localhost:8083 once all services are started.

## Kafka RESTful API

A Kafka REST API service is provided at http://localhost:8082. There are Postman Collection JSON files with sample requests for a Pixel Builder gameplay. Feel free to import those JSON files into Postman and play around.

## KafkaJS

We would be using this Node library to stream messages to and from the Pixel Builder client. It provides real-time streaming operations that the RESTful API does not offer.

It also has an admin functions that can be used for cluster operations such as creating topics and partitions.

Security is not particularly important with MVP release, so directly connecting to Kafka from client-side is not an issue yet.

To play around with it:

1. `npm run producer` to start the stream producer - which recursively asks you for messages to send from command line
2. `npm run consumer` to start the stream consumer - which will read out any messages sent from producer

## Relevant Articles and Resources

- [How to stream Kafka messages to Internet-facing clients over WebSockets](https://ably.com/topic/websockets-kafka)
- [We were wrong about HTTP & WebSockets — here’s what we learned](https://medium.com/soluto-engineering/we-were-wrong-about-http-websockets-heres-what-we-learned-9c18a0496a20)
- [Websockets are largely obsolete because nowadays, if you create a HTTP/2 fetch request,...](https://news.ycombinator.com/item?id=19014117)
