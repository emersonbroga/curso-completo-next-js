import { cn } from "@/helpers/cn";

export type TextInputProps = React.ComponentProps<"input"> & {
  label?: string | null;
  error?: string | null;
};

export default function TextInput({ label, type = "text", name, className, error, ...props }: TextInputProps) {
  return (
    <div className={cn("my-4", className)}>
      {label ? <label className="text-slate-300 my-2">{label}</label> : null}
      <input
        type={type}
        name={name}
        className={cn(
          "w-full my-2 rounded-md border-2 border-transparent bg-slate-800 px-4 py-3 text-base text-slate-200 focus:outline-none focus:ring-0",
          {
            "border-red-500": !!error,
          }
        )}
        {...props}
      />
      {error ? (
        <div>
          <small className="text-sm text-red-500">{error}</small>
        </div>
      ) : null}
    </div>
  );
}
