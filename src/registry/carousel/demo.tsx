import {
	ArrowRight01Icon,
	BookmarkIcon,
	EyeIcon,
	FireIcon,
	HeartIcon,
	PauseIcon,
	PlayIcon,
	ShoppingBag01Icon,
	SparklesIcon,
	StarIcon,
	ThumbsUpIcon,
	Tick01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Autoplay from "embla-carousel-autoplay";
import type { EmblaCarouselType } from "embla-carousel";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	useCarousel,
} from "@/components/ui/carousel";

export function CarouselDefault() {
	return (
		<div className="flex items-center justify-center p-4 sm:p-6">
			<div className="relative w-full max-w-sm px-12 sm:max-w-md sm:px-16 md:max-w-lg">
				<Carousel className="w-full">
					<CarouselContent>
						{[
							{
								title: "Feature One",
								tag: "Feature 01",
								desc: "Real-time metrics with instant dashboard rendering and custom alerts.",
								icon: SparklesIcon,
							},
							{
								title: "Feature Two",
								tag: "Feature 02",
								desc: "Autonomous workflows powered by modern tooling.",
								icon: FireIcon,
							},
							{
								title: "Feature Three",
								tag: "Feature 03",
								desc: "Global edge deployment with high availability.",
								icon: StarIcon,
							},
							{
								title: "Feature Four",
								tag: "Feature 04",
								desc: "End-to-end encryption with role management.",
								icon: BookmarkIcon,
							},
							{
								title: "Feature Five",
								tag: "Feature 05",
								desc: "Type-safe SDKs for multi-platform integration.",
								icon: EyeIcon,
							},
						].map((item, index) => (
							<CarouselItem key={index}>
								<div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs transition-all duration-200 hover:border-neutral-300 dark:border-white/10 dark:bg-neutral-950 dark:hover:border-white/20">
									<div className="flex items-center justify-between">
										<span className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
											{item.tag}
										</span>
										<div className="flex size-9 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-700 dark:border-white/10 dark:bg-white/5 dark:text-neutral-300">
											<HugeiconsIcon icon={item.icon} size={18} />
										</div>
									</div>
									<div className="mt-6">
										<h3 className="text-lg font-bold text-neutral-900 dark:text-white">{item.title}</h3>
										<p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">{item.desc}</p>
									</div>
									<div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-white/5">
										<span className="text-[11px] font-medium text-neutral-400">Slide {index + 1} of 5</span>
										<button
											type="button"
											className="group flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:underline dark:text-white"
										>
											<span>Explore Feature</span>
											<HugeiconsIcon
												icon={ArrowRight01Icon}
												size={14}
												className="transition-transform group-hover:translate-x-1"
											/>
										</button>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-4 sm:-left-6" />
					<CarouselNext className="-right-4 sm:-right-6" />
				</Carousel>
			</div>
		</div>
	);
}

export function CarouselMultiple() {
	return (
		<div className="flex items-center justify-center p-4 sm:p-6">
			<div className="relative w-full max-w-md px-12 sm:max-w-lg sm:px-16 md:max-w-xl lg:max-w-2xl">
				<Carousel opts={{ align: "start" }} className="w-full">
					<CarouselContent className="-ml-4">
						{[
							{ title: "Svelte", tag: "Runes" },
							{ title: "Tailwind", tag: "CSS Engine" },
							{ title: "TypeScript", tag: "Type-Safe" },
							{ title: "Vite", tag: "Bundler" },
							{ title: "Motion", tag: "Smooth" },
							{ title: "Bits UI", tag: "Accessible" },
						].map((item, index) => (
							<CarouselItem key={index} className="basis-1/2 pl-4 sm:basis-1/3">
								<div className="group relative flex aspect-square flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-5 shadow-xs transition-all hover:border-neutral-300 hover:shadow-md dark:border-white/10 dark:bg-neutral-950 dark:hover:border-white/20">
									<div className="flex items-center justify-between">
										<span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-bold text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
											{item.tag}
										</span>
										<span className="font-mono text-xs font-semibold text-neutral-400">0{index + 1}</span>
									</div>
									<div className="my-2">
										<h4 className="text-base font-bold text-neutral-900 dark:text-white">{item.title}</h4>
										<p className="mt-1 text-[11px] text-neutral-500 dark:text-neutral-400">Component Primitive</p>
									</div>
									<div className="flex items-center gap-1 text-[11px] font-semibold text-neutral-900 dark:text-white">
										<span>View Details</span>
										<HugeiconsIcon
											icon={ArrowRight01Icon}
											size={12}
											className="transition-transform group-hover:translate-x-0.5"
										/>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-4 sm:-left-6" />
					<CarouselNext className="-right-4 sm:-right-6" />
				</Carousel>
			</div>
		</div>
	);
}

export function CarouselVertical() {
	return (
		<div className="flex items-center justify-center p-6">
			<div className="relative w-full max-w-xs py-10 sm:max-w-sm sm:py-12">
				<Carousel orientation="vertical" opts={{ align: "start" }} className="w-full">
					<CarouselContent className="h-72">
						{[
							{
								title: "Release v2.4",
								time: "Just now",
								status: "RELEASED",
								user: "RP",
								desc: "Added carousel variants and improved accessibility.",
							},
							{
								title: "Security Audit",
								time: "15m ago",
								status: "VERIFIED",
								user: "SEC",
								desc: "No issues found in third-party dependencies.",
							},
							{
								title: "Build Succeeded",
								time: "1h ago",
								status: "SUCCESS",
								user: "CI",
								desc: "Deploy pipeline completed across edge servers.",
							},
							{
								title: "Performance 100",
								time: "3h ago",
								status: "OPTIMIZED",
								user: "PERF",
								desc: "Audit achieved perfect score on mobile and desktop.",
							},
						].map((item, index) => (
							<CarouselItem key={index} className="basis-1/2 pt-3">
								<div className="flex h-full flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-4 shadow-xs transition-all hover:border-neutral-300 dark:border-white/10 dark:bg-neutral-950 dark:hover:border-white/20">
									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<div className="flex size-6 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white dark:bg-white dark:text-black">
												{item.user}
											</div>
											<span className="rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-bold tracking-wider text-neutral-700 uppercase dark:bg-white/10 dark:text-neutral-300">
												{item.status}
											</span>
										</div>
										<span className="text-[11px] font-medium text-neutral-400">{item.time}</span>
									</div>
									<div className="mt-2">
										<h4 className="text-xs font-bold text-neutral-900 dark:text-white">{item.title}</h4>
										<p className="mt-1 line-clamp-1 text-[11px] text-neutral-500 dark:text-neutral-400">{item.desc}</p>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-top-6" />
					<CarouselNext className="-bottom-6" />
				</Carousel>
			</div>
		</div>
	);
}

export function CarouselAutoplay() {
	const [isPlaying, setIsPlaying] = React.useState(true);
	const [mainApi, setMainApi] = React.useState<EmblaCarouselType | undefined>(undefined);
	const { selectedIndex } = useCarousel();

	const toggleAutoplay = () => {
		if (!mainApi) return;
		const autoplay = mainApi.plugins()?.autoplay;
		if (!autoplay) return;

		if (isPlaying) {
			autoplay.stop();
			setIsPlaying(false);
		} else {
			autoplay.play();
			setIsPlaying(true);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center p-4 sm:p-6">
			<div className="relative w-full max-w-sm px-12 sm:max-w-md sm:px-16 md:max-w-lg">
				<div className="mb-3 flex items-center justify-between px-1">
					<div className="flex items-center gap-2">
						<span className="relative flex size-2.5">
							<span
								className={`absolute inline-flex h-full w-full animate-ping rounded-full ${isPlaying ? "bg-emerald-400" : "bg-amber-400"} opacity-75`}
							></span>
							<span
								className={`relative inline-flex size-2.5 rounded-full ${isPlaying ? "bg-emerald-500" : "bg-amber-500"}`}
							></span>
						</span>
						<span className="text-xs font-semibold tracking-wider text-neutral-600 uppercase dark:text-neutral-300">
							{isPlaying ? "Live Autoplay" : "Paused"}
						</span>
					</div>
					<Button variant="outline" size="sm" onClick={toggleAutoplay} className="h-7 gap-1.5 text-xs">
						{isPlaying ? (
							<>
								<HugeiconsIcon icon={PauseIcon} size={12} />
								<span>Pause Loop</span>
							</>
						) : (
							<>
								<HugeiconsIcon icon={PlayIcon} size={12} />
								<span>Resume Loop</span>
							</>
						)}
					</Button>
				</div>
				<Carousel
					plugins={[Autoplay({ delay: 2500, stopOnInteraction: false })]}
					setApi={setMainApi}
					className="w-full"
				>
					<CarouselContent>
						{[
							{ title: "Slide One", desc: "Fine-grained reactivity with state and derived signals." },
							{ title: "Slide Two", desc: "Utility classes compiled for maximum speed." },
							{ title: "Slide Three", desc: "Built on accessibility standards." },
							{ title: "Slide Four", desc: "Copy-paste production ready components." },
						].map((slide, index) => (
							<CarouselItem key={index}>
								<div className="flex aspect-video flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-white/10 dark:bg-neutral-950">
									<div className="flex items-center justify-between">
										<span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
											SLIDE 0{index + 1}
										</span>
										<HugeiconsIcon icon={SparklesIcon} size={16} className="text-neutral-400" />
									</div>
									<div>
										<h3 className="text-lg font-bold text-neutral-900 dark:text-white">{slide.title}</h3>
										<p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{slide.desc}</p>
									</div>
									<div className="h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-white/10">
										<div
											className="h-full bg-neutral-900 transition-all duration-300 dark:bg-white"
											style={{ width: `${((selectedIndex + 1) / 4) * 100}%` }}
										></div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-4 sm:-left-6" />
					<CarouselNext className="-right-4 sm:-right-6" />
				</Carousel>
			</div>
		</div>
	);
}

function CarouselDotsHelper() {
	const { selectedIndex, scrollSnaps, scrollTo } = useCarousel();

	return (
		<div className="mt-4 flex items-center justify-center gap-2">
			{scrollSnaps.map((_, index) => (
				<button
					key={index}
					type="button"
					onClick={() => scrollTo(index)}
					className={`h-2 rounded-full transition-all duration-300 ${
						index === selectedIndex
							? "w-7 bg-neutral-900 dark:bg-white"
							: "w-2 bg-neutral-300 hover:bg-neutral-400 dark:bg-neutral-700"
					}`}
					aria-label={`Go to slide ${index + 1}`}
				/>
			))}
		</div>
	);
}

export function CarouselDots() {
	return (
		<div className="flex flex-col items-center justify-center p-4 sm:p-6">
			<div className="relative w-full max-w-sm px-12 sm:max-w-md sm:px-16 md:max-w-lg">
				<Carousel className="w-full">
					<CarouselContent>
						{[
							{ title: "Dashboards", desc: "Customizable widgets and real-time analytics stream." },
							{ title: "Notifications", desc: "Instant alert routing across channels." },
							{ title: "Collaboration", desc: "Multi-user role management with presence." },
							{ title: "Deployments", desc: "One-click deployment pipeline with zero downtime." },
						].map((slide, index) => (
							<CarouselItem key={index}>
								<div className="flex aspect-video flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-white/10 dark:bg-neutral-950">
									<div className="flex items-center justify-between">
										<span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
											Step 0{index + 1}
										</span>
										<span className="font-mono text-xs text-neutral-400">0{index + 1} / 04</span>
									</div>
									<div>
										<h3 className="text-xl font-bold text-neutral-900 dark:text-white">{slide.title}</h3>
										<p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400">{slide.desc}</p>
									</div>
									<div>
										<Button size="sm">Continue Step</Button>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-4 sm:-left-6" />
					<CarouselNext className="-right-4 sm:-right-6" />
				</Carousel>
				<CarouselDotsHelper />
			</div>
		</div>
	);
}

function CarouselFractionHelper() {
	const { selectedIndex, scrollSnaps } = useCarousel();

	return (
		<div className="w-full">
			<div className="mb-3 flex items-center justify-between">
				<span className="text-xs font-bold text-neutral-900 dark:text-white">PROJECT SHOWCASE</span>
				<div className="rounded-full bg-neutral-900 px-3 py-1 font-mono text-xs font-bold text-white dark:bg-white dark:text-black">
					{String(selectedIndex + 1).padStart(2, "0")} / {String(scrollSnaps.length || 5).padStart(2, "0")}
				</div>
			</div>
			<div className="mb-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-white/10">
				<div
					className="h-full bg-neutral-900 transition-all duration-300 dark:bg-white"
					style={{ width: `${((selectedIndex + 1) / (scrollSnaps.length || 5)) * 100}%` }}
				/>
			</div>
		</div>
	);
}

export function CarouselFraction() {
	return (
		<div className="flex flex-col items-center justify-center p-4 sm:p-6">
			<div className="relative w-full max-w-sm px-12 sm:max-w-md sm:px-16 md:max-w-lg">
				<Carousel className="w-full">
					<CarouselFractionHelper />
					<CarouselContent>
						{[
							{ title: "Project One", client: "Retail Global", tags: ["UI/UX", "React"] },
							{ title: "Project Two", client: "DataTech Inc", tags: ["Dashboard", "AI"] },
							{ title: "Project Three", client: "PayX", tags: ["Mobile", "Security"] },
							{ title: "Project Four", client: "CloudCorp", tags: ["SaaS", "Tailwind"] },
							{ title: "Project Five", client: "Polinema UI", tags: ["Design", "Components"] },
						].map((project, index) => (
							<CarouselItem key={index}>
								<div className="flex aspect-video flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-white/10 dark:bg-neutral-950">
									<div className="flex items-center gap-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="rounded-md bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-700 dark:bg-white/10 dark:text-neutral-300"
											>
												{tag}
											</span>
										))}
									</div>
									<div>
										<span className="text-xs text-neutral-400">{project.client}</span>
										<h3 className="text-lg font-bold text-neutral-900 dark:text-white">{project.title}</h3>
									</div>
									<div className="flex items-center justify-between border-t border-neutral-100 pt-3 dark:border-white/5">
										<span className="text-[11px] text-neutral-400">View Case Study</span>
										<HugeiconsIcon
											icon={ArrowRight01Icon}
											size={14}
											className="text-neutral-600 dark:text-neutral-300"
										/>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-4 sm:-left-6" />
					<CarouselNext className="-right-4 sm:-right-6" />
				</Carousel>
			</div>
		</div>
	);
}

export function CarouselThumbnail() {
	const [mainApi, setMainApi] = React.useState<EmblaCarouselType | undefined>(undefined);
	const [selectedIndex, setSelectedIndex] = React.useState(0);

	const items = [
		{
			img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80",
			title: "Gallery One",
			location: "Gallery",
		},
		{
			img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&auto=format&fit=crop&q=80",
			title: "Gallery Two",
			location: "Gallery",
		},
		{
			img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80",
			title: "Gallery Three",
			location: "Gallery",
		},
		{
			img: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&auto=format&fit=crop&q=80",
			title: "Gallery Four",
			location: "Gallery",
		},
	];

	React.useEffect(() => {
		if (!mainApi) return;
		const onSelect = () => setSelectedIndex(mainApi.selectedScrollSnap());
		mainApi.on("select", onSelect);
		return () => {
			mainApi.off("select", onSelect);
		};
	}, [mainApi]);

	return (
		<div className="flex flex-col items-center justify-center p-4 sm:p-6">
			<div className="relative w-full max-w-sm px-12 sm:max-w-md sm:px-16">
				<Carousel setApi={setMainApi} className="w-full">
					<CarouselContent>
						{items.map((item, index) => (
							<CarouselItem key={index}>
								<div className="relative overflow-hidden rounded-2xl border border-neutral-200 shadow-xs dark:border-white/10">
									<img src={item.img} alt={item.title} className="aspect-video w-full object-cover" />
									<div className="absolute inset-0 flex flex-col justify-between bg-linear-to-t from-black/80 via-black/20 to-transparent p-4 text-white">
										<div className="flex justify-end">
											<span className="rounded-full bg-black/40 px-2.5 py-0.5 font-mono text-xs font-bold backdrop-blur-md">
												0{index + 1} / 04
											</span>
										</div>
										<div>
											<span className="text-[11px] font-medium text-white/80">{item.location}</span>
											<h4 className="text-base font-bold">{item.title}</h4>
										</div>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-4 sm:-left-6" />
					<CarouselNext className="-right-4 sm:-right-6" />
				</Carousel>
				<div className="mt-3 flex justify-center gap-2.5">
					{items.map((item, index) => (
						<button
							key={index}
							type="button"
							onClick={() => mainApi?.scrollTo(index)}
							className={`overflow-hidden rounded-xl border-2 transition-all ${
								index === selectedIndex
									? "scale-105 border-neutral-900 dark:border-white"
									: "border-transparent opacity-50 hover:opacity-100"
							}`}
						>
							<img src={item.img} alt={`Thumb ${index + 1}`} className="size-12 object-cover sm:size-14" />
						</button>
					))}
				</div>
			</div>
		</div>
	);
}

export function CarouselTestimonial() {
	const [helpfulVotes, setHelpfulVotes] = React.useState<Record<number, number>>({ 0: 24, 1: 18, 2: 32 });
	const [userVoted, setUserVoted] = React.useState<Record<number, boolean>>({});

	const testimonials = [
		{
			quote: "This component library streamlined our landing page workflow with professional results.",
			author: "User One",
			role: "Frontend Engineer",
			avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
		},
		{
			quote: "Clean components that are fast and easy to customize for our brand.",
			author: "User Two",
			role: "UI Designer",
			avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
		},
		{
			quote: "The best UI solution for our stack. Performance feels exceptionally fast.",
			author: "User Three",
			role: "Fullstack Engineer",
			avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
		},
	];

	const toggleHelpful = (index: number) => {
		if (userVoted[index]) {
			setHelpfulVotes((prev) => ({ ...prev, [index]: (prev[index] || 1) - 1 }));
			setUserVoted((prev) => ({ ...prev, [index]: false }));
		} else {
			setHelpfulVotes((prev) => ({ ...prev, [index]: (prev[index] || 0) + 1 }));
			setUserVoted((prev) => ({ ...prev, [index]: true }));
		}
	};

	return (
		<div className="flex items-center justify-center p-4 sm:p-6">
			<div className="relative w-full max-w-sm px-12 sm:max-w-md sm:px-16 md:max-w-lg">
				<Carousel className="w-full">
					<CarouselContent>
						{testimonials.map((item, index) => (
							<CarouselItem key={index}>
								<div className="flex flex-col justify-between rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs dark:border-white/10 dark:bg-neutral-950">
									<div>
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-1 text-amber-500">
												{Array.from({ length: 5 }).map((_, i) => (
													<HugeiconsIcon key={i} icon={StarIcon} size={16} />
												))}
											</div>
											<span className="rounded-full bg-neutral-100 px-2.5 py-0.5 text-[10px] font-bold text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
												✓ Verified Review
											</span>
										</div>
										<p className="mt-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
											"{item.quote}"
										</p>
									</div>
									<div className="mt-6 flex items-center justify-between border-t border-neutral-100 pt-4 dark:border-white/5">
										<div className="flex items-center gap-3">
											<img
												src={item.avatar}
												alt={item.author}
												className="size-10 rounded-full object-cover ring-1 ring-neutral-200 dark:ring-white/20"
											/>
											<div>
												<h4 className="text-sm font-bold text-neutral-900 dark:text-white">{item.author}</h4>
												<p className="text-xs text-neutral-500 dark:text-neutral-400">{item.role}</p>
											</div>
										</div>
										<button
											type="button"
											onClick={() => toggleHelpful(index)}
											className={`flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition-colors ${
												userVoted[index]
													? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-black"
													: "border-neutral-200 text-neutral-600 hover:bg-neutral-50 dark:border-white/10 dark:text-neutral-400 dark:hover:bg-neutral-900"
											}`}
										>
											<HugeiconsIcon icon={ThumbsUpIcon} size={12} />
											<span>{helpfulVotes[index] || 24}</span>
										</button>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-4 sm:-left-6" />
					<CarouselNext className="-right-4 sm:-right-6" />
				</Carousel>
			</div>
		</div>
	);
}

export function CarouselProduct() {
	const [productColors, setProductColors] = React.useState<Record<number, string>>({
		0: "black",
		1: "gray",
		2: "black",
	});
	const [likedProducts, setLikedProducts] = React.useState<Record<number, boolean>>({});
	const [addedToCart, setAddedToCart] = React.useState<Record<number, boolean>>({});

	const products = [
		{ id: 0, title: "Product One", price: "$129", oldPrice: "$179", tag: "25% OFF", rating: "4.9 (128 reviews)" },
		{ id: 1, title: "Product Two", price: "$89", oldPrice: "$119", tag: "HOT SALE", rating: "4.8 (94 reviews)" },
		{ id: 2, title: "Product Three", price: "$199", oldPrice: "$249", tag: "NEW", rating: "4.9 (210 reviews)" },
	];

	const handleAddToCart = (index: number) => {
		setAddedToCart((prev) => ({ ...prev, [index]: true }));
		setTimeout(() => {
			setAddedToCart((prev) => ({ ...prev, [index]: false }));
		}, 2000);
	};

	return (
		<div className="flex items-center justify-center p-4 sm:p-6">
			<div className="relative w-full max-w-xs px-12 sm:max-w-sm sm:px-16">
				<Carousel className="w-full">
					<CarouselContent>
						{products.map((item, index) => (
							<CarouselItem key={index}>
								<div className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-5 shadow-xs dark:border-white/10 dark:bg-neutral-950">
									<div className="flex items-center justify-between">
										<span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-bold text-neutral-700 dark:bg-white/10 dark:text-neutral-300">
											{item.tag}
										</span>
										<button
											type="button"
											onClick={() => setLikedProducts((prev) => ({ ...prev, [index]: !prev[index] }))}
											className={`flex size-8 items-center justify-center rounded-full transition-colors ${
												likedProducts[index]
													? "bg-rose-50 text-rose-500 dark:bg-rose-500/20"
													: "bg-neutral-100 text-neutral-400 hover:text-neutral-600 dark:bg-white/5"
											}`}
											aria-label="Wishlist"
										>
											<HugeiconsIcon
												icon={HeartIcon}
												size={16}
												className={likedProducts[index] ? "fill-current" : ""}
											/>
										</button>
									</div>

									<div className="my-5 flex h-32 items-center justify-center rounded-2xl bg-neutral-100 dark:bg-white/5">
										<HugeiconsIcon icon={ShoppingBag01Icon} size={48} className="text-neutral-400" />
									</div>

									<div className="flex items-center justify-between">
										<div className="flex items-center gap-1 text-xs font-semibold text-amber-500">
											<HugeiconsIcon icon={StarIcon} size={14} />
											<span>{item.rating}</span>
										</div>
										<div className="flex items-center gap-1">
											<button
												type="button"
												onClick={() => setProductColors((prev) => ({ ...prev, [index]: "black" }))}
												className={`size-3.5 rounded-full bg-neutral-900 ring-offset-2 transition-transform dark:bg-white ${productColors[index] === "black" ? "scale-110 ring-2 ring-neutral-900 dark:ring-white" : ""}`}
												aria-label="Black color"
											/>
											<button
												type="button"
												onClick={() => setProductColors((prev) => ({ ...prev, [index]: "gray" }))}
												className={`size-3.5 rounded-full bg-neutral-400 ring-offset-2 transition-transform ${productColors[index] === "gray" ? "scale-110 ring-2 ring-neutral-400" : ""}`}
												aria-label="Gray color"
											/>
										</div>
									</div>

									<h3 className="mt-3 text-base font-bold text-neutral-900 dark:text-white">{item.title}</h3>

									<div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-2 dark:border-white/5">
										<div>
											<span className="text-lg font-extrabold text-neutral-900 dark:text-white">{item.price}</span>
											<span className="ml-1.5 text-xs text-neutral-400 line-through">{item.oldPrice}</span>
										</div>
										<button
											type="button"
											onClick={() => handleAddToCart(index)}
											className="flex items-center gap-1.5 rounded-xl bg-neutral-900 px-3 py-2 text-xs font-bold text-white transition-all hover:bg-neutral-800 active:scale-95 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
										>
											{addedToCart[index] ? (
												<>
													<HugeiconsIcon
														icon={Tick01Icon}
														size={14}
														className="text-emerald-400 dark:text-emerald-600"
													/>
													<span>Added!</span>
												</>
											) : (
												<span>Add to Cart</span>
											)}
										</button>
									</div>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className="-left-4 sm:-left-6" />
					<CarouselNext className="-right-4 sm:-right-6" />
				</Carousel>
			</div>
		</div>
	);
}
