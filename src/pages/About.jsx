import React from "react";

const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4 p-4">
      <h1 className="text-3xl text-center">About Todo App</h1>
      <p className="text-center max-w-md">
        This Todo App is a simple and efficient way to manage your tasks. You can add, edit, and delete tasks as needed. Stay organized and keep track of your to-dos with ease!
      </p>
    </div>
  );
};

export default About;