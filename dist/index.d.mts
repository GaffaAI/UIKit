import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React$1 from 'react';
import React__default, { FC, ButtonHTMLAttributes, LinkHTMLAttributes, ReactNode, SVGProps } from 'react';
import { VariantProps } from 'class-variance-authority';
import { Extension } from '@uiw/react-codemirror';
import * as react_jsx_runtime from 'react/jsx-runtime';
export * from 'lucide-react';
import * as reactHotToast from 'react-hot-toast';
export { reactHotToast as toast };

declare const GAFFA_THEME: {
    extend: {
        backgroundImage: {
            "gradient-primary": string;
            "gradient-secondary": string;
        };
        colors: {
            accent: {
                100: string;
                200: string;
                300: string;
                400: string;
                DEFAULT: string;
                600: string;
                700: string;
                800: string;
            };
            black: {
                100: string;
                200: string;
                300: string;
                400: string;
                DEFAULT: string;
            };
            white: string;
            red: string;
            "light-red": {
                primary: string;
                secondary: string;
            };
            orange: string;
        };
        fontFamily: {
            code: string[];
            sans: string[];
            courier: string[];
        };
    };
};

declare const button: (props?: ({
    variant?: "primary" | "secondary" | "primaryOutline" | "secondaryOutline" | "text" | "textSecondary" | null | undefined;
    size?: "s" | "m" | "l" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button> & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    isDisabled?: boolean;
    size?: "s" | "m" | "l";
    variant?: "primary" | "secondary" | "primaryOutline" | "secondaryOutline" | "text" | "textSecondary";
};
declare const Button: FC<ButtonProps>;

interface CodeEditorProps {
    value: string;
    onChange?: (value: string, isValid: boolean) => void;
    readOnly?: boolean;
    showLineNumbers?: boolean;
    showFoldGutter?: boolean;
    disableLint?: boolean;
    language?: "json" | "markdown";
}
declare const hyperLink: Extension;
declare const CodeEditor: React__default.FC<CodeEditorProps>;

interface DrawerProps {
    isOpen: boolean;
    onClose: () => void;
    children: React__default.ReactNode;
    className?: string;
}
declare const Drawer: React__default.FC<DrawerProps>;

declare const link: (props?: ({
    variant?: "primary" | "secondary" | "tertiary" | null | undefined;
    size?: "s" | "m" | null | undefined;
    defaultVariants?: "variant" | "size" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
type CATLinkProps = LinkHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof link> & {
    variant?: "primary" | "secondary" | "tertiary";
    iconVariant?: "arrow" | "github";
    size?: "s" | "m";
};
declare const CATLink: FC<CATLinkProps>;

interface SideCardProps {
    title: string;
    description: string;
    className?: string;
    icon: ReactNode;
    primaryLink: {
        label: string;
        href: string;
    };
    secondaryLink: {
        label: string;
        href: string;
    };
}
declare const SideCard: React.FC<SideCardProps>;

interface PoweredByGaffaProps {
    className?: string;
}
declare const PoweredByGaffa: React.FC<PoweredByGaffaProps>;

interface TabsProps {
    tabList: string[];
    variant?: "primary" | "secondary";
    onTabChange?: (tab: string) => void;
    className?: string;
}
declare const Tabs: FC<TabsProps>;

interface InputProps extends React__default.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    startIcon?: React__default.ReactNode;
    endIcon?: React__default.ReactNode;
    error?: string;
}
declare const Input: React__default.FC<InputProps>;

interface BlogCardProps {
    title: string;
    description: string;
    image: string;
    className?: string;
    link: {
        label: string;
        href: string;
    };
}
declare const BlogCard: React.FC<BlogCardProps>;

interface SelectOption {
    label: string;
    value: string;
    disabled?: boolean;
    startIcon?: React$1.ReactNode;
}
interface SelectProps {
    label?: string;
    icon?: React$1.ReactNode;
    options: SelectOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    className?: string;
    placeholder?: string;
}
declare const Select: React$1.FC<SelectProps>;

interface SwitchProps {
    checked: boolean;
    onCheckedChange: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    className?: string;
}
declare const Switch: React$1.FC<SwitchProps>;

interface TooltipProps {
    content: React$1.ReactNode;
    children: React$1.ReactNode;
    className?: string;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}
declare const Tooltip: React$1.FC<TooltipProps>;

interface PopoverProps {
    isOpen?: boolean;
    content: React$1.ReactNode;
    children: React$1.ReactNode;
    className?: string;
    side?: "top" | "right" | "bottom" | "left";
    align?: "start" | "center" | "end";
}
declare const Popover: React$1.FC<PopoverProps>;

declare const Gaffa: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

interface InfoCardProps {
    title: string;
    description: string;
    className?: string;
}
declare const InfoCard: FC<InfoCardProps>;

declare const GitHubIcon: (props: SVGProps<SVGSVGElement>) => react_jsx_runtime.JSX.Element;

declare const useBreakpoints: () => {
    isUpSM: boolean;
    isUpMD: boolean;
    isUpLG: boolean;
    isUpXL: boolean;
    isUp2XL: boolean;
    isDownSM: boolean;
    isDownMD: boolean;
    isDownLG: boolean;
    isDownXL: boolean;
    isDown2XL: boolean;
};

export { BlogCard, type BlogCardProps, Button, CATLink, CodeEditor, type CodeEditorProps, Drawer, type DrawerProps, GAFFA_THEME, Gaffa, GitHubIcon, InfoCard, type InfoCardProps, Input, type InputProps, Popover, type PopoverProps, PoweredByGaffa, type PoweredByGaffaProps, Select, type SelectOption, type SelectProps, SideCard, type SideCardProps, Switch, type SwitchProps, Tabs, type TabsProps, Tooltip, type TooltipProps, hyperLink, useBreakpoints };
