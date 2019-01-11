import React, {useEffect,useState, useReducer} from 'react';
import Books from '../../Components/Books/Books';
import { connect } from 'react-redux';
import incrementAction from '../../Store/Actions/BookActions';
import reducer from '../../Store/Reducers/BookReducer';

function BookBuilder(props) {

    const [newBooks,setBooks] = useState([]);
    const [isShow,setShow] = useState(false);
    const [textValue, setTextValue] = useState('');
    
    const [countState, bookAction] = useReducer(reducer, {count: 0});

    //useEffect runs infinitely if you don't pass second arguement as {} or [] - sending this basically means run this only on mount or unmount
    useEffect(() => {
        fetch('http://it-ebooks-api.info/v1/search/php')
        .then(res => res.json())
        .then(result => {
            setBooks(result.Books);
            setShow(true);
        })

        console.log('Props', props)
    },[]);

    useEffect(() => {
        console.log('Props after Count changed', countState);
        
    },[countState]);

    function addBook () {
     
       props.add();
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
            Count: {countState.count}
            <button onClick={() => bookAction({type: 'reset'})}>
              Reset
            </button>
            <button onClick={() => bookAction({type: 'increment'})}>+</button>
            <button onClick={() => bookAction({type: 'decrement'})}>-</button>
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

// const mapStateToProps = state => {
//     console.log(state);
// // return {
// //  count: countState
// // }
// };

const mapDispatchToProps = dispatch => {
    return {
        add: () => {
            dispatch(incrementAction())
        }
    }
}

export default connect(null,mapDispatchToProps)(BookBuilder);

