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

const numberOnly = (str: string | undefined) =>
  !str || !!parseFloat(str) || 'Please provide a number.';

export {numberOnly, categoryBodyMassIndex, calculateBodyMassIndex};
