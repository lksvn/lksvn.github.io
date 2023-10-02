Vue.component('v-projects', {
    template: `<div>
                <div v-if="loading" class="loading"><i class="fal fa-fw fa-spin fa-dice-d20"></i></div>
                <article class="project" :class="(project.link) ? '' : 'no-link'" v-for="project in items">
                    <imageload 
                        :placeholder="'./assets/images/thumbs/' + project.thumbnail"
                        :src="'./assets/images/thumbs/' + project.thumbnail"
                        :alt="project.name"
                        :isthumb="true"
                    ></imageload>
                
                    <h2>{{ project.name }}</h2>

                    <template v-if="project.link != ''">
                        <span class="project_link"><i class="fal fa-fw fa-link"></i> <a :href="project.link" target="_blank" rel="noopener noreferrer">{{ project.link }}</a></span>
                    </template>

                    <div class="description" v-html="project.description"></div>

                    <template v-if="project.images != ''">
                        <details>
                            <summary :title="'More images of ' + project.name"><i class="fal fa-fw fa-images"></i> Check it out</summary>
                            <div class="gallery">
                                <imageload 
                                    v-for="(image, index) in project.images"
                                    :key="index"
                                    :placeholder="'./assets/images/thumbs/' + project.thumbnail"
                                    :src="'./assets/images/projects/' + image.url" 
                                    :alt="project.name"
                                ></imageload>
                            </div>
                        </details>
                    </template>
                </article>
            </div>`,
    props: {},
    data: function () {
        return {
            status: true,
            loading: true,
            items: []
        }
    },
    created: function () {
        this.init()
    },
    methods: {
        init: async function (evt) {
            this.loading = true;

            try {
                let url = './components/data/projects.json';
                let request = await this.$http.get(url);

                request.body.forEach(el => {
                    this.items.push(el)
                });

                this.status = true;
            } catch (error) {
                this.status = false;
            }
            this.loading = false;
        }
    }
})