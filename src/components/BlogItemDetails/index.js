// Write your JS code here
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import './index.css'

const BlogItemDetails = () => {
  const [loading, setLoading] = useState(true)
  const [information, setInformation] = useState({})
  const {id} = useParams()

  useEffect(() => {
    const getBlogData = async () => {
      const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
      const data = await response.json()
      const updatedData = {
        title: data.title,
        imageUrl: data.image_url,
        avatarUrl: data.avatar_url,
        author: data.author,
        content: data.content,
        topic: data.topic,
      }
      setLoading(false)
      setInformation(updatedData)
    }
    getBlogData()
  }, [id])

  const renderOutput = () => {
    const {title, imageUrl, avatarUrl, author, content} = information

    return (
      <div className="ArrangeColEl">
        <h1 className="titleEl8">{title}</h1>
        <div className="rowArrangeEl1">
          <img className="avatarEl" alt={author} src={avatarUrl} />
          <p>{author}</p>
        </div>
        <img className="imageEl34" alt={title} src={imageUrl} />
        <p>{content}</p>
      </div>
    )
  }

  return (
    <div>
      {loading ? (
        <div data-testid="loader">
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        </div>
      ) : (
        renderOutput()
      )}
    </div>
  )
}

export default BlogItemDetails
