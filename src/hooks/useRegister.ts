import { useState } from "react";
import { Profile } from "../model/Profile";
import { createProfile } from "../services/auth-service";

export const useRegister = () => {
  const [error] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [toast, setToast] = useState<string>("");
  const signup = (profile:Profile) =>{
    setLoader(true);
      createProfile(profile)
      .then((response) => {
        if(response && response.status === 201){
          setToast("Profile is successfully created.")
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false));
  }
  return { signup, error, isLoading, toast };
};
