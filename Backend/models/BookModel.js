import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
   bookTitle: {
      type: String,
      required: true,
   },
   bookAuthor: {
      type: String,
      required: true,
   },
   imageURL: {
      type: String,
      required: true,
   },
   category: {
      type: String,
      required: true,
   },
   bookDescription: {
      type: String,
      required: true,
   },
   bookPdfURL: {
      type: String,
      required: true,
   },
})

const Book = mongoose.model("Books", bookSchema);
export default Book;