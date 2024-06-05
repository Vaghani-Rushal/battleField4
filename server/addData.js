const { MongoClient } = require('mongodb');
const dataToInsert = require("./assets/data/data"); 

async function connectToDatabase() {
  const client = new MongoClient('mongodb://127.0.0.1:27017/battlefield', { useNewUrlParser: true, useUnifiedTopology: true });
  try {
    await client.connect();
    console.log('Connected to the database');
    await insertData(client, dataToInsert);
  } finally {
    await client.close();
    console.log('Disconnected from the database');
  }
}

async function insertData(client, data) {
  const database = client.db();
  const collection = database.collection('lists');

  const result = await collection.insertMany(data);
  console.log(`${result.insertedCount} documents inserted into systemDatas`);
}

connectToDatabase();
