import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editTask, setEditTask] = useState(null);

  const handleAddTask = () => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
    setNewTask({ title: "", description: "" });
  };

  const handleEditTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? editTask : task
    );
    setTasks(updatedTasks);
    setEditTask(null);
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4 p-4">
      <h1 className="text-3xl text-center">Todo App</h1>
      <div className="w-full max-w-md space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Add New Task</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="mb-2"
            />
            <Textarea
              placeholder="Description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
          </CardContent>
          <CardFooter>
            <Button onClick={handleAddTask}>Add Task</Button>
          </CardFooter>
        </Card>
        {tasks.map((task) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle>{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{task.description}</p>
            </CardContent>
            <CardFooter className="flex space-x-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Edit</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Task</DialogTitle>
                  </DialogHeader>
                  <Input
                    placeholder="Title"
                    value={editTask?.title || task.title}
                    onChange={(e) =>
                      setEditTask({ ...task, title: e.target.value })
                    }
                    className="mb-2"
                  />
                  <Textarea
                    placeholder="Description"
                    value={editTask?.description || task.description}
                    onChange={(e) =>
                      setEditTask({ ...task, description: e.target.value })
                    }
                  />
                  <Button onClick={() => handleEditTask(task.id)}>Save</Button>
                </DialogContent>
              </Dialog>
              <Button variant="destructive" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;