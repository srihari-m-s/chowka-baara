import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enAll from '@/locales/en.json'

const devMode = import.meta.env.VITE_DEV

export const defaultNS = 'all'
export const resources = {
	en: {
		all: enAll,
	},
} as const

const nsList = Object.keys(resources['en'])

i18n
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		resources,
		lng: 'en',
		fallbackLng: 'en',
		ns: nsList, // List of namespaces
		defaultNS, // Default namespace to use

		debug: devMode ? true : false,
		// debug: devMode,
	})

export { i18n as intl }
