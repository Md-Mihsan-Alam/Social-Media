import React, {useContext, useState } from 'react'
import FillForm from './FillForm';

const CreatePost = ()=> {

    // const FillForm = useContext()

    const [collectTitle, setCollectTitle] = useState("");
    const [collectDetails, setCollectDetails] = useState("");

    
    const { CollectDetail, updateDetails } = useContext(FillForm);
    
    const HandleSubmit = () =>{
        // const CollTitle = event.target.Title.value;
        // const CollDetails = event.target.Details.value;


        updateDetails(collectTitle, collectDetails);

        setCollectTitle('');
        setCollectDetails('');
        // alert(collectTitle + collectDetails);

        
    }

  return (
<div>
    <form onSubmit={HandleSubmit}>

        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Write The Title</label>
            <input type="name" class="form-control" name='Title'
            onChange={(e)=>setCollectTitle(e.target.value)}/>
            {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
        </div>

        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Write the Details</label>
            <input type="name" class="form-control" name='Details'
            onChange={(e)=>setCollectDetails(e.target.value)}/>
        </div>

        {/* <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div> */}

            <button type="submit" class="btn btn-primary">Submit</button>
            
    </form>
</div>
  )
}

export default CreatePost;