import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

const today = new Date();
const thisyear = today.getFullYear();

const APIKey = "4fe879fa1cmsha745207725b94cdp17f2dejsnb549cec9ef5d";
const APIHost = "wordsapiv1.p.rapidapi.com";
app.get("/", (req, res) => {
  res.render("index.ejs", {
    year: thisyear,
  });
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/vocab", (req, res) => {
  const options = {
    method: "GET",
    url: "https://wordsapiv1.p.rapidapi.com/words/",
    params: { random: "true" },
    headers: {
      "x-rapidapi-key": APIKey,
      "x-rapidapi-host": APIHost,
    },
  };
  async function fetchData() {
    try {
      const response = await axios.request(options);
      res.render("vocab.ejs", {
        year: thisyear,
        word: response.data.word,
        results: response.data.results,
      });
    } catch (error) {
      console.error(error);
    }
  }

  fetchData();
});

app.post("/vocab", (req, res) => {
  const options = {
    method: "GET",
    url: `https://wordsapiv1.p.rapidapi.com/words/${req.body.q}`,
    headers: {
      "x-rapidapi-key": APIKey,
      "x-rapidapi-host": APIHost,
    },
  };

  async function fetchData() {
    try {
      const response = await axios.request(options);
      console.log(response.data.word);
      res.render("vocab.ejs", {
        year: thisyear,
        word: response.data.word,
        results: response.data.results,
      })
      console.log(response.data);
    } catch (error) {
      res.render("vocab.ejs",{
        year:thisyear,
        word: `${req.body.q} is not in this dictionary, try another one please!`,
        results: null,
      })
    }
  }

  fetchData();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
