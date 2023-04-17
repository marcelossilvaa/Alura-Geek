interface ButtonProps {
  title: string;
  variant?: boolean; //change button style
}

export function Button({ title, variant }: ButtonProps) {
  return (
    <button
      className={`h-[51px] w-[181px] flex items-center justify-center p-4 border transition duration-150
    ${
      variant
        ? 'border-blue-500 text-blue-500 hover:bg-blue-100 '
        : 'border-blue-500 bg-blue-500 text-white hover:bg-blue-200'
    }`}
    >
      {title}
    </button>
  );
}
