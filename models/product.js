const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true, "price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
    },
    rating: {
        type: Number,
        default: 4.9,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    company: {
        type: String,
        enum: {
            values: [
                "apple",
                "samsung",
                "dell",
                "hp",
                "MI",
                "oneplus",
                "google",
                "asus",
                "lenovo",
                "microsoft",
                "msi",
                "huawei",
                "garmin",
                "razer",
                "xiaomi"
            ],
            message: `{VALUE} is not supported`,
        },
    },
    category: {
        type: String,
        enum: ["smartphone", "laptop", "tablet", "smartwatch"],
        required: true,
    }
});

module.exports = mongoose.model("Product", productSchema);
