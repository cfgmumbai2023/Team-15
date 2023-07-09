const MongoClient = require('mongodb').MongoClient;
const mongodb_url = process.env.MONGODB_URI;
const { random, padStart } = require("lodash");
const moment = require('moment')
const generateId = (option) => {
    try {
      const currentDate = moment().format('YYMMDDHHmmss');
      const randomNumber = random(1, 999);
      const paddedRandomNumber = padStart(randomNumber, 4, 0);
      const user_id = option + currentDate + paddedRandomNumber;
      return user_id
    } catch (error) {
      throw new Error(`Error while fetching Id | ${error}`);
    }
  }


const signUpCoach = async (req,res) => {   
    try {
        const  nativeClient = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
        const users = nativeClient.db('team15').collection('users');
        const { name, dob,email,sport,coach_exp,level,lic_no,play_exp,password} = req.body || {};
        if (users.find(email)){
            return res.status(403).json({
                status: false,
                message: "User already registered"
            })
        }
        if (play_exp<5&&coach_exp<2){
            return res.status(403).json({
                status: false,
                message: "Minimum 5 years of playing experience or 2 years of coaching experience is required"
            })
        }
        const user_id = generateId("IN-")
        await users.insertOne({ 
            name,
            dob,
            email,
            sport,
            password,
            play_exp,
            coach_exp,
            sport,
            level,
            lic_no,
            role:"coach",
            user_id
         });
         return res.status(200).json({
            status: true,
            user_id
        })
    } catch (error) {
        return res.status(500).json({
            status:500,
            message:error || 'Error in signing Up'
        });
    }
}


// app.get('/signUp', async (req, res) => {
//     res.send(await signUpCoach());
//   });


module.exports = {
    signUpCoach
}