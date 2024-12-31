// const router = require("express").Router();
// const { User, validate } = require("../models/user");
// const bcrypt = require("bcrypt");
// const Profile = require("../models/profile");


// router.post("/", async (req, res) => {
// 	try {
// 		const { error } = validate(req.body);
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });

// 		const user = await User.findOne({ email: req.body.email });
// 		if (user)
// 			return res
// 				.status(409)
// 				.send({ message: "User with given email already Exist!" });

// 		const salt = await bcrypt.genSalt(Number(process.env.SALT));
// 		const hashPassword = await bcrypt.hash(req.body.password, salt);

// 		const new_user = await new User({ ...req.body, password: hashPassword }).save();
// 		await Profile.create({ user: new_user._id,email: new_user.email,name:new_user.userName});
		
		
		

// 		res.status(201).send({ message: "User created successfully" });
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });

// module.exports = router;




const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const Profile = require("../models/profile");

router.post("/", async (req, res) => {
	try {
		// Validate the input
		const { error } = validate(req.body);
		if (error) return res.status(400).send({ message: error.details[0].message });

		// Check if email ends with @vcet.edu.in
		const emailRegex = /^[a-zA-Z0-9._%+-]+@vcet\.edu\.in$/;
		if (!emailRegex.test(req.body.email)) {
			return res.status(400).send({ message: "Only vcet users are allowed." });
		}

		// Check if user already exists
		const user = await User.findOne({ email: req.body.email });
		if (user) {
			return res.status(409).send({ message: "User with given email already exists!" });
		}

		// Hash password and create user
		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		const new_user = await new User({ ...req.body, password: hashPassword }).save();
		await Profile.create({
			user: new_user._id,
			email: new_user.email,
			name: new_user.userName,
		});

		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;



// //email verification

// const nodemailer = require("nodemailer");
// const crypto = require("crypto");

// const router = require("express").Router();
// const { User, validate } = require("../models/user");
// const bcrypt = require("bcrypt");
// const Profile = require("../models/profile");

// router.post("/", async (req, res) => {
//     try {
//         const { error } = validate(req.body);
//         if (error) return res.status(400).send({ message: error.details[0].message });

//         const emailRegex = /^[a-zA-Z0-9._%+-]+@vcet\.edu\.in$/;
//         if (!emailRegex.test(req.body.email)) {
//             return res.status(400).send({ message: "Only vcet users are allowed." });
//         }

//         const userExists = await User.findOne({ email: req.body.email });
//         if (userExists) {
//             return res.status(409).send({ message: "User with the given email already exists!" });
//         }

//         const salt = await bcrypt.genSalt(Number(process.env.SALT));
//         const hashPassword = await bcrypt.hash(req.body.password, salt);

//         // Generate verification token
//         const verificationToken = crypto.randomBytes(32).toString("hex");

//         const newUser = await new User({
//             ...req.body,
//             password: hashPassword,
//             verificationToken,
//         }).save();

//         await Profile.create({
//             user: newUser._id,
//             email: newUser.email,
//             name: newUser.userName,
//         });

//         // Send verification email
//         const transporter = nodemailer.createTransport({
//             service: "gmail", // Use your email provider
//             auth: {
//                 user: process.env.EMAIL_USER, // Your email
//                 pass: process.env.EMAIL_PASS, // Your email password
//             },
//         });

//         const verificationLink = `${req.protocol}://${req.get("host")}/api/verify/${verificationToken}`;

//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: newUser.email,
//             subject: "Verify Your Email",
//             html: `<p>Click <a href="${verificationLink}">here</a> to verify your email.</p>`,
//         });

//         res.status(201).send({ message: "User registered successfully. Please check your email to verify your account." });
//     } catch (error) {
//         res.status(500).send({ message: "Internal Server Error" });
//         console.error(error);
//     }
// });

// module.exports = router;
