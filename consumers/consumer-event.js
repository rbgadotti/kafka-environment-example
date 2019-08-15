const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kee-consumer-event',
  brokers: ['localhost:29092']
});

const consumer = kafka.consumer({ groupId: 'event-consumer' });

const run = async () => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ 
    topic: 'event',
    // fromBeginning: true
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(message.value.toString());
    },
  })

}

run().catch(console.error)