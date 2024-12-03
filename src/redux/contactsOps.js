import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://674f4c61bb559617b26ec626.mockapi.io/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('');
      return response.data;
    } catch (error) {
      console.error('Fetch error:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('', {
        name: contact.name,
        number: contact.number,
      });
      return response.data;
    } catch (error) {
      console.error('Add contact error:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/${id}`);
      return id;
    } catch (error) {
      console.error('Delete contact error:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
