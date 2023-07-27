<template>
    <label class="base__input-wrapper">
        <span v-if="props.labelText" class="base__input-label">{{ props.labelText }}</span>

        <label class="base__input-inner">
            <input
                v-bind="attrs"
                class="base__input input-password"
                :value="props.modelValue"
                :type="isShowPassword ? 'text' : 'password'"
                :name="props.name"
                :maxlength="props.maxLength"
                :placeholder="props.placeholder"
                aria-label="password-input"
                autocomplete="new-password"
                @input="(ev)=>emit('update:modelValue', ev.target.value.trim())"
                @focus="emit('focus')"
                @blur="emit('blur')"
            >

            <PasswordToggle
                v-show="!props.hasError"
                v-model="isShowPassword"
                aria-label="toggle-password"
                class="input-password__toggle"
                @click.prevent.stop
            />
        </label>
    </label>
</template>

<script>
export default {
    name: 'PasswordInput',
    inheritAttrs: false,
};
</script>

<script setup>
import { inject, onMounted, ref, useAttrs } from 'vue';
import PasswordToggle from '@/components/ui/buttons/PasswordToggleButton/index.vue';

const attrs = useAttrs();

const props = defineProps({
    modelValue: { type: [String, null], required: true, default: '' },
    placeholder: { type: String, default: 'Password' },
    name: { type: String, default: '' },
    maxLength: { type: Number, default: 255 },
    hasError: { type: Boolean },
    errorMsg: { type: String, default: 'Please enter password' },
    focusOnMounted: { type: Boolean },
    labelText: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);
const input = ref(null);
const isShowPassword = ref(false);
const isHSm = inject('isHSm');

onMounted(async () => {
    if (props.focusOnMounted && typeof input.value?.focus === 'function' && !isHSm.value) {
        input.value?.focus();
    }
});
</script>
