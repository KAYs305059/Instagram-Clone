import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar'


function Post({username, caption, imageUrl}) {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar
                    className='post__avatar'
                    alt='Khadar'
                    src='/static/images/avatar/1.jpg'            
                />
                <h3>{username}</h3>                
            </div>

            <img className='post__image' src={imageUrl} alt='' /> 
            {/*  image a */}

            <h2 className='post__text'><strong>{username} </strong>{caption}</h2>
            {/*  username and caption */}
        </div>
    )
}

export default Post
