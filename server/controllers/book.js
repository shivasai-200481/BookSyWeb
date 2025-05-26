const { Book } = require('../models/book.js');

async function handleGetBook(req, res) {
    try {
        const book = await Book.find()
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
}

async function getSpecificBook(req, res) {
    try {

        const id  = req.params.id;
        const takeBook = await Book.findById(id);
        if (!takeBook) return res.status(400).json({ message: "Book Not Found" });
        return res.status(200).json(takeBook);
    } catch (error) {
        console.log("Error: ",error);
        return res.status(500).json({ message: "Server Error" })
    }
       
}
async function handleSearch(req,res) {
    const query = req.query.query;
    try {
        const results = await Book.find({
            $or:[
                { name:{ $regex:query,$options:'i' } },

                { title:{ $regex:query,$options:'i' } },
            ],
        })
        return res.status(200).json(results );

    } catch (err) {
        res.status(500).json({ error:"Search Failed" });
    }
}



module.exports = {
    handleGetBook,
    getSpecificBook,
    handleSearch,
}