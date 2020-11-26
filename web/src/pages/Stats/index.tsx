/* eslint-disable import/no-duplicates */
import React, { useEffect, useState } from 'react';
import { FiAlertTriangle, FiArrowLeft } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import { parseISO, formatRelative } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import variables from '../../config/variables';

import Header from '../../components/Header';
import Loading from '../../components/Loading';

import ShortenerService, { IURL } from '../../services/shortenerService';

import {
  Container, Content, Card, ErrorContainer,
} from './styles';

const Stats: React.FC = () => {
  const { params: routeParams } = useRouteMatch<{ code: string }>();

  const [isLoading, setIsLoading] = useState(true);
  const [shortenedUrl, setShortenedUrl] = useState<IURL | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const loadLinkInformation = async () => {
      const { code } = routeParams;

      try {
        const service = new ShortenerService();
        const response = await service.getStats(code);

        const parsedDate = parseISO(String(response.updatedAt));
        const currentDate = new Date();

        const relativeDate = formatRelative(parsedDate, currentDate, {
          locale: ptBR,
        });

        response.relative_date = relativeDate;

        setShortenedUrl(response);
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
      <Header>Estatísticas</Header>

      <Content>
        {isLoading && <Loading />}
        {shortenedUrl && (
          <>
            <strong>{`${variables.APP_HOST}/${shortenedUrl.url_code}`}</strong>

            <p>Redireciona para</p>
            <a href={shortenedUrl.url}>{shortenedUrl.url}</a>

            <div>
              <Card>
                <strong>{shortenedUrl.hits}</strong>
                <strong>Acessos</strong>
              </Card>
              <Card>
                <strong>Última visita em</strong>
                <strong>{shortenedUrl.relative_date}</strong>
              </Card>
            </div>
          </>
        )}
      </Content>

      {errorMessage && (
        <div>
          <ErrorContainer>
            <FiAlertTriangle size={48} />

            <span>{errorMessage}</span>
          </ErrorContainer>
        </div>
      )}

      <Link to="/">
        <FiArrowLeft size={20} />
        Encurtar nova URL
      </Link>
    </Container>
  );
};

export default Stats;
