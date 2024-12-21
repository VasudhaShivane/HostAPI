const Product = require("../models/product");

const getAllProducts = async (req, res) => {
    const { company, name, sort } = req.query;
    const queryObject = {};

    // Filter by company
    if (company) {
        queryObject.company = company;
    }

    // Filter by name with case-insensitive search
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    // Initialize query
    let apiData = Product.find(queryObject);

    // Sort results if `sort` parameter is provided
    if (sort) {
        let sortFix = sort.replace(",", " ");
        apiData = apiData.sort(sortFix);
    }

    console.log("Query Object:", queryObject);

    try {
        const myData = await apiData; // Execute the query
        res.status(200).json({ myData });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getAllProductsTesting = async (req, res) => {
    try {
        // Sort by "name" by default
        const myData = await Product.find(req.query).sort("name");
        res.status(200).json({ myData });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getAllProducts, getAllProductsTesting };
