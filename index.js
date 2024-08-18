const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;
const corsOptions = {
  origin: [
    "*",
    "http://localhost:5173",
    "http://localhost:5174",
  ],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());





const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iu3pv7s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection

    const userCollection = client.db("Ecommerce").collection("users");

    const productsCollection = client.db("Ecommerce").collection("products");
    




    // save the  user on db
    app.post("/users", async (req, res) => {
        const user = req.body;
        // insert email if user doesn't exist
        // you can do this many ways (1. email unique, 2. upsert
        // 3. simple checking
  
        const query = { email: user.email };
        const existingUser = await userCollection.findOne(query);
        if (existingUser) {
          return res.send({ message: "user already exists", insertedId: null });
        }
        const result = await userCollection.insertOne(user);
        res.send(result);
      });

      // get all the prducts data from db
      // app.get("/products", async (req, res) => {
      //   const products = await productsCollection.find().toArray();
      //   res.send(products);
      // });

      app.get("/products", async (req, res) => {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 12;
        const skip = (page - 1) * limit;
  
        try {
          const totalProducts = await productsCollection.countDocuments();
          const totalPages = Math.ceil(totalProducts / limit);
  
          const products = await productsCollection.find()
            .skip(skip)
            .limit(limit)
            .toArray();
  
          res.json({
            products,
            totalPages
          });
        } catch (error) {
          console.error("Error fetching products:", error);
          res.status(500).json({ error: "Internal Server Error" });
        }
      });
  






    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
    res.send("Ecommerece Server is running ");
  });
  
  app.listen(port, () => {
    console.log(`Ecommerce Server is sitting on port ${port}`);
  });
  