export const saveToken = (token: string, expireDate: Date) => {
  const expires = new Date(expireDate).toUTCString();
  document.cookie = `authToken=${token}; expires=${expires}; path=/; Secure; HttpOnly; SameSite=Strict;`;
  };
  
  export const clearToken = () => {
    const expires = new Date(0).toUTCString();
    document.cookie = `authToken=; expires=${expires}; path=/; Secure; HttpOnly; SameSite=Strict;`;
  };
  
  
  export const getToken = () => {
    const name = 'authToken=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  };
  