const express = require('express')
const app = express()
const path = require('path')

const DataStore = require('./lib/dataStore')

const public = path.resolve('./public')
let libraryDB = new DataStore("mongodb://localhost:27017", "test", "library")

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile( public+ '/index.html' )
})

//return all boks data
app.get('/books', showData)

//return a specific book's data
app.get('/books/:id', async (req, res) => {
  let id = req.params.id
  let data = showOne(id)
  res.send(data)
})

//edit a book
app.post('/books/:id', express.urlencoded(), (req, res) => {
  let id = req.params.id
  let data = req.body

  updateBook(id, data)
  res.redirect('/')
})

//add a new book
app.post('/books', express.urlencoded(), (req, res) => {
  let data = req.body

  console.log(data)

  addBook(data.title, data.author, parseInt(data.copies), data.instock === 'on' ? false : true)
  res.redirect('/')
})

//delete a book
app.get('/delete/:id', (req, res) => {
  let id = req.params.id

  removeBook(id)
  res.redirect('/')
})

async function showData(req, res) {
  let cursor = await libraryDB.getAll()
  let allDocs = []

  await cursor.forEach((entry) => {
    allDocs.push(entry)
  })

  res.send(allDocs)

}

async function showOne(id) {
  let cursor = await libraryDB.getOne(id)
  let oneDoc = []

  await cursor.forEach(entry => {
    oneDoc.push(entry)
  })

  return oneDoc[0]
}

async function addBook(title, author, checkedOut, copiesLeft) {
  let bookObj = {
    title: title,
    author: author,
    checkedout: checkedOut,
    copies: copiesLeft,
  }

  await libraryDB.setDoc(bookObj)

  return
}

async function updateBook(id, updateObj) {

  let bookObj = {
    author: updateObj.author,
    title: updateObj.title,
    copies: parseInt(updateObj.copies),
    checkedout: updateObj.instock === 'on' ? false : true
  }

  await libraryDB.updateDoc(id, bookObj)
}

async function removeBook(id) {
  await libraryDB.deleteDoc(id)
}


app.listen(process.env.PORT || 3000, () => {console.log('server running')})
