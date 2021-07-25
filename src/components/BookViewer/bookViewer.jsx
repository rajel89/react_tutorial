import React from "react";
import Book from '/../Book/book';

function BookViewer(props) {
  return (
    <div className="row row-spacer">
      <div className="col-md-4">
        <button onClick={() => props.previousBook()}>Previous Book</button>
        {/*Button here to move to the previous boook viewed*/}
      </div>
      <div className="col-md-4">
        {/*Display Book with Cover here*/}
      <Book book={props.book}/>
      </div>
      <div className="col-md-4">
        <button onClick={() => props.nextBook()}>Next Book</button>
        {/*Button here to move to the previous book viewed*/}
      </div>
    </div>
  );
}

export default BookViewer;
