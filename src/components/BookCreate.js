import { useState,  useContext } from 'react';
import BooksContext from '../context/books';
import '../custom.css';

function BookCreate({ onCreate }) {
	const [title, setTitle] = useState('');
	const { createBook } = useContext(BooksContext);

	const handleChange = (event) => {
		setTitle(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		createBook(title);
		setTitle('');
	};

	return <div className="book-create">
		<div className='heading'>
			<h1>Add new Book</h1>
			<p>add your favorite book to BookVerse</p>
		</div>

		<form onSubmit = {handleSubmit}>
			<input className="input" type="text" value={title} onChange={handleChange} placeholder='Enter Title of the Book'/>
			<button className="button" type="submit">Add</button>
		</form>
	</div>;
}

export default BookCreate;
