export default {
  SET_POST(state, { post }) {
    state.postIds.push(post.id);
  }
};
