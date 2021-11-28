export interface BaseApiHandler {
  invoke: (payload: any) => Promise<any>;
  formatRequest?: (request: any) => any;
  formatResponse?: (response: any) => any;
}

export interface ObjectInterface {
  [key: string]: any;
}

export type APIResult = {
  success: boolean
  data: ObjectInterface
}
