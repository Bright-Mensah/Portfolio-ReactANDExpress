import express, { response } from "express";
import mongoose from "mongoose";
import userInfo from "./dataSchema/Schema.js";
import cors from "cors";
import request from "request";

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// dbconfig
const connectionURL =
  "mongodb+srv://mob:Mensah0541687203@portfolio-records.ophjh.mongodb.net/portfolio?retryWrites=true&w=majority";

try {
  mongoose.connect(
    connectionURL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log("connection wasn't successful");
        response.json({
          status: "db-error",
        });
      } else {
        console.log("Connected successfully");
      }
    }
  );
} catch (error) {
  console.log("error with database");
}

try {
  app.post("/contact", async (req, res) => {
    try {
      if (res.statusCode === 200) {
        await userInfo.create({
          name: req.body.name,
          email: req.body.email,
          location: req.body.location,
          number: req.body.number,
          message: req.body.message,
        });
        setTimeout(() => {
          res.json({
            status: "sent",
          });
        }, 10000);
      }
      {
      }
    } catch (error) {
      console.log(error);
      res.json({
        status: "error",
        error: " something went wrong ",
      });
    }
  });
} catch (error) {
  console.log("failed submitting contact forms");
}

// news letter subscription
app.post("/subscribe", (req, res) => {
  const { firstName, lastName, email } = req.body;

  // validate input
  if (!firstName || !lastName || !email) {
    console.log("all fields must be filled");
  }

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const postData = JSON.stringify(data);
  const options = {
    url: "https://us5.api.mailchimp.com/3.0/lists/c331d6344c",
    method: "POST",
    headers: {
      Authorization: "auth 66cdfa872669de2280547c67350f2162-us5",
      // "Content-Type":"application/json"
    },
    body: postData,
  };

  request(options, (err, response, body) => {
    if (err) {
      console.log("error happend");
      setTimeout(() => {
        res.json({
          status: "db-error",
        });
      }, 5000);
    } else {
      if (response.statusCode === 200 && email) {
        console.log("success");
        setTimeout(() => {
          res.json({
            status: "subscribed",
          });
        }, 10000);
      } else {
        console.log("failed");
        res.json({
          status: "failed",
        });
      }
    }
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running successfully on port ${PORT}`));
