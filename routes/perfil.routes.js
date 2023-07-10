const router = require('express').Router()
const Email = require("../daos/models/users.model");
const {isAuthenticated} = require('../utils/auth')

router.get('/',isAuthenticated, (req, res) => {
        const user = req.user
        res.render("perfil",{user:user});
  });


module.exports =  router