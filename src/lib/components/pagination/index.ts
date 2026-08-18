import Root from "$lib/components/pagination/pagination.svelte";
import Content from "$lib/components/pagination/pagination-content.svelte";
import Ellipsis from "$lib/components/pagination/pagination-ellipsis.svelte";
import Item from "$lib/components/pagination/pagination-item.svelte";
import Link from "$lib/components/pagination/pagination-link.svelte";
import NextButton from "$lib/components/pagination/pagination-next-button.svelte";
import Next from "$lib/components/pagination/pagination-next.svelte";
import PrevButton from "$lib/components/pagination/pagination-prev-button.svelte";
import Previous from "$lib/components/pagination/pagination-previous.svelte";

export {
	Content,
	Content as PaginationContent,
	Ellipsis,
	Ellipsis as PaginationEllipsis,
	Item,
	Item as PaginationItem,
	Link,
	Link as PaginationLink,
	NextButton,
	NextButton as PaginationNextButton,
	Next,
	Next as PaginationNext,
	PrevButton,
	PrevButton as PaginationPrevButton,
	Previous,
	Previous as PaginationPrevious,
	Root,
	Root as Pagination,
};
