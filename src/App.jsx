import React, { useState, useEffect } from "react";
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Box from './Components/Box/Box';
import Card from './Components/Card/Card';

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
      alert(`${ticket.title} added to Task Status`);
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
      alert(`${ticket.title} completed!`);
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
    </>
  );
};

export default App;
