<script lang="ts">
	import { PKG_MANAGERS } from "$lib/constants/pkg-managers";
	import { About, Features, Hero, Showcase, Testimonials } from "$routes/(app)/(home)/components";

	/** Set the active package manager tab */
	let activeCmd = $derived(PKG_MANAGERS.find((p) => p.id === activeTab)?.cmd ?? "");

	/** Set the active package manager tab */
	let activeTab = $state<(typeof PKG_MANAGERS)[number]["id"]>("pnpm");

	/** Track if the command has been copied to the clipboard */
	let copied = $state(false);

	/** Copy the active command to the clipboard */
	function handleCopy(): void {
		if (!activeCmd) return;

		navigator.clipboard.writeText(activeCmd);
		copied = true;

		setTimeout(() => (copied = false), 2000);
	}
</script>

<svelte:head>
	<title>Polinema UI</title>
	<meta name="description" content="Flexible, easy to integrate, and easy to use." />
</svelte:head>

<main class="relative flex w-full flex-col overflow-hidden">
	<Hero {activeTab} {copied} {handleCopy} />
	<About />
	<Features />
	<Showcase />
	<Testimonials />
</main>
