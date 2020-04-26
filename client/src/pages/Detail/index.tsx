import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
  } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import Info from './Info';
import Member from './Member';
import Todo from './Todo';
import CommonLayout from '../../components/CommonLayout/index';
import DetailNav from '../../components/organisms/DetailNav';
import { getStudy } from '../../store/actions/v1/study.action';
import { getStudyTodos } from '../../store/actions/v1/studyTodo.action';
import { IRootState } from '../../store/reducers/index';

interface Props {}

const Detail = (props: Props) => {
  const match = useRouteMatch<{ studyId: string }>();
  const history = useHistory();
  const dispatch = useDispatch();
  const { study } = useSelector(({ studyState }: IRootState) => studyState);
  const { todos } = useSelector(({ studyTodoState }: IRootState) => studyTodoState);

  useEffect(() => {
    dispatch(getStudy(match.params.studyId));
  }, [dispatch, match.params.studyId]);

  useEffect(() => {
    dispatch(getStudyTodos(match.params.studyId));
  }, [dispatch, match.params.studyId, study.todos.length]);

  const onClickLoginPage = useCallback(() => {
    history.push('/login');
  }, [history]);

  return (
    <CommonLayout noFooter>
      <Router>
        <header>
          <DetailNav currentStudyId={match.params.studyId} />
        </header>
        <main>
          <Switch>
            <Route path={`${match.path}/detail`}>
              <Info onClickLoginPage={onClickLoginPage} />
            </Route>
            <Route path={`${match.path}/todo`}>
              <Todo todos={todos} members={study.participants} />
            </Route>
            <Route path={`${match.path}/member`}>
              <Member members={study.participants} master={study.user._id} />
            </Route>
            <Route path="/:studyId/*" component={() => <div>notfound</div>} />
          </Switch>
        </main>
      </Router>
    </CommonLayout>
  );
};

export default Detail;
