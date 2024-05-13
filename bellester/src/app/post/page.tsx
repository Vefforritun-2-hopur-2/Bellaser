import React from 'react';
import Image from 'next/image';

const Post = () => {
  return (
    <div>
      <div className='postCreate'>
        <h2>Create Post</h2>
        <div>
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
            <label htmlFor="cost">Verð:</label>
            <input type="text" id="cost" name="cost" />
          </div>

          <div className="formText">
            <label htmlFor="cost">Description:</label>
            <input className="description" type="text" id="description" name="description" />
          </div>

        </form>
        <a href="/main"><button type="submit">Submit</button></a>
      </div>
      </div>
    </div>
  );
};

export default Post;
