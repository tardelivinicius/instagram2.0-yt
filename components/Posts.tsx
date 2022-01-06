import Post from '../components/Post'

const posts = [
    {
        id: '123',
        username: 'vinidellavalle',
        userImg: 'https://media-exp1.licdn.com/dms/image/C4D03AQHzRFdH1kbhYA/profile-displayphoto-shrink_800_800/0/1640409632280?e=1646870400&v=beta&t=4tLfdBWPbfE4v78HS7TYfq8SPdWqPVM85g0vQRyNRKc',
        img: 'https://i.pinimg.com/564x/33/0c/1b/330c1bfea60d85b914a22276981fd34d.jpg',
        caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON FOR THE YT ALGORITHM'
    },
    {
        id: '123',
        username: 'vinidellavalle',
        userImg: 'https://media-exp1.licdn.com/dms/image/C4D03AQHzRFdH1kbhYA/profile-displayphoto-shrink_800_800/0/1640409632280?e=1646870400&v=beta&t=4tLfdBWPbfE4v78HS7TYfq8SPdWqPVM85g0vQRyNRKc',
        img: 'https://i.pinimg.com/750x/9c/72/c2/9c72c222cad5370a31cc9d97128a0139.jpg',
        caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON FOR THE YT ALGORITHM'
    },
    {
        id: '123',
        username: 'vinidellavalle',
        userImg: 'https://media-exp1.licdn.com/dms/image/C4D03AQHzRFdH1kbhYA/profile-displayphoto-shrink_800_800/0/1640409632280?e=1646870400&v=beta&t=4tLfdBWPbfE4v78HS7TYfq8SPdWqPVM85g0vQRyNRKc',
        img: 'https://i.pinimg.com/564x/31/63/33/316333cecdece2a0aede213d10d4cf84.jpg',
        caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON FOR THE YT ALGORITHM'
    },
    {
        id: '123',
        username: 'vinidellavalle',
        userImg: 'https://media-exp1.licdn.com/dms/image/C4D03AQHzRFdH1kbhYA/profile-displayphoto-shrink_800_800/0/1640409632280?e=1646870400&v=beta&t=4tLfdBWPbfE4v78HS7TYfq8SPdWqPVM85g0vQRyNRKc',
        img: 'https://i.pinimg.com/564x/a2/f2/6b/a2f26b2b288d5f062119361803509b03.jpg',
        caption: 'SUBSCRIBE AND DESTROY THE LIKE BUTTON FOR THE YT ALGORITHM'
    },
]
function Posts() {
    return (
        <div>
            {posts.map(post => (
                <Post 
                    key={post.id}
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                />

            ))}
        </div>
    )
}

export default Posts
