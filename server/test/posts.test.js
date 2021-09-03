const axios = require('axios')


test('should get posts', async function() {
    const response = await axios({
        url: 'http://localhost:3000/posts',
        method: 'get'
    })    
    const posts = response.data
    expect(posts).toHaveLength(3)
    const [firstPosts] = posts
})