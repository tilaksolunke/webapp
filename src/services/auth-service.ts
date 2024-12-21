import { AuthRequest } from './../model/AuthRequest';
import apiClient from "../config/api-client";
import { Profile } from "../model/Profile";
import { AuthResponse } from '../model/AuthResponse';

export const createProfile = (profile:Profile) =>{
    return apiClient.post<Profile>("/register", profile);
}

export const authenticate = (authRequest:AuthRequest) =>{
    return apiClient.post<AuthResponse>("/login", authRequest);
}

export const signout = () =>{
    return apiClient.post<void>("/signout");
}