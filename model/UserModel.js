import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = mongoose.Schema({
    mssv: {
        type: String,
        require: true,
        trim: true,
    },
    first_name: { 
        type: String, 
        require: true,
        trim: true
    },
    last_name: { 
        type: String, 
        require: true,
        trim: true
    },
    gender: { 
        type: String, 
        require: true,
        trim: true 
    },
    password: { 
        type: String,
        require: true 
    },
    className: { 
        type: String, 
        require: true,
        trim: true 
    },
    brithDay: { 
        type: String, 
        require: true 
    },
});

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

export default mongoose.model("User", UserSchema);
