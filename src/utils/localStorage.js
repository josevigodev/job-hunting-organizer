export const updateLocalStorage = (key, value) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (error) {
    console.error('Error saving to localStorage', error)
  }
}

export const getLocalStorage = key => {
  try {
    const stored = window.localStorage.getItem(key);
    if (stored) return JSON.parse(stored)
  } catch (error) {
    console.error(error)
    window.localStorage.removeItem(key)
  }
}