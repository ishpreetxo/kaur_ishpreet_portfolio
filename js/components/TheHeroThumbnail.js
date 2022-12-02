export default {
    name: "projectdisplay",

    props: {
        portfolio: Object
    },

    template: `
   
    <div class="project_items">
        <figure class="card-banner img-holder" style="--width: 300; --height: 400;">
            <img class="portfolio-cover" :src='"images/" + portfolio.project_image' alt="portfolio.svg" width="300" height="400">
        </figure>
       
        <p class="project_info">
        <h3 class="projectname">{{ portfolio.project_name }}</h3>
            {{ portfolio.project_info }}
            <p class="built-with">Made Using: {{ portfolio.built_with }}</p></p>
       
    </div>
    `,

    // methods: {
    //     loadprojectData() {
    //         // pass the indvidual portfolio object back to thhe main vw instance 
    //         this.$emit('openlb', this.portfolio);
    //     }
    // }

}