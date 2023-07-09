const MongoClient = require('mongodb').MongoClient;
const mongodb_url = process.env.MONGODB_URI;

const logInUser = async (req,res) => {   
    try {
        const  nativeClient = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
        const users = nativeClient.db('team15').collection('users');
        const { email,password} = req.body || {};
        if (!users.find({email})){
            return res.status(403).json({
                status: false,
                message: "User not registered"
            })
        }
        const user = user.findOne({email});
        if (user.password!==password){
            return res.status(403).json({
                status: false,
                message: "Password did not match"
            })
        }
        const user_id = user.user_id;
         return res.status(200).json({
            status: true,
            user_id
        })
    } catch (error) {
        return res.status(500).json({
            status:500,
            message:error || 'Error in logging in'
        });
    }
}

module.exports = {
    logInUser
}