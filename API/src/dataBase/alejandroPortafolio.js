// // const { DB_PASSWORD } = process.env ;


// // console.log(DB_PASSWORD);
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://dapatinoa:7Ts7HUq8x66rTy9N@cluster0.ybbsqwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // const uri = `mongodb+srv://dapatinoa:${DB_PASSWORD}N@cluster0.ybbsqwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {   
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);





