import { useTranslation } from 'react-i18next'
import React from 'react'
import { Link } from 'react-router-dom';

export default function AboutButton() {
  const [t] = useTranslation()
  return (
    <Link to="/about">
      <button type="button" className="about-button">
        {t('about')}
      </button>
    </Link>
  )
}
