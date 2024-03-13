import React, { useState } from 'react';


const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = {
        name: name,
        email: email,
        phoneNumber: phoneNumber
      };
  
      // Call the addMovieHandler function to send the form data to Firebase
      await addMovieHandler(formData);
  
      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setPhoneNumber('');
      
      // Optionally, you can display a success message or perform any other actions upon successful submission
      console.log('Form submitted successfully');
    } catch (error) {
      // Handle any errors that occur during form submission
      console.error('Error submitting form:', error);
      // Optionally, you can display an error message to the user
    }
  };
  

  async function addMovieHandler(movie) {
    const response = await fetch(
        "https://ecom-app-d53dd-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
  }

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contactus;

