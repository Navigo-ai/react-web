import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import {
  PreconfiguredProducts,
  ProductResponse,
  ProductTemplate,
} from './models';

class GootenClient {
  params: AxiosRequestConfig = {
    params: {
      recipeid: 'd86afb4d-82fb-433a-997b-be706b441b64',
    },
  };

  axios: AxiosInstance = axios.create({
    baseURL: 'https://api.print.io/api/v/5/source/api/',
    timeout: 15000,
  });

  responseBody = (response: AxiosResponse) => response.data;

  async products() {
    const response = await this.axios.get('prpproducts', this.params);
    return this.responseBody(response) as ProductResponse;
  }

  async template(sku: string) {
    const response = await this.axios.get('producttemplates', {
      params: {...this.params.params, sku},
    });
    return this.responseBody(response) as ProductTemplate;
  }

  async createPRP(product: PreconfiguredProducts) {
    const response = await this.axios.post(
      'preconfiguredproducts',
      product,
      this.params
    );
    return this.responseBody(response);
  }

  async variants() {
    const response = await this.axios.get('prpvariants', this.params);
    return this.responseBody(response);
  }
}

const gootenClient = new GootenClient();
export default gootenClient;
