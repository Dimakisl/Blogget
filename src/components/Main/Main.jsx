import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import Modal from '../Modal';
import {Route, Routes, useNavigate} from 'react-router-dom';
import {StartPage} from '../StartPage/StartPage';
import {ErrorPage} from '../ErrorPage/ErrorPage';
import {useEffect} from 'react';


export const Main = () => {
  const navigate = useNavigate();
  const token = new URLSearchParams(location.hash.substring(1))
    .get('access_token');

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);
  return (
    <Layout>
      <Tabs />
      <Routes>
        <Route path= 'category/:page' element={<List />}>
          <Route path='post/:id' element={<Modal />} />
        </Route>
        <Route path='/' element={<StartPage />}/>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
};