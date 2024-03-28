import React, { useState, useEffect } from 'react';

useEffect(() => {
    const fetchData = async () => {
    try {
    const response = await fetch('https://api.example.com/posts?userId=1');
    const result = await response.json();
    setData(result);
    setLoading(false);
    } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false);
    }
    };
    fetchData();
   }, []);
   const ApiExample = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
    const fetchData = async () => {
    try {
    const response = await fetch('https://api.example.com/posts?userId=1');
    if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    setData(result);
    setLoading(false);
    } catch (error) {
    console.error('Error fetching data:', error);
    setError('An error occurred while fetching the data. Please try again later.');
    setLoading(false);
    }
    };
    fetchData();
    }, []);
    return (
        <div>
        <h1>API Data</h1>
        {loading ? (
        <p>Loading...</p>
        ) : error ? (
        <p>{error}</p>
        ) : (
        <ul>
        {data.map((item) => (
        <li key={item.id}>{item.title}</li>
        ))}
        </ul>
        )}
        </div>
       );
       };   
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DisplayData = () => {
 const [apiData, setApiData] = useState(null);
 useEffect(() => {
 const fetchData = async () => {
 try {
 const response = await axios.get('https://api.example.com/data');
 setApiData(response.data);
 } catch (error) {
 console.error('Error fetching data:', error);
 }
 };
 fetchData();
 }, []);
 return (
    <div>
    <h2>API Data Display</h2>
    {apiData ? (
    // Render your component using the fetched data
    <MyComponent data={apiData} />
    ) : (
    // Render a loading state or placeholder
    <p>Loading...</p>
    )}
    </div>
    );
   };
   const MyComponent = ({ data }) => {
    return (
    <div>
    <p>{data.message}</p>
    {/* Render other components based on data */}
    </div>
    );
   };
   const UpdateData = () => {
    const [updatedData, setUpdatedData] = useState('');
    const handleUpdate = async () => {
    try {
    await axios.put('https://api.example.com/data/1', { updatedData });
    alert('Data updated successfully!');
    // Optionally, fetch and update the displayed data
    } catch (error) {
    console.error('Error updating data:', error);
    }
    };
    return (
    <div>
    <h2>Update Data</h2>
    <input
    type="text"
    value={updatedData}
    onChange={(e) => setUpdatedData(e.target.value)}
    />
    <button onClick={handleUpdate}>Update</button>
    </div>
    );
   };
   export default UpdateData;
   const DeleteData = () => {
    const handleDelete = async () => {
    try {
    await axios.delete('https://api.example.com/data/1');
    alert('Data deleted successfully!');
    // Optionally, fetch and update the displayed data
    } catch (error) {
    console.error('Error deleting data:', error);
    }
    };
    return (
    <div>
    <h2>Delete Data</h2>
    <button onClick={handleDelete}>Delete</button>
    </div>
    );
   };
  
       
                 