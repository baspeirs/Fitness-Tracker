const db = require("../models");

module.exports = function (app) {
    // ==== This section is to CONTINUE WORKOUTS =====


    // ==== this section is for NEW WORKOUTS =====
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then((dbWorkout) => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        console.log(body)
        db.Exercise.create(body)
            .then(({ _id }) => db.Workout.findOneAndUpdate({}))
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })
}