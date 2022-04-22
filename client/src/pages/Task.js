import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function Task() {
  let { id } = useParams();
  const [taskObject, setTaskObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/tasks/byId/${id}`).then((response) => {
      setTaskObject(response.data);
    });
  }, []);

  return (
    <div>
      <div className='task-container'>
        <div className='taskName'>{taskObject.taskName}</div>
        <div className='taskDescription'>{taskObject.description}</div>
      </div>
    </div>
  );
}

export default Task;