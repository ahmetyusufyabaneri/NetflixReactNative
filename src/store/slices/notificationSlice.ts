import {createSlice} from '@reduxjs/toolkit';
import {NotificationSliceTypes} from '../../types';

const initialState: NotificationSliceTypes = {
  pending: false,
  notifications: [
    {
      title: 'Notification 1',
      description: 'First notification here',
      time: '7 Jun',
      read: false,
      path: '/first',
    },
    {
      title: 'Notification 2',
      description: 'Second notification here',
      time: '28 May',
      read: true,
      path: '/second',
    },
  ],
  notificationCount: 2,
};

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = notificationSlice.actions;

export default notificationSlice.reducer;
