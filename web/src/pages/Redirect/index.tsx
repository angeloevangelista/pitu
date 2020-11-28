import React, { useEffect, useState } from 'react';
import { FiAlertTriangle, FiArrowLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import ShortenerService from '../../services/shortenerService';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import { Container, ErrorContainer } from './styles';

const Redirect: React.FC = () => {
  const { params: routeParams } = useRouteMatch<{ code: string }>();

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadLinkInformation = async () => {
      const { code } = routeParams;

      try {
        const service = new ShortenerService();
        const { url } = await service.getLink(code);

        window.location.href = url;
      } catch (error) {
        setErrorMessage('Oops, a URL solicitada não existe.');
      } finally {
        setIsLoading(false);
      }
    };

    loadLinkInformation();
  }, [routeParams]);

  return (
    <Container>
      <Header>Seu novo encurtador de URL :)</Header>

      {isLoading && <Loading message="Redirecionando..." />}

      {errorMessage && (
        <>
          <div>
            <ErrorContainer>
              <FiAlertTriangle size={48} />

              <span>{errorMessage}</span>
            </ErrorContainer>
          </div>
          <Link to="/">
            <FiArrowLeft size={20} />
            Encurtar uma URL
          </Link>
        </>
      )}
    </Container>
  );
};

export default Redirect;
