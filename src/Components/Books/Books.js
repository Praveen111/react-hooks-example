import React from 'react';
import './Books.css';
import {Button} from '@material-ui/core';

const Books =  (props) => {
   
return (
    <div>
        <ul>
         
            {
                props.books.map(book => (
                    <div className="Books" key={book.ID}>
                    <li><div><img src={book.Image} alt={book.SubTitle} /></div>{book.Title}</li>
                    <br/>
                        <Button variant="outlined"  color="primary" fullWidth={true} onClick={() =>props.addBook(book)}>Add</Button>
                        <br/><br/>
                        <Button variant="outlined" color="secondary" fullWidth={true} onClick={() =>props.removeBook(book)}>Remove</Button>
                    </div>
                ))
            }
        </ul>

    </div>
)
};


export default Books;