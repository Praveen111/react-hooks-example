import React, {useEffect,useState, useReducer} from 'react';
import Books from '../../Components/Books/Books';
import reducer from '../../Store/Reducers/BookReducer';
import { connect } from 'react-redux';

function BookBuilder() {

    const [newBooks,setBooks] = useState([]);
    const [isShow,setShow] = useState(false);
    const [textValue, setTextValue] = useState('');
    
    const [state, dispatch] = useReducer(reducer, {count: 0});

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
     
      
    }


    function removeBook(Book) {
        console.log(Book);

        const newBooksArray = newBooks;
        newBooksArray.splice(Book,1);
        setBooks(newBooksArray);
        console.log(newBooks);

    }

    function setTextValueHandler(e) {
        setTextValue(e);
        console.log(textValue);
    }

    let BooksPage = (<div>
        <Books books={newBooks} addBook={addBook} removeBook={removeBook} />
        <input type="text" onChange={(e) => setTextValueHandler(e.target.value)} />
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'reset'})}>
              Reset
            </button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
          </>
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


export default connect(null,null)(BookBuilder);

