import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar'


function Post() {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar
                    className='post__avatar'
                    alt='Khadar'
                    src='/static/images/avatar/1.jpg'            
                />
                <h3>Username</h3>                
            </div>

            <img className='post__image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuxS6faJE03xuEDTTQpofr8zbe4QngZGZW6g&usqp=CAU' /> 
            {/*  image a */}

            <h2 className='post__text'><strong>Username </strong>MY g naruto doing his ting ya knah</h2>
            {/*  username and caption */}
        </div>
    )
}

export default Post
