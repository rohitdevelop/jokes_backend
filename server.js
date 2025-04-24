// server/index.js or app.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // allow frontend requests

const jokes = [
  { topic: "School", joke: "Teacher: Tum itne din school kyun nahi aaye? Student: Mam, kya fayda aake? Attendance to waise bhi nahi milegi!" },
  { topic: "Family", joke: "Mom: Subah jaldi uth jao! Me: Par mujhe to neend se breakup nahi karna." },
  { topic: "Animals", joke: "Sher jungle ka raja hai, lekin billi ghar ki queen hai – try kar ke dekh lo!" },
  { topic: "Tech", joke: "Mobile ki battery bhi life ki tarah hoti hai... full kabhi nahi rehti!" },
  { topic: "Food", joke: "Zindagi ek biryani hai... kabhi chicken milta hai, kabhi sirf chawal!" },
  { topic: "Computer", joke: "Computer hang ho gaya tha... maine thappad maara, ab restart ho gaya!" },
  { topic: "Math", joke: "2 + 2 = 5, agar tumhara calculator China ka hai!" },
  { topic: "Work", joke: "Boss: Late kyun aaye? Me: Alarm ne chhutti le li thi." },
  { topic: "Doctor", joke: "Doctor: Aapko rest lena chahiye. Me: Par ghar walon ne to kaam dene ka full plan bana rakha hai!" },
  { topic: "Programming", joke: "Code likhne se zyada waqt to bugs dhoondhne mein chala jaata hai!" },
  { topic: "Friendship", joke: "Dost aise hote hain jo tumhara phone bina permission ke bhi chhed dete hain… aur tum phir bhi unhe maaf kar dete ho!" },
  { topic: "Gym", joke: "Mujhe gym jaana hai… par mera soul kahta hai 'chill maar bhai'." },
  { topic: "Science", joke: "Gravity ka proof? Jab pyaar mein girte ho to uthna mushkil hota hai." },
  { topic: "Love", joke: "Tum Wi-Fi jaise ho… jab se aaye ho signal full hai!" },
  { topic: "Time", joke: "Ghadi ki tarah log bhi peeche reh jaate hain... agar unko importance na do." }
];


app.get('/', (req, res) => {
  res.send("Welcome to joke center");
});
app.get('/api/jokes', (req, res) => {
  res.json(jokes);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
