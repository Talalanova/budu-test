<script setup lang="ts">
import { computed } from 'vue'
import { useDoctorStore } from '@/store'
import type { Doctor } from '@/assets/interfaces/interface'

// Props
interface Props {
  doctor: Doctor
}

// Store
const store = useDoctorStore()
const props = defineProps<Props>()

// Computed
const specialityName = computed(() => {  
  return props.doctor?.specialisationList
    .map((speciality) => store.specialisationMap[speciality.id]?.name)  
    .filter((name): name is string => !!name) 
    .join(', ') || '';
});

const doctorName = computed(() => {
  const { lastName, firstName, middleName } = props.doctor;
  return `${lastName} ${firstName} ${middleName}`;
});

</script>

<template>
  <div class="doctor">
    <img class="img" src="/public/img/doctor.jpg" alt="doctor"/>
    <p v-if="doctorName">{{ doctorName }}</p>
    <p v-if="specialityName">{{ specialityName }}</p>
  </div>
</template>

<style>
.doctor {
  display: flex;
  flex-direction: column;
  width: calc((100% - 110px) / 2);
  max-width: 350px;
  min-width: 280px;
  padding: 20px;
  border-radius: 20px;
  border: 1px solid gray;
  cursor: pointer;
}

.img {
  width: 200px;
  margin: 0 auto 20px;
}
</style>

