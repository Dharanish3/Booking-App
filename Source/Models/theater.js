import mongoose from "./setup.js";

const theaterSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    // screen:[{
    //     type : String,
    //     requred : true
    // }],
    capacity : {
        type : Number,
        default : 50
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    collection: "theater",
  }
);

const schema = mongoose.model("theater", theaterSchema);

export default schema;
