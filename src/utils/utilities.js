export const getAccessToken = () => {
  return localStorage.getItem(process.env.tokenName);
};

export const verifyToken = () => {
  return localStorage.getItem(process.env.refreshToken);
};
