import React from 'react'

const Comment = ({ name, email, body, postId }) => {
  return (
    <div>
      <h1> {name} </h1>
      <p> {body} </p>
      <b> {email} </b>
      <br />
      <b> PostId: {postId} </b>
      <hr />
    </div>
  )
}

export default Comment;
