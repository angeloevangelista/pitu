import React, { FormEvent, useCallback, useState } from 'react';
import { FiLink, FiArrowRight, FiAlertCircle } from 'react-icons/fi';
import { BiCopy } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import variables from '../../config/variables';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import ShortenerService from '../../services/shortenerService';

import {
  Container,
  Content,
  Form,
  ErrorMessage,
  ResultContainer,
} from './styles';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const shortenedUrlRef = React.createRef<HTMLInputElement>();

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      setIsLoading(true);
      setCode('');
      setErrorMessage('');

      if (!url) {
        setIsLoading(false);
        setErrorMessage('Informe uma URL para encurtar.');
        return;
      }

      try {
        const shortenerService = new ShortenerService();

        const result = await shortenerService.generate(url);

        setCode(result.url_code);
      } catch (error) {
        setErrorMessage('Ooops... Ocorreu um erro ao tentar encurtar a URL.');
      } finally {
        setIsLoading(false);
      }
    },
    [url],
  );

  const handleCopyToClipboard = useCallback(() => {
    shortenedUrlRef.current?.select();

    document.execCommand('copy');
  }, [shortenedUrlRef]);

  return (
    <Container>
      <Header>Seu novo encurtador de URL :)</Header>

      <Content>
        <Form onSubmit={handleSubmit}>
          <Input
            icon={FiLink}
            placeholder="Digite a URL para encurtar"
            value={url}
            onChange={(event) => setUrl(event.target.value)}
            onFocus={() => setErrorMessage('')}
          />
          <Button icon={FiArrowRight} type="submit">
            Encurtar
          </Button>
        </Form>

        {isLoading && <Loading />}

        {errorMessage && (
          <ErrorMessage>
            <FiAlertCircle size={24} />
            <span>{errorMessage}</span>
          </ErrorMessage>
        )}

        {code && (
          <ResultContainer>
            <div>
              <Input
                autoFocus
                readOnly
                value={`${variables.APP_HOST}/${code}`}
                ref={shortenedUrlRef}
              />
              <Button
                icon={BiCopy}
                backgroundColor="#469c3d"
                onClick={handleCopyToClipboard}
              >
                Copiar
              </Button>
            </div>
            <p>
              Para acompanhar as estatísticas, acesse
              {' '}
              <Link to={`${code}/stats`}>aqui.</Link>
            </p>
          </ResultContainer>
        )}
      </Content>
    </Container>
  );
};

export default Home;
