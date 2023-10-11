'use server'
import { MongoClient } from "mongodb";
import { UUID } from "mongodb";
const client = new MongoClient(process.env.MONGO_URI, {
    pkFactory: { createPk: () => new UUID().toBinary() }
})

export async function submitContactFormAction(formObj) {
    const db = client.db('messages')
    const coll = db.collection('messages')
    const completeFormObj = {
      ...formObj,
      date: Date.now()  
    }

    const result = await coll.insertOne(completeFormObj)


    console.log(`A document was inserted with id ${result.insertedId}`);
}