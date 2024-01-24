import mongoose from 'mongoose';

const Connection = async (username = 'shri', password = 'Shri123') => {
  const dbName = 'collabdox'; // Replace with your actual database name
  const URL = `mongodb+srv://${username}:${password}@collabdox.ioy8n0j.mongodb.net/${dbName}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error while connecting to MongoDB:', error.message);
  }
};

export default Connection;

