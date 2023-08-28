import Post from '../post/Post'
import './posts.css'

export default function Posts({ selectedCategory }) {
  const posts = [
    { title: 'Title 1', categories: ['Life'] },
    { title: 'Title 2', categories: ['Music'] },
    { title: 'Title 3', categories: ['Style'] },
    { title: 'Title 4', categories: ['Sport'] },
    { title: 'Title 5', categories: ['Tech'] },
    { title: 'Title 6', categories: ['Cinema'] },
    // ...
  ];

  const filteredPosts = selectedCategory
    ? posts.filter((post) => post.categories.includes(selectedCategory))
    : posts;

  return (
    <div className='posts'>
      {filteredPosts.map((post, index) => (
        <Post key={index} title={post.title} categories={post.categories} />
      ))}
    </div>
  )
}