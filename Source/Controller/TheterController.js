import TheaterModel from "../Models/theater.js";


// get all thetre
const getTheters = async (req, res) => {
  try {
    const theaters = await TheaterModel.find();
    res.status(200).send({
      message: "Theater find Successfully",
      theaters,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      Sucess: false,
    });
  }
};



// create thetre
const createTheater = async (req, res) => {
  try {
    const theater = await TheaterModel.findOne({ name: req.body.name });
    if (!theater) {
      const list = await TheaterModel.create(req.body);
      res.status(201).send({
        message: "Theatre created Successfully",
        list,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      success: false,
    });
  }
};


// get thetre by id
const getTheaterById = async (req, res) => {
  try {
    const theater = await TheaterModel.findOne({ _id: req.params._id });
    if (theater) {
      res.status(200).send({
        message: "Theatre Find Successfully",
        theater,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      success: false,
    });
  }
};


// get thetre by name
const getTheaterByName = async (req, res) => {
  try {
    const theater = await TheaterModel.findOne({ name: req.params.name });
    if (theater) {
      res.status(200).send({
        message: "Theatre Find Successfully",
        theater,
      });
    }
  } catch (error) {
    console.log(error)
    res.status(500).send({
      message: "Internal Server error",
      success: false,
    });
  }
};



// edit theatre
const editTheater = async (req, res) => {
  try {
    const theater = await TheaterModel.findOneAndUpdate(
      { _id: req.params._id },
      req.body,
      { new: true }
    );
    if (theater) {
      res.status(200).send({
        message: "Theatre Edit Successfully",
        theater,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      success: false,
    });
  }
};


// delete theater
const deleteTheater = async (req, res) => {
  try {
    const theater = await TheaterModel.findOneAndDelete({
      _id: req.params._id,
    });
    if (theater) {
      res.status(200).send({
        message: "Theatre Delete Successfully",
        theater,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server error",
      success: false,
    });
  }
};



export default {
    getTheters,
    createTheater,
    getTheaterById,
    getTheaterByName,
    editTheater,
    deleteTheater,
    
  };