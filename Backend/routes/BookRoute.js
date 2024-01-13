import express from 'express'
import { deleteBookById, getAllBooks, getAllBooksCategory, getBookById, updateBookById, uploadBook } from '../controllers/BookController.js'

const router = express.Router()

router.post('/create', uploadBook)
router.get('/get_All', getAllBooks)
router.get('/get_AllCategory', getAllBooksCategory)
router.get('/get_Book/:id', getBookById)
router.put('/update_Book/:id', updateBookById)
router.delete('/delete_Book/:id', deleteBookById)

export default router