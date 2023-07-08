const MongoClient = require('mongodb').MongoClient;
const mongodb_url = process.env.MONGODB_URI;

const createInstructor = async (req,res) => {   
    try {
        const  nativeClient = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
        const users = nativeClient.db('db').collection('users');
        const { email,topic} = req.body || {};
        if (!users.find({email})){
            return res.status(403).json({
                status: false,
                message: "User not registered"
            })
        }
        const user = user.findOneAndUpdate({email},{
            topic,
            role:"instructor"
        });
        const user_id = user.user_id;
         return res.status(200).json({
            status: true,
            user_id
        })
    } catch (error) {
        return res.status(500).json({
            status:500,
            message:error || 'Error'
        });
    }
    
}
const deleteInstructor = async (req,res) => {   
    try {
        const  nativeClient = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
        const users = nativeClient.db('db').collection('users');
        const { email} = req.body || {};
        if (!users.find({email})){
            return res.status(403).json({
                status: false,
                message: "User not registered"
            })
        }
        const user = user.findOneAndUpdate({email},{
            role:"coach"
        });
        const user_id = user.user_id;
         return res.status(200).json({
            status: true,
            user_id
        })
    } catch (error) {
        return res.status(500).json({
            status:500,
            message:error || 'Error'
        });
    }
    
}
module.exports = {
    createInstructor,
    deleteInstructor
}