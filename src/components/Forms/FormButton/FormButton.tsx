import { cn } from "@/helpers/cn";

export type FormButtonProps = React.ComponentProps<"button"> & {
  label?: string | null | undefined;
  action?: () => void;
};
export default function FormButton({ label, action, children, className, ...props }: FormButtonProps) {
  return (
    <form action={action} className="flex gap-2 items-center rounded-lg w-full">
      <button type="submit" className={cn("block", className)} {...props}>
        {label || children}
      </button>
    </form>
  );
}
