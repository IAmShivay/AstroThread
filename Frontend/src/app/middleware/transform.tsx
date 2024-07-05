// redux-persist-transform-expire.ts
import { Transform, createTransform } from 'redux-persist';
import moment from 'moment';

// Define the expiration time (in milliseconds)
// const EXPIRATION_DURATION = 24 * 60 * 60 * 1000; // 24 hours
const EXPIRATION_DURATION = 30 * 1000; // 30 seconds

const expireTransform: Transform<any, any> = createTransform(
  (inboundState, key) => {
    // Attach the timestamp to the state
    return {
      ...inboundState,
      _persistedAt: moment().valueOf(),
    };
  },
  (outboundState, key) => {
    const now = moment().valueOf();
    const persistedAt = outboundState._persistedAt || 0;
    
    // Check if the persisted state is expired
    if (now - persistedAt > EXPIRATION_DURATION) {
      // If expired, return undefined to clear the state
      return null;
    }
    // If not expired, return the state
    return outboundState;
  },
);

export default expireTransform;
