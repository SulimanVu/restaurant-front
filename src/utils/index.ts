export const BASE_URL = "http://localhost:3100";
export const USER_ID_LOCALSTORAGE_KEY = "ls-user-id";
export const JWT_LOCALSTORAGE_KEY = "ls-jwt";
export const CITY_LOCALSTORAGE_KEY = "ls-city";

function clearNumber(value: string = "") {
  return value.replace(/[^0-9]/g, "");
}

export function formatCreditCardNumber(value: string) {
  if (!value) {
    return value;
  }
  const clearValue = clearNumber(value);
  const nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(
    4,
    8
  )} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 16)}`;
  return nextValue.trim();
}

export function formatCVC(value: string) {
  const clearValue = clearNumber(value);
  const maxLength = 3;
  return clearValue.slice(0, maxLength);
}

export function formatExpirationDate(value: string) {
  const clearValue = clearNumber(value);

  if (clearValue.length >= 3) {
    return `${clearValue.slice(0, 2)}/${clearValue.slice(2, 4)}`;
  }

  return clearValue;
}
