// // utility/token.ts

// export const saveToken = (token: string) => {
//   document.cookie = `token=${token}; path=/; httpOnly; Secure; SameSite=Strict`;
// };

// export const clearToken = () => {
//   document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; HttpOnly; Secure; SameSite=Strict`;
// };

// export const getToken = () => {
//   const name = 'token=';
//   const decodedCookie = decodeURIComponent(document.cookie);
//   const cookieArray = decodedCookie.split(';');

//   for (let i = 0; i < cookieArray.length; i++) {
//     let cookie = cookieArray[i];
//     while (cookie.charAt(0) === ' ') {
//       cookie = cookie.substring(1);
//     }
//     if (cookie.indexOf(name) === 0) {
//       return cookie.substring(name.length, cookie.length);
//     }
//   }
//   return "";
// };


const TOKEN_KEY = "token";
const USER_KEY = "user";

export const saveToken = (token: string, user:[]) => {
  sessionStorage.setItem(TOKEN_KEY, token);
  sessionStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const clearToken = () => {
  sessionStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(USER_KEY);
};

export const getToken = () => {
  return sessionStorage.getItem(TOKEN_KEY) || "";
};

export const getUser = ():any => {
  const userStr = sessionStorage.getItem(USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
};
