import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = "http://3.145.175.88:8080";
// const API_URL = "http://localhost:8080";

const getToken = async () => {
  return await AsyncStorage.getItem('token');
};

const authGet = async (endpoint) => {
  const token = await getToken();
  try {
    const url = `${API_URL}/${endpoint}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const post = async (endpoint, body) => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

const authPost = async (endpoint, body) => {
  const token = await getToken();
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

const authUpdate = async (endpoint, body) => {
  const token = await getToken();
  try {
    const url = `${API_URL}/${endpoint}`;
    
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` 
      },
      body: JSON.stringify(body),
    });
    
    if (!response.ok) {
      if (response.status === 422) {
        const error = await response.json();
        throw new Error(JSON.stringify(error.data));
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return response.json();
  } catch (error) {
    console.error('Error updating data:', error);
    throw error;
  }
};

const authDelete = async (endpoint, body) => {
  const token = await getToken();
  try {
    const url = `${API_URL}/${endpoint}`;

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}` 
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error('Error deleting data:', error);
    throw error;
  }
};

export { authPost, authGet, post, authUpdate, authDelete }; 