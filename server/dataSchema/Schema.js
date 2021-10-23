import mongoose from "mongoose";

const userInfo = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    location: { type: String },
    number: { type: String },
    message: { type: String },
    date: { type: String, default: Date },

    //  type: Date, default: Date.now
  },

  { collection: "sender-info" }
);

export default mongoose.model("userData", userInfo);
