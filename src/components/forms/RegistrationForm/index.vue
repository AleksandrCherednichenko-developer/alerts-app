<template>
    <form class="form-registration" @submit.prevent="submitData">
        <BaseInput
            v-model="data.username"
            label-text="Username:"
            placeholder="Type your username"
        />
        <PasswordInput
            v-model="data.password"
            label-text="Password:"
            placeholder="Type your password"
        />
        <SubmitButton :disabled="loading" />
    </form>
</template>

<script>
export default {
    name: 'RegistrationForm',
};
</script>

<script setup>
import { reactive, ref } from 'vue';
import BaseInput from '@/components/ui/inputs/BaseInput/index.vue';
import PasswordInput from '@/components/ui/inputs/PasswordInput/index.vue';
import SubmitButton from '@/components/ui/buttons/SubmitButton/index.vue';
import { UserService } from '@/services/user-service';

const data = reactive({
    username: '',
    password: '',
});
const loading = ref(false);

const submitData = async () => {
    loading.value = true;
    await UserService.createUser(data);
    loading.value = false;
};
</script>

<style src="./styles.scss" lang="scss" scoped />
