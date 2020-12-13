import React from 'react';
import { IResponse } from '../../types/question.types';
import { RatingWrapper } from './rating.styled';

interface IRatingProps {
  questionId: number;
  rate: IResponse['rate'];
  setRate(rate: IResponse['rate']): void;
}

interface IRadioInputProps {
  id: number;
  value: number;
  currentRate: number;
  onChangeHandler(value: IResponse['rate']): void;
}

const RadioInput = ({
  id,
  value,
  currentRate,
  onChangeHandler,
}: IRadioInputProps) => {
  return (
    <input
      name={`rating-${id}`}
      value={value}
      type="radio"
      onChange={(e) => onChangeHandler(parseInt(e.target.value, 10))}
      checked={currentRate === value}
    />
  );
};

const Rating = ({ questionId, rate, setRate }: IRatingProps) => {
  return (
    <RatingWrapper>
      <p>Disagree</p>
      {[1, 2, 3, 4, 5, 6, 7].map((value) => (
        <RadioInput
          id={questionId}
          key={value}
          value={value}
          currentRate={rate}
          onChangeHandler={setRate}
        />
      ))}
      <p>Agree</p>
    </RatingWrapper>
  );
};

export default Rating;
