import React from 'react';
import Image from 'next/image';

const Post = () => {
  return (
    <div>
      <div className='postCreate'>
        <h2>Create Post</h2>

        <form>
          <div className="formText">
            <label htmlFor="name">Nafn:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="formText">
            <label htmlFor="age">Aldur:</label>
            <input type="text" id="age" name="age" />
          </div>

          <div className="formText">
            <label htmlFor="location">Staðsetning:</label>
            <input type="text" id="location" name="location" />
          </div>

          <div className="formText">
            <label htmlFor="dates">Tímabil:</label>
            <input type="text" id="dates" name="dates" />
          </div>

          <div className="formText">
            <label htmlFor="cost">Kostur:</label>
            <input type="text" id="cost" name="cost" />
          </div>

          <a href="/"><button type="submit">Submit</button></a>
        </form>
      </div>
    </div>
  );
};

export default Post;
