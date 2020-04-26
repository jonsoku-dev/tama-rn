import {
  GET_STUDIES_FAIL,
  GET_STUDIES_PENDING,
  GET_STUDIES_SUCCESS,
  GET_STUDY_SUCCESS,
  GET_STUDY_PENDING,
  GET_STUDY_FAIL,
  GET_STUDY_CATEGORIES_PENDING,
  GET_STUDY_CATEGORIES_SUCCESS,
  GET_STUDY_CATEGORIES_FAIL,
  CREATE_STUDY_CATEGORY_PENDING,
  CREATE_STUDY_CATEGORY_SUCCESS,
  CREATE_STUDY_CATEGORY_FAIL,
  JOIN_STUDY_PENDING,
  JOIN_STUDY_SUCCESS,
  JOIN_STUDY_FAIL,
  QUIT_STUDY_PENDING,
  QUIT_STUDY_SUCCESS,
  QUIT_STUDY_FAIL,
  IStudyState,
  StudyReducerActions,
  LIKE_STUDY_SUCCESS,
  UNLIKE_STUDY_SUCCESS,
  LIKE_STUDY_PENDING,
  UNLIKE_STUDY_PENDING,
  LIKE_STUDY_FAIL,
  UNLIKE_STUDY_FAIL,
} from '../../store-types';

const initialState: IStudyState = {
  categories: [],
  studies: [],
  study: {
    _id: '',
    address: '',
    category: {
      _id: '',
      name: '',
    },
    comments: [],
    createdAt: '',
    description: '',
    lat: 0,
    likes: [],
    lng: 0,
    maxParticipants: 0,
    minParticipants: 0,
    participants: [],
    thumbnail: '',
    title: '',
    todos: [],
    updatedAt: '',
    user: {
      _id: '',
      username: '',
    },
    view: 0,
  },
  error: null,
  loading: true,
  likeLoading: false,
};

export default (prevState: IStudyState = initialState, action: StudyReducerActions) => {
  switch (action.type) {
    case GET_STUDY_CATEGORIES_PENDING:
    case CREATE_STUDY_CATEGORY_PENDING:
    case GET_STUDIES_PENDING:
    case JOIN_STUDY_PENDING:
    case QUIT_STUDY_PENDING:
    case GET_STUDY_PENDING:
      return {
        ...prevState,
        loading: action.payload,
      };
    case LIKE_STUDY_PENDING:
    case UNLIKE_STUDY_PENDING:
      return {
        ...prevState,
        likeLoading: action.payload,
      };
    case GET_STUDY_CATEGORIES_SUCCESS:
      return {
        ...prevState,
        loading: false,
        categories: action.payload,
      };
    case CREATE_STUDY_CATEGORY_SUCCESS:
      return { ...prevState, loading: false, study: action.payload };
    case GET_STUDIES_SUCCESS:
      return { ...prevState, loading: false, studies: action.payload };
    case JOIN_STUDY_SUCCESS:
      return {
        ...prevState,
        loading: false,
        studies: prevState.studies.map((study) =>
          study._id === action.payload?._id ? action.payload : study,
        ),
        study: action.payload,
      };
    case LIKE_STUDY_SUCCESS:
      return {
        ...prevState,
        likeLoading: false,
        studies: prevState.studies.map((study) =>
          study._id === action.payload?._id ? action.payload : study,
        ),
        study: action.payload,
      };
    case QUIT_STUDY_SUCCESS:
      return {
        ...prevState,
        loading: false,
        studies: prevState.studies.filter((study) => study._id !== action.payload._id),
        study: action.payload,
      };
    case UNLIKE_STUDY_SUCCESS:
      return {
        ...prevState,
        likeLoading: false,
        studies: prevState.studies.filter((study) => study._id !== action.payload._id),
        study: action.payload,
      };
    case GET_STUDY_SUCCESS:
      return {
        ...prevState,
        loading: false,
        study: action.payload,
      };
    case GET_STUDY_CATEGORIES_FAIL:
    case CREATE_STUDY_CATEGORY_FAIL:
    case GET_STUDIES_FAIL:
    case JOIN_STUDY_FAIL:
    case QUIT_STUDY_FAIL:
    case GET_STUDY_FAIL:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    case LIKE_STUDY_FAIL:
    case UNLIKE_STUDY_FAIL:
      return {
        ...prevState,
        likeLoading: false,
        error: action.payload,
      };
    default:
      return prevState;
  }
};
