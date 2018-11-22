import { numReducer, initialState } from './num.reducer';
import * as Actions from '../action/num.actions';

describe('Num Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;

      const result = numReducer(initialState, action);
      expect(result).toBe(initialState);
    });
  });

  describe('action ADD', () => {
    it('should return the initial state', () => {
      const action = new Actions.ADD;

      const result = numReducer(initialState, action);
      expect(result.count).toBe(1);
    });
  });

  describe('action SUB', () => {
    it('should return the initial state', () => {
      const action = new Actions.SUB;

      const result = numReducer(initialState, action);
      expect(result.count).toBe(0);
    });
  });
});
