const express = require("express");

const { createClient } = require("@supabase/supabase-js");

require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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

app.get("/view", async (req, res) => {
  const supabaseUrl = "https://obpglrrzjmajyxslbowq.supabase.co";
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(
    supabaseUrl,
    supabaseKey,
    {
      db: {
        schema: 'public'
      }
    }
  );

  console.log(supabaseKey)

  //console.log(supabase);

  let tickets = await supabase
    .from('ticket')
    .select('*');

  var data = [];

  console.log(tickets);

  if (tickets['data']) {
    console.log(tickets['data']);
    data = tickets['data'];
  }

  //if (error) throw error;
  res.json({
    type: "view",
    data: data
  });
});


app.post("/set", async (req, res) => {
  const supabaseUrl = "https://obpglrrzjmajyxslbowq.supabase.co";
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(
    supabaseUrl,
    supabaseKey,
    {
      db: {
        schema: 'public'
      }
    }
  );

  //console.log(supabaseKey)

  var created_at = req.body.created_at;
  var updated_at = req.body.created_at;
  var ticket = req.body.ticket;
  var date = req.body.date;
  var execution = req.body.execution;
  var time = req.body.time;
  var type = req.body.type;
  var state = req.body.status;
  var comments = req.body.comments;
  var priority = req.body.priority;
  var user_id = req.body.user_id;


  //console.log(supabase);
  const { statusText, status, error } = await supabase
    .from('ticket')
    .insert
    (
      {
        created_at: created_at,
        updated_at: created_at,
        ticket: ticket,
        date: date,
        execution: execution,
        time: time,
        type: type,
        status: state,
        comments: comments,
        priority: priority,
        user_id: user_id,
        deleted: false
      }
    );

  res.json({
    type: "view",
    result: statusText,
    status
  });
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
