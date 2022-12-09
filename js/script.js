window.addEventListener('DOMContentLoaded', () => {
            (()=>{
                new Splide('#splide', {
                    type   : 'loop',
                    perPage: 3,
                    focus  : 'center',
                    pagination: false,
                    breakpoints: {
                        768: {
                            perPage: 2,
                        },
                        576:{
                            perPage:1
                        }
                    }
                }).mount();
            })();

        })