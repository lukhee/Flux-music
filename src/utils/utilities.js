export const getAccessToken = () => {
  return localStorage.getItem(process.env.tokenName);
};

export const verifyToken = () => {
  return localStorage.getItem(process.env.refreshToken);
};

export const findObjectByKey = (array = {}, key) => {
  if (key in array === true) {
    return array[key];
  }
  return;
};
