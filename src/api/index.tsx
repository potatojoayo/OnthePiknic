import potatojoayo from './potatojoayo';

export const IMAGE_BASE_URL = 'https://assets.potatojoayo.com';

class Api {
  private static instance: Api;
  private constructor() {}
  static getInstance() {
    if (this.instance) return this.instance;
    else {
      this.instance = new Api();
      return this.instance;
    }
  }
  readonly getProducts = () => {
    return potatojoayo.get('/product');
  };
}

export default Api;
