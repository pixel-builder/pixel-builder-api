import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'consumer2' });

const run = async () => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({
    topic: 'pixel-game-battle-1',
    fromBeginning: true,
  });

  consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message?.value?.toString(),
      });
    },
  });
  consumer.seek({ topic: 'pixel-game-battle-1', offset: '0', partition: 0 });
};

run().catch(console.error);
