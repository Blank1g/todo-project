import { User } from "./user";

export interface LoginResponse {
    message: string;
    user: User;
    token: string;
}
