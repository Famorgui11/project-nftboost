import { twMerge } from "tailwind-merge";

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	const defaultClass = "w-full max-w-grid mx-auto px-3";
	const conbinedClasses = twMerge(defaultClass, className);

	return <div className={conbinedClasses}>{children}</div>;
};

export default Container;
