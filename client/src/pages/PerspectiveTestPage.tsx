import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import EmailForm from '../components/emailForm';
import Header from '../components/header';
import Loader from '../components/loader/Loader';
import Questions from '../components/questions';
import { Button, ButtonContainer } from '../components/styled/Button';
import { ErrorsContainer } from '../components/styled/Errors';
import QuestionsContext from '../contexts/QuestionsContext';
import { useRequest } from '../hooks';

const PerspectiveTestPage = () => {
  const [email, setUserEmail] = useState('');
  const [errors, setErrors] = useState<any[] | null>(null);
  const history = useHistory();
  const { isLoading, setQuestions, responses, questions } = useContext(
    QuestionsContext
  );

  const { doRequest } = useRequest({
    method: 'get',
    url: '/questions',
  });

  useEffect(() => {
    doRequest({
      onSuccess: (res: any) => {
        setQuestions(res.questions);
      },
    });
  }, []);

  const getResponses = useRequest({
    method: 'post',
    url: '/responses',
  });

  const createNewResponse = useRequest({
    method: 'post',
    url: '/responses/new',
  });

  const validate = (callback: () => void) => {
    const isValid = questions.every(({ id }) => {
      if (responses[id]) {
        return true;
      }

      const el = document.querySelector<HTMLDivElement>(`#q-${id}`);

      if (el) {
        el.dataset.error = 'hey, you missed a spot.';
        window.scrollTo(0, el.offsetTop);
      }
    });

    if (isValid) {
      callback();
    }
  };

  const goToResult = (personality: string) => {
    history.push('/result', {
      result: personality,
    });
  };

  const onSubmitHandler = () => {
    getResponses.doRequest({
      values: {
        email,
      },
      onSuccess: (res: any) => goToResult(res.personality),
      onError: (err: any) => {
        if (err?.status === 404) {
          return validate(() =>
            createNewResponse.doRequest({
              values: {
                email,
                responses,
              },
              onSuccess: (res: any) => goToResult(res.personality),
            })
          );
        }
        if (err?.data?.errors) {
          setErrors(err?.data?.errors);
        }
      },
    });
  };

  return (
    <div>
      <Header />
      <section className="content">
        {isLoading ? (
          <Loader center />
        ) : (
          <>
            <Questions />
            <EmailForm setUserEmail={setUserEmail} />
            <ErrorsContainer>
              {errors &&
                errors.map((error) => <p key={error}>{error.message}</p>)}
            </ErrorsContainer>
            <ButtonContainer>
              <Button onClick={onSubmitHandler}>Save & continue</Button>
            </ButtonContainer>
          </>
        )}
      </section>
    </div>
  );
};

export default PerspectiveTestPage;
