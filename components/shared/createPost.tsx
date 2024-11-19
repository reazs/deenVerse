import React from 'react'
import { Textarea } from '../ui/textarea';
import { PlusCircle } from 'lucide-react';

const CreatePost = () => {
  return (
    <div className="mb-8">
      <div className="pt-6">
        <Textarea
          placeholder="Share your thoughts or reflections..."
          className="mb-4 min-h-[100px]"
        />
        <div className="flex justify-end">
          <button className="btn btn-outline">
            <PlusCircle className="mr-2 h-4 w-4" /> Create Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost