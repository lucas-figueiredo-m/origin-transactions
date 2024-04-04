import { useCallback, useEffect } from 'react';
import { useTranslation as useTranslator } from 'react-i18next';
import { Translation } from '.';
import { useSelector } from 'react-redux';
import { settingsSelector } from '@store';

export const useTranslation = () => {
  const translate = useTranslator();
  const { locale } = useSelector(settingsSelector);

  useEffect(() => {
    translate[1].changeLanguage(locale);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  const t = useCallback(
    (key: Translation) => {
      return typeof key === 'string'
        ? translate.t(key)
        : translate.t(key.key, key.options);
    },
    [translate],
  );

  return t;
};
