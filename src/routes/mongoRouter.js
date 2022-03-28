var express =require('express');
var router = express.Router();
var mongoose = require('mongoose');
var studentModel = require('../models/studentModel')

router.get('/', function (req, res,next) {
    var list =studentModel.find({})
    console.log(list)
})