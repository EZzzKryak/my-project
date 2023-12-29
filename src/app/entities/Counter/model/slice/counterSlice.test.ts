import { CounterSchema } from '../..';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.decrement()))
            .toEqual({ value: 9 });
    });
});

describe('counterSlice.test', () => {
    test('', () => {
        const state: CounterSchema = { value: 10 };
        expect(counterReducer(state, counterActions.increment()))
            .toEqual({ value: 11 });
    });
});

describe('should work with empty state', () => {
    test('', () => {
        expect(counterReducer(undefined, counterActions.increment()))
            .toEqual({ value: 1 });
    });
});
