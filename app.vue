<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useDoctorStore } from '@/store/index'
import type { Doctor } from '@/assets/interfaces/interface'
import SpecialtyList from '@/components/SpecialtyList.vue'

const store = useDoctorStore()

let selectedSpeciality = ref<number | null>(null)
let filteredDoctors = ref<Doctor[]>([])

// Computed
const doctors = computed(() => filteredDoctors.value)

watchEffect(() => {
  if (selectedSpeciality.value !== null) {
    const speciality = selectedSpeciality.value;

    filteredDoctors.value = store.doctors.filter((d) =>
      d.specialisationList.some((el) => el.id === speciality)
    )
  } else {
    filteredDoctors.value = store.doctors;
  }
})


// Methods
const filterDoctors = (id: number) => {
  if(id !== selectedSpeciality.value) {
    selectedSpeciality.value = id;
  }
}
</script>

<template>
  <div class="container">
    <SpecialtyList @change="filterDoctors" />
    <DoctorList :doctors="doctors" />         
  </div>
</template>

<style>
  .container {
    display: grid;
    grid-template-columns: 25% 1fr;
    padding: 40px;
  }
</style>
