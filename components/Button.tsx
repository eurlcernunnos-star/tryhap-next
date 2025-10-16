import { clsx } from 'clsx';
export function Button({ className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={clsx('inline-flex items-center rounded-xl bg-hap-700 px-4 py-2 text-white hover:bg-hap-800 focus:outline-none focus:ring-4 focus:ring-hap-300 shadow-sm', className)}
      {...props}
    />
  );
}
