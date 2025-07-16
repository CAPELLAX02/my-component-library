import { Link } from "react-router-dom";
export const AuthFooter = ({
                               text,
                               link,
                               linkText,
                           }: {
    text: string;
    link: string;
    linkText: string;
}) => (
    <p className="pt-2 text-center text-sm text-gray-500">
        {text}{" "}
        <Link to={link} className="text-primary hover:underline">
            {linkText}
        </Link>
    </p>
);
