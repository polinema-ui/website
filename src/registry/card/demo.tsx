import { ImageCard, JobCard, LoginCard, ScheduledReportsCard } from "@/components/ui/card";

export function CardDefault() {
	return <JobCard />;
}

export function CardLogin() {
	return <LoginCard />;
}

export function CardImage() {
	return <ImageCard />;
}

export function CardScheduled() {
	return <ScheduledReportsCard />;
}
