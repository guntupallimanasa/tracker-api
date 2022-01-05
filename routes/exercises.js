const router = require('express').Router();
let Exercise = require('../models/Exercises');

router.route('/').get((req, res)=>{
    Exercise.find()
        .then(exercise=>res.json(exercise))
        .catch(err=>res.status(400).json('Error:'+err))
})

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const newExercise = new Exercise({username, description});
    newExercise.save()
        .then(()=>res.json('Exercise added!'))
        .catch(err=>res.status(400).json('Error:'+err))
})

router.route('/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>res.json(exercise))
    .catch(err=>res.status(400).json('Error:'+err))
})

router.route('/:id').delete((req,res)=>{
    Exercise.findByIdAndDelete(req.params.id)
    .then(()=>res.json('Exercise Deleted'))
    .catch(err=>res.status(400).json('Error:'+err))
})

router.route('/update/:id').get((req,res)=>{
    Exercise.findById(req.params.id)
    .then(exercise=>{
        exercise.username = req.body.username;
        exercise.description = req.body.description;

        exercise.save()
        .then(exercise=>res.json('Exercise updated Successfully !!'))
        .catch(err=>res.status(400).json('Error:'+err))
    })
    .catch(err=>res.status(400).json('Error:'+err))
})


module.exports = router;