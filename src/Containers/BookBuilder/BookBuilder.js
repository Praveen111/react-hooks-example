import React, {useEffect,useState} from 'react';
import Books from '../../Components/Books/Books';

function BookBuilder() {

    const [newBooks,setBooks] = useState([]);
    const [isShow,setShow] = useState(false);

    //useEffect runs infinitely if you don't pass second arguement as {} or [] - sending this basically means run this only on mount or unmount
    useEffect(() => {
        fetch('http://it-ebooks-api.info/v1/search/php')
        .then(res => res.json())
        .then(result => {
            setBooks(result.Books);
            setShow(true);
        })
    },[]);

    function addBook (book) {
      
        console.log(book);
      
    }

    function removeBook(Book) {
        console.log(Book);

    }

    let BooksPage = (<div>
        <Books books={newBooks} addBook={addBook} removeBook={removeBook} />
    </div>);
        return(
            <div>
            { !isShow
        ? <h1>Loading...</h1>
        : BooksPage
      }
            </div>
        );
}


export default BookBuilder;