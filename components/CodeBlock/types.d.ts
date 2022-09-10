export type ItemType = {
  name: string[];
  snippet: string[];
  lang: string[];
}

export type RequestType = ItemType;

export type RequestData = {
  method?: 'POST' | 'GET';
  requestData: RequestType;
  responseData: ItemType;
  showResponse: boolean;
  toggleResponse: (boolean) => void;
  onChange: (i: number) => void;
}

export type DataProp = {
  type: 'tab' | 'request' | 'response',
  item: ItemType | RequestData
}