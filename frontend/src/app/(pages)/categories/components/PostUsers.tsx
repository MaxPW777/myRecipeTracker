import React from 'react'

function PostUsers() {
  return (
    <>
        <h1>PostUser</h1>
        <form action="" method="post">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default PostUsers
