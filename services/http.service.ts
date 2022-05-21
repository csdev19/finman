import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

class HttpService {
  instance: AxiosInstance;

  constructor(baseUrl: string, path: string) {
    const baseURL = `${baseUrl}${path}`;
    this.instance = axios.create({ baseURL });
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors?.request?.use(async (request) => {
      // if (!request.headers.Authorization) {
      //   if (useKongaToken) {
      //     await store.dispatch(onRefreshAuthToken());
      //     const { token, idPart } = getAuthData();
      //     if (token) {
      //       // Logic here
      //       const { useIdPart = this.useIdPart } = request ?? {};
      //       if ((this.useIdPart || useIdPart) && idPart) {
      //         // const urlParts = request.url?.split('?')
      //         // request.url = `${urlParts[0]}/${idPart}?${urlParts[1] ?? ''}` // Route param

      //         const url = request.url;
      //         request.url = `${url}${
      //           url.includes('?') ? '&' : '?'
      //         }idPart=${idPart}`;
      //       }
      //       request.headers.Authorization = `Bearer ${token}`;
      //       request.headers.common.Authorization = `Bearer ${token}`;
      //     }
      //   } else {
      //     const { responseData } = await authService.getAuthToken(
      //       '20220329143405@yopmail.com',
      //       'Blitz22!!!',
      //     );
      //     request.headers.Authorization = `Bearer ${responseData?.access_token}`;
      //     request.headers.common.Authorization = `Bearer ${responseData?.access_token}`;
      //   }
      // }

      return request;
    });
  };

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => error.response,
    );
  };
}

export default HttpService;
