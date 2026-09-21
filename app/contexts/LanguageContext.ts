import { createContext } from 'react';

import type { LanguageContextType } from '~/contexts/types/languages.types';
import { Languages } from '~/contexts/types/languages.types';

const InitialLanguageContext: LanguageContextType = {
  state: Languages.PL,
  onChange: (lang: Languages): void => {
    void lang;
  },
};

const LanguageContext: React.Context<LanguageContextType> = createContext(InitialLanguageContext);

export default LanguageContext;
