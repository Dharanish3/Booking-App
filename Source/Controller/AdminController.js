import AdminModel from "../Models/admin.js";
import Authnticate from "../Auth/Authnticate.js";

const getUser = async (req, res) => {
  try {
    const user = await AdminModel.find();
    res.status(200).send({
      message: "User find Successfully",
      user,
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      Sucess: false,
    });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await AdminModel.findOne({ email: req.body.email });
    if (!user) {
      req.body.password = await Authnticate.createHash(req.body.password);
      const createUser = await AdminModel.create(req.body);

      res.status(201).send({
        message: "User created Successfully",
      });
    } else {
      res.status(500).send({
        message: "User Already Exist",
        user,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      Sucess: false,
    });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await AdminModel.findOne({ email: email });
    if (user) {
      if (await Authnticate.getHash(password, user.password)) {
        const token = await Authnticate.createToken({
          name: user.name,
          email: user.email,
          role: user.role,
        });
        res.status(200).send({
          message: "Login Successful",
          token,
          role: user.role
        });
      } else {
        res.status(500).send({
          message: "Incorrect Password",
        });
      }
    } else {
      res.status(500).send({
        message: "User Not Find , Kindly Sign up",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};



export default {
  getUser,
  createUser,
  login,
};
