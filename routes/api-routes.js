const Workout = require("../models/Workout");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    Workout.find({})
        .then((dbWorkout) => {
            res.json(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        });
});

router.post("/api/workouts", ({ body }, res) => {
    console.log(body)
    Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    const { id } = req.params;
    const { body } = req;
    Workout.update(
        { _id: id },
        { $push: { exercises: body } }
    ).then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => res.json(err));
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then((dbWorkout) => {
        console.log(dbWorkout[0].day)
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
});

module.exports = router
