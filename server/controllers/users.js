const User = require("../models/User");
const _ = require("lodash");

exports.getAllUsers = (req, res, next) => {
  User.find().then((clients) => res.send(clients));
};

/////

exports.createUser = (req, res, next) => {
  User.findOne({
    $or: [{ email: req.body.email }, { login: req.body.login }],
  })
    .then((user) => {
      if (user) {
        if (user.email === req.body.email) {
          return res.status(201).json({
            message: `Email ${user.email} already exist`,
            code: 400,
          });
        } else if (user.login === req.body.login) {
          return res
            .status(201)
            .json({ message: `Login ${user.login} already exist`, code: 400 });
        }
      } else {
        let initialQuery = _.cloneDeep(req.body);
        console.log(req.body);

        User.estimatedDocumentCount()
          .then((res) => {
            initialQuery.id = Number(res);
          })
          .then((value) => {
            let newUser;
            newUser = new User(initialQuery);
            newUser.save().then(async (user) => {
              res.status(200).json({
                message: `Succesfully created User with Login: ${user.login} Email:${user.email}`,
              });
            });
          });
      }
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json({
        message: `Error happened on server: "${err}" `,
      });
    });
};

exports.getUserByID = (req, res, next) => {
  const id = parseInt(req.params.id);
  console.log(id);

  User.findOne({
    $or: [{ id: id }],
  })
    .then((client) => {
      console.log(client);
      if (!client) {
        return res.status(201).json({
          message: `User with "${id}" does not exist.`,
          code: 400,
        });
      } else {
        res.status(200).json(client);
      }
    })
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.updateUserByID = (req, res, next) => {
  const id = parseInt(req.params.id);
  const { login, email } = req.body;

  User.findOne({ $or: [{ id: id }] })
    .then((client) => {
      if (!client) {
        return res.status(200).json({
          message: `User with id "${id}" does not exist.`,
          code: 400,
        });
      } else {
        let updObj = {};
        login ? (updObj.login = login) : null;
        email ? (updObj.email = email) : null;

        console.log("UPDATE:");
        console.log(updObj);

        User.findOneAndUpdate(
          { $or: [{ id: id }] },
          { $set: updObj },
          { new: true }
        ).then((client) => {
          return res.status(200).json({
            message: `User with ID:${id} sucessfully updated ${
              login ? "login as" + ` ${login}` : ""
            } ${login && email ? "and" : ""} ${
              email ? "email as" + ` ${email}` : ""
            } `,
          });
        });
      }
    })
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};

exports.deleteUserByID = (req, res, next) => {
  const id = parseInt(req.params.id);

  User.findOne({ $or: [{ id: id }] })
    .then((client) => {
      if (!client) {
        return res.status(200).json({
          message: `User with ID: "${id}" does not exist.`,
          code: 400,
        });
      } else {
        User.deleteOne({ id: id }).then((client) => {
          res.status(200).json({
            message: `User with ID:${id} sucessfully deleted from DB `,
          });
        });
      }
    })
    .catch((err) =>
      res.status(400).json({
        message: `Error happened on server: "${err}" `,
      })
    );
};
