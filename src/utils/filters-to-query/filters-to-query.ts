import { Filter } from '@/stores/presets/types';

export default function filtersToQuery(filters: readonly Filter[]) {
	const query: Record<string, any> = {};

	filters.forEach((filter) => {
		query[`filter[${filter.field}][${filter.operator}]`] = filter.value;
	});

	return query;
}
