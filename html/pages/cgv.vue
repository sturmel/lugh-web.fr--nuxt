<template>
    <div class="relative flex flex-col min-h-screen max-w-[100vw] overflow-hidden">
        <NuxtLayout name="main" @scrollTo="scrollToSection">
            <div class="w-full m-auto mt-5 flex flex-col max-w-[1000px]">
                <h1 class="text-4xl mb-5">Conditions générales de vente</h1>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 1 : Champ d’application</h3>
                <p class="m-auto ml-0 mb-3">Le présent document a pour objet de définir les termes et conditions ainsi que les modalités selon
                    lesquelles la Société Lugh Web fournit les prestations à son client. L’ensemble des caractéristiques
                    de ces prestations se trouve détaillé sur le site accessible à l’adresse
                    https://www.lugh-web.fr/cgv</p>
                <p class="m-auto ml-0 mb-3">Les présentes conditions générales de vente régissent l’activité commerciale de création de sites
                    Internet et des autres produits et services proposés par Lugh Web. Les conditions particulières qui
                    figurent sur le devis et les présentes conditions générales de vente forment ensemble le contrat
                    liant la société Lugh Web avec le client. S’il devait exister une contrariété entre les stipulations des
                    présentes conditions générales et les conditions particulières, ces dernières primeraient sur les
                    premières en leurs dispositions contraires. Dans cette hypothèse, le reste des clauses des présentes
                    conditions générales garderait toute sa valeur.</p>
                <p class="m-auto ml-0 mb-3">La signature du devis avec mention d’accord, ainsi que son paraphe et sa signature en fin des
                    présentes impliquent l’acceptation sans réserve par le client des présentes conditions générales de
                    vente.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 2 : Définition</h3>
                <p class="m-auto ml-0 mb-3">Aux termes des présentes, chacune des expressions mentionnées ci-dessous aura la signification qui
                    lui est attribuée ci-après, à savoir :</p>
                <p class="m-auto ml-0 mb-3">Lugh Web : désigne l'entreprise individuelle de Sturmel Sébastien.</p>
                <p class="m-auto ml-0 mb-3">Client : désigne toute personne physique ou morale signataire d’un bon de commande sous format papier
                    ou électronique. La conclusion du contrat par voie électronique peut toutefois se faire valablement
                    par acceptation du devis contenue dans un courriel adressé à Lugh Web, sans exigence de l’utilisation
                    d’un certificat numérique certifié.</p>
                <p class="m-auto ml-0 mb-3">Services : désigne l’ensemble des prestations de toute nature effectuées par Lugh Web pour le compte du
                    client.</p>
                <p class="m-auto ml-0 mb-3">Fournisseur : désigne toute personne physique ou morale tiers auprès de laquelle Lugh Web souscrit tout
                    contrat dont l’objet est en rapport avec ou découle des services.</p>
                <p class="m-auto ml-0 mb-3">Internet : ensemble des réseaux de toutes tailles interconnectés par le protocole TCP/IP.</p>
                <p class="m-auto ml-0 mb-3">Site web ou site internet : ensemble structuré de pages, composé d’éléments textuels, graphiques,
                    photographiques, audio, vidéo ou multimédia dans les formats standardisés.</p>
                <p class="m-auto ml-0 mb-3">Espace web : désigne un espace de stockage alloué par un fournisseur pour l’hébergement de chaque
                    site web du client.</p>
                <p class="m-auto ml-0 mb-3">Publication : désigne l’action de transfert du site web du client sur un espace web.</p>
                <p class="m-auto ml-0 mb-3">Projets conséquents : projets complexes, notamment création de sites Internet, pouvant inclure
                    extranet et intranet, les applications mobiles et généralement, les applications métiers.</p>
                <p class="m-auto ml-0 mb-3">Autres projets : la maintenance, les contenus, les mises à jour, l’hébergement, les emailings,
                    opérations e-marketing et les autres prestations proposées par Lugh Web.</p>
                <p class="m-auto ml-0 mb-3">Community Manager (gestionnaire de communauté) : animation et rassemblement des communautés sur
                    Internet pour le compte d’une société ou d’une marque.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 3 : Les services proposés par la Lugh Web</h3>
                <p class="m-auto ml-0 mb-3">La Lugh Web dispense, pour ses clients, différentes catégories de services qui entrent dans ses
                    champs de compétence.</p>
                <p class="m-auto ml-0 mb-3">Compte tenu des spécificités qui peuvent être propres à chaque catégorie, il est renvoyé aux
                    différents articles correspondants infra.</p>
                <p class="m-auto ml-0 mb-3">Les différentes catégories de prestations sont les suivantes :</p>
                <p class="m-auto ml-0 mb-3">Développement, sites internet et prestations techniques, notamment :</p>
                <p class="m-auto ml-0 mb-3">Création de site internet, extranet, intranet et e-commerce.</p>
                <p class="m-auto ml-0 mb-3">Création d’applications métiers, en ligne (configurateurs, requêteur, etc…).</p>
                <p class="m-auto ml-0 mb-3">Création d’application métiers, sur mobiles ou tablettes.</p>
                <p class="m-auto ml-0 mb-3">Création de sites mobiles et d’outils à destination des smartphones et tablettes.</p>
                <p class="m-auto ml-0 mb-3">Réalisation de cahiers des charges.</p>
                <p class="m-auto ml-0 mb-3">Achat de nom de domaine.</p>
                <p class="m-auto ml-0 mb-3">Hébergement.</p>
                <p class="m-auto ml-0 mb-3">Développement de logiciels sur mesure, en ligne ou non</p>
                <p class="m-auto ml-0 mb-3">Prestations système (configuration serveur).</p>
                <p class="m-auto ml-0 mb-3">Marketing et conseil, notamment :</p>
                <p class="m-auto ml-0 mb-3">Conseils dans le domaine de la communication et de l’organisation.</p>
                <p class="m-auto ml-0 mb-3">Création d’identités graphiques et logotypes.</p>
                <p class="m-auto ml-0 mb-3">Conseil marketing, e-marketing et réalisation d’opérations marketing</p>
                <p class="m-auto ml-0 mb-3">Réalisation de campagnes publicitaires en ligne.</p>
                <p class="m-auto ml-0 mb-3">Audit concurrentiel de référencement.</p>
                <p class="m-auto ml-0 mb-3">Référencement forcé sur les moteurs de recherche.</p>
                <p class="m-auto ml-0 mb-3">E-réputation.</p>
                <p class="m-auto ml-0 mb-3">Graphisme, notamment :</p>
                <p class="m-auto ml-0 mb-3">Communication générale.</p>
                <p class="m-auto ml-0 mb-3">Création de logos.</p>
                <p class="m-auto ml-0 mb-3">Création de visuels (bannières, montage photos, illustrations)</p>
                <p class="m-auto ml-0 mb-3">Création d’animations interactives ou non</p>
                <p class="m-auto ml-0 mb-3">Création de plaquettes imprimées</p>
                <p class="m-auto ml-0 mb-3">Création de kit papeterie (papier en-tête, suite, carte correspondance, carte de visite).</p>
                <p class="m-auto ml-0 mb-3">Animation de sites internet et de réseaux sociaux, notamment :</p>
                <p class="m-auto ml-0 mb-3">Création de compte sur les réseaux sociaux.</p>
                <p class="m-auto ml-0 mb-3">Rédaction d’articles pour les sites internet.</p>
                <p class="m-auto ml-0 mb-3">Audit concurrentiel sur les réseaux sociaux.</p>
                <p class="m-auto ml-0 mb-3">Animation de réseaux sociaux et communauté web (community management).</p>
                <p class="m-auto ml-0 mb-3">Animation et mise à jour de site internet.</p>
                <p class="m-auto ml-0 mb-3">Relation presse on line.</p>
                <p class="m-auto ml-0 mb-3">Réalité augmentée, notamment :</p>
                <p class="m-auto ml-0 mb-3">Conception et développement d’applications de réalité augmentée</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 4 : Conditions de conclusions des contrats entre la Lugh Web et le client</h3>
                <p class="m-auto ml-0 mb-3">Pour chaque projet, le client exprime à la Lugh Web ses besoins par voie de courrier postal, courriel
                    ou tout autre mode de communication usuel.</p>
                <p class="m-auto ml-0 mb-3">Après analyse des besoins, le cas échéant par des échanges entre la Lugh Web et le client pour cerner
                    précisément les contours des besoins, la Lugh Web adresse au client un devis gratuit, par voie de
                    courrier postal ou courriel, dont la durée de validité est d’un mois à date d’envoi du devis.</p>
                <p class="m-auto ml-0 mb-3">Les études, devis et documents remis ou envoyés par la Lugh Web demeurent sa propriété ; ils ne
                    peuvent donc être communiqués à des tiers sous quelque motif que ce soit par l’acheteur. Le client
                    s’interdit notamment expressément de transmettre les devis et documents fournis par Lugh Web à tout autre
                    organisation ou structure exerçant une activité concurrente directement ou indirectement avec Lugh Web,
                    et il s‘interdit aussi de déposer ou faire déposer pour son compte ou tout tiers un titre de
                    propriété intellectuelle reprenant les éléments fournis par Lugh Web.</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web se réserve la possibilité de refuser toute demande non conforme aux présentes ou pour
                    tout autre raison technique ou indépendante de sa volonté.</p>
                <p class="m-auto ml-0 mb-3">Conclusion du contrat : Suite à l’acceptation par le client du devis par retour de celui-ci avec la
                    note « bon pour accord » suivie de ses nom, prénom et adresse postale complète tenant lieu de
                    signature numérique, ou de retour par courrier avec la mention « bon pour accord » suivie de la
                    signature du client et précision par le client du mode de paiement choisi avec références complètes,
                    puis à la réception et à l’encaissement du règlement demandé, selon les modalités figurant sur le
                    devis, la commande passée est alors réalisée dans les délais convenus. Tout défaut de paiement de la
                    part du client entraînera la résiliation automatique du contrat engagé. Tout somme versée par le
                    client à Lugh Web restera acquise en cas de résiliation du contrat du fait du client (défaut de paiement,
                    violation d’une obligation contractuelle, résiliation unilatérale).</p>
                <p class="m-auto ml-0 mb-3">Le client est tenu de fournir les textes et photographies, sous format électronique, sans fautes
                    d’orthographe ou grammaire, à insérer dans les différentes rubriques du site Internet. Aucune saisie
                    de texte, ni aucune correction ne sera effectuée et Lugh Web ne sera aucunement responsable des erreurs
                    ou fautes présentes dans le site web. Lugh Web propose, si nécessaire et moyennant un supplément de prix
                    (tarification à l’heure ou par article), la rédaction des textes. Sur demande spéciale du client,
                    Lugh Web lui proposera une prestation de formation lui permettant d’intégrer lui-même les textes sur son
                    site internet. Lugh Web dégage toute responsabilité sur la teneur du contenu ainsi inséré.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 5 : Conditions spécifiques à chaque catégorie de prestation</h3>
                <p class="m-auto ml-0 mb-3">En complément des autres clauses insérées aux présentes, il est convenu ce qui suit :</p>
                <p class="m-auto ml-0 mb-3">5.1 Développements, sites internet et prestations techniques</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web fournit au client un ou des produits définis selon les besoins exprimés.</p>
                <p class="m-auto ml-0 mb-3">Compte tenu des attentes du client et de la complexité potentielle du produit fini, la Lugh Web
                    établit, de concert avec le client, une description fonctionnelle.</p>
                <p class="m-auto ml-0 mb-3">Une fois cette description rédigée, le client procède à sa validation par l’apposition de la mention
                    « bon pour accord » précédée des date et signature.</p>
                <p class="m-auto ml-0 mb-3">Sur la base de cette description fonctionnelle, la Lugh Web élabore une maquette qui est proposée au
                    client.</p>
                <p class="m-auto ml-0 mb-3">Le client peut alors soumettre à la Lugh Web des demandes de modifications ou adaptations.</p>
                <p class="m-auto ml-0 mb-3">La maquette définitive est validée par le client avec l’apposition de la mention « bon pour accord »
                    précédée des date et signature.</p>
                <p class="m-auto ml-0 mb-3">Ce n’est qu’une fois la maquette validée que la Lugh Web procède à développement du produit.</p>
                <p class="m-auto ml-0 mb-3">Une fois le développement démarré, aucune modification substantielle ne pourra plus être effectuée,
                    sauf pour les parties à signer un avenant qui pourra emporter modification du prix convenu.</p>
                <p class="m-auto ml-0 mb-3">A l’achèvement du développement, la Lugh Web livre le produit conforme à la commande, sur tout
                    support convenu entre les parties, ou à défaut sur tout support usuel, et remet au client un bon de
                    livraison qui est daté et signé par ce dernier.</p>
                <p class="m-auto ml-0 mb-3">La livraison constatée dans le bon de commande rend exigible le solde des sommes restant dues, sur
                    simple présentation de facture et selon les modalités de paiement déterminées infra.</p>
                <p class="m-auto ml-0 mb-3">Si le client n’a pas choisi la prestation d’intégration par Lugh Web, une version test lui est livrée afin
                    qu’il finalise la mise en forme de ses contenus après formation à la solution web.</p>
                <p class="m-auto ml-0 mb-3">Pour les prestations relatives aux noms de domaines, la Lugh Web procède à l’achat et au
                    renouvellement du ou des noms de domaine pour le compte du client et se déclare contact technique
                    afin de pouvoir effectuer toutes les prestations de maintenance ou mise à jour.</p>
                <p class="m-auto ml-0 mb-3">Le client demeure le propriétaire du nom de domaine et s’engage toutefois à ne pas retirer à
                    Lugh Web sa qualité de contact technique afin de lui permettre de poursuivre l’objet du contrat.
                    Lugh Web ne pourra être tenue pour responsable du non achèvement de sa prestation si les droits lui
                    étaient retirés par le client et le prix convenu resterait acquis à la Lugh Web.</p>
                <p class="m-auto ml-0 mb-3">Pour les prestations d’hébergement, la Lugh Web peut, soit héberger les contenus sur des serveurs lui
                    appartenant, soit les faire héberger par un sous-traitant auquel elle est liée.</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web facture au client le coût de l’hébergement en sus si celui-ci n’est pas stipulé dans le
                    prix.</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web s’oblige à mettre en œuvre tous les moyens utiles au maintien de la disponibilité du
                    service, cette obligation étant une obligation de moyens.</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web ne sera toutefois pas responsable en cas d’interruption du service pour cause de panne ou
                    pour des raisons de maintenance nécessaire qui devraient être exécutées par elle-même ou par le
                    sous-traitant.</p>
                <p class="m-auto ml-0 mb-3">5.2 Marketing et conseil, graphisme</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web peut être amenée à être auteur, pour le compte du client, d’œuvres originales au sens des
                    dispositions du Code de la propriété intellectuelle.</p>
                <p class="m-auto ml-0 mb-3">Elle peut aussi intervenir sur des biens couverts par des titres de propriété intellectuelle dont le
                    client est titulaire, à savoir notamment des marques, dessins et modèles, à des fins notamment de
                    manipulation, adaptation, ou insertion dans d’autres éléments graphiques.</p>
                <p class="m-auto ml-0 mb-3">Les droits d’exploitation des œuvres créées par la Lugh Web sont cédés au client dans les modalités
                    de l’article « PROPRIETE INTELLECTUELLE » infra.</p>
                <p class="m-auto ml-0 mb-3">Inversement, le client titulaire de tout droit de propriété intellectuelle consent à la Lugh Web
                    l’ensemble des droits lui permettant d’accomplir l’objet du contrat.</p>
                <p class="m-auto ml-0 mb-3">Pour les prestations d’opération marketing et campagnes publicitaires, la Lugh Web rappelle
                    l’existence de réglementations spécifiques en termes de message publicitaire, de promotions de
                    certains produits (alcool, tabac, produits de santé, etc…), de publicité comparative, de publicité
                    mensongère, ou de publication à destination de certains publics, notamment la jeunesse.</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web rappelle également l’existence des réglementations protégeant les tiers, notamment les
                    droits de la personnalité, le droit à l’image et à la vie privée, ainsi que les infractions en
                    matière de presse issues de la loi du 29 juillet 1881 (diffamation, injure).</p>
                <p class="m-auto ml-0 mb-3">Le client est tenu de s’assurer que les éléments qu’il fournit à la Lugh Web sont conformes à ces
                    réglementations codifiées notamment dans le Code de la santé publique, le Code de la consommation,
                    le Code civil, le Code pénal auxquels il est renvoyé pour plus d’informations.</p>
                <p class="m-auto ml-0 mb-3">5.3 Animation de sites et réseaux sociaux</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web peut être amenée à rédiger, pour le compte du client, des articles, des commentaires, des
                    notes dans le cadre de sites internet ouverts au public de type blog ou réseaux communautaires et
                    sociaux (facebook, twitter ou autre par exemple).</p>
                <p class="m-auto ml-0 mb-3">A cet effet, le client donne mandat à la Lugh Web de publier en son nom et conformément aux souhaits
                    du client en termes d’orientation des propos, image à donner au public.</p>
                <p class="m-auto ml-0 mb-3">Le client laisse à la Lugh Web sa propre liberté de choix des termes employés.</p>
                <p class="m-auto ml-0 mb-3">Il est rappelé l’existence de la liberté d’expression, principe fondamental, qui trouve toutefois ses
                    limites dans le respect des droits des tiers.</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web n’est pas responsable de l’image globale et de la réputation véhiculée par le client du
                    fait de la commercialisation de ses produits ou services.</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web s’efforcera en toutes occasions de refléter au mieux l’éthique du client et la qualité de
                    ses produits et services, sans toutefois que la Lugh Web ne puisse être considérée comme responsable
                    des résultats commerciaux du client.</p>
                <p class="m-auto ml-0 mb-3">Il est en outre rappelé l’existence des comportements illicites que sont la concurrence déloyale ou
                    le parasitisme qui sont réprimés par la Loi et aucun des outils ou prestations fournies par
                    Lugh Web ne pourra être employé par le client pour se livrer à ces comportements illicites.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 6 : Promotions des créations</h3>
                <p class="m-auto ml-0 mb-3">Sauf dispositions contraires écrites, la Lugh Web pourra diffuser toute création réalisée à des fins
                    de « présentations de créations » sur tout type de support sans limitation de durée, d’un commun
                    accord avec le client.</p>
                <p class="m-auto ml-0 mb-3">Obligation de communication : en vertu du doit à la paternité dont est titulaire Lugh Web sur ses
                    créations intellectuelles, la loi interdit l’existence de clauses contractuelles par lesquelles un
                    auteur d’une œuvre de l’esprit renonce à voir apparaître son nom en tant qu’auteur. En conséquence,
                    la mention « Conception graphique : société Lugh Web » est apposée sur les créations papier ou web
                    réalisées (pour le web, présence des coordonnées dans les mentions légales avec un lien vers
                    l’adresse email « contact@lugh-web.fr »). Toutefois, Lugh Web peut accepter, par clause expresse figurant sur
                    le devis et/ou la facture, de conserver l’anonymat sur sa qualité d’auteur.</p>
                <p class="m-auto ml-0 mb-3">L’intitulé « Conception graphique » étant lié à la nature des créations, celui-ci peut être amené à
                    changer et le terme adéquat retenu restera à l’appréciation de la société Lugh Web.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 7 : Référence aux clients</h3>
                <p class="m-auto ml-0 mb-3">Le Client autorise la société Lugh Web à mentionner son nom ou sa dénomination sociale dans les
                    documents de la Société Lugh Web, à titre de référence aux fins de sa propre promotion commerciale. Le
                    Client s’engage à faire figurer sur tous les exemplaires du Produit et/ou sur la page d’accueil du
                    site Internet, la mention : « Réalisation : société Lugh Web ». Lugh Web, ou ses intermédiaires
                    commerciaux, sont autorisés à utiliser le produit à des fins de démonstration.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 8 : Modification de la demande initiale par le client</h3>
                <p class="m-auto ml-0 mb-3">Toute nouvelle création à réaliser fera l’objet d’un nouveau devis notamment si les modifications,
                    retouches ou reprises des créations prévues dans le devis engendrent une intervention :</p>
                <p class="m-auto ml-0 mb-3">dont la durée est manifestement excessive par rapport au délai normalement nécessaire pour la
                    réalisation des prestations prévues,</p>
                <p class="m-auto ml-0 mb-3">dont la nature tend à modifier de manière significative le périmètre du projet prévu dans le devis,
                </p>
                <p class="m-auto ml-0 mb-3">qui nécessite le traitement des fichiers client afin de les rendre exploitables pour réaliser les
                    créations.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 9 : Propriété intellectuelle</h3>
                <p class="m-auto ml-0 mb-3">Le client autorise la Lugh Web, de manière non exclusive, illimitée temporellement et
                    territorialement, à exploiter l’ensemble des droits patrimoniaux rattachés à l’intégralité des
                    éléments fourni par le client à l’effet de la réalisation du projet, notamment par reproduction,
                    représentation ou adaptation.</p>
                <p class="m-auto ml-0 mb-3">Conformément aux articles 6 et 7 supra, le client consent également à la Lugh Web le droit de
                    reproduire et représenter les éléments fournis par le client à des fins de promotions de
                    Lugh Web, sans limitation territoriale, temporelle, et à titre gratuit.</p>
                <p class="m-auto ml-0 mb-3">Tout élément fourni par le client reste sa propriété. Le client garantit à Lugh Web qu’il est titulaire de
                    l’ensemble des droits d’exploitation sur les éléments qu’il fournit à Lugh Web et qu’il en a la libre
                    disposition. Le client garantira au besoin la société Lugh Web à l’occasion de tout recours qui serait
                    intenté par un tiers qui revendiquerait auprès de Lugh Web des droits de propriété intellectuelle sur les
                    éléments fournis.</p>
                <p class="m-auto ml-0 mb-3">Tout élément modifié par Lugh Web et fourni par le client est la propriété du client en ce qui concerne
                    l’élément de départ, et la propriété de Lugh Web en ce qui concerne les modifications s’il s’agit
                    d’éléments de programmation.</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web cède réciproquement au client l’ensemble des droits d’exploitation sur ses créations,
                    sans limitation de temps ou territoire.</p>
                <p class="m-auto ml-0 mb-3">La cession des droits d’utilisation et de diffusion des créations réalisées par la société Lugh Web
                    s’effectue cependant à complet encaissement des montants facturés. Le travail fourni au Client est
                    le code source du site web. Les droits d’utilisation et de diffusion des fichiers sources contenant
                    la création brute sont cédés pour 99 ans, sans réserve d’espace et de destination par la société
                    Lugh Web. Les droits d’utilisation des éléments que Lugh Web n’a pas réalisés ne peuvent pas être cédés pour
                    une autre destination que le site créé.</p>
                <p class="m-auto ml-0 mb-3">Les parties rappellent cependant que les droits extrapatrimoniaux attachés à toute œuvre de l’esprit
                    sont incessibles, perpétuels et imprescriptibles. Ni la Lugh Web ni le client ne peut porter
                    atteinte aux droits moraux attachés à chaque œuvre, en particulier le droit au respect de l’œuvre
                    qui interdit toute dénaturation.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 10 : Confidentialité</h3>
                <p class="m-auto ml-0 mb-3">Chacune des parties s’engage à considérer comme confidentiels, pendant la durée la durée du contrat
                    et après son expiration, les documents, systèmes, logiciels et savoir-faire en provenance de l’autre
                    partie dont elle pourrait avoir eu connaissance lors de l’exécution du contrat et notamment à ne pas
                    les utiliser en dehors des besoins du présent contrat.</p>
                <p class="m-auto ml-0 mb-3">Ne sont pas concernées par l’obligation de confidentialité toutes les informations appartenant au
                    domaine public ou dont la révélation aurait été autorisée par l’autre partie.</p>
                <p class="m-auto ml-0 mb-3">Le contrat pourra être résilié de plein droit, sans formalité judiciaire ou extrajudiciaire, si l’une
                    ou l’autre des parties manquait aux obligations stipulées aux présentes si l’une ou l’autre des
                    parties ne remédiait pas à ce manquement dans les quinze (15) jours de la réception d’une mise en
                    demeure par lettre recommandée avec accusé de réception et ce sans indemnité et sans préjudice des
                    sommes restant dues et de tous dommages et intérêts</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 11 : Responsabilité du client</h3>
                <p class="m-auto ml-0 mb-3">Le client s’engage à fournir des informations justes et sincères et s’engage à prévenir de tout
                    changement concernant les données fournies et sera seul responsable des éventuels dysfonctionnements
                    qui pourraient résulter d’informations erronées. Le client doit maintenir une adresse e-mail et une
                    adresse postale valide.</p>
                <p class="m-auto ml-0 mb-3">Conformité légale : le client dispose d’une totale liberté quant au contenu de son espace web, dans
                    la mesure où il est conforme aux lois et règlements en vigueur, respectant les copyrights, droits
                    d’auteur et propriété intellectuelle sur les images ou autres fichiers qu’il fournit (le client
                    reste responsable de cette vérification et doit être tenu de fournir les preuves en cas de demande).
                    Il est notamment exclu de publier toute forme de contenu associé directement ou indirectement : à la
                    pornographie et l’érotisme, à des programmes piratés, à un caractère raciste, diffamatoire envers
                    qui que ce soit ou discriminatoire quel qu’il soit, à un caractère portant atteinte aux droits de
                    l’Homme de manière générale, à l’éloge ou l’apologie de délits, crimes ou suicides, à une activité
                    de jeux de paris en ligne, à la violence quelle qu’en soit la forme (humaine, animale ou portant
                    atteinte à l’environnement), à la violation des droits de propriété intellectuelle relatifs aux
                    œuvres contenues ou diffusées, en intégralité ou partiellement sur l’espace web du client.
                    Lugh Web dégage toute responsabilité de la société dans le cas de modifications ultérieures de la part du
                    client du contenu des pages créées, et le client s’engage à garantir Lugh Web en cas de recours d’un
                    tiers à ce titre.</p>
                <p class="m-auto ml-0 mb-3">Si la structure du site permet de recueillir des données personnelles ainsi que des informations
                    privées, et sauf s’il entre dans le champ d’application d’une des dispenses légales, le client
                    procèdera à la déclaration ou à la demande « Libertés informatiques » pour le site internet auprès
                    de la C.N.I.L., conformément à l’article 34 de la loi « Informatiques et Liberté » du 6 janvier 1978
                    et communiquera le numéro à Lugh Web qui l’insérera sur le site. Lugh Web peut néanmoins s’occuper de cette
                    formalité moyennant des frais supplémentaires.</p>
                <p class="m-auto ml-0 mb-3">Gestion des emails : Le client est pleinement et entièrement responsable du contenu des emails qu’il
                    envoie grâce aux services fournis par Lugh Web. Le client s’engage expressément à vérifier et à respecter
                    les conditions légales d’utilisation des services d’email (courrier électronique) souscrit en son
                    nom par Lugh Web auprès des fournisseurs.</p>
                <p class="m-auto ml-0 mb-3">Le client est seul responsable du contenu de son site web. Il est également responsable des dommages
                    et des préjudices directs ou indirects, matériels ou immatériels, causés par lui-même (ou ses
                    préposés), à la Lugh Web et à ses fournisseurs du fait de l’utilisation illégale ou non des serveurs
                    d’hébergement. À ce titre, il s’engage à ne pas conserver et exploiter de données nominatives sans
                    en avoir reçu l’autorisation de la CNIL (loi du 6 janvier 1978). Il s’engage à ne pas proposer de
                    lien hypertexte pointant vers des sites ou des pages non conformes à la législation Française tels
                    que ceux cités dans l’article 11.2. Il s’engage à décharger Lugh Web de toute responsabilité en ce qui
                    concerne les services ou informations, signes, images, graphismes, sons ou toutes autres données
                    multimédias qu’il mettra à disposition des utilisateurs. En particulier, il sera seul responsable de
                    tout préjudice direct ou indirect matériel ou corporel causé par l’utilisation des services. Il fera
                    sien tout litige pouvant survenir entre lui-même et toute personne tierce aux présentes. Dans
                    l’hypothèse où la responsabilité de Lugh Web serait néanmoins retenue par une autorité judiciaire, il
                    s’engage à se porter garant de la Lugh Web et à l’indemniser du préjudice résultant d’une faute de
                    sa part.</p>
                <p class="m-auto ml-0 mb-3">Accès gestionnaire, mise à jour et modification du site : Il appartient au client de s’assurer que
                    toutes les modifications ou évolutions techniques qu’il pourrait envisager effectuer sur ce site web
                    par tout autre moyen que les services de Lugh Web, sont possibles et compatibles avec les
                    caractéristiques des services. Toute modification du site par le client n’entraîne aucun transfert
                    de propriété au profit du client des codes informatiques et des services produits par Lugh Web. Les codes
                    et mots de passe nécessaires à l’accès gestionnaire seront transmis par Lugh Web au client lors de la
                    publication du site web.</p>
                <p class="m-auto ml-0 mb-3">Le client s’oblige à collaborer avec Lugh Web à la réalisation du projet en mettant à sa disposition tout
                    document ou information qui pourrait être demandé par Lugh Web pour la réalisation de la prestation
                    prévue au contrat. A ce titre, le client s’engage à répondre dans un délai bref aux différentes
                    demandes d’informations complémentaires que pourrait lui formuler Lugh Web. En cas contraire, l’éventuel
                    non respect des délais de livraison ne saurait être imputable à Lugh Web.</p>
                <p class="m-auto ml-0 mb-3">Le client s’oblige envers Lugh Web à être titulaire d’un droit de propriété ou d’un droit d’utilisation
                    des marques, brevets, logiciels utilisés ou mentionnés sur le site. Le client s’oblige à être
                    titulaire d’un droit de propriété ou d’utilisation des œuvres artistiques, des œuvres de l’esprit,
                    des dessins, des graphiques, des logos, des musiques, des photos et notamment des tous les droits de
                    propriété incorporelles ou intellectuelles pouvant porter sur les données.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 12 : Responsabilité de la Société Lugh Web</h3>
                <p class="m-auto ml-0 mb-3">L’entreprise Lugh Web s’engage à fournir, dans les délais convenus aux conditions particulières, la
                    livraison des commandes (les délais diffèrent selon la nature de la commande) et s’engage à tout
                    mettre en œuvre en vue de la satisfaction du client, mais décline toute responsabilité en cas de
                    problème technique majeur qui ferait obstacle à la réalisation du contrat (attentats, guerres,
                    catastrophes naturelles, tout cas de force majeure ou cause de rupture prolongée de réseau Internet
                    indépendante de notre volonté). La publication par Lugh Web du site Web est notamment tributaire de la
                    fourniture par le client des informations nécessaires à la réalisation de la commande. Les
                    modifications significatives, reprises de création, retard dans la prise de décision ou la livraison
                    tardive de documents nécessaires à la création imputables au client repoussent d’autant le délai de
                    livraison établi entre les deux parties.</p>
                <p class="m-auto ml-0 mb-3">Documents transmis : en aucun cas Lugh Web ne pourra être tenu responsable de la perte de documents requis
                    pour la réalisation des services commandés. Le client est tenu de n’envoyer que des copies ou des
                    documents sans valeur de remplacement. Lugh Web se réserve le droit de refuser tout document, texte ou
                    image, contraire à son éthique, aux bonnes mœurs ou non conforme à la législation en vigueur.</p>
                <p class="m-auto ml-0 mb-3">Le client déclare connaître et accepter les caractéristiques et les limites de l’Internet et
                    reconnait en particulier les points suivants : l’entreprise Lugh Web ne garantit en aucun cas la
                    protection totale des données circulant sur le web, notamment contre des détournements éventuels de
                    la part d’internautes malveillants et ne pourra en aucun cas être tenue pour responsable de
                    problèmes liés à l’hébergement, à la fiabilité de la transmission de données, aux temps d’accès, à
                    la rapidité de chargement du site web ou à un défaut de paiement par carte bancaire, virement
                    bancaire ou chèque pour un site de e-commerce.</p>
                <p class="m-auto ml-0 mb-3">La Lugh Web ne saurait voir sa responsabilité engagée pour notamment le contenu des informations
                    transmises, les images et les données accessibles sur le site à quelque titre que ce soit. De plus,
                    dans l’hypothèse où le client serait en mesure de modifier le contenu de son site, il engagerait
                    seul sa responsabilité par rapport aux lois et règlements en vigueur concernant la légalité du
                    contenu. Enfin, en cas de modification par le client des scripts du site, Lugh Web ne pourra être tenue
                    responsable des éventuels dysfonctionnements de ce dernier.</p>
                <p class="m-auto ml-0 mb-3">Lugh Web ne saurait pas plus voir sa responsabilité engagée pour une contamination par virus informatique
                    des données et du logiciel du client. La protection de ce dernier incombe en toutes hypothèses au
                    client. Enfin, Lugh Web ne saurait voir sa responsabilité engagée pour des intrusions malveillantes de
                    tiers sur le site. Néanmoins, concernant ce point précis, Lugh Web s’engage, par une simple obligation de
                    moyens, à tout mettre en œuvre pour sécuriser le site contre des intrusions malveillantes.</p>
                <p class="m-auto ml-0 mb-3">Lugh Web ne sera pas tenu responsable pour tout retard ou inexécution, lorsque la cause du retard ou de
                    l’inexécution serait due à la survenance d’un cas de force majeure habituellement reconnue par la
                    jurisprudence.</p>
                <p class="m-auto ml-0 mb-3">Lugh Web livre un produit fini répondant aux spécifications du devis. En aucun cas, Lugh Web ne peut garantir
                    que le site demandé par le client lui assurera une augmentation de ses ventes, que le travail fourni
                    générera automatiquement des visites sur le site. Lugh Web ne garantit pas le résultat des référencements
                    de site Internet dans les moteurs de recherche. Lugh Web n’est donc tenu à ce titre qu’à une obligation
                    de moyens.</p>
                <p class="m-auto ml-0 mb-3">Lugh Web ne sera pas tenue responsable en cas de mauvaise manipulation de la part du client et des
                    utilisateurs formés à l’utilisation de l’application. Une liste de personnes autorisées à utiliser
                    l’application sera établie par Lugh Web en collaboration avec le client. En dehors du cadre de la
                    formation et de cette liste, Lugh Web ne sera pas tenue responsable des opérations réalisées via
                    l’application.</p>
                <p class="m-auto ml-0 mb-3">Hébergement : si le site web du client est hébergé par Lugh Web, le client reconnait avoir pris
                    connaissance des éléments suivants :</p>
                <p class="m-auto ml-0 mb-3">– Le contrat d’hébergement souscrit par Lugh Web auprès d’un prestataire extérieur qu’il aura choisi pour
                    héberger le site web du client est souscrit pour une disponibilité totale, 24 heures sur 24, 7 jours
                    sur 7, et 52 semaines par an pendant un an. Ce contrat offre une capacité réseau suffisante pour
                    l’écoulement normal du trafic.</p>
                <p class="m-auto ml-0 mb-3">– Ce trafic étant aléatoire, le client déclare parfaitement connaître les caractéristiques et les
                    limites d’Internet, et notamment la saturation possible du réseau à certaines périodes et accepte
                    les conséquences sur les services, étant entendu que l’obligation de Lugh Web est une obligation de
                    moyens.</p>
                <p class="m-auto ml-0 mb-3">– L’hébergeur pourra interrompre ses services pour assurer les réparations et l’entretien du matériel
                    ainsi que la correction des défauts des logiciels. Lugh Web ne sera pas tenue pour responsable par le
                    client de toute interruption de services due aux fournisseurs.</p>
                <p class="m-auto ml-0 mb-3">– Lorsque le client décide de son plein gré de changer d’hébergeur, les travaux de migration des
                    fichiers et données pourront être assumés par Lugh Web moyennant rémunération.</p>
                <p class="m-auto ml-0 mb-3">Noms de domaine : le client est propriétaire du nom de domaine réservé pour lui, Lugh Web n’agissant qu’en
                    qualité d’intermédiaire technique auprès des organismes de nommage. Les conditions générales de
                    vente de ces organismes s’appliquent donc. Par ailleurs, Lugh Web ne saurait être tenue pour responsable
                    de la non-disponibilité d’un nom de domaine commandé, celle-ci n’annulant pas automatiquement les
                    autres services commandés. Le client reconnait déposer et utiliser le nom de domaine en conformité
                    avec la législation en vigueur et les droits légaux des tiers. Le client s’engage à indemniser,
                    défendre et dégager de toute responsabilité la société Lugh Web, contre tout recours, dommages,
                    responsabilités, coûts et dépenses, y compris honoraires légaux raisonnables, découlant de ou en
                    rapport avec l’enregistrement du nom de domaine du client ou de l’utilisation par le client du nom
                    de domaine. Le transfert technique du nom de domaine du client vers un autre organisme de nommage et
                    d’hébergement sera facturé forfaitairement à un prix indiqué dans le bon de commande.</p>
                <p class="m-auto ml-0 mb-3">Lugh Web s’engage à harmoniser le site sur les différentes versions de navigateurs web et mobiles prévues
                    dans les conditions particulières du contrat. En l’absence de mention il s’agira des deux versions
                    les plus récentes des navigateurs à la date de signature du contrat.</p>
                <p class="m-auto ml-0 mb-3">Lugh Web s’engage à procéder à l’enregistrement du nom de domaine du client sous réserve des
                    disponibilités au regard notamment du droit des marques, Lugh Web n’étant pas habilitée pour la
                    réalisation des recherches d’antériorité.</p>
                <p class="m-auto ml-0 mb-3">Lugh Web s’engage à effectuer les tests pour valider le bon fonctionnement de la plateforme selon les
                    caractéristiques techniques et fonctionnelles définies en début de projet. La maintenance
                    (maintenance de sécurité ou en correction de bugs) du site internet est réalisée si une prestation a
                    été définie en ce sens en début de collaboration.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 13 : Garanties</h3>
                <p class="m-auto ml-0 mb-3">De plein droit : en cas de non-paiement à l’échéance, ou de non-respect par le client de l’une
                    quelconque de ses obligations, et huit (8) jours après une mise en demeure restée sans effet, Lugh Web
                    pourra, si bon lui semble, résilier le contrat de vente, les acomptes éventuellement versés
                    demeurant alors sa propriété à titre d’indemnité pénale sans préjudice de toute autre indemnité.</p>
                <p class="m-auto ml-0 mb-3">Volontaire : en cas de rupture du contrat avant son terme par Lugh Web ou par le client, le client
                    s’engage formellement à régulariser et rétribuer les montants relatifs au calendrier en cours, aux
                    postes réalisés ou en cours de réalisation, ainsi qu’aux services complémentaires effectués.
                    L’ensemble des droits d’auteurs reste la propriété exclusive et entière de Lugh Web, à l’exception des
                    données fournies par le client. Les fichiers et données sources créés et utilisés par Lugh Web ne
                    sauraient dès lors être revendiqués par le client sans une contribution financière. Les maquettes,
                    et plus largement, toutes les œuvres originales, restent la propriété de Lugh Web, de même que les
                    projets refusés. Le client devra considérer ces œuvres comme confidentielles et les restituer à Lugh Web
                    non endommagés et à première demande.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 15 : Offres et tarifs</h3>
                <p class="m-auto ml-0 mb-3">Les tarifs sont établis au cas par cas et mentionnés au jour de l’offre. Ainsi, en rémunération de
                    ses prestations Lugh Web percevra les sommes dont les montants et les modalités de règlement sont fixées
                    à l’article 15 des présentes à défaut d’être fixés par les conditions particulières.</p>
                <p class="m-auto ml-0 mb-3">Les conditions tarifaires des offres dites promotionnelles et signalées comme telles, ne sont
                    valables que pour la durée qu’elles précisent.</p>
                <p class="m-auto ml-0 mb-3">Lugh Web se réserve le droit de modifier ses conditions générales de vente, ses formules et ses tarifs à
                    tout moment et sans préavis. Ces modifications n’auront aucune incidence sur les contrats en cours.
                </p>
                <p class="m-auto ml-0 mb-3">Lugh Web se réserve le droit de répercuter sans préavis sur ses tarifs toute nouvelle taxe ou toute
                    augmentation de taux et taxes existantes.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 16 : Conditions de paiement</h3>
                <p class="m-auto ml-0 mb-3">Sauf conditions particulières, le règlement des prestations de Lugh Web s’effectuera de la manière
                    suivante, selon le coût du projet :</p>
                <p class="m-auto ml-0 mb-3">– Pour les projets supérieurs à 6.000 HT : 30% du montant total de la prestation à la signature du
                    devis, 30% à la validation de la maquette et 40% à la livraison.</p>
                <p class="m-auto ml-0 mb-3">– Pour les projets compris entre 1.000 € HT et 6.000 € HT : 50% à la signature du devis et 50% à la
                    livraison.</p>
                <p class="m-auto ml-0 mb-3">– Pour les projets inférieurs à 1.000 € HT : 100% à la livraison.</p>
                <p class="m-auto ml-0 mb-3">Toute somme non réglée dans les délais et après deux rappels par courrier simple ou email, tout
                    retard de paiement ou tout impayé (en cas de retour par la banque des titres de paiement pour
                    impayé) d’une somme due par le client entraînera des pénalités de retard d’un montant égal au taux
                    d’intérêt appliqué par la Banque centrale européenne à son opération de refinancement la plus
                    récente majoré de 10 points de pourcentage, calculées sur le montant de la totalité des sommes dues,
                    qui seront exigibles sans qu’un rappel ne soit nécessaire, conformément à la loi (cf. Art. L.441-6
                    al. 8 du Code de commerce modifié par la loi du 20 novembre 2012).</p>
                <p class="m-auto ml-0 mb-3">Le client ne pourra demander une indemnité à Lugh Web du fait de la suspension de ses services suite à un
                    incident de paiement.</p>
                <p class="m-auto ml-0 mb-3">Le paiement se fait par virement ou chèque.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 17 : Réclamations</h3>
                <p class="m-auto ml-0 mb-3">Toute réclamation de quelque ordre que ce soit, pour être valable, devra parvenir au siège social de
                    la Lugh Web – 4, rue des Cigognes 67140 Barr – France) par lettre
                    recommandée avec accusé de réception dans les septe (7) jours qui suivent la réception des factures.
                    Passé ce délai, les travaux et leurs conditions d’exécution ou de règlement sont considérés comme
                    définitivement acceptés.</p>

                <h3 class="text-xl m-auto ml-0 mb-3 mt-5">ART. 18 : Loi applicable, attribution de juridiction</h3>
                <p class="m-auto ml-0 mb-3">Le présent contrat est régi par la loi française. En cas de litige, les tribunaux de STRASBOURG
                    seront compétents.</p>
                <p class="m-auto ml-0 mb-3">Pour l’exécution du présent contrat, les parties élisent respectivement domicile, Lugh Web à l’adresse
                    suivante : Lotissement Héliocentre – 4, rue des Cigognes 67140 Barr – France, le client à
                    l’adresse indiquée par ses soins lors de la signature du bon de commande.</p>

            </div>
            <LazySectionContact class="mb-10 mt-15" id="contact" />
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
const { $gsap: gsap } = useNuxtApp();
const config = useRuntimeConfig();
const websiteUrl = config.public.websiteUrl;

