import './App.css';
import jsonData from '../src/Data/data.json'
import { useEffect, useState } from 'react';
import Course from './Components/Course/Course';

function App() {
  console.log(jsonData);
  const first20 = jsonData.slice(0,20);
  const [course, setCourse] = useState(first20);

  useEffect(() => {
    setCourse(course);
  })

  return (
    <div className="App">
      <header className="App-header">
        <div className="course">
          {
            course.map(courseInfo => 
            <Course
              name={courseInfo.name}
              title={courseInfo.title}
              price={courseInfo.price}
              image={courseInfo.image}>
            </Course>)
          }
        </div>
      </header>
    </div>
  );
}

export default App;
