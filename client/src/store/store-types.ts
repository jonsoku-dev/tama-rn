import { Action } from 'redux';

/**
 * Table of Contents:
 *
 * VERSION 1 - auth, post
 * VERSION 2 - 미정
 *
 * --------------------------------------------------------------------------
 */

/* ==========================================================================
   VERSION 1 (v1)
   ========================================================================== */

// 1. Auth
export interface IUserState {
  _id: string;
  username: string;
}

export interface IAuthState {
  isLoggedIn: boolean;
  user: IUserState | null;
  error: string | null;
  loading: boolean;
}

export const LOAD_USER = 'LOAD_USER' as const;
export const LOGIN = 'LOGIN' as const;
export const LOGOUT = 'LOGOUT' as const;
export const REGISTER = 'REGISTER' as const;
export const AUTH_ERROR = 'AUTH_ERROR' as const;

export interface LoadUserAction extends Action<typeof LOAD_USER> {
  payload: {
    user: IUserState;
  };
}
export interface LoginAction extends Action<typeof LOGIN> {
  payload: {
    user: IUserState;
  };
}

export interface LogoutAction extends Action<typeof LOGOUT> {}

export interface RegisterAction extends Action<typeof REGISTER> {}

export interface AuthErrorAction extends Action<typeof AUTH_ERROR> {
  payload: {
    error: any;
  };
}

export type AuthReducerActions =
  | LoadUserAction
  | LoginAction
  | LogoutAction
  | RegisterAction
  | AuthErrorAction;

// End of Auth

// 2. Post

export interface IPost {
  _id: string;
  title: string;
  description: string;
  imgUrl: string;
  user: string;
  view: number;
  postComments: string[];
  createdAt: string;
}

export interface IPostComment {
  _id: string;
  text: string;
  user: {
    _id: string;
    username: string;
  };
  createdAt: string;
}

export interface IPostState {
  posts: IPost[];
  post: IPost | null;
  postComments: IPostComment[];
  postComment: IPostComment | null;
  error: string | null;
  loading: boolean;
  total: number;
  pageInfo: {
    nextPageCursor: string;
    hasNextPage: boolean;
  };
  commentTotal: number;
  commentPageInfo: {
    nextPageCursor: string;
    hasNextPage: boolean;
  };
}

export const GET_POSTS = 'GET_POSTS' as const;
export const GET_MORE_POSTS = 'GET_MORE_POSTS' as const;
export const GET_SEARCH_POSTS_BY_TITLE = 'GET_SEARCH_POSTS_BY_TITLE' as const;
export const CREATE_POST = 'CREATE_POST' as const;
export const GET_POST_BY_ID = 'GET_POST_BY_ID' as const;
export const CLEAR_POST = 'CLEAR_POST' as const;
export const CREATE_POST_COMMENT_BY_POST_ID = 'CREATE_POST_COMMENT_BY_POST_ID' as const;
export const DELETE_POST_BY_ID = 'DELETE_POST_BY_ID' as const;
export const GET_POST_COMMENTS_BY_POST_ID = 'GET_POST_COMMENTS_BY_POST_ID' as const;
export const DELETE_POST_COMMENT_BY_COMMENT_ID = 'DELETE_POST_COMMENT_BY_COMMENT_ID' as const;
export const POST_ERROR = 'POST_ERROR' as const;

export interface GetPostsAction extends Action<typeof GET_POSTS> {
  payload: {
    posts: IPost[];
    total: number;
    pageInfo: {
      nextPageCursor: string;
      hasNextPage: boolean;
    };
  };
}

export interface GetMorePostsAction extends Action<typeof GET_MORE_POSTS> {
  payload: {
    posts: IPost[];
    total: number;
    pageInfo: {
      nextPageCursor: string;
      hasNextPage: boolean;
    };
  };
}

export interface GetSearchPostsByTitleAction extends Action<typeof GET_SEARCH_POSTS_BY_TITLE> {
  payload: {
    posts: IPost[];
    total: number;
    pageInfo: {
      nextPageCursor: string;
      hasNextPage: boolean;
    };
  };
}

export interface CreatePostAction extends Action<typeof CREATE_POST> {
  payload: {
    post: IPost;
  };
}

export interface GetPostByIdAction extends Action<typeof GET_POST_BY_ID> {
  payload: {
    post: IPost;
  };
}

