const apiEndPoints = {
  home: {
    getUserLists: () => '/posts',
  },
  user: {
    getUserDetails: (id) => `/users/${id}`,
  },
};

export default apiEndPoints;