useHead({
    title: 'Lugh Web - Conditions générales de vente',
    htmlAttrs: {
        lang: 'fr'
    },
    meta: [
        { name: "description", content: "Développement web et mobile sur mesure, audit de sécurité, automatisation de processus." },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "author", content: "Lugh Web" },
        { name: "keywords", content: "développement web, développement mobile, audit de sécurité, automatisation de processus" },
        { property: "og:title", content: "Lugh Web - Développement web et mobile sur mesure" },
        { property: "og:description", content: "Développement web et mobile sur mesure, audit de sécurité, automatisation de processus." },
        { property: "og:image", content: websiteUrl + "/images/lugh-web__link.jpg" },
        { property: "og:url", content: websiteUrl + "/cgv" }, 
        { property: "og:type", content: "website" }, 
        { property: "twitter:card", content: "summary_large_image" },
        { property: "twitter:title", content: "Lugh Web - Développement web et mobile sur mesure" },
        { property: "twitter:description", content: "Développement web et mobile sur mesure, audit de sécurité, automatisation de processus." },
        { property: "twitter:image", content: websiteUrl + "/images/lugh-web__link.jpg" }
    ],
    link: [{ rel: "canonical", href: websiteUrl + "/cgv" }],
});
const scrollToSection = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        let offsetTop = targetElement.offsetTop - 100;
        gsap.to(window, {
            duration: 2,
            scrollTo: { y: offsetTop, autoKill: false },
            ease: "power2.inOut"
        });
    }
};

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>