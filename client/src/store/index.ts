import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice';
import lessonReducer from './lesson/lessonSlice';
import scheduleReducer from './schedule/scheduleSlice';
import resourceReducer from './resource/resourceSlice';
import notificationReducer from './notification/notificationSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    lesson: lessonReducer,
    schedule: scheduleReducer,
    resource: resourceReducer,
    notification: notificationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore specific action types
        ignoredActions: ['auth/loginSuccess', 'auth/registerSuccess'],
        // Ignore specific field paths in state
        ignoredPaths: ['auth.user', 'user.currentUser'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;