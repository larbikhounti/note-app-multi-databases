export interface CreateCompanyResponse {
  email: string;
  name: string;
  data: {
    [key: string]: any;
  };
  id : string
  updated_at : string
  created_at : string
  tenancy_db_name : string
}

export interface ErrorCreatingCompanyResponse {
  message: string;
}
