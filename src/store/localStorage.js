export const loadState = () => {
  try {
    const loadState = JSON.parse(localStorage.getItem("state"));

    if (loadState === null) {
      return undefined;
    }

    return loadState;
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const save = JSON.stringify(state);
    localStorage.setItem("state", save);
  } catch (err) {
    throw err;
  }
};
