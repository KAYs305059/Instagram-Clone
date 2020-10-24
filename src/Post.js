import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { useState, useEffect } from 'react';
import { db } from './firebase';
import firebase from 'firebase';

function Post({ postId, user, username, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          setComments(snapshot.docs.map((doc) => doc.data()));
        });
    }

    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();

    db.collection('posts').doc(postId).collection('comments').add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment('');
  };

  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar
          className='post__avatar'
          alt='Khadar'
          src='/static/images/avatar/1.jpg'
        />
        <h3>{username}</h3>
      </div>

      <img className='post__image' src={imageUrl} alt='' />
      {/*  image a */}

      <h2 className='post__text'>
        {' '}
        <strong>{username} </strong>
        {caption}{' '}
      </h2>
      {/*  username and caption */}

      <div className='post__commnets'>
        {comments.map((comment) => (
          <p>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>

      {user && (
        <form className='post__commentBox'>
          <input
            className='post__input'
            type='text'
            placeholder='Write a comment...'
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            className='post__button'
            disabled={!comment}
            type='submit'
            onClick={postComment}
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;
