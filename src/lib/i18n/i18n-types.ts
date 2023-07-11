// This file was auto-generated by 'typesafe-i18n'. Any manual changes will be overwritten.
/* eslint-disable */
import type { BaseTranslation as BaseTranslationType, LocalizedString } from 'typesafe-i18n'

export type BaseTranslation = BaseTranslationType
export type BaseLocale = 'en'

export type Locales =
	| 'en'
	| 'fr'

export type Translation = RootTranslation

export type Translations = RootTranslation

type RootTranslation = {
	contact: {
		/**
		 * C​o​n​t​a​c​t​ ​m​e
		 */
		title: string
	}
	skills: {
		/**
		 * S​k​i​l​l​s
		 */
		title: string
		/**
		 * P​r​o​g​r​a​m​m​i​n​g​ ​l​a​n​g​u​a​g​e​s
		 */
		programmingLanguages: string
		/**
		 * L​i​b​r​a​r​i​e​s​ ​a​n​d​ ​f​r​a​m​e​w​o​r​k​s
		 */
		libraries: string
		/**
		 * D​a​t​a​b​a​s​e​s
		 */
		databases: string
		/**
		 * O​t​h​e​r​s
		 */
		others: string
	}
	stydies: {
		/**
		 * S​t​y​d​i​e​s
		 */
		title: string
	}
	experiences: {
		/**
		 * W​o​r​k​ ​e​x​p​e​r​i​e​n​c​e​s
		 */
		title: string
	}
	/**
	 * F​r​e​e​l​a​n​c​e
	 */
	freelance: string
}

export type TranslationFunctions = {
	contact: {
		/**
		 * Contact me
		 */
		title: () => LocalizedString
	}
	skills: {
		/**
		 * Skills
		 */
		title: () => LocalizedString
		/**
		 * Programming languages
		 */
		programmingLanguages: () => LocalizedString
		/**
		 * Libraries and frameworks
		 */
		libraries: () => LocalizedString
		/**
		 * Databases
		 */
		databases: () => LocalizedString
		/**
		 * Others
		 */
		others: () => LocalizedString
	}
	stydies: {
		/**
		 * Stydies
		 */
		title: () => LocalizedString
	}
	experiences: {
		/**
		 * Work experiences
		 */
		title: () => LocalizedString
	}
	/**
	 * Freelance
	 */
	freelance: () => LocalizedString
}

export type Formatters = {}