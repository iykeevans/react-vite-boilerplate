export const crushToken = (tokenName: string) => {
  return localStorage.removeItem(tokenName);
};

export const getToken = (tokenName: string) => {
  return localStorage.getItem(tokenName);
};

export const setToken = (tokenData: { name: string; value: string }) => {
  return localStorage.setItem(tokenData.name, tokenData.value);
};
