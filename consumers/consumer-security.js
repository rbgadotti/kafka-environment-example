const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kee-consumer-security',
  brokers: ['localhost:29092']
});

const consumer = kafka.consumer({ groupId: 'security-consumer' });

const run = async () => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ 
    topic: 'security',
    // fromBeginning: true
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(message.value.toString());
    },
  })

}

run().catch(console.error)