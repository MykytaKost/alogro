function updateHeaderOffset() {
    const headerBar = document.querySelector('.header_bar_fix');
        const secondaryBar = document.querySelector('.box_header_secondary_bar');
        if (headerBar && secondaryBar) {
            const height = headerBar.offsetHeight;
            secondaryBar.style.marginTop = height + 'px';
        }
}
    
    window.addEventListener('resize', updateHeaderOffset);
    window.addEventListener('load', updateHeaderOffset);
