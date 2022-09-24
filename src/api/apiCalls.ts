import axiosInstance from "./axiosConfig";

export const postCall = async (
  url: string,
  data: any,
  params: any,
  headerConfig: any
) => {
  const config = {
    headers: {
      ...headerConfig,
    },
    ...params,
  };
  return await axiosInstance.post(url, data, config);
};

export const getCall = (url: string, params?: any) => {
  const config = {
    headers: {},
    ...params,
  };
  return axiosInstance.get(url, config);
};

export const postRequest = async ({
  url,
  data,
}: {
  url: string;
  data: any;
}) => {
  const config = {
    headers: {},
  };
  const response = await axiosInstance.post(url, data, config);
  return response?.data || response;
};

export const getRequest = async ({ url }: { url: string }) => {
  const config = {
    headers: {},
  };
  const response = await axiosInstance.get(url, config);
  return response?.data || response;
};

export const putRequest = async ({ url, data }: { url: string; data: any }) => {
  const config = {
    headers: {},
  };
  const response = await axiosInstance.put(url, data, config);
  return response?.data || response;
};

export const deleteRequest = async ({
  url,
  data,
}: {
  url: string;
  data: any;
}) => {
  const config = {
    headers: {},
  };
  const response = await axiosInstance.delete(url, config);
  return response?.data || response;
};
