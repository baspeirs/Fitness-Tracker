const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date
  },
  exercises: [
    {
      type: {type: String},
      name: {type: String},
      duration: {type: Number},
      weight: {type: Number},
      reps: {type: Number},
      sets: {type: Number},
      distance: {type: Number}
    }
  ]
},
// set this value to true so that res.json will include virtuals
{toJSON: { virtuals: true }}
);
// create a virtual so we can pass an accumulation of a field
WorkoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0)
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
