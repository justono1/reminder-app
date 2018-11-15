export const people = {
  state: [
    {
      id: 1,
      name: 'Paul Holland',
      email: 'paul@example.com',
      phone: '231-342-5576'
    },
    {
      id: 2,
      name: 'Rachel Gauthier',
      email: 'rachel.gauthier@marxmoda.com',
      phone: '231-590-6186'
    }
  ],
  mutations: {
    ADD_PERSON(state, payload) {
      const { type, ...truePayload } = payload;
      state.push({
        id: Math.floor(Math.random() * (999999 - 1) + 1),
        ...truePayload
      });
    }
  }
};
