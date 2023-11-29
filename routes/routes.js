const express = require("express");

const router = express.Router();

const Student = require('../models/studentModel.js')

router.get("/students", async (req, res) => {
    // res.json({message: 'all students'})
    const students = await Student.findAll();
    // res.status(200).send(students);
    res.status(200).json(students);
});

router.post("/students", async (req, res) => {
    const {id, name, address, contact} = req.body;

    const newStudent = Student.build({
        'id': id,
        'name': name,
        'address': address,
        'contact': contact
    })

    try {
        await newStudent.save();

        res.status(201).json(newStudent);
    } catch (error) {
        res.json(error);
    }
});

router.get("/student/:id", async (req, res) => {
    const student = await Student.findOne({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json(student);
});

router.put("/student/:id", async (req, res) => {
    const student = await Student.findOne({
        where: {
            id: req.params.id
        }
    })

    const {name, address, contact} = req.body;

    await student.set(
        {
            name: name,
            address: address,
            contact: contact
        }
    )

    await student.save();
    
    res.status(200).json(student);
});

router.delete("/student/:id", async (req, res) => {
    const student = await Student.findOne({
        where: {
            id: req.params.id
        }
    })

    await student.destroy();

    res.status(204).json({message: 'student deleted'});
});

module.exports = router;
