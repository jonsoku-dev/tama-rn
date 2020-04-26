import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import { IPostCreateInitialState } from '../../../components/pages/Post/post-types';
import { API } from '../../../utils/axios';
import { IRootState } from '../../reducers/index';
import { DeletePostCommentByCommentId } from '../../store-types';
import {
  DELETE_POST_BY_ID,
  DeletePostById,
  DELETE_POST_COMMENT_BY_COMMENT_ID,
  GetPostCommentsByPostId,
  IPost,
  IPostState,
  GET_POST_COMMENTS_BY_POST_ID,
  GET_POSTS,
  GET_SEARCH_POSTS_BY_TITLE,
  GET_MORE_POSTS,
  CREATE_POST,
  GET_POST_BY_ID,
  CLEAR_POST,
  POST_ERROR,
  GetPostsAction,
  GetSearchPostsByTitleAction,
  GetMorePostsAction,
  CreatePostAction,
  GetPostByIdAction,
  ClearPostAction,
  PostErrorAction,
} from '../../store-types';

export const getPostsFn = (): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  GetPostsAction | PostErrorAction
> => async (dispatch) => {
  try {
    const response = await API.get('/v1/post');
    const posts: IPost[] = response.data.result;
    const total: number = response.data.total;
    const pageInfo: IPostState['pageInfo'] = response.data.pageInfo;
    dispatch({
      type: GET_POSTS,
      payload: {
        posts,
        total,
        pageInfo,
      },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const getMorePostsFn = (
  cursor: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  GetMorePostsAction | PostErrorAction
> => async (dispatch) => {
  try {
    const response = await API.get(`/v1/post?cursor=${cursor}`);
    const posts: IPost[] = response.data.result;
    const total: number = response.data.total;
    const pageInfo: IPostState['pageInfo'] = response.data.pageInfo;
    dispatch({
      type: GET_MORE_POSTS,
      payload: {
        posts,
        total,
        pageInfo,
      },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const getSearchPostsFn = (
  title: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  GetSearchPostsByTitleAction | PostErrorAction
> => async (dispatch) => {
  try {
    const response = await API.get(title ? `/v1/post?title=${title}` : '/v1/post');
    const posts: IPost[] = response.data.result;
    const total: number = response.data.total;
    const pageInfo: IPostState['pageInfo'] = response.data.pageInfo;
    dispatch({
      type: GET_SEARCH_POSTS_BY_TITLE,
      payload: {
        posts,
        total,
        pageInfo,
      },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const createPostFn = (
  formData: IPostCreateInitialState,
  history: RouteComponentProps<any>['history'],
): ThunkAction<Promise<void>, IRootState, undefined, CreatePostAction | PostErrorAction> => async (
  dispatch,
) => {
  try {
    const res = await API.post('/v1/post/create', formData);
    const post: IPost = res.data.result;
    dispatch({ type: CREATE_POST, payload: { post } });
    localStorage.removeItem('content');
    history.push('/posts');
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const getPostByIdFn = (
  postId: string,
): ThunkAction<Promise<void>, IRootState, undefined, GetPostByIdAction | PostErrorAction> => async (
  dispatch,
) => {
  try {
    const response = await API.get(`/v1/post/${postId}`);
    const post: IPost = response.data.result;
    dispatch({
      type: GET_POST_BY_ID,
      payload: {
        post,
      },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const deletePostByIdFn = (
  postId: string,
  history: RouteComponentProps<any>['history'],
): ThunkAction<Promise<void>, IRootState, undefined, DeletePostById | PostErrorAction> => async (
  dispatch,
) => {
  try {
    if (window.confirm('삭제하시겠습니까? ')) {
      await API.delete(`/v1/post/delete/${postId}`);
      dispatch({
        type: DELETE_POST_BY_ID,
        payload: postId,
      });
      history.push('/posts');
    }
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const clearPostFn = (): ThunkAction<void, IRootState, undefined, ClearPostAction> => (
  dispatch,
) => {
  dispatch({
    type: CLEAR_POST,
  });
};

export const getPostCommentsByPostId = (
  postId: string,
): ThunkAction<void, IRootState, undefined, GetPostCommentsByPostId | PostErrorAction> => async (
  dispatch,
) => {
  try {
    const response = await API.get(`/v1/post/${postId}/comment?limit=20`);
    dispatch({
      type: GET_POST_COMMENTS_BY_POST_ID,
      payload: {
        postComments: response.data.result,
        commentPageInfo: response.data.pageInfo,
        commentTotal: response.data.total,
      },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const deletePostCommentByPostId = (
  postId: string,
  postCommentId: string,
): ThunkAction<
  void,
  IRootState,
  undefined,
  DeletePostCommentByCommentId | PostErrorAction
> => async (dispatch) => {
  try {
    await API.delete(`/v1/post/${postId}/comment/delete/${postCommentId}`);
    dispatch({
      type: DELETE_POST_COMMENT_BY_COMMENT_ID,
      payload: postCommentId,
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};
