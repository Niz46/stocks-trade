import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";

const InputField = ({
  name,
  label,
  type = "text",
  placeholder,
  register,
  error,
  validation,
  disabled,
  value,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-lable">
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={cn(
          "form-input",
          { "opacity-50 cursor-not-allowed": disabled },
          { "border-red-500 focus:border-red-500 focus:ring-red-500": error }
        )}
        {...register(name, validation)}
      />
      {error && <p className="text-sm text-red-500 mt-0.5">{error.message}</p>}
    </div>
  );
};

export default InputField;
