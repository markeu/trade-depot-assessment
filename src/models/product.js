import mongoose from "mongoose";

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
            type: Float32Array
        },
        latitude: {
            type: Float32Array
        }
    }],
    user_details: [{
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: "Email address is required",
        },
        password: {
            type: String,
            required: true,
        },
    }],
}, { timestamps: true });

export default mongoose.model("products", productSchema);