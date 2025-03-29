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

    try {
        // Initialize query
        let apiData = Product.find(queryObject);

        // Sort results if `sort` parameter is provided
        if (sort) {
            const sortFix = sort.replace(",", " ");
            apiData = apiData.sort(sortFix);
        }

        //console.log("Query Object:", queryObject);

        // Execute query
        const myData = await apiData;
        res.status(200).json({ success: true, data: myData });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

const getAllProductsTesting = async (req, res) => {
    try {
        // Sort by "name" by default
        const myData = await Product.find(req.query).sort("name");
        res.status(200).json({ success: true, data: myData });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};

module.exports = { getAllProducts, getAllProductsTesting };
