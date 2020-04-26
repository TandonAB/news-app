import React from 'react';

function NewsBox() {
  return (
    <div className="card d-inline-flex mx-2" style={{ width: '18rem' }}>
      <img src=".." className="card-img-top bg-dark text-white" alt=".." />
      <div className="card-body">
        <h5 className="card-title">News title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content.
        </p>
      </div>

      <div class="card-footer text-muted text-right">
        <small>Thu, 15 Sep 2016 12:11:19 IST</small>
      </div>
    </div>
  );
}

export default NewsBox;
