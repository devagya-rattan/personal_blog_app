// const collection = require("../Models/Usermodel");

// export const user = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const check = await collection.findOne({ email: email });

//     if (check) {
//       res.json("exist");
//     } else {
//       res.json("notexist");
//     }
//   } catch (e) {
//     res.json("fail");
//   }
// };

// export const signup = async (req, res) => {
//   const { email, password } = req.body;

//   const data = {
//     email: email,
//     password: password,
//   };

//   try {
//     const check = await collection.findOne({ email: email });

//     if (check) {
//       res.json("exist");
//     } else {
//       res.json("notexist");
//       await collection.insertMany([data]);
//     }
//   } catch (e) {
//     res.json("fail");
//   }
// };
