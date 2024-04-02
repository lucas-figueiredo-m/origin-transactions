export class StringUtils {
  static toCapitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static toCapitalizeWords(str: string): string {
    return str.split(' ').map(StringUtils.toCapitalize).join(' ');
  }
}
