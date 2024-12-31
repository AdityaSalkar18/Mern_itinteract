const router = require("express").Router();
const { User } = require("../models/user");

router.get("/:token", async (req, res) => {
    try {
        const user = await User.findOne({ verificationToken: req.params.token });
        if (!user) return res.status(400).send({ message: "Invalid or expired token." });

        user.isVerified = true;
        user.verificationToken = null; // Clear the token after verification
        await user.save();

        res.status(200).send({ message: "Email verified successfully. You can now log in." });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
        console.error(error);
    }
});

module.exports = router;
