import Root from "$lib/components/alert-dialog/alert-dialog.svelte";
import Portal from "$lib/components/alert-dialog/alert-dialog-portal.svelte";
import Trigger from "$lib/components/alert-dialog/alert-dialog-trigger.svelte";
import Title from "$lib/components/alert-dialog/alert-dialog-title.svelte";
import Action from "$lib/components/alert-dialog/alert-dialog-action.svelte";
import Cancel from "$lib/components/alert-dialog/alert-dialog-cancel.svelte";
import Footer from "$lib/components/alert-dialog/alert-dialog-footer.svelte";
import Header from "$lib/components/alert-dialog/alert-dialog-header.svelte";
import Overlay from "$lib/components/alert-dialog/alert-dialog-overlay.svelte";
import Content from "$lib/components/alert-dialog/alert-dialog-content.svelte";
import Description from "$lib/components/alert-dialog/alert-dialog-description.svelte";
import Media from "$lib/components/alert-dialog/alert-dialog-media.svelte";

export {
	Action,
	Action as AlertDialogAction,
	Cancel,
	Cancel as AlertDialogCancel,
	Content,
	Content as AlertDialogContent,
	Description,
	Description as AlertDialogDescription,
	Footer,
	Footer as AlertDialogFooter,
	Header,
	Header as AlertDialogHeader,
	Media,
	Media as AlertDialogMedia,
	Overlay,
	Overlay as AlertDialogOverlay,
	Portal,
	Portal as AlertDialogPortal,
	Root,
	Root as AlertDialog,
	Title,
	Title as AlertDialogTitle,
	Trigger,
	Trigger as AlertDialogTrigger,
};
