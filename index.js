const express = require('express')
const Prompt = require('./public/terminal/prompt.js')
const app = express()
const expressLayouts = require('express-ejs-layouts');
const port = 3000


app.set('view engine', 'ejs');
app.set('layout', 'layout');

app.use(express.static('public'));
app.use(expressLayouts)

app.get('/', (req, res) => {
  res.render('first_view', {name: 'Alice'})
})

app.get('/terminaltest', (req, res) => {
  const testPrompt = new Prompt({
    username: "alice",
    machinename: "salamandra",
    promptcolor: "red",
    usercolor: "green",
    machinecolor: "blue",
    monkeycolor: "purple",
    promptsign: "#$%"
  })
  console.log(testPrompt.username)
  console.log(testPrompt.machinename)
  res.render('terminaltest', {testPrompt : testPrompt})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})