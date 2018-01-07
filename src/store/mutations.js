// vue 中的state只能够被mutation更改

const mutations = {
  changeTitle (state, { title }) {
    state.headerTitle = title
  }
};

export default mutations;
