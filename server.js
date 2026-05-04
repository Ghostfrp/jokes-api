const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 3000;

// Your jokes data
const jokes = [
  {
    id: 1,
    title: "The Nigerian Prayer Strategy",
    joke: "A Nigerian man was praying: 'Oh Lord, please give me a car. I am tired of trekking!' Suddenly, he heard a voice from heaven: 'My son, keep trekking. It is the only way I can keep you away from the petrol prices.' The man replied: 'Lord, I hear you. But please, even if it's a car without an engine, just let me sit down inside it while I'm moving!'"
  },
  {
    id: 2,
    title: "The Job Interview",
    joke: "A young man went for a job interview at a big firm in Lagos. Manager: 'We are looking for someone who is responsible.' Applicant: 'Sir, then I’m your man! In my last job, whenever anything went wrong, they always said I was responsible.'"
  },
  {
    id: 3,
    title: "Nigerian Customer Service",
    joke: "A man walked into a roadside restaurant (Buka) and asked the woman serving: Man: 'Madam, do you have Wild Animal meat?' Woman: 'Everything we have here is wild! The goat was stubborn, the cow was aggressive, and the chicken... that one was a cultist!'"
  },
  {
    id: 4,
    title: "The Smart Thief",
    joke: "A thief broke into a house in Lekki. He pointed a gun at the owner and said, 'Give me all your money or I'll shoot!' The owner started laughing hysterically. Thief: 'Why are you laughing? I’m serious!' Owner: 'Oga, I’m laughing because I was actually sitting here wondering who I could rob to pay my house rent. Since you're already here, let’s go together!'"
  },
  {
    id: 5,
    title: "Akpos and the Mirror",
    joke: "Akpos traveled to the UK for the first time. He stayed in a fancy hotel and saw a mirror for the first time in his life. He looked into it and shouted: 'Hey! Look at this hotel! They even have a picture of my twin brother on the wall!'"
  }
];

// Get all jokes
app.get("/api/jokes", (req, res) => {
  res.json(jokes);
});

// Get random joke
app.get("/api/joke", (req, res) => {
  const random = jokes[Math.floor(Math.random() * jokes.length)];
  res.json(random);
});

// Get joke by ID
app.get("/api/jokes/:id", (req, res) => {
  const joke = jokes.find(j => j.id == req.params.id);
  if (!joke) {
    return res.status(404).json({ message: "Joke not found" });
  }
  res.json(joke);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});