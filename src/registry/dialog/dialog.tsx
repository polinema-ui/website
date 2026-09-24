import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as React from "react";

const DIALOG_OVERLAY_BASE =
	"fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0";

const DIALOG_CONTENT_BASE =
	"fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border border-neutral-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-md dark:border-white/10 dark:bg-neutral-950";

const DIALOG_HEADER_BASE = "flex flex-col space-y-1.5 text-center sm:text-left";

const DIALOG_FOOTER_BASE = "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 gap-2";

const DIALOG_TITLE_BASE = "text-lg font-semibold leading-none tracking-tight text-neutral-900 dark:text-white";

const DIALOG_DESCRIPTION_BASE = "text-sm text-neutral-500 dark:text-neutral-400";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
	React.ComponentRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className = "", ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={[DIALOG_OVERLAY_BASE, className].filter(Boolean).join(" ")}
		{...props}
	/>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
	React.ComponentRef<typeof DialogPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & { showCloseButton?: boolean }
>(({ className = "", children, showCloseButton = true, ...props }, ref) => (
	<DialogPortal>
		<DialogOverlay />
		<DialogPrimitive.Content
			ref={ref}
			className={[DIALOG_CONTENT_BASE, className].filter(Boolean).join(" ")}
			{...props}
		>
			{children}
			{showCloseButton && (
				<DialogPrimitive.Close className="absolute top-4 right-4 rounded-lg p-1.5 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 active:scale-95 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white">
					<HugeiconsIcon icon={Cancel01Icon} size={16} />
					<span className="sr-only">Close</span>
				</DialogPrimitive.Close>
			)}
		</DialogPrimitive.Content>
	</DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={[DIALOG_HEADER_BASE, className].filter(Boolean).join(" ")} {...props} />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={[DIALOG_FOOTER_BASE, className].filter(Boolean).join(" ")} {...props} />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
	React.ComponentRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className = "", ...props }, ref) => (
	<DialogPrimitive.Title ref={ref} className={[DIALOG_TITLE_BASE, className].filter(Boolean).join(" ")} {...props} />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
	React.ComponentRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className = "", ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={[DIALOG_DESCRIPTION_BASE, className].filter(Boolean).join(" ")}
		{...props}
	/>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
	Dialog,
	DialogPortal,
	DialogOverlay,
	DialogClose,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogFooter,
	DialogTitle,
	DialogDescription,
};
