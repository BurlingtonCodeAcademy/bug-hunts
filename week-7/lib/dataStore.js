'use strict';

const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId

class DataStore {
  constructor(dbURL, dbName, dbCollection) {
    this.dbURL = dbURL;
    this.dbName = dbName;
    this.dbCollection = dbCollection
    this.dbClient = null
  }

  async client() {
    console.log('connecting to ' + this.dbURL)
    if(this.dbClient && this.dbClient.isConnected()){
      return this.dbClient
    } else {
      this.dbClient = await MongoClient.connect(this.dbURL, {useUnifiedTopology: true})
      console.log('connected to database')
      return this.dbClient
    }
  }

  async collection() {
    const client = await this.client()
    const db = client.db(this.dbName)
    const collection = db.collection(this.dbCollection)

    return collection
  }

  // Searchable subsets, allow the user to enter key: value pairs to get back subsets of data

  async searchField(field, value) {
    let collection = await this.collection()
    
    return collection.find({[field] : value})
  }

  async getAll() {
    let collection = await this.collection()

    return collection.find({})
  }

  async getOne(id) {
    let idObj = new ObjectId(id)

    let collection = await this.collection()

    return collection.find({_id: idObj})
  }

  async setDoc(myObj) {
    let collection = await this.collection()
    let result = await collection.insertOne(myObj)

    console.log(`Inserted with ID: ${result.insertedId}`)
  }

  async setMany(objArr) {
    let collection = await this.collection()

    await collection.insertMany(objArr)

    console.log(`Inserted ${objArr.length} items.`)
  }

  async updateDoc(id, update) {
    let collection = await this.collection()
    let idObj = new ObjectId(id)

    await collection.updateOne({_id: idObj}, {$set: update})

    console.log(`Updated document with ID: ${id}`)
  }

  async deleteDoc(id) {
    let collection = await this.collection()
    let idObj = new ObjectId(id)

    await collection.deleteOne({_id: idObj})

    console.log(`Deleted document with ID: ${id}`)
  }

    // Mass delete, delete many documents given multiple IDs
  async deleteMany(idArray) {
    let collection = await this.collection()

    let idObjArr = idArray.map((id) => {
      return new ObjectId(id)
    })

    collection.deleteMany({_id: {$in: idObjArr}})

    console.log('Deleted ' + idArray.length + ' documents.')
  }

}

module.exports = DataStore
