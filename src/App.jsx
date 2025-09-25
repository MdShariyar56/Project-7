import React, { useState, useEffect } from "react";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Box from './Components/Box/Box';
import Card from './Components/Card/Card';
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const App = () => {
  const [tickets, setTickets] = useState([]); // main tickets
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]); // clicked tickets
  const [resolvedTasks, setResolvedTasks] = useState([]); // completed tickets

  useEffect(() => {
    fetch("/tickets.json")
      .then(res => res.json())
      .then(data => setTickets(data))
      .catch(err => console.error(err));
  }, []);

  // add ticket to Task Status
  const handleAddTask = (ticket) => {
    if (!taskStatus.find(t => t.id === ticket.id) && !resolvedTasks.find(t => t.id === ticket.id)) {
      setTaskStatus(prev => [...prev, ticket]);
      setInProgressCount(prev => prev + 1);
      toast.success("In Progress!");
     
    }
  };

  // complete a ticket
  const handleComplete = (ticketId) => {
    const ticket = taskStatus.find(t => t.id === ticketId);
    if (ticket) {
      setTaskStatus(prev => prev.filter(t => t.id !== ticketId));
      setResolvedTasks(prev => [...prev, ticket]);
      setTickets(prev => prev.filter(t => t.id !== ticketId)); // remove from main tickets
      setInProgressCount(prev => (prev > 0 ? prev - 1 : 0));
      setResolvedCount(prev => prev + 1);
      toast.success("Completed!");
      

    }
  };

  return (
    <>
      <Navbar />
      <Box inProgress={inProgressCount} resolved={resolvedCount} />
      <Card 
        tickets={tickets}
        addTask={handleAddTask} 
        handleComplete={handleComplete} 
        taskStatus={taskStatus} 
        resolvedTasks={resolvedTasks}
      />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        style={{
          color: "#000000",      // Black text
          fontWeight: "bold",
  }}
/>


    </>
  );
};

export default App;
