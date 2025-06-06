import {createSlice} from '@reduxjs/toolkit';
import {NotificationSliceTypes} from '../../types';

const initialState: NotificationSliceTypes = {
  pending: false,
  notifications: [
    {
      title: 'Merhaba',
      time: '12.30',
      path: '/merhaba',
    },
  ],
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = notificationSlice.actions;

export default notificationSlice.reducer;
