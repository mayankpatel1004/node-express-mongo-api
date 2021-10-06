const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

// Handling Post Data //
router.post('/mens', async (req, res) => {
    try{
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    } catch(e) {
        res.status(400).send(e);
    }
});

// Handling Get Data //
router.get('/mens', async (req, res) => {
    try{
        const getMens = await MensRanking.find({}).sort({ranking:1});
        res.send(getMens);
    } catch(e) {
        res.status(400).send(e);
    }
});


// Handling Get Data filters//
router.get('/men/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        //const getMens = await MensRanking.findById({_id:_id});
        const getMen = await MensRanking.findById({_id});
        res.send(getMen);
    } catch(e) {
        res.status(400).send(e);
    }
});

// We will handle patch(update) req of indiv //
router.patch('/mens/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        //const getMens = await MensRanking.findById({_id:_id});
        const getMen = await MensRanking.findByIdAndUpdate(_id, req.body,{
            new:true
        });
        res.send(getMen);
    } catch(e) {
        res.status(500).send(e);
    }
});


// We will handle delete req of indiv //
router.delete('/mens/:id', async (req, res) => {
    try{
        const _id = req.params.id;
        //const getMens = await MensRanking.findById({_id:_id});
        const getMen = await MensRanking.findByIdAndDelete(_id);
        res.send(getMen);
    } catch(e) {
        res.status(500).send(e);
    }
});

module.exports = router;