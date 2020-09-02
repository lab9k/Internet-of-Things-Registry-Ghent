import { useTranslation } from 'react-i18next'
import React from 'react'

export default function AboutButton() {
  const [t] = useTranslation()
  return (
    <button type="button" className="about-button">
      {t('about')}
    </button>
  )
}
