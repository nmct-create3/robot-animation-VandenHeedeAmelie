
let tl = gsap.timeline({
    defaults: {
        duration: 1,
        ease: 'power1.inOut',
        repeat: Infinity,
        yoyo: true,
    },
});

tl.set('#Schaduw', {
    transformOrigin: '50% 100%',
})
    .fromTo(
        '#Robot',
        {
            y: 2.5,
        },
        {
            y: -5,
        }
    )
    .to(
        '#Schaduw',
        {
            scale: 0.75,
        },
        '-=.75'
    );