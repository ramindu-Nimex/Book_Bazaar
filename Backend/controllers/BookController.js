import Book from "../models/BookModel.js";

// insert a book to the db
export const uploadBook = async (req,res) => {
   try {
      const bookData = new Book(req.body);

      if(!bookData) {
         return res.status(404).json({message: "Book data not found"});
      }

      const savedData = await bookData.save();
      res.status(200).json({message: "Book data added successfully", data: savedData});
   } catch (error) {
      res.status(500).json({message: "Something went wrong"});
   }
}  // http://localhost:8000/api/books/create



// get all books from the db
export const getAllBooks = async (req,res) => {
   try {
      const allBooks = await Book.find();
      if(!allBooks) {
         return res.status(404).json({message: "Books data not found"});
      }
      res.status(200).json(allBooks);
   } catch (error) {
      res.status(500).json({message: "Something went wrong"});
   }
} // http://localhost:8000/api/books/get_All



// get a book by id from the db
export const getBookById = async (req,res) => {
   try {
      const id = req.params.id;
      const bookExist = await Book.findById(id);

      if(!bookExist) {
         return res.status(404).json({message: "Book is not found"});
      }

      res.status(200).json(bookExist);
   } catch (error) {
      res.status(500).json({message: "Something went wrong"});
   }
} // http://localhost:8000/api/books/get_Book/id



// update a book by id from the db
export const updateBookById = async (req,res) => {
   try {
      const id = req.params.id;
      const userExist = await Book.findById(id);

      if(!userExist) {
         return res.status(404).json({message: "Book is not found"});
      }

      const updatedData = await Book.findByIdAndUpdate(id, req.body, {new: true});
      res.status(200).json({message: "Book data updated successfully", data: updatedData});
   } catch (error) {
      res.status(500).json({message: "Something went wrong"});
   }
} // http://localhost:8000/api/books/update_Book/id



// delete a book by id from the db
export const deleteBookById = async (req,res) => {
   try {
      const id = req.params.id;
      const userExist = await Book.findById(id);

      if(!userExist) {
         return res.status(404).json({message: "Book is not found"});
      }

      await Book.findByIdAndDelete(id);
      res.status(200).json({message: "Book data deleted successfully"});
   } catch (error) {
      res.status(500).json({message: "Something went wrong"}); 
   }
} // http://localhost:8000/api/books/delete_Book/id

// get all books from the db by category
export const getAllBooksCategory = async (req,res) => {
   try {
      let query = {}
      if(req.query?.category) {
         query = {category: req.query.category}
      }

      const booksInCategory = await Book.find(query);
      res.status(200).json(booksInCategory);     
   } catch (error) {
      res.status(500).json({message: "Something went wrong"}); 
   }
} // http://localhost:8000/api/books/get_AllCategory?category=Fantasy