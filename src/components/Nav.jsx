import { Link } from "react-router-dom";

export default (props) => {
    return (
        <nav>
            <ul>
                <li><Link to="/todo" role="button" className="contrast outline">ToDo App</Link></li>
                <li><Link to="/imageCarousel" role="button" className="contrast outline">Image Carousel</Link></li>
            </ul>
        </nav>
    )
}