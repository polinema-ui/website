import Content from "./carousel-content.svelte";
import Item from "./carousel-item.svelte";
import Next from "./carousel-next.svelte";
import Previous from "./carousel-previous.svelte";
import Root, { useCarousel } from "./carousel.svelte";

export {
	Content,
	Content as CarouselContent,
	Item,
	Item as CarouselItem,
	Next,
	Next as CarouselNext,
	Previous,
	Previous as CarouselPrevious,
	Root,
	Root as Carousel,
	useCarousel,
};
