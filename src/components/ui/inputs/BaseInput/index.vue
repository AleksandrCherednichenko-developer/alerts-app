<template>
    <label class="base__input-wrapper">
        <span v-if="props.labelText" class="base__input-label">{{ props.labelText }}</span>
        <input
            type="text"
            class="base__input"
            role="textbox"
            :value="props.modelValue"
            :placeholder="props.placeholder"
            :autofocus="props.focusOnMount"
            :autocomplete="props.autocomplete"
            @input="onInput"
        >
    </label>
</template>

<script>
export default {
    name: 'BaseInput',
};
</script>

<script setup>
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    modelValue: { type: [String, Number, null], required: true, default: '' },
    placeholder: { type: String, default: '' },
    labelText: { type: String, default: '' },
    autocomplete: { type: String, default: '' },
    inputNumber: { type: Boolean },
    integerNumber: { type: Boolean },
    focusOnMount: { type: Boolean },
});

const onInput = ev => {
    const { value } = ev.target;
    if (!props.inputNumber) return emit('update:modelValue', ev.target.value.trim());

    let newValue = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
    if (props.integerNumber) {
        newValue = value.replace(/[^0-9]/g, '');
    }
    if (newValue.startsWith('.')) {
        newValue = '0' + newValue;
    }
    ev.target.value = newValue;
    emit('update:modelValue', Number(newValue));

    clearTimeout(ev.target.timer);
    ev.target.timer = setTimeout(() => {
        if (newValue.endsWith('.')) {
            newValue = newValue.slice(0, -1);
            ev.target.value = newValue;
            emit('update:modelValue', Number(newValue));
        }
    }, 3000);
};
</script>
