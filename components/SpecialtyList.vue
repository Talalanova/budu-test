<script setup lang="ts">
import { computed } from 'vue'
import { useDoctorStore } from '@/store'

// Store
const store = useDoctorStore()

// Emits
const emit = defineEmits<(event: 'change', id: number) => void>();

// Computed
const specialities = computed(() => store.specialisations)

// Methods
const isDisabled = (specialityId: number) => {
  return !store.allSpecialisationIds.includes(specialityId)
}

const onChange = (id: number) => {
  emit('change', id)
}
</script>

<template>    
  <ul class="SpecialtyList">
    <li 
      v-for="speciality in specialities" 
      :key="speciality.id"
    >
      <label>
        <input
          type="radio"
          name="speciality"
          :value="speciality.id"
          :disabled="isDisabled(speciality.id)"
          @change="onChange(speciality.id)"
        />
        {{ speciality.name }}
      </label>
    </li>
  </ul>
</template>

<style>
  .SpecialtyList {
    height: fit-content;
    margin: 0 20px 0 0;
    padding: 20px;
    border-radius: 20px;
    border: 1px solid gray;
  }

  li {
    list-style: none;    
  }

  label:has(input[disabled])  {
    color: rgb(177, 177, 177); 
    cursor: not-allowed;
  }
</style>
