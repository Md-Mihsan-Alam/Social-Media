import React,{useContext} from 'react';
import Post from './Post';
import { FillFormContext } from '../Store/FillFormProvider';

export default function PostList() {

  const { CollectDetail } = useContext(FillFormContext); 

  return (
    <div>
      
      {CollectDetail.map((post, index) => (
        <Post key={index} title={post.title} details={post.details} />
      ))}

    </div>
  )
}