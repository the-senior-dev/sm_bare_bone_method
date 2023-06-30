// api types
type ApiResponse<T> = {
  results: T[];
  page: number;
  total_results: number;
  total_pages: number;
};

// types.d.ts
declare module "*.css" {
  const url: string;
  export default url;
}

declare module "*.png" {
  const value: any;
  export = value;
}
