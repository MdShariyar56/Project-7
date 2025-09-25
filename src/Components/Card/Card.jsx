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
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Customer Tickets */}
        <div className="flex-1">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Customer Tickets</h1>
          <div className='py-7 px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
            {tickets.map((ticket) => (
              <div 
                key={ticket.id} 
                className="card bg-base-100 shadow-sm rounded-lg p-5 cursor-pointer hover:shadow-md transition"
                onClick={() => handleClick(ticket)}
              >
                <div className='flex justify-between items-center mb-3'>
                  <h2 className="card-title text-gray-800 font-semibold">{ticket.title}</h2>
                  <button
                    className={`flex items-center gap-2 rounded-full px-4 py-1 text-xs sm:text-sm ${ticket.status === "Open" ? "bg-[#B9F8CF] text-[#02A53B]" : "bg-[#F8F3B9] text-[#9C7700]"}`}
                  >
                    <span className={`w-3 h-3 rounded-full ${ticket.status === "Open" ? "bg-[#02A53B]" : "bg-[#FEBB0C]"}`}></span>
                    {ticket.status}
                  </button>
                </div>
                <p className="text-gray-700 mb-3 text-sm sm:text-base">{ticket.description}</p>
                <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm text-gray-600 gap-2 sm:gap-0'>
                  <div className='flex items-center gap-4'>
                    <p className="text-xs sm:text-sm">{ticket.id}</p>
                    <p className={`px-2 py-1 rounded-full text-xs sm:text-sm ${getPriorityColor(ticket.priority)}`}>{ticket.priority}</p>
                  </div>
                  <div className='flex items-center gap-2 text-xs sm:text-sm'>
                    <p>{ticket.customer}</p>
                    <FontAwesomeIcon icon={faCalendar} className="text-gray-500" />
                    <p>{new Date(ticket.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Task Status & Resolved */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Task Status</h1>
          <div className="space-y-4">
            {taskStatus.length === 0 && <p className="text-gray-500 text-sm">Select a ticket to add to Task Status</p>}
            {taskStatus.map(ticket => (
              <div key={ticket.id} className="card bg-base-100 text-lg shadow-sm rounded-lg p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <p className="text-sm sm:text-base font-medium">{ticket.title}</p>
                <button
                  onClick={() => handleComplete(ticket.id)}
                  className="btn btn-sm w-full sm:w-auto bg-[#02A53B] text-white rounded px-3 py-1 mt-1 sm:mt-0"
                >
                  Complete
                </button>
              </div>
            ))}

            {/* Resolved Tasks */}
            <div className="card bg-base-100 shadow-sm rounded-lg p-2">
              <h2 className="text-gray-800 text-xl sm:text-2xl font-semibold mb-2">Resolved Task</h2>
              {resolvedTasks.length === 0 ? (
                <p className="text-gray-400 text-sm">No resolved tasks yet.</p>
              ) : (
                <ul className="space-y-2">
                  {resolvedTasks.map(ticket => (
                    <li
                      key={ticket.id}
                      className="bg-[#E0E7FF] p-3 rounded-md shadow-sm text-sm sm:text-base"
                    >
                      <p className="font-semibold">{ticket.title}</p>
                      <p className="text-gray-500">Completed</p>
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
