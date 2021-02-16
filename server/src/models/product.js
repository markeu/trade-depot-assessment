const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
    image_url: {
        type: String,
        required: true,
    },
    geo_details: [{
        state: {
            type: String,
            required: true,
        },
        street: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        longitude: {
            type: String,

        },
        latitude: {
            type: String,

        }
    }],
    user_details: [{
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: "Email address is required",
        }
    }],
}, { timestamps: true });

module.exports = mongoose.model("products", productSchema);