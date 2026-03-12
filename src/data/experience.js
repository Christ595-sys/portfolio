const getExperience = (t) => [
  {
    period: t.exp1Period,
    title: t.exp1Title,
    company: t.exp1Company,
    description: t.exp1Description,
  },
  {
    period: t.exp2Period,
    title: t.exp2Title,
    company: t.exp2Company,
    description: t.exp2Description,
  },
];

export default getExperience;