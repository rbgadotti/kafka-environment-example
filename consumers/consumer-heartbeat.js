const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kee-consumer-heartbeat',
  brokers: ['localhost:29092']
});

const consumer = kafka.consumer({ groupId: 'heartbeat-consumer' });

const run = async () => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ 
    topic: 'heartbeat',
    // fromBeginning: true
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(message.value.toString());
    },
  })

}

run().catch(console.error)