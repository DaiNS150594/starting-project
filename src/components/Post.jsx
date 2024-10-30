import { Link } from 'react-router-dom';
import style from './Post.module.css';

function Post({id, author, body}) {

  return (
    <div className={style.post}>
      <Link to={id}>
      
        <p className={style.author}>{author}</p>
        <p className={style.text}>{body}</p>
      </Link>
    </div>
  )
}

export default Post;