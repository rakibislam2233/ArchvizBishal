const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(cors());
app.use(express.json());
// MongoDB Connection
const uri = `mongodb+srv://bishal_protfolio:ukkNBvPTmAMeXP9v@cluster0.inzz8jh.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

//check for server connection
app.use("/", (req, res) => {
  res.send(`Welcome to my Server`);
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
