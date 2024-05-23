<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useDoctorStore } from '@/store/index'
import type { Doctor } from '@/assets/interfaces/interface'

const store = useDoctorStore()

let selectedSpeciality = ref<number | null>(null)
let filteredDoctors = ref<Doctor[]>([])
const cache = new Map<number, Doctor[]>() // кэш для ранее отфильтрованных врачей

// Computed
const specialities = computed(() => store.specialisationMap)
const doctors = computed(() => filteredDoctors.value)

watchEffect(() => {
  if (selectedSpeciality.value !== null) {
    const speciality = selectedSpeciality.value;
    
    if (cache.has(speciality)) {
      filteredDoctors.value = cache.get(speciality) as Doctor[];
    } else {      
      const result = store.doctors.filter((d) =>
        d.specialisationList.some((el) => el.id === speciality)
      );
      cache.set(speciality, result);
      filteredDoctors.value = result;
    }
  } else {
    filteredDoctors.value = store.doctors;
  }
})

// Methods
const filterDoctors = (id: number) => {
  if(id && id !== selectedSpeciality.value) {
    selectedSpeciality.value = id;
  }
}
</script>

<template>
  <div class="container">
    <SpecialtyList @change="filterDoctors" />
    <DoctorList 
      :doctors="doctors" 
      :specialities="specialities"
    />         
  </div>
</template>

<style>
  .container {
    display: grid;
    grid-template-columns: 25% 1fr;
    padding: 40px;
  }
</style>
