<template>
    <section class="section-content registration-section">
        <h2 class="title text-title uppercase-text">
            Start Free today
        </h2>
        <RegistrationForm />
    </section>
</template>

<script>
export default {
    name: 'RegistrationSection',
};
</script>

<script setup>
import RegistrationForm from '@/components/forms/RegistrationForm/index.vue';
</script>

<style src="./styles.scss" lang="scss" scoped />
