// vue 中的state只能够被mutation更改

const mutations = {
  changeTitle (state, { title }) {
    state.headerTitle = title
  },
  showSideBar (state) {
    state.sideBar.open = !state.sideBar.open
    state.sideBar.docked = !state.sideBar.docked
  }
};

export default mutations;
