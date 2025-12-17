interface ButtonProps {
  title: string;
  variant?: boolean; //change button style
}

export function Button({ title, variant }: ButtonProps) {
  return (
    <button
      className={`h-[51px] w-[181px] rounded flex items-center justify-center p-4 border transition duration-150 font-medium
    ${
      variant
        ? 'border-blue-500 text-blue-500 hover:bg-blue-50'
        : 'border-blue-500 bg-blue-500 text-white hover:bg-blue-600 shadow-md hover:shadow-lg'
    }`}
    >
      {title}
    </button>
  );
}
