import React from 'react';
import { FillFormContext } from '../Store/FillFormProvider';


const Post = ({title, details}) => {

  return (
<div>
  <div class="card">
      {/* <img class="card-img-top" src="..." alt="Card image cap"/> */}
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{details}</p>
    </div>
  </div>
</div>
  );
};

export default Post;



