const MongoClient = require('mongodb').MongoClient;
const mongodb_url = process.env.MONGODB_URI;

const getSlots = async (req,res) => {   
    try {
        const  nativeClient = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
        const slots = nativeClient.db('team15').collection('time_slots');
        const {date,level} = req.body || {};

        const applicableCourses = slots.find({
            sport,
            "level" : level,
            "start_time":{
                "$gte": date
            },
        })

    } catch (error) {
        return res.status(500).json({
            status:500,
            message:error || 'Error'
        });
    }
    
}


const addSlots = async (req,res) => {   
    try {
        const  nativeClient = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
        const slots = nativeClient.db('team15').collection('time_slots');
        const {date,level} = req.body || {};

        const applicableCourses = slots.find({
            sport,
            "level" : level,
            "start_time":{
                "$gte": date
            },
        })

    } catch (error) {
        return res.status(500).json({
            status:500,
            message:error || 'Error'
        });
    }
    
}


module.exports = {
    getSlots,
    addSlots
}


