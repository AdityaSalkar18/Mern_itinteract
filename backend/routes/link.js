const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateToken');

const Link = require('../models/link'); 
const Profile = require('../models/profile'); 

// Route to add a comment to an update
router.post('/', validateToken, async (req, res) => {
    try {
        const userId = req.user._id; // Getting the authenticated user's ID
        const { tid, link,desc } = req.body; // Getting the update ID and comment message

        
        if (!tid || !link) {
            return res.status(400).json({ error: 'Task ID and link are required' });
        }

       
        const profile = await Profile.findOne({ user: userId });

        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

       
        const newLink = new Link({
            user: userId,
            name: profile.name, 
            tid, 
            link,
            desc,
        });

        
        await newLink.save();
        res.status(201).json(newLink);

    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).json({ error: 'Error adding comment' });
    }
});

//Get all link
router.get('/',async (req,res) => {
    try {
        const link = await Link.find();
        res.status(200).json(link);
        
    } catch (error) {
        res.status(500).json({error: 'Could not fetch link'});   
        
    }
})

//Get all link using ID
router.get('/:tid',async (req,res) => {
    try {
        const {tid} = req.params;
        const link = await Link.findById(tid);

        if(!link){
            return res.status(404).json({error: 'Link not found'});
        }

        res.status(200).json(link);
        
    } catch (error) {
        res.status(500).json({error: 'Could not fetch link'});   
        
    }
})


module.exports = router;
