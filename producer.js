const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'kee-producer',
  brokers: ['localhost:29092']
});

const producer = kafka.producer();

const topicNames = [
  'heartbeat',
  'security',
  'event'
];

// const run = async () => {

//   const randomTopic = topicNames[Math.floor(Math.random() * 3)];
//   const messageToSend = JSON.stringify({
//     title: `JSON example for topic ${randomTopic}`,
//     random_content: Math.floor(Math.random() * 10000)
//   });

//   console.log(`Topic name: ${randomTopic}`);
//   console.log(`Message: ${messageToSend}`);

//   await producer.connect()
//   await producer.send({
//     topic: randomTopic,
//     messages: [
//       { value: messageToSend }
//     ]
//   });

//   console.log("Message has been sent.");

//   process.exit();

// }

const run = () => {

  setInterval(async () => {

    const randomTopic = topicNames[Math.floor(Math.random() * 3)];
    const messageToSend = JSON.stringify({
      title: `JSON example for topic ${randomTopic}`,
      random_content: Math.floor(Math.random() * 10000)
    });

    console.log(`Topic name: ${randomTopic}`);
    console.log(`Message: ${messageToSend}`);

    await producer.connect()
    await producer.send({
      topic: randomTopic,
      messages: [
        { value: messageToSend }
      ]
    });

    console.log("Message has been sent.");

  }, 100);

}

run();
// run().catch(console.error);