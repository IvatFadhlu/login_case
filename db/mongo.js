// class mongoDatabase {
//   constructor() {
//     this.client = null;
//     this.db = null;
//   }

//   async connect() {
//     try {
      // const uri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@belajar-mongo.9oqymqj.mongodb.net/?retryWrites=true&w=majority`;
//       const uri =
//         "mongodb+srv://pusibateam:UwBUv7xKfjmbcagp@cluster0.ryzusdl.mongodb.net/?retryWrites=true&w=majority";

//       const options = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         serverSelectionTimeoutMS: 5000,
//       };

//       this.client = new MongoClient(uri, options);

//       await this.client.connect();
//       this.db = this.client.db("my-server").collection("user");

//       console.log("Successfully connected to MongoDB!");
//     } catch (error) {
//       console.error("Failed to connect to MongoDB:", error);
//       throw error;
//     }
//   }

//   async disconnect() {
//     try {
//       await this.client.close();
//       console.log("Disconnected from MongoDB.");
//     } catch (error) {
//       console.error("Failed to disconnect from MongoDB:", error);
//       throw error;
//     }
//   }
// }

//working on
const { MongoClient, ServerApiVersion } = require("mongodb");

class mongoDatabase {
  constructor() {
    this.db = null;
    this.#run();
  }

  #run = async function () {
    const uri = "mongodb+srv://belajarmongodb01:xMFqEizljs25UFuh@belajar-mongo.9oqymqj.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("my-server").command({ ping: 1 });
      console.log(
        "Pinged your deployment. You successfully connected to MongoDB!"
      );
      this.db = client.db("my-server").collection("user");
    } catch(error) {
      // Ensures that the client will close when you finish/error
      console.log(error)
    }
  }
}

const mongoDb = new mongoDatabase();
module.exports = mongoDb;
