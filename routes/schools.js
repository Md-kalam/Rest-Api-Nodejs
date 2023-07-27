const express = require("express");
const router = express.Router();
const School = require("../model/school");

// / Here We Creating The Routers

// Get All The Schools
router.get("/", async (req, res) => {
    try {
        const schools = await School.find()
        res.json(schools)
    } catch (error) {
        res.json(error);
    }
});

// Get Single Schools
router.get("/:schoolId", async (req, res) => {

    const schoolId = req.params.schoolId

    try {
        const school = await School.findById(schoolId)
        res.json(school)
    } catch (error) {
        res.json(error)
    }
});

//Create School
router.post("/", async (req, res) => {
    const school = await School.create(req.body)
    res.json(school)
})

//Delete School
router.delete("/:schoolId", async (req, res) => {
    try {
       
        await School.remove({_id: req.params.schoolId})
        res.status(200).json({message: "work done"})
    } catch (error) {
        res.json(error);
    }
});

//Update School
router.put("/:schoolId", async (req, res) => {
    const schoolId = req.params.schoolId;

try {
   const school = await School.updateOne({
    "_id": schoolId,
   },
   req.body
   );
   res.json(school);
   
} catch (error) {
    res.json(error)
}

})

module.exports = router;