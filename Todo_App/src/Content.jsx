import React from 'react';


function Content({ list_item, setList_Item, task_name, setTask_Name, task_date, setTask_Date }) {

  function handle_task_addon() {
    const newTask = { id: list_item.length + 1, task: task_name, date: task_date };
    const updated_list=[...list_item, newTask];
    setList_Item(updated_list);
    setTask_Name('');
    setTask_Date('');
    console.log(updated_list)
  }

  return (
    <div className='Content'>
      <form onSubmit={(e) => { e.preventDefault(); handle_task_addon(); }}>
        <div className="task_name">
          <input 
            type="text"
            required
            placeholder='Type here...'
            value={task_name}
            onChange={(e) => setTask_Name(e.target.value)}            
          />
        </div>   
        <div className="task_date">
          <input 
            type="date"
            value={task_date}
            required
            onChange={(e) => setTask_Date(e.target.value)}            
          />
        </div>   
        <div className="addButton">
          <button type="submit">Add</button>
        </div>  
      </form>
    </div>
  );
}

export default Content;
