export const getUser = () => {
  const storage = window.localStorage;
  const testData = { name: "testUser" };
  const localUser = storage.getItem("user");
  
  if (localUser === null) {
    storage.setItem("user", testData.name);
    const localUser = storage.getItem("user");
  } else {
  }
  return localUser;
};
