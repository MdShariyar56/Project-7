import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Container from '../Container/Container';

const CardList = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetch("/tickets.json")
      .then(res => res.json())
      .then(data => setTickets(data))
      .catch(err => console.error(err));
  }, []);


  const getPriorityColor = (priority) => {
  switch(priority) {
    case "HIGH PRIORITY":
      return "text-[#F83044]";
    case "MEDIUM PRIORITY":
      return "text-[#FEBB0C]";
    case "LOW PRIORITY":
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
    <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>
    <div className='py-7 px-5 grid grid-cols-1 md:grid-cols-2 gap-6'>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card bg-base-100 shadow-sm rounded-lg p-5">
          {/* Ticket Header */}
          <div className='flex justify-between items-center mb-3'>
            <h2 className="card-title text-gray-800 font-bold">{ticket.title}</h2>
            <button
              className={`flex items-center gap-2 rounded-full px-4 py-1 ${
                ticket.status === "Open"
                  ? "bg-[#B9F8CF] text-[#02A53B]"
                  : "bg-[#F8F3B9] text-[#9C7700]"
              }`}
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  ticket.status === "Open" ? "bg-[#02A53B]" : "bg-[#9C7700]"
                }`}
              ></span>
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

  {/* Right: Task Status */}
  <div className="w-80">
    <h1 className="text-2xl font-bold mb-4">Task Status</h1>
    <div className="space-y-4">
      {/* Example Task Cards */}
      <div className="card bg-base-100 shadow-sm rounded-lg p-4">
        <h2 className="font-semibold text-gray-800">Task Status</h2>
        <p className="text-gray-400">Select a ticket to add to Task Status</p>
        <button className="btn btn-sm bg-green-400 text-white mt-2 rounded-full px-3 py-1">
          Complete
        </button>
      </div>

      <div className="card bg-base-100 shadow-sm rounded-lg p-4">
        <h2 className="font-semibold text-gray-800">Resolved Task</h2>
        <p className="text-gray-400">No resolved tasks yet.</p>
        <button className="btn btn-sm bg-green-400 text-white mt-2 rounded-full px-3 py-1">
          Complete
        </button>
      </div>
    </div>
  </div>
</div>

      
    </Container>
  );
};

export default CardList;
