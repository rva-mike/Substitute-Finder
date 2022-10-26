const {Schema, model, Types} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        mobile_phone: {
            type: String,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address']
        },
        password: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        admin_school: {
            type: Schema.Types.ObjectId,
            ref: 'School',
        },
        locations_worked: [
            {
                type: Schema.Types.ObjectId,
                ref: 'School'
            }
        ]
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
)

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;