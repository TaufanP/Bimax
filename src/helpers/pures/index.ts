import {IGender} from '~types';

/**
 *
 * @param gender Male or Female
 * @param weight body weight in kg
 * @param height body height in cm
 * @returns basal metabolic rate in kcal/day
 */
const basalMetabolicRate = (
  gender: IGender,
  weight: number,
  height: number,
): string => {
  if (gender === 'Female') {
    return (655.1 + 9.563 * weight + 1.85 * height - 4.676 * 24).toFixed(2);
  }
  return (66.5 + 13.75 * weight + 5.003 * height - 6.75 * 24).toFixed(2);
};

const bmrIndicator = (bmi: number): string => {
  if (bmi < 18.5) return 'more than';
  if (bmi < 24.9 && bmi >= 18.5) return 'around';
  if (bmi > 24.9) return 'less than';
  return '';
};

/**
 *
 * @param height body height
 * @param weight body weight
 * @returns BMI in kg/m^2
 */
const calculateBodyMassIndex = (height: number, weight: number): string =>
  ((weight * 10000) / (height * height)).toFixed(2);

/**
 *
 * @param bmi body mass index in kg/m^2
 * @returns bmi category like underweight, ideal, overweight, and obesity.
 */
const categoryBodyMassIndex = (bmi: number): string => {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 24.9 && bmi >= 18.5) return 'ideal';
  if (bmi < 30 && bmi >= 24.9) return 'overweight';
  if (bmi > 30) return 'obesity';
  return '';
};

/**
 *
 * @returns list of random numbers
 */
const generateRandomNumbers = (): number[] => {
  const numbers = new Array(6).fill(0);
  return numbers.map(() => randomNumber());
};

const numberOnly = (str: string | undefined) =>
  !str || !!parseFloat(str) || 'Please provide a number.';

/**
 *
 * @param list list of numbers
 * @returns order numbers from the smallest one
 */
const smallestNumbers = (list: number[]): number[] =>
  list.sort((a, b) => (a - b < 1 ? -1 : 1));

/**
 *
 * @param cardinal integer
 * @returns return integer with its ordinal
 */
const ordinalNumbers = (cardinal: string): string => {
  const index = cardinal[cardinal.length - 1];
  if (index === '1' && cardinal !== '11') return `${cardinal}st`;
  if (index === '2' && cardinal !== '12') return `${cardinal}nd`;
  if (index === '3' && cardinal !== '13') return `${cardinal}rd`;
  return `${cardinal}th`;
};

const randomNumber = () => Math.floor(Math.random() * (9999 - 100 + 1) + 100);

export {
  basalMetabolicRate,
  bmrIndicator,
  numberOnly,
  categoryBodyMassIndex,
  calculateBodyMassIndex,
  generateRandomNumbers,
  smallestNumbers,
  ordinalNumbers,
};
