export interface State {
  doctors: Doctor[];
  specialisations: Specialisation[];
}

export interface Doctor {
  id: number
  lastName: string
  firstName: string
  middleName: string
  specialisationList: { id: number }[]
}

export interface Specialisation {
  id: number
  name: string
}
