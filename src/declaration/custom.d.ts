interface User {
  fullname: string;
  email: string;
  user_id: string;
  is_ehr: string;
  person_type: string;
  is_same_device: boolean;
  extra_user_info: object;
}

declare namespace Express {
  export interface Request {
     id: string;
     user?: User
  }
}