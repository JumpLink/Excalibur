import * as ex from '@excalibur';

describe('Excalibur Math', () => {
  it('can convert radians to degrees', () => {
    const angleInRadians = Math.PI * 3;
    expect(ex.Util.toDegrees(angleInRadians)).toBe(540);
  });

  it('can convert degrees to radians', () => {
    const angleInDegrees = 540;
    expect(ex.Util.toRadians(angleInDegrees)).toBe(Math.PI * 3);
  });

  it('can canonicalize angles larger than 2PI', () => {
    const angleLargerThan2Pi = Math.PI * 3 + Math.PI / 2;
    expect(ex.Util.canonicalizeAngle(angleLargerThan2Pi)).toBe(
      (3 / 2) * Math.PI
    );
  });

  it('can canonicalize angles less than 2PI', () => {
    const angleLessThanZero = -Math.PI / 4;
    expect(ex.Util.canonicalizeAngle(angleLessThanZero)).toBe(
      (7 / 4) * Math.PI
    );
  });

  it('can clamp a value larger than a range', () => {
    const value = 20;
    expect(ex.Util.clamp(value, 4, 10)).toBe(10);
  });

  it('can clamp a value smaller than a range', () => {
    const value = 2;
    expect(ex.Util.clamp(value, 4, 10)).toBe(4);
  });

  it('can clamp a value in a range', () => {
    const value = 6;
    expect(ex.Util.clamp(value, 4, 10)).toBe(6);
  });

  it('has a constant for 2 Pi', () => {
    expect(ex.Util.TwoPI).toBe(2 * Math.PI);
  });
});
