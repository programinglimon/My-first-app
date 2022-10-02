import React, { useEffect, useState } from 'react';

function Post(props) {

    const [user , setUser] = useState([])

    useEffect(() => {
        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
        
      }, []);
      
    return (
        <div>
            <h2>I am post</h2>
            <h3>{
                user.map(users => <li>{users.name}</li> )
            }</h3>
            
        </div>
    );
}

export default Post;