export interface ICreateNumberMaskConfig {
    prefix?: string;
    suffix?: string;
    includeThousandsSeparator?: boolean;
    thousandsSeparatorSymbol?: string;
    allowDecimal?: boolean;
    decimalSymbol?: string | Array<string>;
    decimalLimit?: number;
    requireDecimal?: boolean;
    allowNegative?: boolean;
    allowLeadingZeroes?: boolean;
    integerLimit?: number | null;
    maxValue?: number;
}
export default function createNumberMask(config: ICreateNumberMaskConfig): (rawValue: string) => Array<string>
