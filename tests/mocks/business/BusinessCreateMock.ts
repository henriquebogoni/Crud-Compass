import { generateId } from '@utils/GenerateID';

export const mockCreateUser = {
    id: generateId(),
    name: 'teste',
    sexo: 'masculino',
    dateNasc: '12-02-2000',
    age: '22',
    city: 'teste'
}

export const mockCreateCity = {
    id: generateId(),
    name: 'teste',
    uf: 'teste'
}