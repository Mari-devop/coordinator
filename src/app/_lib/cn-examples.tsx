import { cn } from "./cn";
export function Button({ variant, size, disabled, children, ...props }: {
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={cn(
                "font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
                
                {
                    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500": variant === 'primary',
                    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500": variant === 'secondary',
                    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500": variant === 'danger',
                },
                
                {
                    "px-3 py-1.5 text-sm": size === 'sm',
                    "px-4 py-2 text-base": size === 'md',
                    "px-6 py-3 text-lg": size === 'lg',
                },
                
                {
                    "opacity-50 cursor-not-allowed": disabled,
                    "cursor-pointer": !disabled,
                },
                
                props.className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}

export function Card({ 
    variant = 'default', 
    padding = 'md', 
    shadow = 'sm',
    className,
    children,
    ...props 
}: {
    variant?: 'default' | 'outlined' | 'elevated';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    shadow?: 'none' | 'sm' | 'md' | 'lg';
    className?: string;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "rounded-lg border",
                
                {
                    "bg-white border-gray-200": variant === 'default',
                    "bg-transparent border-gray-300": variant === 'outlined',
                    "bg-white border-transparent": variant === 'elevated',
                },
                
                {
                    "p-0": padding === 'none',
                    "p-3": padding === 'sm',
                    "p-4": padding === 'md',
                    "p-6": padding === 'lg',
                },
                
                {
                    "shadow-none": shadow === 'none',
                    "shadow-sm": shadow === 'sm',
                    "shadow-md": shadow === 'md',
                    "shadow-lg": shadow === 'lg',
                },
                
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function StatusIndicator({ 
    status, 
    size = 'md',
    showLabel = false,
    className 
}: {
    status: 'online' | 'offline' | 'away' | 'busy';
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
    className?: string;
}) {
    const statusConfig = {
        online: { color: 'bg-green-500', label: 'Online' },
        offline: { color: 'bg-gray-400', label: 'Offline' },
        away: { color: 'bg-yellow-500', label: 'Away' },
        busy: { color: 'bg-red-500', label: 'Busy' },
    };

    const sizeConfig = {
        sm: 'w-2 h-2',
        md: 'w-3 h-3',
        lg: 'w-4 h-4',
    };

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <div
                className={cn(
                    "rounded-full",
                    statusConfig[status].color,
                    sizeConfig[size]
                )}
            />
            {showLabel && (
                <span className="text-sm text-gray-600">
                    {statusConfig[status].label}
                </span>
            )}
        </div>
    );
}

export function ResponsiveGrid({ 
    columns = { sm: 1, md: 2, lg: 3 },
    gap = 'md',
    className,
    children 
}: {
    columns?: { sm?: number; md?: number; lg?: number };
    gap?: 'sm' | 'md' | 'lg';
    className?: string;
    children: React.ReactNode;
}) {
    const gapClasses = {
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
    };

    const columnClasses = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
        5: 'grid-cols-5',
        6: 'grid-cols-6',
    };

    return (
        <div
            className={cn(
                "grid",
                gapClasses[gap],
                columns.sm && columnClasses[columns.sm as keyof typeof columnClasses],
                columns.md && `md:${columnClasses[columns.md as keyof typeof columnClasses]}`,
                columns.lg && `lg:${columnClasses[columns.lg as keyof typeof columnClasses]}`,
                className
            )}
        >
            {children}
        </div>
    );
}

export function FormInput({ 
    error,
    success,
    disabled,
    className,
    ...props 
}: {
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={cn(
                "w-full px-3 py-2 border rounded-md shadow-sm transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                
                {
                    "border-gray-300 focus:border-blue-500 focus:ring-blue-500": !error && !success,
                    "border-red-300 focus:border-red-500 focus:ring-red-500": error,
                    "border-green-300 focus:border-green-500 focus:ring-green-500": success,
                    "bg-gray-50 cursor-not-allowed": disabled,
                    "bg-white": !disabled,
                },
                
                className
            )}
            disabled={disabled}
            {...props}
        />
    );
}
