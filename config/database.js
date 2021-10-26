import mongoose from 'mongoose'

const PORT = process.env.PORT || 5500
const URI = process.env.MONGO_URI || "mongodb+srv://admin:IPYKkw2W2wYsNBGt@tlus.0gqjj.mongodb.net/tlus?retryWrites=true&w=majority"

const connect = (app)=>{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to databse')
        app.listen(PORT, () => {
            console.log("Server is running on port ", PORT)
        })
    }).catch((err) => { 
        console.log('Login failed')
        console.error(err);
    })
}

export default connect