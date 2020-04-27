export default {
  SET_POST(state, { post }) {
    // state.postIds[0] = post.id;
    state.postIds.push(post.id);

    // state.posts[post.id] = post;
    state.posts = { ...state.posts, [post.id]: post };
  }
};
