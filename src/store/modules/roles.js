export const roles = {
  state: [
    {
      id: 1,
      title: 'Pastor'
    },
    {
      id: 2,
      title: 'Deacon'
    }
  ],
  getters: {
    getRoleById: (state, getters) => id => {
      return state.find(role => role.id === id);
    }
  },
  mutations: {
    ADD_ROLE(state, payload) {
      const { type, ...truePayload } = payload;
      state.push({
        id: Math.floor(Math.random() * (999999 - 1) + 1),
        ...truePayload
      });
    }
  }
};
