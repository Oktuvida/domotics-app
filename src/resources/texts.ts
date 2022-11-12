import esLocalization from "@assets/localization/es.json";
import { locale } from "expo-localization";

export function getText(text: keyof typeof esLocalization): string {
  if (locale.match("es")) {
    return esLocalization[text];
  }
  return text;
}
