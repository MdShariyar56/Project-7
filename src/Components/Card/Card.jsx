import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Container from '../Container/Container';

const Card = ({ tickets, addTask, handleComplete, taskStatus, resolvedTasks }) => {
  const [clickedTickets, setClickedTickets] = useState([]);

  const handleClick = (ticket) => {
    if (!clickedTickets.includes(ticket.id)) {
      setClickedTickets([...clickedTickets, ticket.id]);
      addTask(ticket);
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case "HIGH PRIORITY":
        return "text-[#F83044]";
      case "MEDIUM PRIORITY":
        return "text-[#FEBB0C]";
      case "LOW PRIORITY":
        return "text-[#02A53B]";
      default:
        return "text-gray-500";
    }
  };

  return (
    <Container>
      <div className="flex justify-between items-start gap-6">
        {/* Left: Customer Tickets */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Customer Tickets</h1>
          <div className='py-7 px-5 grid grid-cols-1 md:grid-cols-2 gap-6'>
            {tickets.map((ticket) => (
              <div 
                key={ticket.id} 
                className="card bg-base-100 shadow-sm rounded-lg p-5 cursor-pointer"
                onClick={() => handleClick(ticket)}
              >
                <div className='flex justify-between items-center mb-3'>
                  <h2 className="card-title text-gray-800 font-semibold">{ticket.title}</h2>
                  <button
                    className={`flex items-center gap-2 rounded-full px-4 py-1 ${ticket.status === "Open" ? "bg-[#B9F8CF] text-[#02A53B]" : "bg-[#F8F3B9] text-[#9C7700]"}`}
                  >
                    <span className={`w-3 h-3 rounded-full ${ticket.status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"}`}></span>
                    {ticket.status}
                  </button>
                </div>
                <p className="text-gray-700 mb-3">{ticket.description}</p>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <div className='flex items-center gap-4'>
                    <p>{ticket.id}</p>
                    <p className={`px-3 py-1 rounded-full ${getPriorityColor(ticket.priority)}`}>{ticket.priority}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <p>{ticket.customer}</p>
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-500" />
                    <p>{new Date(ticket.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/*  */}
        <div className="w-80">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Task Status</h1>
          <div className="space-y-4">
            {taskStatus.length === 0 && <p className="text-gray-500">Select a ticket to add to Task Status</p>}
            {taskStatus.map(ticket => (
              <div key={ticket.id} className="card bg-base-100 fond-bold  text-lg shadow-sm rounded-lg p-1 flex justify-between items-center">
                <p>{ticket.title}</p>
                <button
                  onClick={() => handleComplete(ticket.id)}
                  className="btn btn-sm w-full bg-[#02A53B] text-white rounded px-3 py-1 mt-1"
                >
                  Complete
                </button>
              </div>
            ))}

            {/* Resolved ar part*/}
            <div className="card bg-base-100 shadow-sm rounded-lg p-2">
              <h2 className=" text-gray-800 text-2xl font-semibold mb-2">Resolved Task</h2>
              {resolvedTasks.length === 0 ? (
                <p className="text-gray-400">No resolved tasks yet.</p>
              ) : (
                
               <ul className="space-y-2">
  {resolvedTasks.map(ticket => (
    <li
      key={ticket.id}
      className="bg-[#E0E7FF] p-3 rounded-md shadow-sm"
    >
      <p className="font-semibold">{ticket.title}</p>
      <p className="text-sm text-gray-500">Completed</p>
    </li>
  ))}
</ul>

              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Card;
