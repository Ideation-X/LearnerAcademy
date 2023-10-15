import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

function Feedback() {
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const navigate = useNavigate();
   

    return (
        <div className="bg-gray-800 py-8">
  <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
    <div className="md:flex">
      <div className="p-8">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div>
            <label htmlFor="review" className="block text-sm font-medium text-gray-700">Review</label>
            <div className="mt-1">
              <textarea
                id="review"
                name="review"
                rows="3"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
              ></textarea>
            </div>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    )
}




export default Feedback;