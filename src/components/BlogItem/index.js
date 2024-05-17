// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Solution = props => {
  const {items} = props
  const {title, id, imageUrl, avatarUrl, author, topic} = items

  return (
    <li className="listEl3">
      <Link className="listEl" to={`/blogs/${id}`}>
        <img className="imageEl1" alt={title} src={imageUrl} />
        <div className="colArrangeEl1">
          <p>{topic}</p>
          <p>{title}</p>
          <div className="rowArrangeEl1">
            <img className="avatarEl" alt={author} src={avatarUrl} />
            <p className="authorel">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default Solution
