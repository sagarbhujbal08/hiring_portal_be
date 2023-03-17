const mongoose = require("mongoose");

// user Schema
const openingSchema = mongoose.Schema({
    jobdescription: String,
    noofvacancy: Number,
    position: String,
    yearofexperience: Number,
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
});

// export user schema
const Opening = mongoose.model("Openings", openingSchema);
module.exports.Opening = Opening;
module.exports.openingSchema = openingSchema;