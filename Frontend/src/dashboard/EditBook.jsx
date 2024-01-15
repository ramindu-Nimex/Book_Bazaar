import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';

const EditBook = () => {
  const { id } = useParams()
  // const {bookTitle, authorName, imageURL, category, bookDescription, bookPdfURL} = useState()
  const [book, setBooks] = useState("")

  useEffect(() => {
    const fetchBook = async () => {
       try {
          const res = await fetch(`http://localhost:8000/api/books/get_Book/${id}`)
          if (!res.ok) {
             throw new Error(`Error fetching data for book with ID ${id}`);
          }
          const data = await res.json()
          setBooks(data)
          
       } catch (error) {
          console.log(error);
       }
    }
    fetchBook()
 }, [id])

 const bookCategories = [
  "Fiction",
  "Non-Fiction",
  "Mistery",
  "Programming",
  "Science Fiction",
  "Fantacy",
  "Horror",
  "Bibliography",
  "Autobiography",
  "History",
  "Self-help",
  "Memoir",
  "Business",
  "Children Books",
  "Travel",
  "Religion",
  "Art and Design"
]

const [selectBookCategory, setSelectBookCategory] = useState(bookCategories[0])

const handleSelectBookCategory = (e) => {
  console.log(e.target.value);
  setSelectBookCategory(e.target.value)
}

// handle book update
const handleUpdate = (e) => {
  e.preventDefault()
  const bookData = {
    bookTitle: e.target.bookTitle.value,
    bookAuthor: e.target.authorName.value,
    imageURL: e.target.imageURL.value,
    category: e.target.categoryName.value,
    bookDescription: e.target.bookDescription.value,
    bookPdfURL: e.target.bookPdfURL.value,
  }
  // console.log(bookData);

  fetch(`http://localhost:8000/api/books/update_Book/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookData)

  }).then(res => res.json()).then(data => {
    console.log(data);
    if (data.success) {
      alert('Book Updated Successfully')
    } else {
      alert(data.message)
    }
  })
}
return (
  <div className="px-4 my-12"> 
    <h2 className="mb-8 text-3xl font-bold">Update The Book Data</h2>

    <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* first row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="bookTitle" value="Book Title" />
          </div>
          <TextInput id="bookTitle" type="text" name='bookTitle' placeholder="Book Name" required defaultValue={book.bookTitle} />
        </div>

        {/* author Name */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="authorName" value="Author Name" />
          </div>
          <TextInput id="authorName" type="text" name='authorName' placeholder="Author Name" required defaultValue={book.bookAuthor} />
        </div>
      </div>
      {/* second row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="imageURL" value="Book Image URL" />
          </div>
          <TextInput id="imageURL" type="text" name='imageURL' placeholder="Book Image URL" required defaultValue={book.imageURL} />
        </div>

        {/* category */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="category" value="Book Category" />
          </div>
          <Select id='inputState' name='categoryName' className='w-full rounded' value={selectBookCategory} onChange={handleSelectBookCategory}>
            {bookCategories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </Select>
        </div>
      </div>
      {/* book description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" name='bookDescription' placeholder="Write Your Book Description..." required rows={6} className='w-full' defaultValue={book.bookDescription} />
      </div>
      {/* book pdf link */}
      <div className=''>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfURL" value="Book Title" />
          </div>
          <TextInput id="bookPdfURL" type="text" name='bookPdfURL' placeholder="Book PDF URL" required defaultValue={book.bookPdfURL} />
      </div>
      {/* submit button */}
      <Button type="submit">Update Book</Button>
  </form>
  </div>
)
}

export default EditBook