export interface ICreateNumberMaskConfig {
    prefix?: string;
    suffix?: string;
    includeThousandsSeparator?: boolean;
    thousandsSeparatorSymbol?: string;
    allowDecimal?: boolean;
    decimalSymbol?: string;
    decimalLimit?: number;
    requireDecimal?: boolean;
    allowNegative?: boolean;
    allowLeadingZeroes?: boolean;
    integerLimit?: number | null;
    maxValue: number;
    minValue: number;
}
export default function createNumberMask(config: ICreateNumberMaskConfig): (rawValue: string) => Array<string>
