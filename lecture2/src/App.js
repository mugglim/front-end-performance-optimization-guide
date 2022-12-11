import React, { lazy, Suspense, useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import InfoTable from './components/InfoTable';
import SurveyChart from './components/SurveyChart';
import Footer from './components/Footer';
import { loadImage } from './utils';

const FIRST_FULL_IMAGE_PATH = `https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800`;
const IMAGE_MODAL_PATH = `./components/ImageModal`;

const LazyImageModal = lazy(() => import(`${IMAGE_MODAL_PATH}`));

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const component = import(`${IMAGE_MODAL_PATH}`);
    loadImage(FIRST_FULL_IMAGE_PATH);
  }, []);

  return (
    <div className="App">
      <Header />
      <InfoTable />
      <ButtonModal
        onClick={() => {
          setShowModal(true);
        }}
      >
        올림픽 사진 보기
      </ButtonModal>
      <SurveyChart />
      <Footer />

      <Suspense fallback={null}>
        {showModal ? (
          <LazyImageModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </Suspense>
    </div>
  );
}

const ButtonModal = styled.button`
  border-radius: 30px;
  border: 1px solid #999;
  padding: 12px 30px;
  background: none;
  font-size: 1.1em;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export default App;
