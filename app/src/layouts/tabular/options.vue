<script lang="ts">
export default {
	inheritAttrs: false,
};
</script>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useSync } from '@directus/composables';
import { Field } from '@directus/types';
import { ref, watch } from 'vue';

interface Props {
	fields: string[];
	activeFields: Field[];
	tableSpacing: 'compact' | 'cozy' | 'comfortable';
	iframeSrc: string;
	iframeHeight: string;
}

const props = defineProps<Props>();

const emit = defineEmits(['update:tableSpacing', 'update:activeFields', 'update:fields', 'update:iframeSrc', 'update:iframeHeight']);

const { t } = useI18n();

const tableSpacingWritable = useSync(props, 'tableSpacing', emit);
const iframeSrcWritable = useSync(props, 'iframeSrc', emit);
const iframeHeight = useSync(props, 'iframeHeight', emit);

// watch([iframeSrcWritable], () => {
// 	console.log('iframeSrc', iframeSrcWritable.value)
// 	emit('update:iframeSrc', iframeSrcWritable.value)
// })

// watch([iframeHeight], () => {
// 	console.log('iframeHeight', iframeHeight.value)
// 	emit('update:iframeHeight', iframeHeight.value)
// })
</script>

<template>
	<div class="field">
		<div class="type-label">{{ t('layouts.tabular.spacing') }}</div>
		<v-select
			v-model="tableSpacingWritable"
			:items="[
				{
					text: t('layouts.tabular.compact'),
					value: 'compact',
				},
				{
					text: t('layouts.tabular.cozy'),
					value: 'cozy',
				},
				{
					text: t('layouts.tabular.comfortable'),
					value: 'comfortable',
				},
			]"
		/>
	</div>
	<div class="field">
		<div class="type-label">iframe src</div>
		<v-input v-model="iframeSrcWritable"/>
	</div>
	<div class="field">
		<div class="type-label">iframe 高度</div>
		<v-input v-model="iframeHeight"/>
	</div>
</template>

<style lang="scss" scoped>
.v-checkbox {
	width: 100%;

	.spacer {
		flex-grow: 1;
	}
}

.drag-handle {
	--v-icon-color: var(--theme--foreground-subdued);

	cursor: ns-resize;

	&:hover {
		--v-icon-color: var(--theme--foreground);
	}
}
</style>
