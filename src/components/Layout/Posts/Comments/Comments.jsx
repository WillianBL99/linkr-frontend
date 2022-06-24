import styled from "styled-components";
import PostComment from "./PostComment";
import img from "../../../../assets/img/usericon.png"
import { api } from "../../../../utils/api";
import { useState } from "react";
import { getContext } from "../../../../hooks/ContextAPI";

function Comments({ comments, setComments, postId }) {
  const { header } = getContext();
  const [ commentText, setCommentText ] = useState("");

  function assembleComments() {
    if( !comments.length ) {
      return <></>;
    }

    return (
      <article>
        { comments.map( (comment, index) => <PostComment key={ comment.id } comment={ comment } /> ) }
      </article>
    );
  }

  function handleChangeComment( e ) {
    setCommentText( e.target.value );
  }

  function handleComment( e ) {
    e.preventDefault();    
    const body = { commentText };

    api.post(`/posts/${postId}/comment`,body, header )
      .then( ( res ) => {
        setCommentText("");
        setComments( res.data );
      })
      .catch( e => console.log( e ));
  }

  return (
    <CommentsContainer>
      <section>
        { assembleComments() }
      </section>
      <form onSubmit={ handleComment }>
        <img src={ img } alt="" />
        <input 
          type="text"
          value={ commentText }
          onChange={ handleChangeComment }
          placeholder="write a comment..."
        />
      </form>
    </CommentsContainer>
  )
}

export default Comments;

const CommentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: auto;

  padding-inline: 15px;

  &>section {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-height: 25rem;

    overflow-y: auto;
  }

  &>form {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 3.5rem;

    img {
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }

    input {
      width: 100%;
      height: 2rem;
      margin-left: 10px;
      border-radius: 5px;
      padding-left: 5px;

      background-color: var( --color-3);
      color: var( --text-color-secondary );
    }
  }
  
`