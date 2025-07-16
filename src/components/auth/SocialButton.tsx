import { Button } from "@/components/ui/button";

export const SocialButton = ({
                                 icon: Icon,
                                 children,
                             }: {
    icon: React.ComponentType<{ className?: string }>;
    children: React.ReactNode;
}) => (
    <Button variant="outline" className="w-full flex items-center gap-2">
        <Icon className="h-4 w-4" />
        {children}
    </Button>
);
