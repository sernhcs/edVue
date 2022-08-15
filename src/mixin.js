export const Counter={
    data (){
        return {
            num: 0
        };
    },
    /* created (){
        this.hello();
    }, */
    methods : {
        hello (){
            console.log ("Hola desde el mixin");
        },
        increase(){
            this.num++;
        },
        decrease(){
            this.num--;
        },
    },
};