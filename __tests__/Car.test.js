import Car from '../src/models/Car';
import { CAR } from '../src/Template/index.js';
import randomNumberInRange from '../src/utils/RandomNumberInRange';
import Validator from '../src/utils/Validator';

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
});

describe('Model 테스트', () => {
  test(`거리가 ${CAR.initialDistance}일 때 2번 움직이면 ${CAR.initialDistance + 2}이 된다.`, () => {
    const car = new Car('car');

    car.move();
    car.move();

    expect(car.getDistance()).toBe(3);
  });
});

describe('utils 테스트', () => {
  describe('Validator 테스트', () => {
    test('입력값에 공백이 있으면 에러가 발생한다.', () => {
      expect(() => Validator.checkBlank('a, b, c')).toThrow();
    });

    test('이름들을 입력할 때 마지막이 쉼표면 에러가 발생한다.', () => {
      expect(() => Validator.checkLastComma('a,b,c,')).toThrow();
    });

    test('이름의 길이가 0이면 에러가 발생한다.', () => {
      expect(() => Validator.checkNameLength('a,b,c,')).toThrow();
    });

    test('중복된 이름이 있으면 에러가 발생한다.', () => {
      expect(() => Validator.checkDuplicate('a,a')).toThrow();
    });

    test('정수가 아니면 에러가 발생한다.', () => {
      expect(() => Validator.checkIntegerNumber('2.4')).toThrow();
    });
  });

  test('함수의 범위가 0~9이고 랜덤값이 0.1이 나오면 결과는 1이 나온다.', () => {
    expect(randomNumberInRange(0, 9)).toBe(1);
  });
});
