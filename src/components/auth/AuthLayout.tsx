export const AuthLayout = ({
                               title,
                               subtitle,
                               children,
                           }: {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}) => (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-100 px-4">
        <div className="w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-md">
            <header className="space-y-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-sm text-slate-500">{subtitle}</p>
            </header>
            {children}
        </div>
    </div>
);
