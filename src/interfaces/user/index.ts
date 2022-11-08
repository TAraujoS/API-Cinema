export interface IUserRequest{
  name: string
  email: string
  password: string
  isAdm: boolean
  birthDate: string
  contact: string
  isEmployee: boolean
}

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  isAdm: boolean
  isEmplooyee: boolean
  contact: string
  createdAt: Date
  updatedAt: Date
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IUserUpdate {
  name?: string
  email?: string
  password?: string
  contact?: string
}