export interface ClearPostAction extends Action<typeof CLEAR_POST> {}

export interface CreatePostCommentByPostId extends Action<typeof CREATE_POST_COMMENT_BY_POST_ID> {
  payload: {
    postComment: IPostComment;
  };
}

export interface GetPostCommentsByPostId extends Action<typeof GET_POST_COMMENTS_BY_POST_ID> {
  payload: {
    postComments: IPostComment[];
    commentTotal: number;
    commentPageInfo: {
      nextPageCursor: string;
      hasNextPage: boolean;
    };
  };
}

export interface DeletePostById extends Action<typeof DELETE_POST_BY_ID> {
  payload: string;
}
export interface DeletePostCommentByCommentId
  extends Action<typeof DELETE_POST_COMMENT_BY_COMMENT_ID> {
  payload: string;
}

export interface PostErrorAction extends Action<typeof POST_ERROR> {
  payload: {
    error: any;
  };
}

export type PostReducerActions =
  | GetPostsAction
  | GetSearchPostsByTitleAction
  | GetMorePostsAction
  | CreatePostAction
  | GetPostByIdAction
  | ClearPostAction
  | CreatePostCommentByPostId
  | DeletePostById
  | GetPostCommentsByPostId
  | DeletePostCommentByCommentId
  | PostErrorAction;

// End of Post

// Study

export interface ICategory {
  _id: string;
  name: string;
}

export interface IParticipant {
  _id: string;
  username: string;
  email: string;
  avatar: string;
}

