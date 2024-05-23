<script setup lang="ts">
import type { Doctor } from '@/assets/interfaces/interface'
import DoctorCard from '@/components/DoctorCard.vue'

// Props
interface Props {
  doctors: Doctor[]
}

const props = defineProps<Props>()
</script>

<template>
    <div class="doctorList">
      <DoctorCard 
        v-for="doctor in props.doctors" 
        :key="doctor.id" 
        :doctor="doctor" 
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