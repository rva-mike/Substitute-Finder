const {Schema, model} = require('mongoose');

const schoolSchema = new Schema (
    {
        name: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        postal_code: {
            type: String,
            required: true
        },
        latitude: {
            type: Double
        },
        longitude: {
            type: Double
        }
    }
)

const School = model('School', schoolSchema);

module.exports = School;
