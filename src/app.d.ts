// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
/// <reference types="unplugin-icons/types/svelte" />

declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      locale: import("$lib/i18n/i18n-types").Locales
      LL: import("$lib/i18n/i18n-types").TranslationFunctions
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {}
