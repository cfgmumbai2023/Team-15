const MongoClient = require('mongodb').MongoClient;
const mongodb_url = process.env.MONGODB_URI;
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

const createCourse = async (req,res) => {   
    try {
        const  nativeClient = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
        const courses = nativeClient.db('team15').collection('courses');
        const { name,topic,sport,level} = req.body || {};
        const course_id = generateId("co-");
        courses.insert({
            name,
            topic,
            sport,
            level,
            course_id
        })
        
         return res.status(200).json({
            status: true,
            course_id
        })
    } catch (error) {
        return res.status(500).json({
            status:500,
            message:error || 'Error'
        });
    }
}
const getCourses = async (req,res) => {   
    try {
        const  nativeClient = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
        const courses = nativeClient.db('team15').collection('courses');
        const {sport,level} = req.body || {};
        const applicableCourses = courses.find({
            sport,
            "level":{
                "$lte":level
            },
        })
        
         return res.status(200).json({
            status: true,
            applicableCourses
        })
    } catch (error) {
        return res.status(500).json({
            status:500,
            message:error || 'Error'
        });
    }
}

const addModule = async (req,res) => {   
    try {
        const  nativeClient = await MongoClient.connect(mongodb_url, { useNewUrlParser: true });
        const courses = nativeClient.db('db').collection('courses');
        const { name,content,course_id} = req.body || {};
        const module_id = generateId("MO-");
        const modules= await courses.findOne({course_id}).modules;
        modules.push({
            module_id,
            name,
            content
        })
        await courses.findOneAndUpdate({
            course_id
        },{
            $set:{
                "modules":modules
            }

        })
         return res.status(200).json({
            status: true,
            module_id
        })
    } catch (error) {
        return res.status(500).json({
            status:500,
            message:error || 'Error'
        });
    }
}
module.exports = {
    createCourse,
    addModule,
    getCourses
    // deleteInstructor
}