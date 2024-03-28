import { useCallback } from 'react';
import { useTranslation as useTranslator } from 'react-i18next';
import { Translation } from '.';

export const useTranslation = () => {
  const translate = useTranslator();

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
