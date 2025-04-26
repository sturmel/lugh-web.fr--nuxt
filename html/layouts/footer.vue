<template>
    <footer class="footer w-full bg-egyptian-blue-500 text-white p-4 shadow-[0rem_-1rem_1rem_rgba(0,0,0,0.15)]">
        <div class="footer__content flex flex-wrap w-10/12 max-w-[1800px] m-auto">
            <div class="flex flex-col w-1/4 min-w-80 p-4 m-auto mt-0">
                <a href="/" class="m-auto  text-xl  text-white mt-0 mb-2 ml-0">LUGH WEB</a>
                <p class="mt-0 mb-2 ml-0">Digitalisez votre succès :</p>
                <p class="mt-0 mb-2 ml-0">Sites web, applications mobiles & outils métiers sur mesure</p>
                <p class="mt-0 mb-2 ml-0">Développons ensemble votre présence en ligne, vos outils de productivité, sécurisons
                    votre infrastructure et automatisons vos processus.</p>
            </div>
            <div class="flex flex-col w-1/4 min-w-80 p-4 m-auto mt-0">
                <h3 class="text-xl font-semibold mt-0 mb-2 ml-0">Services</h3>
                <a href="/services/website" class="relative m-auto ml-0 mt-0 mb-2 text-white transition duration-300 ease-in-out hover:text-tangerine-500">
                    Site web
                </a>
                <a href="/services/mobile" class="relative m-auto ml-0 mt-0 mb-2 text-white transition duration-300 ease-in-out hover:text-tangerine-500">
                    Application mobile
                </a>
                <a href="/services/tool" class="relative m-auto ml-0 mt-0 mb-2 text-white transition duration-300 ease-in-out hover:text-tangerine-500">
                    Outil métier
                </a>
                <a href="/services/automatisation" class="relative m-auto ml-0 mt-0 mb-2 text-white transition duration-300 ease-in-out hover:text-tangerine-500">
                    Automatisation
                </a>
                <a href="/services/audit" class="relative m-auto ml-0 mt-0 mb-2 text-white transition duration-300 ease-in-out hover:text-tangerine-500">
                    Audit sécurité
                </a>
            </div>
            <div class="flex flex-col w-1/4 min-w-80 p-4 m-auto mt-0">
                <h3 class="text-xl font-semibold m-auto mt-0 mb-2 ml-0">Legal</h3>
                <a href="/legal_information" class="relative m-auto ml-0 mt-0 mb-2 text-white transition duration-300 ease-in-out hover:text-tangerine-500">
                    Mentions légales
                </a>
                <a href="/cgv" class="relative m-auto ml-0 mt-0 mb-2 text-white transition duration-300 ease-in-out hover:text-tangerine-500">
                    CGV
                </a>
                <a href="/legal_information" class="relative m-auto ml-0 mt-0 mb-2 text-white transition duration-300 ease-in-out hover:text-tangerine-500">
                    Politique de confidentialité
                </a>
            </div>
            <div class="flex flex-col w-1/4 min-w-80 p-4 m-auto mt-0">
                <h3 class="text-xl font-semibold m-auto mt-0 mb-2 ml-0">Réseaux sociaux</h3>
                <a href="https://www.linkedin.com/in/s%C3%A9bastien-sturmel-05582917b/"
                    target="_blank" class="group flex m-auto ml-0 mt-0 mb-2">
                    <Icon name="mdi:linkedin"
                        class=" text-4xl  text-white pointer-events-none group-hover:text-tangerine-500 transition-all duration-300 ease-in-out" />
                </a>
                <a href="https://github.com/sturmel" target="_blank" class="group flex m-auto ml-0 mt-0 mb-2">
                    <Icon name="mdi:github"
                        class="text-4xl  text-white pointer-events-none group-hover:text-tangerine-500 transition-all duration-300 ease-in-out" />
                </a>
                <a href="https://www.facebook.com/Lughweb" target="_blank" class="group flex m-auto ml-0 mt-0 mb-2">
                    <Icon name="mdi:facebook"
                        class=" text-4xl  text-white pointer-events-none group-hover:text-tangerine-500 transition-all duration-300 ease-in-out" />
                </a>
            </div>
            <div class="flex w-full m-auto mt-5 p-4">

                <p class="m-auto ml-0">&copy;{{ currentYear }} Lugh Web. Tous droits réservés.</p>
            </div>

        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>