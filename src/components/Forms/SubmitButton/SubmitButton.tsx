import { cn } from "@/helpers/cn";

export type SubmitButtonProps = React.ComponentProps<"button"> & {
  label?: string | null;
};
export default function SubmitButton({ label, children, className, ...props }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className={cn("bg-slate-700 hover:bg-indigo-400/40 rounded-lg px-4 py-2 inline max-w-max", className)}
      {...props}
    >
      {label || children}
    </button>
  );
}
