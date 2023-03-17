const { Opening } = require("../model/openingModel");
var _ = require('lodash');

// create new opening
exports.createNewOpening = async (req, res) => {
    console.log(req.body)
    const newOpening = new Opening(req.body);
    try {
        // let isExist = await isOpeningAlreadyExist(req.body.position)
        // if (_.isEmpty(isExist)) {
            const data = await newOpening.save();
            let obj = {
                success: true,
                data: data,
                message: "Opening created successfully.."
            }
            res.send(obj);
        // } else {
        //     let obj = {
        //         message: "Opening already Exists.",
        //         success: false
        //     }
        //     res.send(obj);
        // }

    } catch (err) {
        res.send(err)
    }
}

// update opening
exports.updateOpening = async (req, res) => {
    var updateObject = req.body;
    try {
        let id = req.body._id;
        console.log(id)
        let data = await Opening.findByIdAndUpdate(id,
            {
                $set: {
                    "jobdescription": updateObject.jobdescription,
                    "noofvacancy": updateObject.noofvacancy,
                    "position": updateObject.position,
                    "yearofexperience": updateObject.yearofexperience
                }
            },
            { new: true })
        res.status(200).send(data);
        console.log(data);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

// delete opening
exports.deleteOpening = async (req, res) => {
    try {
        console.log("req.params.id = ",req.query)
        let data = await Opening.findByIdAndDelete(req.query.id);
        if(!_.isEmpty(data)){
            console.log("data = ",data)
            let responseObj = {
                error: false,
                message: "data deleted successfully...!!!"
            }
            res.send(responseObj);
        } else {
            let responseObj = {
                error: false,
                message: "opening not found...!!!"
            }
        }
    } catch (error) {
        res.send(error)
    }
}

// get all opening
exports.getAllOpening = async (req, res) => {
    try {
        const data = await Opening.find();
        console.log('data', data);
        res.send(data);
    } catch (err) {
        res.send(err);
    }
}

async function isOpeningAlreadyExist(position) {
    try {
        const data = await Opening.findOne({ position: position });
        console.log('data', data);
        return data
    } catch (err) {
        console.log(err);
    }
}