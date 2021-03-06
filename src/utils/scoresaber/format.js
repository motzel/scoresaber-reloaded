import {capitalize, opt} from '../js'

export const diffColors = {
  easy: 'MediumSeaGreen',
  normal: '#59b0f4',
  hard: 'tomato',
  expert: '#bf2a42',
  expertPlus: '#8f48db',
}

export function getDiffColor(diffInfo) {
  return diffColors[diffInfo.diff] ? diffColors[diffInfo.diff] : null;
}

export function extractDiffAndType(ssDiff) {
  const match = /^_([^_]+)_Solo(.*)$/.exec(ssDiff);
  if (!match) return null;

  return {
    diff: match[1].toLowerCase().replace('plus', 'Plus'),
    type: opt(match, '2', 'Standard'),
  };
}
export function getHumanDiffInfo(diffInfo) {
  if (!diffInfo || !diffInfo.diff) return null;

  const name = capitalize(diffInfo.diff).replace('ExpertPlus', 'Expert+');
  const typeSuffix = diffInfo.type !== 'Standard' ? '/' + diffInfo.type : '';

  switch(name) {
    case 'Easy':
      return {name, type: diffInfo.type, fullName: name + typeSuffix, shortName: 'Es', difficulty: 1, color: getDiffColor(diffInfo)};
    case 'Normal':
      return {name, type: diffInfo.type, fullName: name + typeSuffix, shortName: 'N', difficulty: 3, color: getDiffColor(diffInfo)};
    case 'Hard':
      return {name, type: diffInfo.type, fullName: name + typeSuffix, shortName: 'H', difficulty: 5, color: getDiffColor(diffInfo)};
    case 'Expert':
      return {name, type: diffInfo.type, fullName: name + typeSuffix, shortName: 'Ex', difficulty: 7, color: getDiffColor(diffInfo)};
    case 'Expert+':
      return {name, type: diffInfo.type, fullName: name + typeSuffix, shortName: 'E+', difficulty: 9, color: getDiffColor(diffInfo)};

    default: return null;
  }
}