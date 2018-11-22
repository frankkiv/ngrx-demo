import { numReducer, initialState } from './num.reducer';
import * as Actions from '../action/num.actions';

describe('Num Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = numReducer(initialState, action);
      console.log(0);
      console.log(result);
      console.log(initialState);
      expect(result).toBe(initialState);
    });
  });

  describe('action ADD', () => {
    it('should return the initial state', () => {
      const action = new Actions.ADD({ data: 1});
      const result = numReducer(initialState, action);
      console.log(1);
      console.log(result);
      console.log(initialState);
      expect(result.count).toBe(1);
    });
  });

  describe('action SUB', () => {
    it('should return the initial state', () => {
      const action = new Actions.SUB({ data: 1});
      const result = numReducer(initialState, action);
      console.log(2);
      console.log(result);
      console.log(initialState);
      expect(result.count).toBe(-1);
    });
  });
});
