var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Message = require('../models/message');
var User = require('../models/user');

router.get('/', function(req, res, next){
    Message.find()
        .populate('user', 'firstName')
        .exec(function(err, messages){
            if(err){
                return res.status(500).json({
                    title: 'An error ocurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Success',
                obj: messages
            });
        });
});

router.use('/', function(req, res, next){
    if (!req.headers.authorization){
        return res.status(401).json({
            title: 'Not Authenticated',
            error: { message: 'You\'re not logged in' }
        });
    }
    jwt.sign(req.headers.authorization, 'secret', function(err, decode){
        if(err){
            return res.status(401).json({
                message: 'Not Authenticated',
                error: err
            });
        }
        next();
    });
});

router.post('/', function (req, res, next) {
    let decoded = jwt.decode(req.headers.authorization);
    User.findById(decoded.user._id, function(err, user){
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred to find user',
                error: err
            });
        }
        var message = new Message({
            content: req.body.content,
            user: user
        });
        
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error ocurred',
                    error: err
                });
            }
            user.messages.push(result);
            user.save();

            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    });
});

router.put('/:id', function(req, res, next){
    let decoded = jwt.decode(req.headers.authorization);
    Message.findById(req.params.id, function(err, message) {
        if(err){
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }
        if(!message){
            return res.status(500).json({
                title: 'Message not found',
                error: {
                    message: {
                        id: req.params.id
                    }
                }
            });
        }

        if (message.user != decoded.user._id){
            return res.status(401).json({
                message: 'Not Authenticated',
                error: { message: 'User not match' }
            });
        }

        message.content = req.body.content;
        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error ocurred',
                    error: err
                });
            }

            res.status(200).json({
                message: 'Message updated',
                obj: result
            });
        });
    })
});

router.delete('/:id', function (req, res, next) {
    let decoded = jwt.decode(req.headers.authorization);
    Message.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error ocurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'Message not found',
                error: {
                    message: {
                        id: req.params.id
                    }
                }
            });
        }

        if (message.user != decoded.user._id) {
            return res.status(401).json({
                message: 'Not Authenticated',
                error: { message: 'User not match' }
            });
        }

        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error ocurred',
                    error: err
                });
            }

            res.status(200).json({
                message: 'Message removed',
                obj: result
            });
        });
    })
});

module.exports = router;
