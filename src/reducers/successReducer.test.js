import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns defaults initial state of `false` when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
});

test('returns state of `true` when action of `CORRECT_GUESS` is passed', () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
});