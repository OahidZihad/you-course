import './App.css';
import jsonData from '../src/Data/data.json'
import { useEffect, useState } from 'react';
import Course from './Components/Course/Course';
import Cart from './Components/Cart/Cart';

function App() {
  // console.log(jsonData);
  const first20 = jsonData.slice(0,20);
  const [course, setCourse] = useState(first20);
  const [price, setPrice] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(0);

  const handleAddCourse = (myPrice) => {
    setSelectedCourse(selectedCourse+1);
    const newPrice = [...price, myPrice];
    setPrice(newPrice);
  }

  useEffect(() => {
    setCourse(course);
  }, [])

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <div className="course">
          {
            course.map(courseInfo => 
            <Course
              handleAddCourse = {handleAddCourse}
              name={courseInfo.name}
              title={courseInfo.title}
              price={courseInfo.price}
              image={courseInfo.image}>
            </Course>)
          }
        </div>
        <div>
          {
            <Cart total={course.length} selectedCourse={selectedCourse} price={price} ></Cart>
          }
        </div>
      {/* </header> */}
    </div>
  );
}

export default App;
