import {
  DELETE_POST_BY_ID,
  GET_POST_COMMENTS_BY_POST_ID,
  DELETE_POST_COMMENT_BY_COMMENT_ID,
} from '../../store-types';
import {
  IPostState,
  PostReducerActions,
  GET_POSTS,
  GET_SEARCH_POSTS_BY_TITLE,
  GET_MORE_POSTS,
  CREATE_POST,
  GET_POST_BY_ID,
  CLEAR_POST,
  POST_ERROR,
} from '../../store-types';

const initialState: IPostState = {
  posts: [],
  post: null,
  total: 0,
  pageInfo: {
    nextPageCursor: '',
    hasNextPage: false,
  },
  //
  postComments: [],
  postComment: null,
  commentTotal: 0,
  commentPageInfo: {
    nextPageCursor: '',
    hasNextPage: false,
  },
  error: null,
  loading: true,
};

export default (prevState: IPostState = initialState, action: PostReducerActions): IPostState => {
  switch (action.type) {
    case GET_POSTS:
    case GET_SEARCH_POSTS_BY_TITLE:
      return {
        ...prevState,
        posts: action.payload.posts,
        total: action.payload.total,
        pageInfo: action.payload.pageInfo,
        loading: false,
      };
    case GET_MORE_POSTS:
      return {
        ...prevState,
        posts: [...prevState.posts, ...action.payload.posts],
        total: action.payload.total,
        pageInfo: action.payload.pageInfo,
        loading: false,
      };
    case CREATE_POST:
      return { ...prevState, loading: false };
    case GET_POST_BY_ID:
      return { ...prevState, post: action.payload.post, loading: false };
    case CLEAR_POST:
      return { ...prevState, post: null };
    case DELETE_POST_BY_ID:
      return {
        ...prevState,
        posts: prevState.posts.filter((post) => post._id !== action.payload),
        loading: false,
      };
    case GET_POST_COMMENTS_BY_POST_ID:
      return {
        ...prevState,
        postComments: action.payload.postComments,
        commentPageInfo: action.payload.commentPageInfo,
        commentTotal: action.payload.commentTotal,
      };
    case DELETE_POST_COMMENT_BY_COMMENT_ID:
      return {
        ...prevState,
        postComments: prevState.postComments.filter((comment) => comment._id !== action.payload),
        loading: false,
      };
    case POST_ERROR:
      return { ...prevState, loading: false, error: action.payload.error };
    default:
      return prevState;
  }
};
