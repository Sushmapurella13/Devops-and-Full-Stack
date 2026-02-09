const express = require('express')
const app = express()
const port = 4000

app.use(express.urlencoded({ extended: true }))

// Bank accounts (dummy data)
let accounts = [
  { accNo: 101, name: "Sushma", balance: 5000 },
  { accNo: 102, name: "Arjun", balance: 3000 }
]

// Home
app.get('/', (req, res) => {
  res.send(`
    <h1>🏦 Simple Bank App</h1>
    <a href="/accounts">View Accounts</a><br><br>
    <a href="/deposit">Deposit</a><br><br>
    <a href="/withdraw">Withdraw</a>
  `)
})

// View all accounts
app.get('/accounts', (req, res) => {
  let list = accounts.map(a =>
    `<li>Acc No: ${a.accNo} | Name: ${a.name} | Balance: ₹${a.balance}</li>`
  ).join("")

  res.send(`
    <h2>All Accounts</h2>
    <ul>${list}</ul>
    <a href="/">Back</a>
  `)
})

// Deposit form
app.get('/deposit', (req, res) => {
  res.send(`
    <h2>Deposit Money</h2>
    <form method="POST" action="/deposit">
      Account No: <input name="accNo" /><br><br>
      Amount: <input name="amount" /><br><br>
      <button type="submit">Deposit</button>
    </form>
    <a href="/">Back</a>
  `)
})

// Deposit logic
app.post('/deposit', (req, res) => {
  const acc = accounts.find(a => a.accNo == req.body.accNo)

  if (!acc) return res.send("Account not found")

  acc.balance += Number(req.body.amount)
  res.send(`Deposit successful. New Balance: ₹${acc.balance} <br><a href="/">Home</a>`)
})

// Withdraw form
app.get('/withdraw', (req, res) => {
  res.send(`
    <h2>Withdraw Money</h2>
    <form method="POST" action="/withdraw">
      Account No: <input name="accNo" /><br><br>
      Amount: <input name="amount" /><br><br>
      <button type="submit">Withdraw</button>
    </form>
    <a href="/">Back</a>
  `)
})

// Withdraw logic
app.post('/withdraw', (req, res) => {
  const acc = accounts.find(a => a.accNo == req.body.accNo)

  if (!acc) return res.send("Account not found")
  if (acc.balance < req.body.amount) return res.send("Insufficient balance")

  acc.balance -= Number(req.body.amount)
  res.send(`Withdrawal successful. Balance: ₹${acc.balance} <br><a href="/">Home</a>`)
})

// Server
app.listen(port, () => {
  console.log(`Bank app running on http://localhost:${port}`)
})
