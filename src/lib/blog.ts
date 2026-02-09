export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    slug: "guide-roas-2025",
    title:
      "Guide complet du ROAS en 2025 : comment mesurer et optimiser votre retour sur investissement publicitaire",
    excerpt:
      "Découvrez comment calculer votre ROAS, les benchmarks par secteur et nos conseils pour l'améliorer.",
    date: "2025-01-15",
    author: "Sébastien Sanita",
    category: "Guide",
    readTime: "8 min",
    content: `## Qu'est-ce que le ROAS et pourquoi est-il essentiel en 2025 ?

Le ROAS (Return On Ad Spend) est l'indicateur clé qui mesure la rentabilité de vos campagnes publicitaires. Sa formule est simple : revenus générés divisés par le montant dépensé en publicité. Par exemple, un ROAS de 4 signifie que chaque euro investi vous rapporte 4 euros de chiffre d'affaires. En 2025, avec l'augmentation constante des coûts publicitaires sur Meta Ads et Google Ads, maîtriser cet indicateur n'est plus une option mais une nécessité absolue pour toute entreprise qui investit en publicité digitale.

## Les benchmarks ROAS par secteur d'activité

Les performances varient considérablement selon votre secteur. En e-commerce, un ROAS de 4 à 5 est généralement considéré comme satisfaisant, tandis que les marques de luxe peuvent viser un ROAS de 8 à 10 grâce à des paniers moyens élevés. Pour les entreprises SaaS et B2B, un ROAS direct plus faible (entre 2 et 3) peut être acceptable si la valeur vie client (LTV) est élevée. Le secteur du retail physique avec drive-to-store se situe souvent entre 3 et 6. L'important est de définir votre propre objectif en fonction de vos marges, de votre coût d'acquisition acceptable et de votre modèle économique.

## 5 stratégies concrètes pour améliorer votre ROAS

Premièrement, segmentez finement vos audiences : plutôt que de cibler large, concentrez vos budgets sur les segments qui convertissent le mieux. Deuxièmement, optimisez vos créatives en testant systématiquement différents formats (vidéo courte, carrousel, image statique) et en mesurant leur impact sur le ROAS. Troisièmement, travaillez vos pages de destination pour maximiser le taux de conversion post-clic. Quatrièmement, exploitez le retargeting intelligent en créant des audiences personnalisées basées sur le comportement réel de vos visiteurs. Cinquièmement, utilisez un outil comme The Sheep pour centraliser vos données multi-plateformes et identifier rapidement les campagnes les plus performantes.

## L'importance d'un suivi en temps réel

Mesurer son ROAS une fois par mois ne suffit plus. Les algorithmes publicitaires évoluent en permanence, et une campagne rentable peut rapidement devenir déficitaire si elle n'est pas surveillée. Avec un dashboard centralisé comme celui de The Sheep, vous pouvez suivre votre ROAS en temps réel, comparer les performances entre Meta Ads et Google Ads, et réagir immédiatement lorsqu'un changement s'impose. L'automatisation des alertes et des rapports vous permet de gagner un temps précieux tout en gardant le contrôle total sur vos investissements publicitaires.`,
  },
  {
    slug: "meta-ads-vs-google-ads",
    title:
      "Meta Ads vs Google Ads : quel canal choisir pour votre business ?",
    excerpt:
      "Comparatif détaillé des deux géants de la publicité en ligne pour vous aider à faire le bon choix.",
    date: "2025-01-10",
    author: "Sébastien Sanita",
    category: "Comparatif",
    readTime: "6 min",
    content: `## Deux philosophies publicitaires différentes

Meta Ads (Facebook et Instagram) et Google Ads représentent deux approches fondamentalement différentes de la publicité digitale. Google Ads repose principalement sur l'intention de recherche : vous touchez des utilisateurs qui cherchent activement un produit ou un service. Meta Ads, en revanche, s'appuie sur la découverte et le ciblage comportemental : vous présentez votre offre à des personnes qui correspondent à votre audience idéale, même si elles ne vous cherchent pas encore. Cette distinction est cruciale pour définir votre stratégie d'acquisition.

## Quand privilégier Google Ads ?

Google Ads est particulièrement efficace lorsque votre produit ou service répond à une demande existante et clairement exprimée. Si les gens recherchent activement ce que vous proposez (par exemple "logiciel de gestion de campagnes publicitaires" ou "agence marketing digital Paris"), le Search Ads vous positionne exactement au moment de l'intention d'achat. Le format Shopping est également redoutable pour l'e-commerce avec un catalogue produit important. Le coût par clic peut être plus élevé, mais le taux de conversion est généralement supérieur car l'utilisateur est déjà dans une démarche active.

## Quand privilégier Meta Ads ?

Meta Ads excelle dans la création de demande et la notoriété de marque. Si vous lancez un produit innovant, si votre audience ne connaît pas encore votre marque, ou si vous avez un fort potentiel visuel, Meta Ads est votre meilleur allié. Les formats créatifs (Reels, Stories, carrousels) permettent de raconter une histoire et de susciter l'émotion. Le ciblage par centres d'intérêt et les audiences similaires (Lookalike) sont extrêmement puissants pour toucher des prospects qualifiés à grande échelle. Le coût par impression est souvent plus faible que sur Google, ce qui en fait un excellent levier pour le haut de funnel.

## La meilleure stratégie : combiner les deux

En réalité, la question n'est pas de choisir entre Meta Ads et Google Ads, mais de les combiner intelligemment. Une stratégie performante utilise Meta Ads pour la découverte et la considération, puis Google Ads pour capturer l'intention de recherche générée. Le défi réside dans l'attribution et la vision cross-canal. C'est exactement ce que permet The Sheep : en centralisant vos données Meta Ads et Google Ads dans un seul dashboard, vous visualisez le parcours complet de vos clients et optimisez votre budget global plutôt que chaque canal en silo.`,
  },
  {
    slug: "automatiser-campagnes-publicitaires",
    title:
      "5 façons d'automatiser vos campagnes publicitaires et gagner du temps",
    excerpt:
      "L'automatisation est la clé pour scaler vos campagnes. Voici 5 stratégies concrètes à mettre en place.",
    date: "2025-01-05",
    author: "Sébastien Sanita",
    category: "Automatisation",
    readTime: "5 min",
    content: `## Pourquoi l'automatisation est devenue indispensable

Gérer manuellement des campagnes publicitaires sur plusieurs plateformes est devenu un véritable cauchemar logistique. Entre la création de rapports, le suivi des performances, l'ajustement des budgets et la gestion des audiences, un media buyer peut facilement passer 60% de son temps sur des tâches répétitives. L'automatisation ne remplace pas l'expertise humaine, mais elle libère du temps pour se concentrer sur la stratégie et la créativité — les deux leviers qui font véritablement la différence.

## Les 5 automatisations essentielles à mettre en place

Premièrement, automatisez vos rapports de performance : plutôt que de compiler manuellement des données depuis Meta Ads Manager et Google Ads, utilisez un outil centralisé qui génère des rapports automatiques quotidiens ou hebdomadaires. Deuxièmement, configurez des alertes intelligentes qui vous préviennent lorsqu'une campagne dépasse un seuil de CPA ou que le ROAS chute sous votre objectif. Troisièmement, mettez en place des règles automatiques de budget : augmentez automatiquement le budget des campagnes performantes et réduisez celui des campagnes sous-performantes. Quatrièmement, automatisez la création d'audiences de retargeting en synchronisant vos données CRM avec vos plateformes publicitaires. Cinquièmement, programmez vos campagnes à l'avance avec des règles de diffusion basées sur les créneaux horaires les plus performants.

## Les erreurs à éviter avec l'automatisation

L'automatisation mal configurée peut faire plus de dégâts qu'une gestion manuelle. Évitez de mettre en place des règles trop agressives (par exemple, couper une campagne dès qu'elle n'est pas rentable sur une journée alors qu'elle est en phase d'apprentissage). Définissez toujours des garde-fous : un budget maximum quotidien, des seuils de déclenchement raisonnables, et des périodes d'évaluation suffisantes. Testez vos automatisations sur un périmètre restreint avant de les déployer à grande échelle.

## Comment The Sheep simplifie l'automatisation

The Sheep a été conçu pour rendre l'automatisation accessible à tous les annonceurs, des indépendants aux agences gérant des dizaines de comptes. Notre dashboard centralisé vous permet de configurer des règles d'automatisation cross-plateformes en quelques clics, sans avoir besoin de scripts complexes ou de connecteurs personnalisés. Les alertes intelligentes, les rapports automatiques et la synchronisation des données entre Meta Ads, Google Ads et votre CRM vous font gagner en moyenne 10 heures par semaine. C'est autant de temps que vous pouvez réinvestir dans l'optimisation stratégique de vos campagnes.`,
  },
];

export function getAllPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllCategories(): string[] {
  const categories = blogPosts.map((post) => post.category);
  return [...new Set(categories)];
}
