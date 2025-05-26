import { AuthService } from "../../src/auth/auth.service.mjs";
import User from "../../src/model/user.mjs";

jest.mock("../../src/model/user.mjs");
jest.mock("jsonwebtoken");

describe('AuthService', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('register', async () => {
        const mockUserData = {
            email: 'test@example.com',
            password: '123456',
            name: 'Test User'
        };
        const mockSavedUser = {
            _id: '1',
            email: mockUserData.email,
            name: mockUserData.name,
            password: 'hashed-pass'
        };

        // Simular que no existe el usuario
        User.findOne.mockResolvedValue(null);
        // Simular el hash de la contraseña
        bcrypt.hash.mockResolvedValue('hashed-pass');
        // Simular el save() de Mongoose
        User.mockImplementation(() => ({
            ...mockUserData,
            password: 'hashed-pass',
            save: jest.fn().mockResolvedValue(mockSavedUser)
        }));

        // Ejecutar el método estático
        const result = await AuthService.Register(mockUserData);

        // Verificaciones
        expect(User.findOne).toHaveBeenCalledWith({ email: mockUserData.email });
        expect(bcrypt.hash).toHaveBeenCalledWith(mockUserData.password, 13);
        expect(result).toEqual(mockSavedUser);
    })
})