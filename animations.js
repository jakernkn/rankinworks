const logo = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'rankin-logo-220.json'
})

const logoCircle = bodymovin.loadAnimation({
    container: document.getElementById('dash-circ'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'lf30_editor_SlBPSh.json'
})
