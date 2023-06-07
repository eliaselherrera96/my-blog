import mongoose from "mongoose";

const BeitragItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  // image: { 
  //   filename: { type: String, required: true },
  //   path: { type: String, required: true }
  // }
});

const beitragModel = mongoose.models.BeitragList || 
  mongoose.model("BeitragList", BeitragItemSchema);

export default beitragModel;