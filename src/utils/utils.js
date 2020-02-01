export const getUser = () => {
  const storage = window.localStorage;

  const testData = {
    name: 'testUser',
    workouts: { bicepCurls: [[3, 10, 'date']] },
  };
  const localUser = storage.getItem('user');

  if (localUser === null) {
    storage.setItem('user', JSON.stringify(testData));
    const localUser = storage.getItem('user');
  } else {
    storage.setItem('user', JSON.stringify(testData));
    const localUser = storage.getItem('user');
  }
  return localUser;
};
