const express = require("express");

const { createClient, QueryResult, QueryData, QueryError } = require("@supabase/supabase-js");

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hola Mundo",
  });
});

app.get("/one", (req, res) => {
  res.json({
    message: "One",
  });
});

app.get("/two", (req, res) => {
  res.json({
    message: "Two",
  });
});

app.get("/three", (req, res) => {
  res.json({
    message: "Three",
  });
});

app.get("/four", (req, res) => {
  res.json({
    message: "Four",
  });
});

app.get("/five", (req, res) => {
  const supabaseUrl = "https://obpglrrzjmajyxslbowq.supabase.co";
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);



  const ticketsQuery = supabase.from("tickets")
    .select(`
      id,
      ticket,
      date,
      execution,
      time,
      type,
      status,
      comments,
      priority
    `);
  var tickets = QueryData<typeof ticket>;

  const { data, error } = await ticketsQuery;
  if (error) throw error;


  res.json({
    message: "Five",
    data: data
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