export interface IStudy {
  view: number;
  likes: any[];
  minParticipants: number;
  maxParticipants: number;
  participants: IParticipant[];
  todos: any[];
  comments: string[];
  _id: string;
  category: {
    _id: string;
    name: string;
  };
  title: string;
  description: string;
  thumbnail: string;
  lat: number;
  lng: number;
  address: string;
  user: {
    _id: string;
    username: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface IStudyState {
  categories: ICategory[];
  studies: IStudy[];
  study: IStudy;
  error: string | null;
  loading: boolean;
  likeLoading: boolean;
}

// Get Categories
export const GET_STUDY_CATEGORIES_PENDING = 'GET_STUDY_CATEGORIES_PENDING' as const;
export const GET_STUDY_CATEGORIES_SUCCESS = 'GET_STUDY_CATEGORIES_SUCCESS' as const;
export const GET_STUDY_CATEGORIES_FAIL = 'GET_STUDY_CATEGORIES_FAIL' as const;

export interface GetStudyCategoriesPendingAction
  extends Action<typeof GET_STUDY_CATEGORIES_PENDING> {
  payload: true;
}

export interface GetStudyCategoriesSuccessAction
  extends Action<typeof GET_STUDY_CATEGORIES_SUCCESS> {
  payload: {
    _id: string;
    name: string;
  }[];
}

export interface GetStudyCategoriesFailAction extends Action<typeof GET_STUDY_CATEGORIES_FAIL> {
  payload: string;
}

// Create Study
export const CREATE_STUDY_CATEGORY_PENDING = 'CREATE_STUDY_CATEGORY_PENDING' as const;
export const CREATE_STUDY_CATEGORY_SUCCESS = 'CREATE_STUDY_CATEGORY_SUCCESS' as const;
export const CREATE_STUDY_CATEGORY_FAIL = 'CREATE_STUDY_CATEGORY_FAIL' as const;

export interface CreateStudyPendingAction extends Action<typeof CREATE_STUDY_CATEGORY_PENDING> {
  payload: true;
}

export interface CreateStudySuccessAction extends Action<typeof CREATE_STUDY_CATEGORY_SUCCESS> {
  payload: IStudyState['study'];
}

export interface CreateStudyFailAction extends Action<typeof CREATE_STUDY_CATEGORY_FAIL> {
  payload: string;
}

// Create Study
export const GET_STUDIES_PENDING = 'GET_STUDIES_PENDING' as const;
export const GET_STUDIES_SUCCESS = 'GET_STUDIES_SUCCESS' as const;
export const GET_STUDIES_FAIL = 'GET_STUDIES_FAIL' as const;

export interface GetStudiesPendingAction extends Action<typeof GET_STUDIES_PENDING> {
  payload: true;
}

export interface GetStudiesSuccessAction extends Action<typeof GET_STUDIES_SUCCESS> {
  payload: IStudyState['studies'];
}

export interface GetStudiesFailAction extends Action<typeof GET_STUDIES_FAIL> {
  payload: string;
}

// Join Study
export const JOIN_STUDY_PENDING = 'JOIN_STUDY_PENDING' as const;
export const JOIN_STUDY_SUCCESS = 'JOIN_STUDY_SUCCESS' as const;
export const JOIN_STUDY_FAIL = 'JOIN_STUDY_FAIL' as const;

export interface JoinStudyPendingAction extends Action<typeof JOIN_STUDY_PENDING> {
  payload: true;
}

export interface JoinStudySuccessAction extends Action<typeof JOIN_STUDY_SUCCESS> {
  payload: IStudy;
}

export interface JoinStudyFailAction extends Action<typeof JOIN_STUDY_FAIL> {
  payload: string;
}

// QuitStudy
export const QUIT_STUDY_PENDING = 'QUIT_STUDY_PENDING' as const;
export const QUIT_STUDY_SUCCESS = 'QUIT_STUDY_SUCCESS' as const;
export const QUIT_STUDY_FAIL = 'QUIT_STUDY_FAIL' as const;

export interface QuitStudyPendingAction extends Action<typeof QUIT_STUDY_PENDING> {
  payload: true;
}

export interface QuitStudySuccessAction extends Action<typeof QUIT_STUDY_SUCCESS> {
  payload: IStudy;
}

export interface QuitStudyFailAction extends Action<typeof QUIT_STUDY_FAIL> {
  payload: string;
}

// GetStudy
export const GET_STUDY_PENDING = 'GET_STUDY_PENDING' as const;
export const GET_STUDY_SUCCESS = 'GET_STUDY_SUCCESS' as const;
export const GET_STUDY_FAIL = 'GET_STUDY_FAIL' as const;

export interface GetStudyPendingAction extends Action<typeof GET_STUDY_PENDING> {
  payload: true;
}

export interface GetStudySuccessAction extends Action<typeof GET_STUDY_SUCCESS> {
  payload: IStudy;
}

export interface GetStudyFailAction extends Action<typeof GET_STUDY_FAIL> {
  payload: string;
}

// Join Study
export const LIKE_STUDY_PENDING = 'LIKE_STUDY_PENDING' as const;
export const LIKE_STUDY_SUCCESS = 'LIKE_STUDY_SUCCESS' as const;
export const LIKE_STUDY_FAIL = 'LIKE_STUDY_FAIL' as const;

export interface LikeStudyPendingAction extends Action<typeof LIKE_STUDY_PENDING> {
  payload: true;
}

export interface LikeStudySuccessAction extends Action<typeof LIKE_STUDY_SUCCESS> {
  payload: IStudy;
}

export interface LikeStudyFailAction extends Action<typeof LIKE_STUDY_FAIL> {
  payload: string;
}

// QuitStudy
export const UNLIKE_STUDY_PENDING = 'UNLIKE_STUDY_PENDING' as const;
export const UNLIKE_STUDY_SUCCESS = 'UNLIKE_STUDY_SUCCESS' as const;
export const UNLIKE_STUDY_FAIL = 'UNLIKE_STUDY_FAIL' as const;

export interface UnlikeStudyPendingAction extends Action<typeof UNLIKE_STUDY_PENDING> {
  payload: true;
}

export interface UnlikeStudySuccessAction extends Action<typeof UNLIKE_STUDY_SUCCESS> {
  payload: IStudy;
}

export interface UnlikeStudyFailAction extends Action<typeof UNLIKE_STUDY_FAIL> {
  payload: string;
}

export type StudyReducerActions =
  | GetStudyCategoriesPendingAction
  | GetStudyCategoriesSuccessAction
  | GetStudyCategoriesFailAction
  | CreateStudyPendingAction
  | CreateStudySuccessAction
  | CreateStudyFailAction
  | GetStudiesPendingAction
  | GetStudiesSuccessAction
  | GetStudiesFailAction
  | JoinStudyPendingAction
  | JoinStudySuccessAction
  | JoinStudyFailAction
  | QuitStudyPendingAction
  | QuitStudySuccessAction
  | QuitStudyFailAction
  | GetStudyPendingAction
  | GetStudySuccessAction
  | GetStudyFailAction
  | LikeStudyPendingAction
  | LikeStudySuccessAction
  | LikeStudyFailAction
  | UnlikeStudyPendingAction
  | UnlikeStudySuccessAction
  | UnlikeStudyFailAction;

// Study Todo

export interface IStudyTodo {
  completed: boolean;
  _id: string;
  content: string;
  user: {
    _id: string;
    username: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface IStudyTodoState {
  todos: IStudyTodo[];
  error: string | null;
  loading: boolean;
}

// Get Study Todos
export const GET_STUDY_TODOS_PENDING = 'GET_STUDY_TODOS_PENDING' as const;
export const GET_STUDY_TODOS_SUCCESS = 'GET_STUDY_TODOS_SUCCESS' as const;
export const GET_STUDY_TODOS_FAIL = 'GET_STUDY_TODOS_FAIL' as const;

export interface GetStudyTodosPendingAction extends Action<typeof GET_STUDY_TODOS_PENDING> {
  payload: true;
}

export interface GetStudyTodosSuccessAction extends Action<typeof GET_STUDY_TODOS_SUCCESS> {
  payload: IStudyTodo[];
}

export interface GetStudyTodosFailAction extends Action<typeof GET_STUDY_TODOS_FAIL> {
  payload: string;
}

// Update Todo
export const UPDATE_STUDY_TODO_PENDING = 'UPDATE_STUDY_TODO_PENDING' as const;
export const UPDATE_STUDY_TODO_SUCCESS = 'UPDATE_STUDY_TODO_SUCCESS' as const;
export const UPDATE_STUDY_TODO_FAIL = 'UPDATE_STUDY_TODO_FAIL' as const;

export interface UpdateStudyTodoPendingAction extends Action<typeof UPDATE_STUDY_TODO_PENDING> {
  payload: true;
}

export interface UpdateStudyTodoSuccessAction extends Action<typeof UPDATE_STUDY_TODO_SUCCESS> {
  payload: IStudyTodo;
}

export interface UpdateStudyTodoFailAction extends Action<typeof UPDATE_STUDY_TODO_FAIL> {
  payload: string;
}

// Delete Todo
export const DELETE_STUDY_TODO_PENDING = 'DELETE_STUDY_TODO_PENDING' as const;
export const DELETE_STUDY_TODO_SUCCESS = 'DELETE_STUDY_TODO_SUCCESS' as const;
export const DELETE_STUDY_TODO_FAIL = 'DELETE_STUDY_TODO_FAIL' as const;

export interface DeleteStudyTodoPendingAction extends Action<typeof DELETE_STUDY_TODO_PENDING> {
  payload: true;
}

export interface DeleteStudyTodoSuccessAction extends Action<typeof DELETE_STUDY_TODO_SUCCESS> {
  payload: IStudyTodo;
}

export interface DeleteStudyTodoFailAction extends Action<typeof DELETE_STUDY_TODO_FAIL> {
  payload: string;
}

// Delete Todo
export const CREATE_STUDY_TODO_PENDING = 'CREATE_STUDY_TODO_PENDING' as const;
export const CREATE_STUDY_TODO_SUCCESS = 'CREATE_STUDY_TODO_SUCCESS' as const;
export const CREATE_STUDY_TODO_FAIL = 'CREATE_STUDY_TODO_FAIL' as const;

export interface CreateStudyTodoPendingAction extends Action<typeof CREATE_STUDY_TODO_PENDING> {
  payload: true;
}

export interface CreateStudyTodoSuccessAction extends Action<typeof CREATE_STUDY_TODO_SUCCESS> {
  payload: IStudyTodo;
}

export interface CreateStudyTodoFailAction extends Action<typeof CREATE_STUDY_TODO_FAIL> {
  payload: string;
}

export type StudyTodoReducerActions =
  | GetStudyTodosPendingAction
  | GetStudyTodosSuccessAction
  | GetStudyTodosFailAction
  | UpdateStudyTodoPendingAction
  | UpdateStudyTodoSuccessAction
  | UpdateStudyTodoFailAction
  | DeleteStudyTodoPendingAction
  | DeleteStudyTodoSuccessAction
  | DeleteStudyTodoFailAction
  | CreateStudyTodoPendingAction
  | CreateStudyTodoSuccessAction
  | CreateStudyTodoFailAction;
