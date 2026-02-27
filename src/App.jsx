import React, {useState} from 'react'

function App() {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState("")
    const handleAddTask = (e) => {
        e.preventDefault()
        setTasks([...tasks, task])
        setTask("")
    }
  return (
      <div className='flex justify-center'>
          <div className='max-w-xl w-full mt-6 flex flex-col gap-7 mx-auto'>
              <h1>Task Managment</h1>
              <form className='w-full flex flex-row gap-2' onSubmit={handleAddTask}>
                  <input
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                      className='bg-white w-full border px-4 py-5'
                      placeholder='Enter your task'
                      type='text'
                  />
                  <button type='submit' className='border max-w-49.5 w-full cursor-pointer px-6 py-1'>
                      Enter
                  </button>
              </form>
              <div className='flex flex-col gap-4'>
                  {tasks.map((item, i) => (
                      <div key={i} className='flex justify-between rounded-md bg-gray-300'>
                          <p>{item}</p>
                          <button className='rounded-full px-5 px-4 bg-red-500 text-white'>
                              X
                          </button>
                      </div>
                  ))}
              </div>
          </div>
      </div>
  );
}

export default App
