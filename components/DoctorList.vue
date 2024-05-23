<script setup lang="ts">
import type { Doctor, Specialisation } from '@/assets/interfaces/interface'

// Props
interface Props {
  doctors: Doctor[],
  specialities: { [key: number]: Specialisation},
}

const props = defineProps<Props>()
</script>

<template>
    <div class="doctorList">
      <DoctorCard 
        v-for="doctor in props.doctors" 
        :key="doctor.id" 
        :doctor="doctor" 
        :specialities="specialities"
      />
    </div>
</template>

<style>
.doctorList {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}
</style>