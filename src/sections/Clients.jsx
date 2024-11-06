import React, { useState } from 'react';

const Clients = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as an API call
    console.log('Form Data Submitted:', formData);
  };

  return (
    <section className="c-space my-20">
      <h3 className="head-text">Register an account</h3>

      <form onSubmit={handleSubmit} className="client-container bg-gray-900 p-8 rounded-lg shadow-md max-w-md mx-auto">
        <div className="mb-4">
          <label className="block text-white-500 font-light mb-2" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white-500 font-light mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white-500 font-light mb-2" htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-white-500 font-light mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Create your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 text-white rounded-md"
            required
          />
        </div>

        <button type="submit" className="w-full py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-300">
          Register
        </button>
      </form>
    </section>
  );
};

export default Clients;
