var animation = bodymovin.loadAnimation({
    container: document.getElementById('dash-circ'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'lf30_editor_SlBPSh.json'
})

setTimeout(function(){ animation.play(); }, 3000);