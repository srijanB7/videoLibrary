import { Link } from "react-router-dom"
import "./Categorycard.css"
export const Categorycard = ({thumbnail, category}) => {
  return (
    <Link to={`/${category}`} className="category-card-container">
        <img src={thumbnail}/>
        <p>{category}</p>
    </Link>
  )
}
