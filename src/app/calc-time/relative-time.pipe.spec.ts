import { CalcTimePipe } from './relative-time.pipe';

describe('RelativeTimePipe', () => {
  it('create an instance', () => {
    const pipe = new CalcTimePipe();
    expect(pipe).toBeTruthy();
  });
});
