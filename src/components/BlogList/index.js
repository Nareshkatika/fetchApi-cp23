// Write your JS code here
import {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'
import Solution from '../BlogItem'

import './index.css'

const BlogList = () => {
  const [loading, setLoading] = useState(true) // in class components state={isLoading:true,blogsData:[]}
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const getBlogsData = async () => {
      const response = await fetch('https://apis.ccbp.in/blogs')
      const data = await response.json()
      const formattedData = data.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        imageUrl: eachItem.image_url,
        avatarUrl: eachItem.avatar_url,
        author: eachItem.author,
        topic: eachItem.topic,
      }))
      setBlogs(formattedData)
      setLoading(false)
    }
    getBlogsData()
  }, [])

  return (
    <div>
      {loading ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        <ul>
          {blogs.map(eachSol => (
            <Solution key={eachSol.id} items={eachSol} />
          ))}
        </ul>
      )}
    </div>
  )
}

export default BlogList
