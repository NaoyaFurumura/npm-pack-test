export interface TestParam {
  name: string;
}

export function outputYourName(param: TestParam) {
  return param.name;
}
