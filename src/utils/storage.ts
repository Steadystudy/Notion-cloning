const storage = window.localStorage;

export const setItem = (key: string, value: any) => {
  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error(e);
  }
};

export const getItem = (key: string, defaultValue: any) => {
  try {
    return JSON.parse(storage.getItem(key)) ?? defaultValue;
  } catch (e) {
    console.error(e);
  }
};

export const removeItem = (key: string) => {
  try {
    storage.removeItem(key);
  } catch (e) {
    console.error(e);
  }
};
