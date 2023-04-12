import { createContext, useState } from 'react';
import {
    CreateContextUser,
    UserContextType,
} from '../utils/types/index.context';

const initialUser = {
    emailAddress: '',
    accessPassword: '',
    documentNumber: '',
    gullName: '',
    birthDate: '',
    phoneNumber: '',
    zipCode: '',
    homeAddress: '',
};

export const UserContext = createContext<CreateContextUser>({
    user: initialUser,
    setUser: () => {},
});

export const ContextProvider = ({ children }: React.PropsWithChildren) => {
    const [user, setUser] = useState<UserContextType>(initialUser);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
