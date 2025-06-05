import axiosOptions from './axiosOptions';

export const getRequest = async (URL: string, params?: object) => {
  const response = await axiosOptions.get(URL, {params: params});
  return response;
};

export const postRequest = async (URL: string, data: object) => {
  const response = await axiosOptions.post(URL, data);
  return response;
};
