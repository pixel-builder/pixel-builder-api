import readline from 'readline';
import { Kafka } from 'kafkajs';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

const producer = kafka.producer({
  allowAutoTopicCreation: true,
});

const readLineRecursive = () => {
  rl.question('What message to send to consumer?', async (answer) => {
    await producer.send({
      topic: 'pixel-game-battle-1',
      messages: [{ partition: 0, value: answer }],
    });
    readLineRecursive();
  });
};

const run = async () => {
  // Producing
  await producer.connect();
  readLineRecursive();
};

run().catch(console.error);
