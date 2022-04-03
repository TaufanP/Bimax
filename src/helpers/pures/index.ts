const numberOnly = (str: string | undefined) =>
  !str || !!parseFloat(str) || 'Please provide a number.';

export {numberOnly};
