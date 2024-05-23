import { defineStore } from 'pinia'
import { doctorsData, specialisationsData } from '@/assets/js/mocks.js'
import type { Doctor, Specialisation, State } from '@/assets/interfaces/interface';

export const useDoctorStore = defineStore('useDoctorStore', {
  state: () => ({
    specialisations: specialisationsData as Specialisation[],
    doctors: doctorsData as Doctor[],
    specialisationMap: new Map<number, Specialisation>(),
  }),

  getters: {
    // массив id специализаций докторов (для дизейбла фильтров)
    allSpecialisationIds(state: State): number[] {
      const specialisationIds = new Set<number>();
      state.doctors.forEach((doctor) => {
        doctor.specialisationList.forEach((specialisation) => {
          specialisationIds.add(specialisation.id);
        });
      });

      return Array.from(specialisationIds);
    },

    // преобразуем специальности в объект с ключами id
    specialisationMap(state: State): { [key: number]: Specialisation } {
      const specialisationMap = state.specialisations.reduce(
        (acc: { [key: number]: Specialisation }, specialisation: Specialisation) => {
          acc[specialisation.id] = specialisation;
          return acc;
        },
        {}
      );

      return specialisationMap;
    }
  }
})
