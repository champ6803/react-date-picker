import { CalendarProps } from "reseller-react-calendar";

declare module "reseller-react-date-picker" {
  export default function DatePicker(props: DatePickerProps): JSX.Element;

  export interface DatePickerProps extends CalendarProps {
    calendarAriaLabel?: string;
    calendarClassName?: string | string[];
    calendarIcon?: JSX.Element | null;
    className?: string | string[];
    clearAriaLabel?: string;
    clearIcon?: JSX.Element | null;
    culture?: CultureType;
    dayAriaLabel?: string;
    dayPlaceholder?: string;
    disabled?: boolean;
    format?: string;
    isOpen?: boolean;
    monthAriaLabel?: string;
    monthPlaceholder?: string;
    name?: string;
    nativeInputAriaLabel?: string;
    onCalendarClose?: () => void;
    onCalendarOpen?: () => void;
    required?: boolean;
    showLeadingZeros?: boolean;
    yearAriaLabel?: string
    yearPlaceholder?: string;
  }

  export enum CultureType {
    GREGORIAN = "gregorian",
    BUDDHIST = "buddhist",
  }
}
