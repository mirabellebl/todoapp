const express = require('express');
const router = express.Router();
const { Tasks } = require("../models");
const { validateToken } = require('../middlewares/AuthMiddleware');

router.get("/", async (req, res) => {
    const listOfTasks = await Tasks.findAll();
    res.json(listOfTasks);
});

router.get('/byId/:id', async (req, res) => {
    const id = req.params.id;
    const task = await Tasks.findByPk(id);
    res.json(task);
});

router.post("/", validateToken, async (req, res) => {
    const task = req.body;
    await Tasks.create(task);
    res.json(task);
});

module.exports = router;