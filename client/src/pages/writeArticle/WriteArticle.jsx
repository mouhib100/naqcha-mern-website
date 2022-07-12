import MainNavbar from "../../components/MainNavbar/MainNavbar";
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addpost } from '../../redux/actions/PostsAction';
import Figure from 'react-bootstrap/Figure';

import "./WriteArticle.css";

export default function WriteArticle() {
  const dispatch = useDispatch()
  const [title, SetTitle] = useState('')
  const [description, SetDescription] = useState('')
  const [file, setFile] = useState(null);


  const addPostHandler = (e) => {
    e.preventDefault()
    dispatch(addpost({ title, description })) //hedhi el data eli n7eb ndispatcheha(nwaze3ha) maysir el submit ela manenzel 3al button

  }
  



  return (
    <div id="#writearticle">
      <header className="fixed-top site__header">
        <MainNavbar />
      </header>
      <div className="write">
        <Figure>
          <Figure.Image
            className="writeImg"
            alt="171x180"
            src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          />
        </Figure>
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fas fa-plus"></i>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} />

            <input
              className="writeInput"
              placeholder="Title"
              type="text"
              autoFocus={true}
              onChange={(e) => SetTitle(e.target.value)}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              className="writeInput writeText"
              placeholder="Tell your story..."
              type="text"
              autoFocus={true}
              onChange={(e) => SetDescription(e.target.value)}
            />
          </div>
          <button className="writeSubmit" type="submit" onClick={(e) => addPostHandler(e)}>
            Publish
          </button>
        </form>
      </div>
    </div>
  );
}
