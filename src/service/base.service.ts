import httpClient from "../api/http-client";

export abstract class BaseService {
  public static RESOURCE: string = "abc";

  static create<T extends Object>(payload: T) {
    return httpClient.post(this.RESOURCE, payload);
  }

  static updateOne<T extends Object>(id: any, payload: T) {
    return httpClient.patch(`${this.RESOURCE}/${id}`, payload);
  }

  static findAll() {
    return httpClient.get(this.RESOURCE);
  }

  static findById(id: number) {
    return httpClient.get(`${this.RESOURCE}/${id}`);
  }

  static delete(id: number) {
    return httpClient.delete(`${this.RESOURCE}/${id}`);
  }
}

export type QueryFunctionReturnType = ReturnType<typeof BaseService.findAll>;
