"use client"
import React, {useState} from "react";
import { motion } from "framer-motion";
import { useRef } from "react";

const Page = () =>{
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setMaintask] = useState([]);
  const constraintsRef = useRef(null);
  const submitHandler = (e)=>{
    e.preventDefault();
    setMaintask([...mainTask, {title, desc}]);
    console.log(mainTask);
    settitle("");
    setdesc("");
  }
  const deleteHandler=(index)=>{
    let copyTask = [...mainTask];
    copyTask.splice(index,1);
    setMaintask(copyTask);
  }
  let renderTask
  mainTask.length>0?
  renderTask = mainTask.map((task,index)=>{
    return <motion.li drag dragConstraints={constraintsRef} key={index} className="list-none w-1/5 m-4">
     <div drag className="md:w-full w-72 h-72 border-2 border-blue-500 rounded-md m-4 p-2 text-wrap flex flex-col object-contain justify-between">
     <div>

      <h5 className="pb-2">Title: <span className="font-bold text-3xl">{task.title}</span></h5>
      <h6 className="py-2">Description:<span>{task.desc}</span></h6>
     </div>
      <button className="bg-red-500 p-1 border-black border-2 rounded-sm" onClick={()=>{deleteHandler(index)}}>Delete</button>
    </div>
    </motion.li>
  }):renderTask = <h2>No Task available</h2>

  return (
    <div className="h-screen">
    <div className="text-center text-4xl text-white bg-black p-3">To do List</div>
    <div className="flex justify-center">
    <form onSubmit={submitHandler}>
      <input type="text"
        className="2xl border-black border-2 m-5 px-3 py-1"
        placeholder="Enter task name"
        value = {title}
        onChange={(e)=>{settitle(e.target.value)}}
       />
      <input type="text"
        className="2xl border-black border-2 m-5 px-3 py-1"
        placeholder="Enter task description"
        value={desc}
        onChange={(e)=>{setdesc(e.target.value)}}
       />
      <button className="bg-black text-white p-2 rounded-md">Add Task</button>
    </form>
    </div>
    <hr/>
    <motion.div ref={constraintsRef} className="flex md:flex-row flex-col flex-wrap w-screen overflow-hidden">
      {renderTask}
    </motion.div>
    </div>
  )
}

export default page;