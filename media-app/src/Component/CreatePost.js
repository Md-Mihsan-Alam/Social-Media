import React, {useContext, useState } from 'react'
import {FillFormContext} from '../Store/FillFormProvider';

const CreatePost = ()=> {

    // const FillForm = useContext()

    const [collectTitle, setCollectTitle] = useState("");
    const [collectDetails, setCollectDetails] = useState("");

    
    const { updateDetails } = useContext(FillFormContext);
    
    const HandleSubmit = (event) => {
        event.preventDefault();

        updateDetails(collectTitle, collectDetails);
        
        setCollectTitle('');
        setCollectDetails('');
      };
      

  return (
<div>
    <form onSubmit={HandleSubmit}>

        <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">Write The Title</label>
            <input type="name" className="form-control" value={collectTitle}
            onChange={(e)=>setCollectTitle(e.target.value)}/>
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" className="form-label">Write the Details</label>
            <input type="name" className="form-control" value={collectDetails}
            onChange={(e)=>setCollectDetails(e.target.value)}/>
        </div>

        {/* <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}

            <button type="submit" className="btn btn-primary">Submit</button>
            
    </form>
</div>
  )
}

export default CreatePost;