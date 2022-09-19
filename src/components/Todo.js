import React, { useEffect, useState } from "react";
import { createDuty, deleteDuty, getDuty, updateDuty } from "./Api";
import CardList from "./CardList";
import Header from "./Header";

export const Todo = () => {
  const [duties, setDuties] = useState([]);
  const handleDuties = async () => {
    const resp = await getDuty();
    setDuties(resp.data);
  };

  const handleDeleteDuty = async (id) => {
    const resp = await deleteDuty(id);
    const arr = duties.filter((duty) => duty.id !== resp.data.id);
    setDuties([...arr]);
  };

  const handleCreateDuty = async (description, deadline) => {
    const payload = {
      description: description,
      deadline: deadline,
    };

    const resp = await createDuty(payload);
    setDuties([resp.data, ...duties]);
  };

  const handleEditDuty = async (id) => {
    const arr = duties.filter((duty) => duty.id === id);
    return arr;
  };

  useEffect(() => {
    handleDuties();
  }, []);
  return (
    <>
      <Header handleCreateDuty={handleCreateDuty} />
      <CardList
        duties={duties}
        handleDeleteDuty={handleDeleteDuty}
        handleEditDuty={handleEditDuty}
      />
    </>
  );
};
