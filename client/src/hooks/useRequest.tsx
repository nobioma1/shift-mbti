import { useState } from 'react';
import { mbtiApi } from '../api/mbti';

interface IUseRequest {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  url: string;
}

interface IDoRequestParam {
  values?: any;
  onSuccess?: any;
  onError?: any;
}

export interface IUseRequestReturn {
  doRequest(param?: IDoRequestParam): Promise<any>;
  errors: any;
  isLoading: boolean;
}

export const useRequest = ({ method, url }: IUseRequest): IUseRequestReturn => {
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const doRequest = async ({
    values,
    onSuccess,
    onError,
  }: IDoRequestParam = {}) => {
    setIsLoading(true);

    try {
      // @ts-ignore
      const response = await mbtiApi[method](url, values);

      setIsLoading(false);

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setIsLoading(false);

      if (onError) {
        onError(err?.response);
      }

      if (err?.response?.data) {
        setErrors(err.response.data);
      }
    }
  };

  return { doRequest, errors, isLoading };
};
