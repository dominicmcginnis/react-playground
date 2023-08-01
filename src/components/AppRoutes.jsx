import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import ToDo from './ToDo';
import ImageCarousel from './ImageCarousel';

export default () => {
    return (
        <Routes> 
            <Route index path="todo" element={<ToDo />} />
            <Route path="imageCarousel" element={<ImageCarousel />} />
        </Routes>
    )
}