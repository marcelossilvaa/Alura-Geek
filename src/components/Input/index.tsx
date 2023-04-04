interface InputProps {
  label: string;
  inputId: string;
}

export function Input({ label, inputId }: InputProps) {
  return (
    <div className="bg-white ">
      <label
        className="h-4 w-[500px] p-4 text-sm text-gray-200"
        htmlFor={inputId}
      >
        {label}
      </label>
      <input type="text" className="w-full h-4 p-4 outline-none" id={inputId} />
    </div>
  );
}
