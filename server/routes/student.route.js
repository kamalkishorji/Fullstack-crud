const express = require('express');
const router = express.Router();
const studentSchema = require('../models/student.model');

//create route

router.route('/create-student')
.post((req,res,next)=>{
    console.log("reqBody : ",req.body);
    studentSchema.create(req.body, (err,data)=>{
         if(err){
            return next(err);
         }
         console.log('student data ', data);
         res.send(data);
    })
});


// get students

router.route('/').get((req,res)=>{
    studentSchema.find((err,data)=>{
        if(err){
          res.status(404).json({msg : 'database err'});
          return;
        }
        res.json(data);
    })
})
//To get single student 

router.route('/edit-student/:id')
.get((req,res,next)=>{
    studentSchema.findById(req.params.id, (err,data)=>{
        if(err){
            return next(err);
        }
        res.json(data);
    });
});

// To update student
router.route('/update-student/:id')
.put((req,res,next)=>{
    studentSchema.findByIdAndUpdate(req.params.id,{$set : req.body },(err,data)=>{
        if(err){
            return next(err);
        }
       res.json(data);
       console.log('updated.........');
    });
});

// To delete student 
router.route('/delete-student/:id')
.delete((req,res,next)=>{
    studentSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err){
            return next(err);
        }
        res.status(200).json({msg : data});
        console.log('deleted .......');
    });
});

module.exports = router